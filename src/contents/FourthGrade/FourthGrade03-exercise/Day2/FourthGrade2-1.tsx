import { useState } from 'react';

import { Answer21 as answer } from '../../Data/Book3';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade3Day2 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';

const FourthGrade21Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(6), () => new Array(2))
  );
  const key = 'fourth321.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  const numArray = [
    ['①', '②'],
    ['③', '④'],
    ['⑤', '⑥'],
  ];
  const idxArray = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <ExampleQuiz />
          <Styled.ColGapBox gap={2}>
            {numArray.map((item: string[], idx: number) => (
              <SingleQuiz
                key={idx}
                id={item[0]}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={confirmType ? null : correct[idxArray[idx][0]]}
                correct2={confirmType ? null : correct[idxArray[idx][1]]}
              />
            ))}
          </Styled.ColGapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          if (confirmType === true) {
            handleAnswer({ key, inputValue, answer, setCorrect });
          }
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade21Exercise;
