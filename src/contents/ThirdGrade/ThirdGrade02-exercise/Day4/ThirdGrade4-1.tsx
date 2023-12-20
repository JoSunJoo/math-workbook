import React from 'react';

import { Data41Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade2Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

import type { Data31QuizProps1 as QuizProps } from '../../Type/Type2';

const ThirdGrade41Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz key={idx} id={item.id} imgId={idx} quiz1={item.quiz1} />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
