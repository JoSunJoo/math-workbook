import React from 'react';

import { Data22Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade02-exercise/Day3/Single3-2';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade4Day2 } from '../../utils/handleTitle';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

import img from '../../Image/4-2-2.png';

const ThirdGrade22Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade4Day2.title}
      subTitle={ThirdGrade4Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <Styled.ImgSize4 src={img} alt="" />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
            />
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade22Exercise;
