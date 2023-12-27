import React from 'react';

import { Data11Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade3Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-1';

import type { Data11QuizProps1 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-1-1_1.png';
import img2 from '../../Image/3-1-1_2.png';
import img3 from '../../Image/3-1-1_3.png';
import img4 from '../../Image/3-1-1_4.png';
import img5 from '../../Image/3-1-1_5.png';
import img6 from '../../Image/3-1-1_6.png';
import img7 from '../../Image/3-1-1_7.png';
import img8 from '../../Image/3-1-1_8.png';
import img9 from '../../Image/3-1-1_9.png';
import img10 from '../../Image/3-1-1_10.png';
import img11 from '../../Image/3-1-1_11.png';
import img12 from '../../Image/3-1-1_12.png';

const FourthGrade11Exercise: React.FC = () => {
  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox5>
        <Styled.RowWrapBox>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              imgId={idx}
              imgArray={imgArray}
            />
          ))}
        </Styled.RowWrapBox>
      </Styled.PaddingBox5>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FourthGrade11Exercise;
