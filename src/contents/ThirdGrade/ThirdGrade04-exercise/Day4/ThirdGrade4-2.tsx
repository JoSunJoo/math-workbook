import React from 'react';

import { Data42Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade03-exercise/Day5/Single5-1';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubBlank, ThirdGrade4Day4 } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-2';

import type { Data51QuizProps as QuizProps } from '../../Type/Type3';

const ThirdGrade42Exercise: React.FC = () => {
  return (
    <DayLayout title={ThirdGrade4Day4.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <Styled.RowWrapBox5>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                sign1={item.sign1}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default ThirdGrade42Exercise;
