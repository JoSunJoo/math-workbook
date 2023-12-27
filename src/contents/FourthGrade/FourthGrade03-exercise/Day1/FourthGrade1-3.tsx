import React from 'react';

import { Data13Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade3Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data13QuizProps1 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-1-3_1.png';
import img2 from '../../Image/3-1-3_2.png';
import img3 from '../../Image/3-1-3_3.png';
import img4 from '../../Image/3-1-3_4.png';
import img5 from '../../Image/3-1-3_5.png';
import img6 from '../../Image/3-1-3_6.png';
import img7 from '../../Image/3-1-3_7.png';
import img8 from '../../Image/3-1-3_8.png';

const FourthGrade13Exercise: React.FC = () => {
  const imgArray = [img2, img3, img4, img5, img6, img7, img8];

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox6 gap={4}>
          <Styled.ImgSize8 src={img1} />
          <Styled.RowWrapBox12>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                size={item.size}
                imgId={idx}
                imgArray={imgArray}
              />
            ))}
          </Styled.RowWrapBox12>
        </Styled.ColGapBox6>
      </Styled.PaddingBox5>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FourthGrade13Exercise;
