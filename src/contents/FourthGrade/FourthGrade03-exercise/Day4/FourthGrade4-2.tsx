import { Data42Quiz as QuizData } from '../../Data/Book3';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade3Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-2';

import type { Data42QuizProps1 as QuizProps } from '../../Type/Type3';

import img from '../../Image/3-4-2.png';

const FourthGrade42Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox>
            <Styled.FitExampleBox>
              <Styled.HandleImgSize2 src={img} size={18} />
            </Styled.FitExampleBox>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                type={item.type}
                imgId={idx}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FourthGrade42Exercise;
