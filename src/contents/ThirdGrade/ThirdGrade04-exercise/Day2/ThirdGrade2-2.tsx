import { useEffect, useState } from 'react';

import { Answer22 as answer, Data22Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade02-exercise/Day3/Single3-2';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade4Day2 } from '../../utils/handleTitle';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

import img from '../../Image/4-2-2.png';

const ThirdGrade22Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(3))
  );
  return (
    <DayLayout
      title={ThirdGrade4Day2.title}
      subTitle={ThirdGrade4Day2.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={3}>
          <Styled.ImgSize4 src={img} alt="" />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              quiz3={item.quiz3}
              idx={idx}
              toggle={toggle}
              setToggle={setToggle}
              inputValue={inputValue}
              setInputValue={setInputValue}
              correct={correct[idx]}
            />
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade22Exercise;
