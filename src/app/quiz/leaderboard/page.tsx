// leaderboard page.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import Leaderboard from '../../../components/Leaderboard';

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className='text-green-600 text-3xl font-bold mb-2'>
          GeekForGeeks
        </h1>
        <h3 className='text-xl text-gray-700 mb-4'>Quiz Leaderboard</h3>
        <p className='text-gray-600 mb-6'>
          The winner is determined by the highest score first, then by the fastest completion time.
        </p>
        <Link 
          href="/quiz" 
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Take the Quiz
        </Link>
      </div>
      
      <Leaderboard />
    </div>
  );
}
