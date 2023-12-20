import React from 'react';

import { Data11Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day1 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-1';
import SingleQuiz from './Single1-1';

import type { Data11QuizProps as QuizProps } from '../../Type/Type1';
const ThirdGrade11Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox2 gap={5}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz key={idx} id={item.id} quiz1={item.quiz1} imgId={idx} />
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox5>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade11Exercise;
