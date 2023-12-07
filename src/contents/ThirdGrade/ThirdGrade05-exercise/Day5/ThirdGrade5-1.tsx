import { Data51Quiz as QuizData } from '../../Data/Book5';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade5Day5 } from '../../utils/handleTitle';
import Example2 from './Example5-1-2';
import SingleQuiz from './Single5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type5';

const ThirdGrade51Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade5Day5.title}
      subTitle={ThirdGrade5Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <div>이미지 첨부 예정</div>
          <Example2 />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              sign1={item.sign1}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade51Exercise;
