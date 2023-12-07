import React from 'react';

import { Data52Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade5Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-1';

import type { Data52QuizProps as QuizProps } from '../../Type/Type3';

const ThirdGrade21Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade5Day2.title}
      subTitle={ThirdGrade5Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <div>이미지 첨부 예정</div>
          <Styled.RowWrapBox5>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                quiz4={item.quiz3}
                sign1={item.sign1}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
