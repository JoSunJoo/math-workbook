import {
  Data43Quiz1 as QuizData1,
  Data43Quiz2 as QuizData2,
} from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade4Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';
import SingleQuiz2 from './Single4-3';

import type { Data41QuizProps as QuizProps } from '../../Type/Type4';

const FourthGrade41Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox3>
            {QuizData1.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
                unit2={item.unit2}
              />
            ))}
          </Styled.RowWrapBox3>
          <Styled.RowWrapBox5>
            {QuizData2.map((item: QuizProps, idx: number) => (
              <SingleQuiz2
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
                imgId={idx}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
