import { useEffect, useState } from 'react';

import { Answer32 as answer, Data32Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade2Day3 } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-2';
import SingleQuiz from './Single3-2';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

const ThirdGrade32Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(3))
  );
  return (
    <DayLayout
      title={ThirdGrade2Day3.title}
      subTitle={ThirdGrade2Day3.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={3}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
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
          handleAnswer({ inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={3} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade32Exercise;
