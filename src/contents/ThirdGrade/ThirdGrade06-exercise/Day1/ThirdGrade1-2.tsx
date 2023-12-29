import React from 'react';

import { Data12Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade6Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-2';

import type { Data11QuizProps1 as QuizProps } from '../../Type/Type6';

const ThirdGrade12Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={5}>
          <Styled.RowWrapBox8>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz key={idx} id={item.id} imgId={idx} />
            ))}
          </Styled.RowWrapBox8>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade12Exercise;
