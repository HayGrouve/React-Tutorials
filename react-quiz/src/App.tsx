import React, { useState } from 'react';
import { QuestionState, fetchQuizQuestions } from './API';

//Components
import QuestionCard from './components/QuestionCard';

//Types
import { Difficulty } from './API';
export type AnswerObj = {
  question: string;
  answer: string;
  correctAnswer: string;
  isCorrect: boolean;
};

const total_questions = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    try {
      const newQuestions = await fetchQuizQuestions(
        total_questions,
        Difficulty.EASY
      );
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return new Error(error);
    }
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const ansObj = {
        question: questions[number].question,
        answer,
        isCorrect: correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, ansObj]);
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === total_questions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <div className="App">
      <h1>React quiz</h1>
      {gameOver || userAnswers.length === total_questions ? (
        <button onClick={startTrivia}>{!gameOver ? 'Restart' : 'Start'}</button>
      ) : null}
      {!gameOver ? <p>Score: {score}</p> : null}
      {loading && <p>Loading questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={total_questions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== total_questions - 1 ? (
        <button onClick={nextQuestion}>Next Question</button>
      ) : null}
    </div>
  );
}

export default App;
