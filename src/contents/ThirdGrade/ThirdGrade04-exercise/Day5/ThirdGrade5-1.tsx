import { useState } from 'react';

import { Answer51 as answer, Data51Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade01-exercise/Day5/Single5-3';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade4Day5 } from '../../utils/handleTitle';
import ExampleQuiz from './Example5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/4-5-1.png';

const ThirdGrade51Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(2), () => new Array(1))
  );
  const key = 'third451.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade4Day5.title}
      subTitle={ThirdGrade4Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.ImgBox2>
            <Styled.ColGapBox2 gap={1}>
              <Styled.TextSize>
                교실에 다음과 같이 의자가 놓여 있습니다.
              </Styled.TextSize>
              <Styled.ImgSize1 src={img} />
            </Styled.ColGapBox2>
          </Styled.ImgBox2>
          <ExampleQuiz />
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

export default ThirdGrade51Exercise;
