import { useState } from 'react';

import {
  Answer41 as answer,
  Data41Quiz1 as QuizData1,
  Data41Quiz2 as QuizData2,
} from '../../Data/Book4';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade4Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

import type { Data41QuizProps as QuizProps } from '../../Type/Type4';

import img from '../../Image/4-4-1.png';

const FourthGrade41Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(15), () => new Array(1))
  );
  const key = 'fourth441.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox8>
        <Styled.ColGapBox2 gap={4}>
          <Styled.FitExampleBox>
            <Styled.ImgSize4 src={img} />
          </Styled.FitExampleBox>
          <Styled.MarginBottomBox2>
            <Styled.RowWrapBox6>
              {QuizData1.map((item: QuizProps, idx: number) => (
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
                  correct={confirmType ? null : correct[idx]}
                />
              ))}
            </Styled.RowWrapBox6>
          </Styled.MarginBottomBox2>
          <Styled.RowWrapBox7>
            {QuizData2.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                unit={item.unit}
                unit2={item.unit2}
                idx={idx + 9}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx + 9]}
              />
            ))}
          </Styled.RowWrapBox7>
          <div
            onClick={() => {
              if (confirmType)
                handleAnswer({ key, inputValue, answer, setCorrect });
              setToggle(!toggle);
              setConfirmType(prev => !prev);
            }}
          >
            <ConfirmBtn type={confirmType} day={4} />
          </div>
        </Styled.ColGapBox2>
      </Styled.PaddingBox8>
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
