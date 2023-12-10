import React from 'react';

import { Data52Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubBlank, ThirdGrade6Day5 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example5-2';
import SingleQuiz from './Single5-2';

import type { Data52QuizProps as QuizProps } from '../../Type/Type6';

const ThirdGrade52Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
          <Styled.RowWrapBox>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                method={item.method}
                mune={item.mune}
                deno={item.deno}
                len={item.len}
                totalText={item.totalText}
                unit={item.unit}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade52Exercise;
