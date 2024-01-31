import { useState } from 'react';

import { Answer42 as answer, Data42Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade6Day4 } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-2';
import SingleQuiz from './Single4-1';

import type { Data41QuizProps as QuizProps } from '../../Type/Type6';

const ThirdGrade42Exercise: React.FC = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(7), () => new Array(1))
  );
  const key = 'third642.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade6Day4.title}
      subTitle={ThirdGrade6Day4.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
          <Styled.RowWrapBox>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                method={item.method}
                mune={item.mune}
                deno={item.deno}
                len={item.len}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={confirmType ? null : correct[idx]}
              />
            ))}
          </Styled.RowWrapBox>
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
