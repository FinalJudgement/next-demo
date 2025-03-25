// leaderboard.tsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface LeaderboardEntry {
  name: string;
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  completionTimeMs: number; // Time in milliseconds
  completionDate: string; // ISO date string
}

interface LeaderboardState {
  entries: LeaderboardEntry[];
  addEntry: (entry: LeaderboardEntry) => void;
  clearEntries: () => void;
}

// Create a store with persistence
export const useLeaderboardStore = create<LeaderboardState>()(
  persist(
    (set) => ({
      entries: [],
      addEntry: (entry) => set((state) => ({ 
        entries: [...state.entries, entry] 
      })),
      clearEntries: () => set({ entries: [] }),
    }),
    {
      name: 'quiz-leaderboard', // Name for localStorage
    }
  )
);

// Helper function to format time in mm:ss.ms format
export const formatTime = (timeMs: number): string => {
  const totalSeconds = timeMs / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const milliseconds = Math.floor((timeMs % 1000) / 10); // Get only 2 digits of ms

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
};
