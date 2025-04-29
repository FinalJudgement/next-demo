// Leaderboard.tsx
import React, { useEffect, useState } from 'react';
import { useLeaderboardStore, formatTime } from '../data/leaderboard';

const Leaderboard = () => {
  const { entries, isLoading, isAdmin, fetchEntries, clearEntries, setIsAdmin } = useLeaderboardStore();
  const [adminCode, setAdminCode] = useState('');
  const [showAdminInput, setShowAdminInput] = useState(false);
  
  // Fetch entries when component mounts
  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);
  
  // Sort entries by score (highest first) and then by completion time (lowest first)
  const sortedEntries = [...entries].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score; // Sort by score (highest first)
    }
    return a.completionTimeMs - b.completionTimeMs; // Then by time (fastest first)
  });

  // Handle admin login
  const handleAdminLogin = () => {
    // Simple admin code - in a real app, use proper authentication
    if (adminCode === 'admin123') {
      setIsAdmin(true);
      setShowAdminInput(false);
    } else {
      alert('Invalid admin code');
    }
  };

  // Handle admin logout
  const handleAdminLogout = () => {
    setIsAdmin(false);
    setAdminCode('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quiz Leaderboard</h2>
        <div className="flex space-x-2">
          {isAdmin ? (
            <>
              <button 
                onClick={clearEntries}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Clear All
              </button>
              <button 
                onClick={handleAdminLogout}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            showAdminInput ? (
              <div className="flex space-x-2">
                <input
                  type="password"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  placeholder="Admin code"
                  className="px-3 py-2 border rounded-md"
                />
                <button 
                  onClick={handleAdminLogin}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Login
                </button>
                <button 
                  onClick={() => setShowAdminInput(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowAdminInput(true)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
              >
                Admin
              </button>
            )
          )}
        </div>
      </div>
      
      {isLoading ? (
        <div className="text-center py-8 text-gray-500">
          Loading leaderboard data...
        </div>
      ) : sortedEntries.length === 0 ? (
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
                <tr key={entry.id || index} className={index === 0 ? "bg-yellow-50" : ""}>
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
