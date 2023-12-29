import { Data32Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade1Day3 as Day, SubBlank } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-2 ';
import SingleQuiz from './Single3-2';

import type { Data32QuizProps as QuizProps } from '../../Type/Type1';

const FourthGrade32Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
          <ExampleQuiz />
          <Styled.RowWrapBox11>
            {QuizData.map((item: QuizProps, idx) => (
              <Styled.MarginBottomBox2>
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={item.type}
                  quiz1={item.quiz1}
                  quiz2={item.quiz2}
                />
              </Styled.MarginBottomBox2>
            ))}
          </Styled.RowWrapBox11>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FourthGrade32Exercise;
