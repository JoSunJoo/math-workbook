import { useState } from 'react';

import { Answer13 as answer, Data13Quiz as QuizData } from '../../Data/Book5';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubBlank, ThirdGrade5Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data13QuizProps1 as QuizProps } from '../../Type/Type5';

const ThirdGrade13Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(3), () => new Array(1))
  );
  const key = 'third513.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox2 gap={5}>
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              imgId={idx}
              toggle={toggle}
              setToggle={setToggle}
              inputValue={inputValue}
              setInputValue={setInputValue}
              correct={correct[idx]}
            />
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox5>
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

export default ThirdGrade13Exercise;
