// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

// import type { Data41QuizProps as QuizProps } from '../../Type/Type4';

const FourthGrade41Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <SingleQuiz />
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
