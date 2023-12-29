import React from 'react';
import { useState } from 'react';

import {
  Data53Quiz1,
  Data53Quiz2,
  Data53Quiz3,
  Data53Quiz4,
} from '../../Data/Book3';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade3Day5 } from '../../utils/handleTitle';
import Single531 from './Single5-3-1';
import Single532 from './Single5-3-2';

const ThirdGrade53Exercise: React.FC = () => {
  const Seq = [Data53Quiz1, Data53Quiz2, Data53Quiz3, Data53Quiz4];
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
  const handleType = (i: any) => {
    if (i.type === 1) {
      return <Single531 quiz1={i.quiz1} quiz2={i.quiz2} />;
    } else {
      return <Single532 quiz1={i.quiz1} quiz2={i.quiz2} />;
    }
  };
  const handleInput = (idx: number, idx2: number) => {
    CheckSetArray[idx](idx2);
  };

  return (
    <DayLayout
      title={ThirdGrade3Day5.title}
      subTitle={ThirdGrade3Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          {Seq.map((item, idx) => (
            <Styled.SelectSingleWrapper key={idx}>
              {item.map((i, idx2) => (
                <div key={idx2}>
                  <input
                    type="radio"
                    id={i.id}
                    checked={idx2 === CheckArray[idx]}
                    onChange={() => handleInput(idx, idx2)}
                  ></input>
                  <Styled.SelectSingleButton htmlFor={i.id}>
                    {handleType(i)}
                  </Styled.SelectSingleButton>
                </div>
              ))}
            </Styled.SelectSingleWrapper>
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade53Exercise;
