import { Data51Quiz as QuizData } from '../../Data/Book2';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day5 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type2';

import img from '../../Image/2-5-1.png';

const FourthGrade51Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.ImgBox3>
            <Styled.ColGapBox gap={2}>
              <Styled.TextSize>
                재호는 84쪽인 동화책을 매일 13쪽씩 읽고 있습니다.
              </Styled.TextSize>
              <Styled.ImgSize2 src={img} alt="" />
            </Styled.ColGapBox>
          </Styled.ImgBox3>
          {QuizData.map((item: QuizProps, idx: number) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              type={item.type}
              quiz1={item.quiz1}
              unit1={item.unit1}
              unit2={item.unit2}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default FourthGrade51Exercise;
