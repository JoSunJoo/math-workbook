import { useState } from 'react';

import { Answer21 as answer, Data21Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade4Day2 } from '../../utils/handleTitle';
import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps1 as QuizProps } from '../../Type/Type4';

const ThirdGrade21Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(1))
  );
  const key = 'third421.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade4Day2.title}
      subTitle={ThirdGrade4Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              imgId={idx}
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
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
