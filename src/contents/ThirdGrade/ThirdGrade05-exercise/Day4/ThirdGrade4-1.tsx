import { Data41Quiz as QuizData } from '../../Data/Book5';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubGeometry, ThirdGrade5Day4 } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-1';
import SingleQuiz from './Single4-1';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/5-4-1.png';

const ThirdGrade41Exercise = () => {
  return (
    <DayLayout title={ThirdGrade5Day4.title} subTitle={SubGeometry}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.MarginBottomBox2>
            <Styled.ImgSize4 src={img} alt="" />
          </Styled.MarginBottomBox2>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz key={idx} id={item.id} quiz1={item.quiz1} />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
