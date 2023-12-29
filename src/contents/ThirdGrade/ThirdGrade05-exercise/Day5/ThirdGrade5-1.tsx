import { Data51Quiz as QuizData } from '../../Data/Book5';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade5Day5 } from '../../utils/handleTitle';
import Example2 from './Example5-1-2';
import SingleQuiz from './Single5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type5';

import img from '../../Image/5-5-1.png';

const ThirdGrade51Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade5Day5.title}
      subTitle={ThirdGrade5Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.ImgBox1>
            <Styled.ColGapBox2 gap={2}>
              <Styled.TextSize>
                연필이 12자루씩 들어 있는 연필꽂이가 모두 7통 있습니다.
              </Styled.TextSize>
              <Styled.ImgSize1 src={img} />
            </Styled.ColGapBox2>
          </Styled.ImgBox1>
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
