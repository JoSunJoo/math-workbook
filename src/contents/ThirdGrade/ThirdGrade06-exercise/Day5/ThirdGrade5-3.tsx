import React from 'react';

import { Data53Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade6Day5 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single5-3';

import type { Data41QuizProps as QuizProps } from '../../Type/Type6';

const ThirdGrade41Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={2}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              method={item.method}
              mune={item.mune}
              deno={item.deno}
              len={item.len}
            />
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
