import {
  Data52Quiz1 as QuizData1,
  Data52Quiz2 as QuizData2,
} from '../../Data/Book5';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade5Day5 } from '../../utils/handleTitle';
import Example2 from './Example5-1-2';
import SingleQuiz from './Single5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type5';

const ThirdGrade52Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade5Day5.title}
      subTitle={ThirdGrade5Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <div>
            ★ 민규네 학교 남학생 96명이 8명씩 조를 이루어 체육 대회를 하려고
            합니다. 물음에 답하세요.
          </div>
          {QuizData1.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              sign1={item.sign1}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <div>
            ★ 탁구공 144개를 9개의 상자에 똑같이 나누어 담으려고 합니다. 물음에
            답하세요.
          </div>
          {QuizData2.map((item: QuizProps, idx) => (
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

export default ThirdGrade52Exercise;
