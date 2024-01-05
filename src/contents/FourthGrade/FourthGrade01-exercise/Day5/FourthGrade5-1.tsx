import { useState } from 'react';

import { Answer51 as answer, Data51Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade1Day5 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example5-1';
import SingleQuiz from './Single5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

const FourthGrade51Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(1), () => new Array(4))
  );
  const key = 'fourth151.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx: number) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              unit={item.unit}
              idx={idx}
              toggle={toggle}
              setToggle={setToggle}
              inputValue={inputValue}
              setInputValue={setInputValue}
              correct={correct[idx]}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={5} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade51Exercise;
