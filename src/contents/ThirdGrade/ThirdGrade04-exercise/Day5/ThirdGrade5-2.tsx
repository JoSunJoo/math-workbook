import { useState } from 'react';

import { Answer52 as answer, Data52Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade01-exercise/Day5/Single5-3';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubWay, ThirdGrade4Day5 } from '../../utils/handleTitle';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

const ThirdGrade52Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(1))
  );
  const key = 'third452.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={ThirdGrade4Day5.title} subTitle={SubWay}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          {QuizData.map((item: QuizProps, idx) => (
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

export default ThirdGrade52Exercise;
