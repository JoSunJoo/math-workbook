import { Data23Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day2 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single2-3';

import type { Data23QuizProps1 as QuizProps } from '../../Type/Type1';

const FourthGrade23Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox5 gap={4}>
          {QuizData.map((item: QuizProps, idx: number) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              imgId={idx}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
              quiz4={item.quiz4}
              quiz5={item.quiz5}
              quiz6={item.quiz6}
              quiz7={item.quiz7}
            />
          ))}
        </Styled.ColGapBox5>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FourthGrade23Exercise;
