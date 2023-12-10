import React from 'react';

import { Data23Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade6Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-3';

import type { Data23QuizProps as QuizProps } from '../../Type/Type6';

const ThirdGrade23Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade6Day2.title}
      subTitle={ThirdGrade6Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <div>이미지 첨부 예정</div>
          <Styled.RowWrapBox>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1_1={item.quiz1_1}
                quiz1_2={item.quiz1_2}
                quiz2_1={item.quiz2_1}
                quiz2_2={item.quiz2_2}
                quiz3_1={item.quiz3_1}
                quiz3_2={item.quiz3_2}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade23Exercise;
