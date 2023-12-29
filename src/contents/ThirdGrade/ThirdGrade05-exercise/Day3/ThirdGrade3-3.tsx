import { Data33Quiz as QuizData } from '../../Data/Book5';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade5Day3 } from '../../utils/handleTitle';
import SingleQuiz from './Single3-2';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const ThirdGrade33Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade5Day3.title}
      subTitle={ThirdGrade5Day3.subTitle}
    >
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

export default ThirdGrade33Exercise;
