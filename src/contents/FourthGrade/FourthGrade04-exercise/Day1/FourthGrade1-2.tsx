import { Data12Quiz as QuizData } from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade4Day1 as Day } from '../../utils/handleTitle';
import Example from './Example1-2';
import SingleQuiz from './Single1-2';

import type { Data12QuizProps as QuizProps } from '../../Type/Type4';

const FourthGrade12Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Example />
          <Styled.RowWrapBox8>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                position={item.position}
              />
            ))}
          </Styled.RowWrapBox8>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FourthGrade12Exercise;
