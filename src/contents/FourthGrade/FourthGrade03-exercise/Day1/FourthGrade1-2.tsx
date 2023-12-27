import React from 'react';

import { Data12Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade3Day1 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-2';
import SingleQuiz from './Single1-1';

import type { Data12QuizProps1 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-1-2_2.png';
import img2 from '../../Image/3-1-2_3.png';
import img3 from '../../Image/3-1-2_4.png';
import img4 from '../../Image/3-1-2_5.png';
import img5 from '../../Image/3-1-2_6.png';
import img6 from '../../Image/3-1-2_7.png';
import img7 from '../../Image/3-1-2_8.png';
import img8 from '../../Image/3-1-2_9.png';

const FourthGrade12Exercise: React.FC = () => {
  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox gap={4}>
          <ExampleQuiz />
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
        </Styled.ColGapBox>
      </Styled.PaddingBox5>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FourthGrade12Exercise;
