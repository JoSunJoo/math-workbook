import { Data31Quiz as QuizData } from '../../Data/Book5';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubGeometry, ThirdGrade5Day3 } from '../../utils/handleTitle';
import SingleQuiz from './Single3-1';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const ThirdGrade31Exercise = () => {
  return (
    <DayLayout title={ThirdGrade5Day3.title} subTitle={SubGeometry}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz key={idx} id={item.id} quiz1={item.quiz1} />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default ThirdGrade31Exercise;
