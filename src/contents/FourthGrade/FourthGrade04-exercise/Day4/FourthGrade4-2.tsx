import { Data42Quiz as QuizData } from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade4Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

import type { Data41QuizProps as QuizProps } from '../../Type/Type4';

import img from '../../Image/4-4-2.png';
const FourthGrade42Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.FitExampleBox>
            <Styled.ImgSize4 src={img} />
          </Styled.FitExampleBox>
          <Styled.RowWrapBox6>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
              />
            ))}
          </Styled.RowWrapBox6>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade42Exercise;
