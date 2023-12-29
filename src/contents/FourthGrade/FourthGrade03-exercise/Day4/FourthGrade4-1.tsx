import {
  Data41Quiz1 as QuizData1,
  Data41Quiz2 as QuizData2,
} from '../../Data/Book3';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade3Day4 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-1';
import SingleQuiz from './Single4-1';

import type { Data41QuizProps1 as QuizProps } from '../../Type/Type3';

const FourthGrade41Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <ExampleQuiz />
          <Styled.MarginBottomBox2>
            <Styled.RowWrapBox5>
              {QuizData1.map((item: QuizProps, idx: number) => (
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={1}
                  imgId={idx}
                  quiz1={item.quiz1}
                  quiz2={item.quiz1}
                />
              ))}
            </Styled.RowWrapBox5>
          </Styled.MarginBottomBox2>
          <Styled.RowWrapBox5>
            {QuizData2.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                type={2}
                imgId={idx}
                quiz1={item.quiz1}
                quiz2={item.quiz1}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
