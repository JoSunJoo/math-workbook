import { useState } from 'react';

import { Answer22 as answer } from '../../Data/Book3';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade3Day2 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single2-2';

const FourthGrade22Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(10), () => new Array(2))
  );
  const key = 'fourth322.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });
  const idxArray = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
  ];

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <Styled.ColGapBox gap={2}>
            {idxArray.map((item: number[], idx: number) => (
              <SingleQuiz
                key={idx}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idxArray[idx][0]]}
                correct2={correct[idxArray[idx][1]]}
              />
            ))}
          </Styled.ColGapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade22Exercise;
