import { Data51Quiz as QuizData } from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade4Day5 } from '../../utils/handleTitle';
import SingleQuiz from './Single5-1';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const ThirdGrade51Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade4Day5.title}
      subTitle={ThirdGrade4Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <div>이미지 첨부 예정</div>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz key={idx} id={item.id} quiz1={item.quiz1} />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade51Exercise;
