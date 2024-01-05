import { useState } from 'react';

import { Data23Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade02-exercise/Day5/Single5-3';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade3Day2 } from '../../utils/handleTitle';
import makeAnswer from '../../utils/makeAnswer';

import type { Data12QuizProps } from '../../Type/Type1';

const ThirdGrade23Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(10), () => new Array(1))
  );
  const key = 'third323.answer';
  const answer = makeAnswer({ type: 1, data: QuizData });
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade3Day2.title}
      subTitle={ThirdGrade3Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.RowWrapBox4>
          {QuizData.map((item: Data12QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
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
        </Styled.RowWrapBox4>
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

export default ThirdGrade23Exercise;
