import { useState } from 'react';

import {
  Answer52 as answer,
  Data52Quiz1 as QuizData1,
  Data52Quiz2 as QuizData2,
} from '../../Data/Book5';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade5Day5 } from '../../utils/handleTitle';
import SingleQuiz from './Single5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type5';

import img from '../../Image/questionMark.png';

const ThirdGrade52Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(3))
  );
  const key = 'third552.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout
      title={ThirdGrade5Day5.title}
      subTitle={ThirdGrade5Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.RowBox7>
            <Styled.ImgSize10 src={img} alt="" />
            민규네 학교 남학생 96명이 8명씩 조를 이루어 체육 대회를 하려고
            합니다. 물음에 답하세요.
          </Styled.RowBox7>
          {QuizData1.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              sign1={item.sign1}
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
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.RowBox7>
            <Styled.ImgSize10 src={img} alt="" />
            탁구공 144개를 9개의 상자에 똑같이 나누어 담으려고 합니다. 물음에
            답하세요.
          </Styled.RowBox7>
          {QuizData2.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              sign1={item.sign1}
              idx={idx + 2}
              toggle={toggle}
              setToggle={setToggle}
              inputValue={inputValue}
              setInputValue={setInputValue}
              correct={correct[idx + 2]}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          if (confirmType)
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

export default ThirdGrade52Exercise;
