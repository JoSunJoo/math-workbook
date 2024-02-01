import { useState } from 'react';

import { Answer23 as answer } from '../../Data/Book3';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleOrAnswer as handleAnswer } from '../../utils/handleOrAnswer';
import { FourthGrade3Day2 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single2-3';

import img from '../../Image/3-2-3_1.png';
const FourthGrade23Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(6), () => new Array(2))
  );
  const key = 'fourth323.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });
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
                correct={confirmType ? null : correct[idx]}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          if (confirmType === true) {
            handleAnswer({
              type: 2,
              key,
              inputValue,
              answer,
              setCorrect,
            });
          }
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={2} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade23Exercise;
