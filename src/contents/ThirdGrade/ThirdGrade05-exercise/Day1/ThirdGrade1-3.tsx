import React from 'react';

import { Data13Quiz as QuizData } from '../../Data/Book5';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubBlank, ThirdGrade5Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data13QuizProps1 as QuizProps } from '../../Type/Type5';

const ThirdGrade13Exercise: React.FC = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox2 gap={5}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              imgId={idx}
            />
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox5>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default ThirdGrade13Exercise;
