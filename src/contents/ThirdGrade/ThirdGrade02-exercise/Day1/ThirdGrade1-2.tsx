import React from 'react';

import { Data12Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade2Day1 } from '../../utils/handleTitle';
import SingleQuiz from './Single1-2';

import type { Data12QuizProps as QuizProps } from '../../Type/Type2';

const ThirdGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade2Day1.title}
      subTitle={ThirdGrade2Day1.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade12Exercise;
