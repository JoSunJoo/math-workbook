import React from 'react';

import { Data31Quiz as QuizData } from '../../Data/Book6'; //데이터 미적용
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade6Day3 } from '../../utils/handleTitle';
// import ExampleQuiz from './Example3-2';
import SingleQuiz from './Single3-1';

import type { Data31QuizProps as QuizProps } from '../../Type/Type6';

import img from '../../Image/6-3-2.png';

const ThirdGrade32Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade6Day3.title}
      subTitle={ThirdGrade6Day3.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
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
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default ThirdGrade32Exercise;
