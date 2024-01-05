import { useState } from 'react';

import { Answer21 as answer, Data21Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubBlank, ThirdGrade3Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-1';

import type { Data12QuizProps } from '../../Type/Type1';

import img from '../../Image/3-2-1.png';

const ThirdGrade21Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(8), () => new Array(4))
  );
  const key = 'third321.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={ThirdGrade3Day2.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.ImgSize4 src={img} alt="" />
          <Styled.RowWrapBox5>
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
          </Styled.RowWrapBox5>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
