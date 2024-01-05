import { useState } from 'react';

import { Answer31 as answer, Data31Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade3Day3 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single3-1';

import type { Data31QuizProps as QuizProps } from '../../Type/Type3';

import img from '../../Image/3-3-1.png';

const FourthGrade31Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(6), () => new Array(2))
  );
  const key = 'fourth331.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.ImgBox3>
            <Styled.ImgSize4 src={img} />
          </Styled.ImgBox3>
          <Styled.RowWrapBox12>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                bread={item.bread}
                human={item.human}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox12>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={3} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade31Exercise;
