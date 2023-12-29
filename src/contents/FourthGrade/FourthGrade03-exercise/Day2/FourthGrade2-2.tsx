// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade3Day2 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single2-2';

// import type { Data22QuizProps as QuizProps } from '../../Type/Type3';
const FourthGrade22Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <SingleQuiz />
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FourthGrade22Exercise;
