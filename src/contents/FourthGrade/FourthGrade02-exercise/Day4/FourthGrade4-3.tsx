import { Data43Quiz as QuizData } from '../../Data/Book2';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-3';

import type { Data43QuizProps as QuizProps } from '../../Type/Type2';

import img from '../../Image/2-4-3.png';

const FourthGrade43Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <Styled.ImgBox2>
            <Styled.ImgSize4 src={img} />
          </Styled.ImgBox2>
          <Styled.RowWrapBox3>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox3>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade43Exercise;
