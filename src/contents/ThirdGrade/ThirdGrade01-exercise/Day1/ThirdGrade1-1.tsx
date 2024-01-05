import { useState } from 'react';

import { Answer11 as answer, Data11Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade1Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-1';
import SingleQuiz from './Single1-1';

import type { Data11QuizProps as DataProps } from '../../Type/Type1';

const ThirdGrade11Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(2))
  );
  const key = 'third111.answer';

  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade1Day1.title}
      subTitle={ThirdGrade1Day1.subTitle}
    >
      <Styled.PaddingBox2>
        <Styled.ColGapBox gap={3.75}>
          <Styled.RowWrapBox8>
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
                quiz9={item.quiz9}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox8>
          <div
            onClick={() => {
              handleAnswer({ key, inputValue, answer, setCorrect });
              setToggle(!toggle);
              setConfirmType(false);
            }}
          >
            <ConfirmBtn type={confirmType} day={1} />
          </div>
        </Styled.ColGapBox>
      </Styled.PaddingBox2>
    </DayLayout>
  );
};

export default ThirdGrade11Exercise;
