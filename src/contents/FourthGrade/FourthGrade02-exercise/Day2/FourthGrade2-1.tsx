import { useState } from 'react';

import { Data21Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade2Day2 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps1 as QuizProps } from '../../Type/Type2';

import img from '../../Image/2-2-1.png';

const FourthGrade21Exercise = () => {
  const [isChecked1, setIsChecked1] = useState<number>();
  const [isChecked2, setIsChecked2] = useState<number>();
  const [isChecked3, setIsChecked3] = useState<number>();
  const [isChecked4, setIsChecked4] = useState<number>();
  const CheckArray = [isChecked1, isChecked2, isChecked3, isChecked4];
  const CheckSetArray = [
    setIsChecked1,
    setIsChecked2,
    setIsChecked3,
    setIsChecked4,
  ];
  const handleInput = (idx: number, idx2: number) => {
    CheckSetArray[idx](idx2);
  };

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox gap={6}>
          <Styled.ImgSize4 src={img} />
          {QuizData.map((item: QuizProps, idx) => (
            <Styled.RowBox13>
              <div>{item.id}</div>
              {/* 왼쪽 클릭 문제 */}
              <Styled.SelectSingleWrapper2 key={idx}>
                {item.left.map((i: string, idx2: number) => (
                  <div key={idx2}>
                    <input
                      type="radio"
                      id={i}
                      checked={idx2 === CheckArray[idx]}
                      onChange={() => handleInput(idx, idx2)}
                    ></input>
                    <Styled.SelectSingleButton htmlFor={i}>
                      {i}
                    </Styled.SelectSingleButton>
                  </div>
                ))}
              </Styled.SelectSingleWrapper2>
              {/* 오른쪽 빈칸 문제*/}
              <SingleQuiz
                key={idx}
                rightQuiz1={item.rightQuiz1}
                rightQuiz2={item.rightQuiz2}
              />
            </Styled.RowBox13>
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox5>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FourthGrade21Exercise;
