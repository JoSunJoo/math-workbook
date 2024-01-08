import { useState } from 'react';

import {
  Answer53 as answer,
  Data53Quiz1,
  Data53Quiz2,
  Data53Quiz3,
  Data53Quiz4,
} from '../../Data/Book3';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade3Day5 } from '../../utils/handleTitle';
import IdSymbol from '../../utils/IdSymbol';
import Single531 from './Single5-3-1';
import Single532 from './Single5-3-2';

const ThirdGrade53Exercise: React.FC = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const Seq = [Data53Quiz1, Data53Quiz2, Data53Quiz3, Data53Quiz4];
  const idArray = ['①', '②', '③', '④'];
  const [inputValue, setInputValue] = useState<number[][]>(
    Array.from(Array(4), () => new Array(1))
  );
  const key = 'third353.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  const handleType = (i: any) => {
    if (i.type === 1) {
      return <Single531 quiz1={i.quiz1} quiz2={i.quiz2} />;
    } else {
      return <Single532 quiz1={i.quiz1} quiz2={i.quiz2} />;
    }
  };
  const handleInput = (idx: number, idx2: number) => {
    const value = inputValue;
    value[idx][0] = idx2;
    setInputValue(value);
    setToggle(!toggle);
  };
  return (
    <DayLayout
      title={ThirdGrade3Day5.title}
      subTitle={ThirdGrade3Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          {Seq.map((item, idx) => (
            <Styled.RowBox7>
              <IdSymbol
                id={idArray[idx]}
                correct={confirmType ? null : correct[idx]}
              />
              <Styled.SelectSingleWrapper key={idx}>
                {item.map((i, idx2) => (
                  <div key={idx2}>
                    <input
                      type="radio"
                      id={i.id}
                      checked={idx2 === inputValue[idx][0]}
                      onChange={() => handleInput(idx, idx2)}
                    ></input>
                    <Styled.SelectSingleButton htmlFor={i.id}>
                      {handleType(i)}
                    </Styled.SelectSingleButton>
                  </div>
                ))}
              </Styled.SelectSingleWrapper>
            </Styled.RowBox7>
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={5} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade53Exercise;
