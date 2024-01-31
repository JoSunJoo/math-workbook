import { useState } from 'react';

import { Answer12 as answer, Data12Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade3Day1 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-2';
import SingleQuiz from './Single1-1';

import type { Data12QuizProps1 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-1-2_2.png';
import img2 from '../../Image/3-1-2_3.png';
import img3 from '../../Image/3-1-2_4.png';
import img4 from '../../Image/3-1-2_5.png';
import img5 from '../../Image/3-1-2_6.png';
import img6 from '../../Image/3-1-2_7.png';
import img7 from '../../Image/3-1-2_8.png';
import img8 from '../../Image/3-1-2_9.png';

const FourthGrade12Exercise: React.FC = () => {
  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(8), () => new Array(2))
  );
  const key = 'fourth312.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox gap={4}>
          <ExampleQuiz />
          <Styled.RowWrapBox>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                imgId={idx}
                imgArray={imgArray}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={confirmType ? null : correct[idx]}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox>
      </Styled.PaddingBox5>
      <div
        onClick={() => {
          if (confirmType === true) {
            handleAnswer({ key, inputValue, answer, setCorrect });
          }
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade12Exercise;
