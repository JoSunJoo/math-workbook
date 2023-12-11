// box-shadow: 0 0 0 3px #4872f4 inset;

import { Data23Quiz as QuizData } from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade4Day3 } from '../../utils/handleTitle';
import SingleQuiz from '../Day1/Single1-3';

import type { Data12QuizProps } from '../../Type/Type1';

const ThirdGrade31Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade4Day3.title}
      subTitle={ThirdGrade4Day3.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <div>예시 부분 이미지 첨부 예정</div>
          <div>이미지 적용해서 할 예정</div>
          <Styled.RowWrapBox>
            {QuizData.map((item: Data12QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default ThirdGrade31Exercise;
