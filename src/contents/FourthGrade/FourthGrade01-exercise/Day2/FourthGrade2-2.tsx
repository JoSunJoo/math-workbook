import { Data22Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day2 as Day, SubBlank } from '../../utils/handleTitle';
import ExampleQuiz from './Example2-2';
import SingleQuiz from './Single2-2';

import type { Data22QuizProps as QuizProps } from '../../Type/Type1';

const FourthGrade21Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx: number) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              type={item.type}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
              quiz4={item.quiz4}
              quiz5={item.quiz5}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FourthGrade21Exercise;
