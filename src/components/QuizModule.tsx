// QuizModule.tsx
import React, { useState } from 'react';
import { quiz } from '../data/question-set';
import ScoreCard from './Scorecard';

interface QuizModuleProps {
  name: string;
}

interface QuizResult {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

const QuizModule = ({ name }: QuizModuleProps) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [answerChecked, setAnswerChecked] = useState(false);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
	const [showResults, setShowResults] = useState(false);
	const [quizResult, setQuizResult] = useState({
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
	});

	const { questions } = quiz;
	const { question, answers, correctAnswer } = 
												questions[currentQuestionIndex];

	const onAnswerSelected = (answer: string, idx: number) => {
		setSelectedAnswerIndex(idx);
		setSelectedAnswer(answer);
		setAnswerChecked(true);
	};

	const handleNextQuestion = () => {
		if (selectedAnswer === correctAnswer) {
			setQuizResult((prev) => ({
				...prev,
				score: prev.score + 5,
				correctAnswers: prev.correctAnswers + 1,
			}));
		} else {
			setQuizResult((prev) => ({
				...prev,
				wrongAnswers: prev.wrongAnswers + 1,
			}));
		}
		if (currentQuestionIndex !== questions.length - 1) {
			setCurrentQuestionIndex((prev) => prev + 1);
		} else {
			setShowResults(true);
		}
		setSelectedAnswer('');
		setSelectedAnswerIndex(null);
		setAnswerChecked(false);
	};

	return (
		<div className='container mx-auto px-4 mt-5'>

			<div>
				{!showResults ? (
					<div className='bg-white shadow-md rounded-lg p-4'>
						<h4 className='text-xl font-semibold mb-4'>{question}</h4>
						<ul className='space-y-2'>
							{answers.map((answer, idx) => (
								<li
									key={idx}
									onClick={() => onAnswerSelected(answer,idx)}
									className={`p-3 border rounded-md ${
										selectedAnswerIndex === idx 
											? 'bg-blue-500 text-white' 
											: 'bg-white hover:bg-gray-100'
									} cursor-pointer transition-colors`}
								>
									{answer}
								</li>
							))}
						</ul>
						<div className='flex justify-between items-center mt-6'>
							<span className='font-bold'>
								Question {currentQuestionIndex + 1}/{questions.length}
							</span>
							<button
								onClick={handleNextQuestion}
								className={`px-4 py-2 rounded-md ${
									answerChecked 
										? 'bg-blue-500 text-white hover:bg-blue-600' 
										: 'bg-gray-300 text-gray-500 cursor-not-allowed'
								} transition-colors`}
								disabled={!answerChecked}
							>
								{currentQuestionIndex === questions.length - 1 ?
									'Submit' : 'Next Question'}
							</button>
						</div>
					</div>
				) : (
					<ScoreCard
						quizResult={quizResult}
						questions={questions}
						name={name}
					/>
				)}
			</div>
		</div>
	);
};

export default QuizModule;
