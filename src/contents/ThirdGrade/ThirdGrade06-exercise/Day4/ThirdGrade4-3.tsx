import React from 'react';

import { Data43Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade6Day4 } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

import type { Data41QuizProps as QuizProps } from '../../Type/Type6';

const ThirdGrade43Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade6Day4.title}
      subTitle={ThirdGrade6Day4.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
          <Styled.RowWrapBox>
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
          </Styled.RowWrapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default ThirdGrade43Exercise;
