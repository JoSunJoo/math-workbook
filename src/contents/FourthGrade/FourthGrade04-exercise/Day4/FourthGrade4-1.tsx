import {
  Data41Quiz1 as QuizData1,
  Data41Quiz2 as QuizData2,
} from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade4Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

import type { Data41QuizProps as QuizProps } from '../../Type/Type4';

const FourthGrade41Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <div>예시 부분 이미지 첨부 예정</div>
          <Styled.RowWrapBox3>
            {QuizData1.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
              />
            ))}
            {QuizData2.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
                unit2={item.unit2}
              />
            ))}
          </Styled.RowWrapBox3>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
