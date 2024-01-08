import { useState } from 'react';

import { Answer23 as answer, Data23Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade6Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-3';

import type { Data23QuizProps as QuizProps } from '../../Type/Type6';

import img from '../../Image/6-2-3.png';

const ThirdGrade23Exercise: React.FC = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(6), () => new Array(6))
  );
  const key = 'third623.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade6Day2.title}
      subTitle={ThirdGrade6Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={5}>
          <Styled.ImgSize4 src={img} alt="" />
          <Styled.RowWrapBox>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1_1={item.quiz1_1}
                quiz1_2={item.quiz1_2}
                quiz2_1={item.quiz2_1}
                quiz2_2={item.quiz2_2}
                quiz3_1={item.quiz3_1}
                quiz3_2={item.quiz3_2}
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
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade23Exercise;
