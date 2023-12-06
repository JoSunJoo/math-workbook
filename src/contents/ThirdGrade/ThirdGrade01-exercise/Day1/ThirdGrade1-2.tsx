import { Data12Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubBlank, ThirdGrade1Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-2';
import SingleQuiz from './Single1-2';

import type { Data12QuizProps as DataProps } from '../../Type/Type1';

const ThirdGrade12Exercise = () => {
  return (
    <DayLayout title={ThirdGrade1Day1.title} subTitle={SubBlank}>
      <Styled.ColGapBox gap={3.75}>
        <ExampleQuiz />
        {QuizData.map((item: DataProps, idx) => (
          <SingleQuiz
            key={idx}
            id={item.id}
            quiz1={item.quiz1}
            quiz2={item.quiz2}
          />
        ))}
      </Styled.ColGapBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade12Exercise;
