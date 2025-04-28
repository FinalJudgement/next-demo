// page.tsx
'use client'
import React, { useState } from "react";
import Link from "next/link";
import QuizModule from "../../components/QuizModule";

export default function QuizPage() {
	const [quizStarted, setQuizStarted] = useState(false);
	const [name, setName] = useState('');

	return (
		<div className="container mx-auto px-4 py-8 max-w-2xl">
			<div className="text-center mb-8">
				<h1 className='text-green-600 text-3xl font-bold mb-2'>
					NextQuiz
				</h1>
				<h3 className='text-xl text-gray-700 mb-4'>Quiz App</h3>
				<div className="mb-6">
					<Link 
						href="/quiz/leaderboard" 
						className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
					>
						View Leaderboard
					</Link>
				</div>
			</div>

			{quizStarted ? (
				<QuizModule name={name} />
			) : (
				<div className="bg-white shadow-md rounded-lg p-6">
					<div className="mb-4">
						<label htmlFor="nameInput"
							className="block text-gray-700 text-sm font-bold mb-2">
							Enter Your Name:
						</label>
						<input
							type="text"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="nameInput"
							value={name}
							onChange={(e) =>
								setName(e.target.value)}
						/>
					</div>
					<button
						onClick={() => setQuizStarted(true)}
						className={`w-full py-2 px-4 rounded-md ${
							name.trim() 
								? 'bg-blue-500 text-white hover:bg-blue-600' 
								: 'bg-gray-300 text-gray-500 cursor-not-allowed'
						} transition-colors`}
						disabled={!name.trim()}
					>
						Start Quiz
					</button>
				</div>
			)}
		</div>
	);
}
