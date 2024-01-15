import { useState } from 'react';

import { Answer21 as answer, Data21Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade1Day2 } from '../../utils/handleTitle';
import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps1 as DataProps } from '../../Type/Type1';

const ThirdGrade21Exercise: React.FC = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(8), () => new Array(13))
  );
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const key = 'third121.answer';

  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });
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
              correct={confirmType ? null : correct[idx]}
            />
          ))}
        </Styled.RowWrapBox3>
        <div
          onClick={() => {
            if (confirmType)
              handleAnswer({ key, inputValue, answer, setCorrect });
            setToggle(!toggle);
            setConfirmType(prev => !prev);
          }}
        >
          <ConfirmBtn type={confirmType} day={2} />
        </div>
      </Styled.ColGapBox>
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
