import React from 'react';

import { Data13Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day1 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-3';
import SingleQuiz from './Single1-3';

import type { Data13QuizProps as QuizProps } from '../../Type/Type2';
const FourthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox8>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox8>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FourthGrade13Exercise;
