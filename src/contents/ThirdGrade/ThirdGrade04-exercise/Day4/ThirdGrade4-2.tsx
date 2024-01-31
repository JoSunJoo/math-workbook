import { useState } from 'react';

import { Answer42 as answer, Data42Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade03-exercise/Day5/Single5-1';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import {
  SubBlank2 as SubBlank,
  ThirdGrade4Day4,
} from '../../utils/handleTitle';
import ExampleQuiz from './Example4-2';

import type { Data51QuizProps as QuizProps } from '../../Type/Type3';

const ThirdGrade42Exercise: React.FC = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(2))
  );
  const key = 'third442.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={ThirdGrade4Day4.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <Styled.RowWrapBox5>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                sign1={item.sign1}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={confirmType ? null : correct[idx]}
              />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          if (confirmType === true) {
            handleAnswer({ key, inputValue, answer, setCorrect });
          }
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade42Exercise;
