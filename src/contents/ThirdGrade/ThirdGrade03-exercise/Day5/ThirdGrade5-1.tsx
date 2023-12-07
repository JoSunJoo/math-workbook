import React from 'react';

import { Data51Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade3Day3 } from '../../utils/handleTitle';
import ExampleQuiz from './Example5-1';
import SingleQuiz from './Single5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type3';

const ThirdGrade51Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade3Day3.title}
      subTitle={ThirdGrade3Day3.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <Styled.RowWrapBox5>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                sign1={item.sign1}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade51Exercise;
