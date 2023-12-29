import React from 'react';

import { Data32Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade3Day3 } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-2';
import SingleQuiz from './Single3-2';

import type { Data12QuizProps as QuizProps } from '../../Type/Type2';

const ThirdGrade32Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade3Day3.title}
      subTitle={ThirdGrade3Day3.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <ExampleQuiz />
          <Styled.RowWrapBox5>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default ThirdGrade32Exercise;
