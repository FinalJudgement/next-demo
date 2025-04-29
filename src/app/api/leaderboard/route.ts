import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the leaderboard JSON file
const dataFilePath = path.join(process.cwd(), 'src', 'data', 'leaderboard.json');

// Ensure the file exists
const ensureFileExists = () => {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
};

// Get all leaderboard entries
export async function GET() {
  try {
    ensureFileExists();
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading leaderboard data:', error);
    return NextResponse.json({ error: 'Failed to read leaderboard data' }, { status: 500 });
  }
}

// Add a new entry to the leaderboard
export async function POST(request: NextRequest) {
  try {
    ensureFileExists();
    
    const newEntry = await request.json();
    
    // Read existing data
    const data = fs.readFileSync(dataFilePath, 'utf8');
    const entries = JSON.parse(data);
    
    // Check if this entry already exists (prevent duplicates)
    const isDuplicate = entries.some((entry: any) => {
      // If uniqueId exists, use it to check for duplicates
      if (newEntry.uniqueId && entry.uniqueId === newEntry.uniqueId) {
        return true;
      }
      
      // Check if name and score match
      const nameAndScoreMatch = 
        entry.name === newEntry.name &&
        entry.score === newEntry.score &&
        entry.correctAnswers === newEntry.correctAnswers &&
        entry.wrongAnswers === newEntry.wrongAnswers;
      
      if (!nameAndScoreMatch) return false;
      
      // If name and score match, check if timestamps are close (within 5 seconds)
      const entryTime = new Date(entry.completionDate).getTime();
      const newEntryTime = new Date(newEntry.completionDate).getTime();
      const timeDifference = Math.abs(entryTime - newEntryTime);
      
      // Consider entries within 5 seconds as duplicates
      return timeDifference < 5000;
    });
    
    // Only add if not a duplicate
    if (!isDuplicate) {
      // Add new entry with a guaranteed unique ID
      entries.push({
        ...newEntry,
        id: newEntry.uniqueId || Date.now().toString(),
      });
      
      // Write updated data back to file
      fs.writeFileSync(dataFilePath, JSON.stringify(entries, null, 2));
      
      return NextResponse.json({ success: true, entries });
    } else {
      // Return success but indicate it was a duplicate
      return NextResponse.json({ 
        success: true, 
        duplicate: true,
        message: 'Entry already exists in leaderboard',
        entries 
      });
    }
  } catch (error) {
    console.error('Error adding leaderboard entry:', error);
    return NextResponse.json({ error: 'Failed to add leaderboard entry' }, { status: 500 });
  }
}

// Clear all leaderboard entries - requires admin access
export async function DELETE(request: NextRequest) {
  try {
    // Check for admin authorization
    const { searchParams } = new URL(request.url);
    const isAdmin = searchParams.get('isAdmin') === 'true';
    
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Clear the leaderboard
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error clearing leaderboard:', error);
    return NextResponse.json({ error: 'Failed to clear leaderboard' }, { status: 500 });
  }
}
