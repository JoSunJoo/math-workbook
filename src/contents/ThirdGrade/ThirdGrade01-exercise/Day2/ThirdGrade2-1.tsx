import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer21 as answer, Data21Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade1Day2 } from '../../utils/handleTitle';
import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps1 as DataProps } from '../../Type/Type1';

const ThirdGrade21Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(8), () => new Array(13))
  );
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const key = 'third121.answer';

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
    <DayLayout
      title={ThirdGrade1Day2.title}
      subTitle={ThirdGrade1Day2.subTitle}
    >
      <Styled.ColGapBox gap={3.75}>
        <ExampleQuiz />
        <Styled.RowWrapBox3>
          {QuizData.map((item: DataProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              id2={idx}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              idx={idx}
              inputValue={inputValue}
              toggle={toggle}
              setToggle={setToggle}
              setInputValue={setInputValue}
              correct={correct[idx]}
            />
          ))}
        </Styled.RowWrapBox3>
        <div
          onClick={() => {
            handleAnswer({ key, inputValue, answer, setScore, setCorrect });
            setToggle(!toggle);
            setConfirmType(false);
          }}
        >
          <ConfirmBtn type={confirmType} day={2} />
        </div>
      </Styled.ColGapBox>
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
