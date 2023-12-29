import React from 'react';
import { useState } from 'react';

import {
  Data41Quiz1,
  Data41Quiz2,
  Data41Quiz3,
  Data41Quiz4,
} from '../../Data/Book4';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade4Day4 } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

const ThirdGrade41Exercise: React.FC = () => {
  const [isChecked1, setIsChecked1] = useState<number>();
  const [isChecked2, setIsChecked2] = useState<number>();
  const [isChecked3, setIsChecked3] = useState<number>();
  const [isChecked4, setIsChecked4] = useState<number>();

  const Seq = [Data41Quiz1, Data41Quiz2, Data41Quiz3, Data41Quiz4];
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
    <DayLayout
      title={ThirdGrade4Day4.title}
      subTitle={ThirdGrade4Day4.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          {Seq.map((item, idx) => (
            <Styled.SelectSingleWrapper2 key={idx}>
              {item.map((i, idx2) => (
                <div key={idx2}>
                  <input
                    type="radio"
                    id={i.id}
                    checked={idx2 === CheckArray[idx]}
                    onChange={() => handleInput(idx, idx2)}
                  ></input>
                  <Styled.SelectSingleButton2 htmlFor={i.id}>
                    <SingleQuiz
                      quiz1={i.quiz1}
                      quiz2={i.quiz2}
                      isCheck={idx2 === CheckArray[idx]}
                    />
                  </Styled.SelectSingleButton2>
                </div>
              ))}
            </Styled.SelectSingleWrapper2>
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
