import React from 'react';

import { Data22Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade02-exercise/Day3/Single3-2';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade4Day2 } from '../../utils/handleTitle';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

const ThirdGrade22Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade4Day2.title}
      subTitle={ThirdGrade4Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          <div>예시 이미치 첨부 예정</div>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default ThirdGrade22Exercise;
