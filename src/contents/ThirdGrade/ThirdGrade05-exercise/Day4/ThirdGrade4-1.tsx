import { useState } from 'react';

import { Answer41 as answer, Data41Quiz as QuizData } from '../../Data/Book5';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubGeometry, ThirdGrade5Day4 } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-1';
import SingleQuiz from './Single4-1';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/5-4-1.png';

const ThirdGrade41Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(4))
  );
  const key = 'third541.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={ThirdGrade5Day4.title} subTitle={SubGeometry}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.MarginBottomBox2>
            <Styled.ImgSize4 src={img} alt="" />
          </Styled.MarginBottomBox2>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              idx={idx}
              toggle={toggle}
              setToggle={setToggle}
              inputValue={inputValue}
              setInputValue={setInputValue}
              correct={confirmType ? null : correct[idx]}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
