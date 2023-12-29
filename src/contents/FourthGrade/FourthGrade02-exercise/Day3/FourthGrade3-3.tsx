import { Data33Quiz as QuizData } from '../../Data/Book2';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day3 as Day, SubBlank } from '../../utils/handleTitle';
import SingleQuiz from '../Day2/Single2-3';

import type { Data33QuizProps as QuizProps } from '../../Type/Type2';

const FourthGrade33Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox6>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox6>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FourthGrade33Exercise;
