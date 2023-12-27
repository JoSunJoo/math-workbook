import { Data42Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day4 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-2';
import SingleQuiz from './Single4-2';

import type { Data42QuizProps1 as QuizProps } from '../../Type/Type1';

const FourthGrade42Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx: number) => (
            <SingleQuiz key={idx} id={item.id} imgId={idx} />
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade42Exercise;
