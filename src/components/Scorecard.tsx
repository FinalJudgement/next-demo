// ScoreCard.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLeaderboardStore, formatTime } from '../data/leaderboard';

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface QuizResult {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  completionTimeMs: number;
  startTime: number;
}

interface ScoreCardProps {
  quizResult: QuizResult;
  questions: Question[];
  name: string;
}

const ScoreCard = ({ quizResult, questions, name }: ScoreCardProps) => {
	const passPercentage = 60;
	const { addEntry } = useLeaderboardStore();
	const [resultSaved, setResultSaved] = useState(false);

	const percentage = (quizResult.score / (questions.length * 5)) * 100;
	const status = percentage >= passPercentage ? 'Pass' : 'Fail';

	// Save the result to the leaderboard when the component mounts
	useEffect(() => {
		if (!resultSaved) {
			addEntry({
				name,
				score: quizResult.score,
				correctAnswers: quizResult.correctAnswers,
				wrongAnswers: quizResult.wrongAnswers,
				completionTimeMs: quizResult.completionTimeMs,
				completionDate: new Date().toISOString(),
			});
			setResultSaved(true);
		}
	}, [addEntry, name, quizResult, resultSaved]);

	return (
		<div className='bg-white shadow-md rounded-lg p-6'>
			<h3 className='text-2xl font-bold mb-4'>Hello, {name}. Here is your Result Analysis</h3>
			<div className='bg-blue-50 border border-blue-200 rounded-md p-4 mb-6 flex justify-between items-center'>
				<div>
					<p className='text-blue-800 font-medium'>Your score has been added to the leaderboard!</p>
					<p className='text-blue-600 text-sm mt-1'>Check your ranking against other participants.</p>
				</div>
				<Link 
					href="/quiz/leaderboard" 
					className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
				>
					View Leaderboard
				</Link>
			</div>
			<div className='overflow-x-auto'>
				<table className='min-w-full bg-white'>
					<tbody className='divide-y divide-gray-200'>
						<tr>
							<td className='py-3 px-4 text-gray-700 font-medium'>Total Questions:</td>
							<td className='py-3 px-4 text-gray-900'>{questions.length}</td>
						</tr>
						<tr>
							<td className='py-3 px-4 text-gray-700 font-medium'>Total Score:</td>
							<td className='py-3 px-4 text-gray-900'>{quizResult.score}</td>
						</tr>
						<tr>
							<td className='py-3 px-4 text-gray-700 font-medium'>Correct Answers:</td>
							<td className='py-3 px-4 text-gray-900'>{quizResult.correctAnswers}</td>
						</tr>
						<tr>
							<td className='py-3 px-4 text-gray-700 font-medium'>Wrong Answers:</td>
							<td className='py-3 px-4 text-gray-900'>{quizResult.wrongAnswers}</td>
						</tr>
						<tr>
							<td className='py-3 px-4 text-gray-700 font-medium'>Percentage:</td>
							<td className='py-3 px-4 text-gray-900'>{percentage}%</td>
						</tr>
						<tr>
							<td className='py-3 px-4 text-gray-700 font-medium'>Status:</td>
							<td className={`py-3 px-4 font-semibold ${status === 'Pass' ? 'text-green-600' : 'text-red-600'}`}>
								{status}
							</td>
						</tr>
						<tr>
							<td className='py-3 px-4 text-gray-700 font-medium'>Completion Time:</td>
							<td className='py-3 px-4 text-gray-900 font-mono'>{formatTime(quizResult.completionTimeMs)}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='flex space-x-4 mt-6'>
				<button
					onClick={() => window.location.reload()}
					className='flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
				>
					Restart
				</button>
				<Link 
					href="/quiz/leaderboard"
					className='flex-1 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-center'
				>
					View Leaderboard
				</Link>
			</div>
		</div>
	);
};

export default ScoreCard;
