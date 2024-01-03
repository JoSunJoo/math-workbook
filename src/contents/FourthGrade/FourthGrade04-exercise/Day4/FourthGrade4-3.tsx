import { useEffect, useState } from 'react';

import {
  Answer43 as answer,
  Data43Quiz1 as QuizData1,
  Data43Quiz2 as QuizData2,
} from '../../Data/Book4';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade4Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';
import SingleQuiz2 from './Single4-3';

import type { Data41QuizProps as QuizProps } from '../../Type/Type4';

const FourthGrade43Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(10), () => new Array(2))
  );
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox3>
            {QuizData1.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
                unit2={item.unit2}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox3>
          <Styled.RowWrapBox5>
            {QuizData2.map((item: QuizProps, idx: number) => (
              <SingleQuiz2
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
                imgId={idx}
                idx={idx + 4}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx + 4]}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade43Exercise;
