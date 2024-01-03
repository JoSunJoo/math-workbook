import { useEffect, useState } from 'react';

import { Answer23 as answer } from '../../Data/Book3';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleOrAnswer as handleAnswer } from '../../utils/handleOrAnswer';
import { FourthGrade3Day2 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single2-3';

import img from '../../Image/3-2-3_1.png';
const FourthGrade23Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(6), () => new Array(2))
  );
  const idArray = ['①', '②', '③', '④', '⑤', '⑥'];
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={4}>
          <Styled.ImgSize8 src={img} />
          <Styled.RowWrapBox>
            {idArray.map((item: string, idx: number) => (
              <SingleQuiz
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ type: 2, inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade23Exercise;
