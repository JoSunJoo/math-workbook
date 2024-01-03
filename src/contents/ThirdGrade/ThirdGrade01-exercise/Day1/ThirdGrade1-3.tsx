import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer13 as answer, Data13Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubJustCal, ThirdGrade1Day1 } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data12QuizProps as DataProps } from '../../Type/Type1';

const ThirdGrade13Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(14), () => new Array(1))
  );
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const key = 'third113.answer';
  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
          console.log(res);
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
    <DayLayout title={ThirdGrade1Day1.title} subTitle={SubJustCal}>
      <Styled.PaddingBox>
        <Styled.RowWrapBox>
          {QuizData.map((item: DataProps, idx) => (
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
        </Styled.RowWrapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setScore, setCorrect });
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
