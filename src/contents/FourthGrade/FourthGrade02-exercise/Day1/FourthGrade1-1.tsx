import React from 'react';

import { Data11Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-1';

import type { Data11QuizProps as QuizProps } from '../../Type/Type2';
const FourthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox gap={6}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox5>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FourthGrade11Exercise;
