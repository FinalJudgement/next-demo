// QuizModule.tsx
import React, { useState, useEffect, useRef } from 'react';
import { quiz } from '../data/question-set';
import ScoreCard from './Scorecard';

interface QuizModuleProps {
  name: string;
}

interface QuizResult {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  completionTimeMs: number;
  startTime: number;
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
		completionTimeMs: 0,
		startTime: Date.now(),
	});
	const [elapsedTime, setElapsedTime] = useState(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	// Start the timer when the component mounts
	useEffect(() => {
		const startTime = Date.now();
		setQuizResult(prev => ({ ...prev, startTime }));
		
		// Update elapsed time every 100ms
		timerRef.current = setInterval(() => {
			setElapsedTime(Date.now() - startTime);
		}, 100);
		
		// Clean up the timer when the component unmounts
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, []);

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
			// Quiz is complete, stop the timer and calculate total time
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
			const completionTimeMs = Date.now() - quizResult.startTime;
			setQuizResult(prev => ({ ...prev, completionTimeMs }));
			setShowResults(true);
		}
		setSelectedAnswer('');
		setSelectedAnswerIndex(null);
		setAnswerChecked(false);
	};

	// Format time for display (mm:ss.ms)
	const formatTime = (ms: number): string => {
		const totalSeconds = ms / 1000;
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = Math.floor(totalSeconds % 60);
		const milliseconds = Math.floor((ms % 1000) / 10); // Get only 2 digits of ms

		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
	};

	return (
		<div className='container mx-auto px-4 mt-5'>

			<div>
				{!showResults ? (
					<div className='bg-white shadow-md rounded-lg p-4'>
						<div className='flex justify-between items-center mb-4'>
							<h4 className='text-xl font-semibold'>{question}</h4>
							<div className='text-gray-600 font-mono'>
								Time: {formatTime(elapsedTime)}
							</div>
						</div>
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
