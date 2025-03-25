// Leaderboard.tsx
import React from 'react';
import { useLeaderboardStore, formatTime, LeaderboardEntry } from '../data/leaderboard';

const Leaderboard = () => {
  const { entries, clearEntries } = useLeaderboardStore();
  
  // Sort entries by score (highest first) and then by completion time (lowest first)
  const sortedEntries = [...entries].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score; // Sort by score (highest first)
    }
    return a.completionTimeMs - b.completionTimeMs; // Then by time (fastest first)
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quiz Leaderboard</h2>
        <button 
          onClick={clearEntries}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Clear All
        </button>
      </div>
      
      {sortedEntries.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No entries yet. Be the first to complete the quiz!
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Rank</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Name</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Score</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Correct</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Time</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedEntries.map((entry, index) => (
                <tr key={index} className={index === 0 ? "bg-yellow-50" : ""}>
                  <td className="py-3 px-4 text-gray-900">
                    {index === 0 ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-400 text-white rounded-full">
                        1
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-700 rounded-full">
                        {index + 1}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-900 font-medium">{entry.name}</td>
                  <td className="py-3 px-4 text-gray-900">{entry.score}</td>
                  <td className="py-3 px-4 text-gray-900">{entry.correctAnswers}/{entry.correctAnswers + entry.wrongAnswers}</td>
                  <td className="py-3 px-4 text-gray-900 font-mono">{formatTime(entry.completionTimeMs)}</td>
                  <td className="py-3 px-4 text-gray-500 text-sm">
                    {new Date(entry.completionDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
