import { Data32Quiz as QuizData } from '../../Data/Book2';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day3 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single3-1';

import type { Data31QuizProps1 as QuizProps } from '../../Type/Type2';

const FourthGrade32Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.GapMarginTopBox gap={3}>
          <Styled.ColGapBox gap={2}>
            <Styled.RowWrapBox6>
              {QuizData.map((item: QuizProps, idx: number) => (
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={2}
                  quiz1={item.quiz1}
                  quiz2={item.quiz2}
                />
              ))}
            </Styled.RowWrapBox6>
          </Styled.ColGapBox>
        </Styled.GapMarginTopBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FourthGrade32Exercise;
