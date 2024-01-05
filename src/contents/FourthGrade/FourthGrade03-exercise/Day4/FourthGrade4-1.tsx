import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import {
  Answer41 as answer,
  Data41Quiz1 as QuizData1,
  Data41Quiz2 as QuizData2,
} from '../../Data/Book3';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade3Day4 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-1';
import SingleQuiz from './Single4-1';

import type { Data41QuizProps1 as QuizProps } from '../../Type/Type3';

const FourthGrade41Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(6), () => new Array(2))
  );
  const key = 'fourth341.answer';
  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
          // console.log(res);
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

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <ExampleQuiz />
          <Styled.MarginBottomBox2>
            <Styled.RowWrapBox5>
              {QuizData1.map((item: QuizProps, idx: number) => (
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={1}
                  imgId={idx}
                  quiz1={item.quiz1}
                  quiz2={item.quiz1}
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
            {QuizData2.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                type={2}
                imgId={idx}
                quiz1={item.quiz1}
                quiz2={item.quiz1}
                idx={idx + 3}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx + 3]}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
