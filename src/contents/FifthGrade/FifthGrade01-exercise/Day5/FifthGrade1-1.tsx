import { DataFifth151 as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade1Day5, SubWay } from '../../utils/handleTitle';
import SingleQuiz from './Single5-3';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const FifthGrade51Exercise = () => {
  return (
    <DayLayout title={FifthGrade1Day5.title} subTitle={SubWay}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz key={idx} id={item.id} quiz1={item.quiz1} typing="개" />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default FifthGrade51Exercise;
