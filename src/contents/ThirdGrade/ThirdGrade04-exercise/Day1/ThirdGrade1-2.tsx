import React from 'react';

import { Data12Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade02-exercise/Day3/Single3-2';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade4Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-2';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

const ThirdGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade4Day1.title}
      subTitle={ThirdGrade4Day1.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          <div>예시 이미치 첨부 예정</div>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade12Exercise;
