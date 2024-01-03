import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import {
  Answer43 as answer,
  Data43Quiz1 as QuizData1,
  Data43Quiz2 as QuizData2,
} from '../../Data/Book4';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade4Day4 } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-3';
import SingleQuiz from './Single4-3';

import type { Data12QuizProps } from '../../Type/Type1';
import type { Data43QuizProps } from '../../Type/Type4';

const ThirdGrade43Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(6), () => new Array(1))
  );
  const key = 'third443.answer';
  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
          if (res !== null) {
            setInputValue(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DayLayout
      title={ThirdGrade4Day4.title}
      subTitle="몫이 같은 번호를 입력하십시오."
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={5}>
          <Styled.BorderBox1>
            <Styled.RowWrapBox4>
              {QuizData1.map((item: Data12QuizProps, idx) => (
                <ExampleQuiz
                  key={idx}
                  id={item.id}
                  quiz1={item.quiz1}
                  quiz2={item.quiz2}
                />
              ))}
            </Styled.RowWrapBox4>
          </Styled.BorderBox1>
          <Styled.RowWrapBox5>
            {QuizData2.map((item: Data43QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox>
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

export default ThirdGrade43Exercise;
