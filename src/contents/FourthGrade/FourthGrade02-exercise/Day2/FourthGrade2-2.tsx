import { useState } from 'react';

import { Answer22 as answer, Data22Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade2Day2 as Day } from '../../utils/handleTitle';
import IdSymbol from '../../utils/IdSymbol';
import SingleQuiz from './Single2-2';

import type { Data22QuizProps1 as QuizProps } from '../../Type/Type2';

import img from '../../Image/2-2-2.png';

const FourthGrade22Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(3))
  );
  const key = 'fourth222.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });
  const handleInput = (idx: number, idx2: number) => {
    const value = inputValue;
    value[idx][0] = idx2.toString();
    setInputValue(value);
    setToggle(!toggle);
  };
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox gap={6}>
          <Styled.ImgSize4 src={img} alt="" />
          {QuizData.map((item: QuizProps, idx) => (
            <Styled.RowBox13 key={idx}>
              <IdSymbol
                id={item.id}
                correct={confirmType ? null : correct[idx]}
              />
              {/* 왼쪽 클릭 문제 */}
              <Styled.SelectSingleWrapper2 key={idx}>
                {item.left.map((i: string, idx2: number) => (
                  <div key={i}>
                    <input
                      type="radio"
                      id={i}
                      disabled={confirmType ? false : true}
                      checked={idx2.toString() === inputValue[idx][0]}
                      onChange={() => handleInput(idx, idx2)}
                    ></input>
                    <Styled.SelectSingleButton htmlFor={i}>
                      {i}
                    </Styled.SelectSingleButton>
                  </div>
                ))}
              </Styled.SelectSingleWrapper2>
              {/* 오른쪽 빈칸 문제*/}
              <SingleQuiz
                key={idx}
                rightQuiz1={item.rightQuiz1}
                rightQuiz2={item.rightQuiz2}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={confirmType ? null : correct[idx]}
              />
            </Styled.RowBox13>
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox5>
      <div
        onClick={() => {
          if (confirmType === true) {
            handleAnswer({ key, inputValue, answer, setCorrect });
          }
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade22Exercise;
