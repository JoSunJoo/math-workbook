import { useState } from 'react';

import {
  Answer41 as answer,
  Data41Quiz1,
  Data41Quiz2,
  Data41Quiz3,
  Data41Quiz4,
} from '../../Data/Book4';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade4Day4 } from '../../utils/handleTitle';
import IdSymbol from '../../utils/IdSymbol';
import SingleQuiz from './Single4-1';

const ThirdGrade41Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);

  const Seq = [Data41Quiz1, Data41Quiz2, Data41Quiz3, Data41Quiz4];
  const idArray = ['①', '②', '③', '④'];
  const [inputValue, setInputValue] = useState<number[][]>(
    Array.from(Array(4), () => new Array(1))
  );
  const key = 'third441.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  const handleInput = (idx: number, idx2: number) => {
    const value = inputValue;
    value[idx][0] = idx2;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <DayLayout
      title={ThirdGrade4Day4.title}
      subTitle={ThirdGrade4Day4.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          {Seq.map((item, idx) => (
            <Styled.RowBox7 key={idx}>
              <IdSymbol id={idArray[idx]} correct={correct[idx]} />
              <Styled.SelectSingleWrapper2 key={idx}>
                {item.map((i, idx2) => (
                  <div key={idx2}>
                    <input
                      type="radio"
                      id={i.id}
                      checked={idx2 === inputValue[idx][0]}
                      onChange={() => handleInput(idx, idx2)}
                    ></input>
                    <Styled.SelectSingleButton2 htmlFor={i.id}>
                      <SingleQuiz
                        quiz1={i.quiz1}
                        quiz2={i.quiz2}
                        isCheck={idx2 === inputValue[idx][0]}
                      />
                    </Styled.SelectSingleButton2>
                  </div>
                ))}
              </Styled.SelectSingleWrapper2>
            </Styled.RowBox7>
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
