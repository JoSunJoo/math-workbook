import { Data53Quiz as QuizData } from '../../Data/Book3';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade3Day5 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example5-3';
import SingleQuiz from './Single5-3';

import type { Data53QuizProps as QuizProps } from '../../Type/Type3';

const FourthGrade53Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle3}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.RowWrapBox15>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
              />
            ))}
          </Styled.RowWrapBox15>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default FourthGrade53Exercise;
