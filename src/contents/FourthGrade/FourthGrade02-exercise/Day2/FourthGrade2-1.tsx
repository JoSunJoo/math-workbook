import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer21 as answer, Data21Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade2Day2 as Day } from '../../utils/handleTitle';
import IdSymbol from '../../utils/IdSymbol';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps1 as QuizProps } from '../../Type/Type2';

import img from '../../Image/2-2-1.png';

const FourthGrade21Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(2))
  );
  const key = 'fourth221.answer';
  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
          if (res !== null) {
            setInputValue(res);
          }
        })
        .catch(err => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

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
          <Styled.ImgSize4 src={img} />
          {QuizData.map((item: QuizProps, idx) => (
            <Styled.RowBox13 key={idx}>
              <IdSymbol id={item.id} correct={correct[idx]} />
              {/* 왼쪽 클릭 문제 */}
              <Styled.SelectSingleWrapper2 key={idx}>
                {item.left.map((i: string, idx2: number) => (
                  <div key={idx2}>
                    <input
                      type="radio"
                      id={i}
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
                correct={correct[idx]}
              />
            </Styled.RowBox13>
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox5>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade21Exercise;
