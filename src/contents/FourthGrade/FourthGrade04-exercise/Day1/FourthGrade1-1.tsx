import { useState } from 'react';

import { Answer11 as answer, Data11Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade4Day1 as Day } from '../../utils/handleTitle';
import Example from './Example1-1';
import SingleQuiz from './Single1-1';

import type { Data11QuizProps1 as QuizProps } from '../../Type/Type4';

const FourthGrade12Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(12), () => new Array(1))
  );
  const key = 'fourth411.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Example />
          <Styled.RowWrapBox12>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                imgId={idx}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox12>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade12Exercise;
