import React from 'react';

import { Data11Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade2Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-1';
import SingleQuiz from './Single1-1';

import type { Data12QuizProps as QuizProps } from '../../Type/Type2';

const ThirdGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade2Day1.title}
      subTitle={ThirdGrade2Day1.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              imgId={idx}
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

export default ThirdGrade11Exercise;
