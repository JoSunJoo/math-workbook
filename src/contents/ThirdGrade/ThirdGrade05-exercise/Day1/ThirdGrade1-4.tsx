import { Data14Quiz as QuizData } from '../../Data/Book5';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade5Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-4';
import SingleQuiz from './Single1-4';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const ThirdGrade14Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade5Day1.title}
      subTitle={ThirdGrade5Day1.subTitle1}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz key={idx} id={item.id} quiz1={item.quiz1} />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade14Exercise;
