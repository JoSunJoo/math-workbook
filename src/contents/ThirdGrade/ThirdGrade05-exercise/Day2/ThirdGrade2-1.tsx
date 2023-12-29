import React from 'react';

import { Data21Quiz as QuizData } from '../../Data/Book5';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade5Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps as QuizProps } from '../../Type/Type5';

import img from '../../Image/5-2-1.png';

const ThirdGrade21Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade5Day2.title}
      subTitle={ThirdGrade5Day2.subTitle}
    >
      <Styled.PaddingBox3>
        <Styled.ColGapBox2 gap={7}>
          <Styled.ImgSize4 src={img} alt="" />
          <Styled.RowWrapBox5>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                quiz4={item.quiz4}
                quiz5={item.quiz5}
                quiz6={item.quiz6}
                quiz7={item.quiz7}
                quiz8={item.quiz8}
              />
            ))}
          </Styled.RowWrapBox5>
          <ConfirmBtn type={true} day={2} />
        </Styled.ColGapBox2>
      </Styled.PaddingBox3>
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
