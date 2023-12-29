import { Data21Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day2 as Day, SubBlank } from '../../utils/handleTitle';
import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps1 as QuizProps } from '../../Type/Type1';

const FourthGrade21Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx: number) => (
            <SingleQuiz key={idx} id={item.id} imgId={idx} />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FourthGrade21Exercise;
