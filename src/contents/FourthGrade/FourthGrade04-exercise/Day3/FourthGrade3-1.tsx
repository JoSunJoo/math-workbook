import { Data31Quiz as QuizData } from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade4Day3 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-1';
import SingleQuiz from './Single3-2';

import type { Data31QuizProps as QuizProps } from '../../Type/Type4';

const FourthGrade31Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <ExampleQuiz />
          <Styled.RowWrapBox6>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                type={1}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox6>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FourthGrade31Exercise;
