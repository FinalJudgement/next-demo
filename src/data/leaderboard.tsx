// leaderboard.tsx
import { create } from 'zustand';

export interface LeaderboardEntry {
  id?: string;
  uniqueId?: string; // Added for duplicate prevention
  name: string;
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  completionTimeMs: number; // Time in milliseconds
  completionDate: string; // ISO date string
}

interface LeaderboardState {
  entries: LeaderboardEntry[];
  isLoading: boolean;
  isAdmin: boolean;
  fetchEntries: () => Promise<void>;
  addEntry: (entry: LeaderboardEntry) => Promise<void>;
  clearEntries: () => Promise<void>;
  setIsAdmin: (isAdmin: boolean) => void;
}

// Create a store without persistence (we'll use the API instead)
export const useLeaderboardStore = create<LeaderboardState>()((set, get) => ({
  entries: [],
  isLoading: false,
  isAdmin: false,
  
  // Fetch entries from the API
  fetchEntries: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('/api/leaderboard');
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard data');
      }
      const data = await response.json();
      set({ entries: data, isLoading: false });
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      set({ isLoading: false });
    }
  },
  
  // Add an entry to the leaderboard
  addEntry: async (entry) => {
    try {
      const response = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add leaderboard entry');
      }
      
      // Refresh the entries after adding
      get().fetchEntries();
    } catch (error) {
      console.error('Error adding leaderboard entry:', error);
    }
  },
  
  // Clear all entries (admin only)
  clearEntries: async () => {
    if (!get().isAdmin) {
      console.error('Unauthorized: Only admins can clear the leaderboard');
      return;
    }
    
    try {
      const response = await fetch(`/api/leaderboard?isAdmin=true`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to clear leaderboard');
      }
      
      // Refresh the entries after clearing
      get().fetchEntries();
    } catch (error) {
      console.error('Error clearing leaderboard:', error);
    }
  },
  
  // Set admin status
  setIsAdmin: (isAdmin) => set({ isAdmin }),
}));

// Helper function to format time in mm:ss.ms format
export const formatTime = (timeMs: number): string => {
  const totalSeconds = timeMs / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const milliseconds = Math.floor((timeMs % 1000) / 10); // Get only 2 digits of ms

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
};
