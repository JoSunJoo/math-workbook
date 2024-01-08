import { useState } from 'react';

import { Answer51 as answer, Data51Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade1Day5 as Day } from '../../utils/handleTitle';
import ExamQuiz from './Example5-1';
import SingleQuiz from './Single5-3';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/1-5-1.png';

const ThirdGrade51Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(2), () => new Array(1))
  );
  const key = 'third151.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.ImgBox1>
            <Styled.ColGapBox2 gap={2}>
              <Styled.TextSize>
                다음은 민철이와 정수네 집에서 학교까지 가는 주요 장소와 거리를
                나타낸 것입니다.
              </Styled.TextSize>
              <Styled.ImgSize1 src={img} />
            </Styled.ColGapBox2>
          </Styled.ImgBox1>
          <ExamQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              unit={item.unit}
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
        <ConfirmBtn type={confirmType} day={5} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade51Exercise;
