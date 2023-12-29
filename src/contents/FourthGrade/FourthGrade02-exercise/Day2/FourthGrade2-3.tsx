// import { useState } from 'react';

import { Data23Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day2 as Day, SubJustCal } from '../../utils/handleTitle';
import SingleQuiz from './Single2-3';

import type { Data23QuizProps as QuizProps } from '../../Type/Type2';

const FourthGrade21Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubJustCal}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox6>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox6>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FourthGrade21Exercise;
