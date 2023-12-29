import React from 'react';

import { Data22Quiz as QuizData } from '../../Data/Book5';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade5Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-2';

import type { Data22QuizProps as QuizProps } from '../../Type/Type5';

const ThirdGrade22Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade5Day2.title}
      subTitle={ThirdGrade5Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <Styled.RowWrapBox5>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                quiz4={item.quiz4}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade22Exercise;
