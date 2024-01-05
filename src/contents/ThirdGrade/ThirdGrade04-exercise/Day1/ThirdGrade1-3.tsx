import { useState } from 'react';

import { Data13Quiz as QuizData } from '../../Data/Book4';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubDiv, ThirdGrade4Day1 } from '../../utils/handleTitle';
import makeAnswer from '../../utils/makeAnswer';
import SingleQuiz from './Single1-3';

import type { Data12QuizProps } from '../../Type/Type1';

import img from '../../Image/4-1-3.png';

const ThirdGrade13Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(10), () => new Array(1))
  );
  const key = 'third413.answer';
  const answer = makeAnswer({ type: 2, data: QuizData });
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={ThirdGrade4Day1.title} subTitle={SubDiv}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.ImgSize4 src={img} alt="" />
          <Styled.RowWrapBox>
            {QuizData.map((item: Data12QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade13Exercise;
