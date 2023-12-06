import { Data13Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubJustCal, ThirdGrade1Day1 } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data12QuizProps as DataProps } from '../../Type/Type1';

const ThirdGrade13Exercise = () => {
  return (
    <DayLayout title={ThirdGrade1Day1.title} subTitle={SubJustCal}>
      <Styled.PaddingBox>
        <Styled.RowWrapBox>
          {QuizData.map((item: DataProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.RowWrapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade13Exercise;
