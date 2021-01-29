import { shuffleArr } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'easy',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}`;
  const data = await (await fetch(url)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArr([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
