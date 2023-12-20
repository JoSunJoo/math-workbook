import React from 'react';

import { Data21Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade6Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-1';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

import img from '../../Image/6-2-1.png';

const ThirdGrade21Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade6Day2.title}
      subTitle={ThirdGrade6Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={5}>
          <Styled.ImgSize4 src={img} alt="" />
          <Styled.RowWrapBox>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
