import { useState } from 'react';

import { Answer42 as answer, Data42Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade3Day4 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single4-2';

import type { Data42QuizProps1 as QuizProps } from '../../Type/Type3';

import img from '../../Image/3-4-2.png';

const FourthGrade42Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(7), () => new Array(3))
  );
  const key = 'fourth342.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox>
            <Styled.FitExampleBox>
              <Styled.HandleImgSize2 src={img} size={18} />
            </Styled.FitExampleBox>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                type={item.type}
                imgId={idx}
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
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade42Exercise;
