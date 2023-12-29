import { Data51Quiz as QuizData } from '../../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade1Day5 as Day } from '../../utils/handleTitle';
import ExamQuiz from './Example5-1';
import SingleQuiz from './Single5-3';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/1-5-1.png';

const ThirdGrade51Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.ImgBox1>
            <Styled.ColGapBox2 gap={2}>
              <Styled.TextSize>
                다음은 민철이와 정수네 집에서 학교까지 가는 주요 장소와 거리를
                나타낸 것입니다.
              </Styled.TextSize>
              <Styled.ImgSize1 src={img} />
            </Styled.ColGapBox2>
          </Styled.ImgBox1>
          <ExamQuiz />
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

export default ThirdGrade51Exercise;
