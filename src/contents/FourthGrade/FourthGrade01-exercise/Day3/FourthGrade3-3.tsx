import { Data33Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day3 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-3';
import SingleQuiz from './Single3-3';

import type { Data33QuizProps1 as QuizProps } from '../../Type/Type1';

const FourthGrade33Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
          <Styled.RowWrapBox7>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx: number) => (
              <Styled.MarginBottomBox2>
                <SingleQuiz key={idx} id={item.id} imgId={idx} />
              </Styled.MarginBottomBox2>
            ))}
          </Styled.RowWrapBox7>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FourthGrade33Exercise;
