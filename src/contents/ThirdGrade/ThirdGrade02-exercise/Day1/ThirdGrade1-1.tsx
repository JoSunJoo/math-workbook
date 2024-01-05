import { useState } from 'react';

import { Answer11 as answer, Data11Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade2Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-1';
import SingleQuiz from './Single1-1';

import type { Data12QuizProps as QuizProps } from '../../Type/Type2';

const ThirdGrade11Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(3))
  );
  const key = 'third211.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade2Day1.title}
      subTitle={ThirdGrade2Day1.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              imgId={idx}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
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
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade11Exercise;
