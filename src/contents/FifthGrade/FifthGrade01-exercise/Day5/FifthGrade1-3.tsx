import { DataFifth153 as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubWay, FifthGrade1Day5 } from '../../utils/handleTitle';
import SingleQuiz from './Single5-3';
import React, { useState, useEffect } from 'react';
import type { AnswersType } from '../../Type/Type1';
import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const FifthGrade53Exercise = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', '', ''],
    '6': ['', '', ''],
    '7': ['', '', ''],
    '8': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['68', '49'],
    '2': ['15', '38'],
    '3': ['6', '13'],
    '4': ['39', '30'],
    '5': ['8', '17', '3'],
    '6': ['43', '26', '6'],
    '7': ['19', '3', '14'],
    '8': ['43', '17', '26'],
  };
  const handleChange = (questionId: string, index: number, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: answers[questionId].map((item, i) =>
        i === index ? value : item
      ),
    });
  };

  const [showResults, setShowResults] = useState(false);

  const isCorrect = (questionId: string) => {
    return correctAnswers[questionId].every(
      (answer, index) => answer === answers[questionId][index]
    );
  };

  const handleGrade = () => {
    setShowResults(true);
  };
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <DayLayout title={FifthGrade1Day5.title} subTitle={SubWay}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              typing={item.typing}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} handleGrade={handleGrade} />
    </DayLayout>
  );
};

export default FifthGrade53Exercise;
