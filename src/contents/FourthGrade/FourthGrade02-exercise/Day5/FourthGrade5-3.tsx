import { Data53Quiz as QuizData } from '../../Data/Book2';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day5 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single5-1';

import type { Data53QuizProps as QuizProps } from '../../Type/Type2';

const FourthGrade53Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          {QuizData.map((item: QuizProps, idx: number) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              type={item.type}
              quiz1={item.quiz1}
              unit1={item.unit1}
              unit2={item.unit2}
              unit3={item.unit3}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default FourthGrade53Exercise;
