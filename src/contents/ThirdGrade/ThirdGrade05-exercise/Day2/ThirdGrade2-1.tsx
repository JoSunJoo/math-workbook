import { useState } from 'react';

import { Answer21 as answer, Data21Quiz as QuizData } from '../../Data/Book5';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade5Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps as QuizProps } from '../../Type/Type5';

import img from '../../Image/5-2-1.png';

const ThirdGrade21Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(4))
  );
  const key = 'third521.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade5Day2.title}
      subTitle={ThirdGrade5Day2.subTitle}
    >
      <Styled.PaddingBox3>
        <Styled.ColGapBox2 gap={7}>
          <Styled.ImgSize4 src={img} alt="" />
          <Styled.RowWrapBox5>
            {QuizData.map((item: QuizProps, idx) => (
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
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox5>
          <div
            onClick={() => {
              handleAnswer({ key, inputValue, answer, setCorrect });
              setToggle(!toggle);
              setConfirmType(false);
            }}
          >
            <ConfirmBtn type={confirmType} day={2} />
          </div>
        </Styled.ColGapBox2>
      </Styled.PaddingBox3>
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
