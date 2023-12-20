import { Data52Quiz as QuizData } from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade01-exercise/Day5/Single5-3';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubWay, ThirdGrade4Day5 } from '../../utils/handleTitle';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

const ThirdGrade52Exercise = () => {
  return (
    <DayLayout title={ThirdGrade4Day5.title} subTitle={SubWay}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              unit={item.unit}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade52Exercise;
