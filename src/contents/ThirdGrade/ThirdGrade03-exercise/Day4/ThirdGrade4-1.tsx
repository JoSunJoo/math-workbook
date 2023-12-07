// import { useEffect, useState } from 'react';
import { Data41Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubBlank, ThirdGrade3Day4 } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

import type { Data12QuizProps } from '../../Type/Type1';

const ThirdGrade41Exercise = () => {
  return (
    <DayLayout title={ThirdGrade3Day4.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <div>예시 부분 이미지 첨부 예정</div>
          <Styled.RowWrapBox>
            {QuizData.map((item: Data12QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
