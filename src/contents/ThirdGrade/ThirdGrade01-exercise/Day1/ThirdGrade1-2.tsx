import { useState } from 'react';

import { Answer12 as answer, Data12Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubBlank, ThirdGrade1Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-2';
import SingleQuiz from './Single1-2';

import type { Data12QuizProps as DataProps } from '../../Type/Type1';

const ThirdGrade12Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(4))
  );
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const key = 'third112.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });
  return (
    <DayLayout title={ThirdGrade1Day1.title} subTitle={SubBlank}>
      <Styled.ColGapBox gap={3.75}>
        <ExampleQuiz />
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
            correct={confirmType ? null : correct[idx]}
          />
        ))}
      </Styled.ColGapBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade12Exercise;
