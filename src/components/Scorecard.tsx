// ScoreCard.tsx
import React from 'react';

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
}

interface ScoreCardProps {
  quizResult: QuizResult;
  questions: Question[];
  name: string;
}

const ScoreCard = ({ quizResult, questions, name }: ScoreCardProps) => {
	const passPercentage = 60;

	const percentage = (quizResult.score / (questions.length * 5)) * 100;
	const status = percentage >= passPercentage ? 'Pass' : 'Fail';

	return (
		<div className='bg-white shadow-md rounded-lg p-6'>
			<h3 className='text-2xl font-bold mb-4'>Hello, {name}. Here is your Result Analysis</h3>
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
					</tbody>
				</table>
			</div>
			<button
				onClick={() => window.location.reload()}
				className='mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
			>
				Restart
			</button>
		</div>
	);
};

export default ScoreCard;
