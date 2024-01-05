import { useState } from 'react';

import { Answer52 as answer, Data52Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubBlank, ThirdGrade3Day5 } from '../../utils/handleTitle';
import SingleQuiz from './Single5-2';

import type { Data52QuizProps as QuizProps } from '../../Type/Type3';

const ThirdGrade52Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(6), () => new Array(4))
  );
  const key = 'third352.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={ThirdGrade3Day5.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <Styled.RowWrapBox5>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                quiz4={item.quiz3}
                sign1={item.sign1}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox5>
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
