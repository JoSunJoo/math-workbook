import { useState } from 'react';

import { Answer52 as answer, Data52Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubBlank, ThirdGrade6Day5 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example5-2';
import SingleQuiz from './Single5-2';

import type { Data52QuizProps as QuizProps } from '../../Type/Type6';

const ThirdGrade52Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(7), () => new Array(1))
  );
  const key = 'third652.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
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
                totalText={item.totalText}
                unit={item.unit}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={5} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade52Exercise;
