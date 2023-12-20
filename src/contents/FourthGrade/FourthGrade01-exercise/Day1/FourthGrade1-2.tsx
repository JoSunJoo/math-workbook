import React from 'react';

import { Data12Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day1 as Day, SubBlank } from '../../utils/handleTitle';
import SingleQuiz from './Single1-2';

import type { Data12QuizProps1 as QuizProps } from '../../Type/Type1';
const ThirdGrade12Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox5>
        <Styled.RowWrapBox>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz key={idx} id={item.id} imgId={idx} />
          ))}
        </Styled.RowWrapBox>
      </Styled.PaddingBox5>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade12Exercise;
