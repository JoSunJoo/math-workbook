import { useState } from 'react';

import { Answer41 as answer, Data41Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade1Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-1';
import SingleQuiz from './Single4-1';

import type { Data41QuizProps as DataProps } from '../../Type/Type1';

const ThirdGrade41Exercise: React.FC = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(2))
  );
  const key = 'third141.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade1Day1.title}
      subTitle={ThirdGrade1Day1.subTitle}
    >
      <Styled.PaddingBox2>
        <Styled.ColGapBox gap={3.75}>
          <Styled.RowWrapBox6>
            <ExampleQuiz />
            {QuizData.map((item: DataProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                quiz4={item.quiz4}
                quiz5={item.quiz5}
                quiz6={item.quiz6}
                quiz7={item.quiz7}
                quiz8={item.quiz8}
                type={item.type}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={confirmType ? null : correct[idx]}
              />
            ))}
          </Styled.RowWrapBox6>
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
        </Styled.ColGapBox>
      </Styled.PaddingBox2>
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
