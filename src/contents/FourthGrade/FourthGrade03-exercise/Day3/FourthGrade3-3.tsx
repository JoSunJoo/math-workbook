import { Data33Quiz as QuizData } from '../../Data/Book3';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade3Day3 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-3';
import SingleQuiz from './Single3-3';

import type { Data33QuizProps as QuizProps } from '../../Type/Type3';

const FourthGrade33Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle3}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox15>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox15>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FourthGrade33Exercise;
