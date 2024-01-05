import { useState } from 'react';

import {
  Answer13 as answer,
  Data13Quiz1 as QuizData1,
  Data13Quiz2 as QuizData2,
} from '../../Data/Book4';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade4Day1 as Day } from '../../utils/handleTitle';
import Example1 from './Example1-3-1';
import Example2 from './Example1-3-2';
import SingleQuiz from './Single1-3';

import type {
  Data13QuizProps1 as QuizProps1,
  Data13QuizProps2 as QuizProps2,
} from '../../Type/Type4';

import img from '../../Image/4-1-3_1.png';

const FourthGrade13Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(16), () => new Array(2))
  );
  const key = 'fourth413.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle3}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.ImgBox2>
            <Styled.ColGapBox gap={2}>
              <Styled.TextSize>• 분수와 소수의 관계 </Styled.TextSize>
              <Styled.ImgSize4 src={img} alt="" />
            </Styled.ColGapBox>
          </Styled.ImgBox2>
          <Styled.MarginBottomBox2>
            <Styled.RowWrapBox5>
              <Example1 />
              {QuizData1.map((item: QuizProps1, idx: number) => (
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={1}
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
            </Styled.RowWrapBox5>
          </Styled.MarginBottomBox2>
          <Styled.RowWrapBox5>
            <Example2 />
            {QuizData2.map((item: QuizProps2, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                type={2}
                quiz1={item.quiz1}
                idx={idx + 8}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx + 8]}
              />
            ))}
          </Styled.RowWrapBox5>
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

export default FourthGrade13Exercise;
