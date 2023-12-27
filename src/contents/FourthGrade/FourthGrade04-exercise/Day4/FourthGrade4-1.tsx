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

import img from '../../Image/4-4-1.png';

const FourthGrade41Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <Styled.FitExampleBox>
            <Styled.ImgSize4 src={img} />
          </Styled.FitExampleBox>
          <Styled.MarginBottomBox2>
            <Styled.RowWrapBox6>
              {QuizData1.map((item: QuizProps, idx: number) => (
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  quiz1={item.quiz1}
                  unit={item.unit}
                />
              ))}
            </Styled.RowWrapBox6>
          </Styled.MarginBottomBox2>
          <Styled.RowWrapBox7>
            {QuizData2.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
                unit2={item.unit2}
              />
            ))}
          </Styled.RowWrapBox7>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
