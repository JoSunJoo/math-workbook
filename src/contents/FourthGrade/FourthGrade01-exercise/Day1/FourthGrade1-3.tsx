import React from 'react';

import { Data13Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day1 as Day, SubBlank } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data13QuizProps as QuizProps } from '../../Type/Type1';
const ThirdGrade12Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox gap={3}>
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

export default ThirdGrade12Exercise;
