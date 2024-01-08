import { useState } from 'react';

import { Answer13 as answer, Data13Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleOrAnswer as handleAnswer } from '../../utils/handleOrAnswer';
import { FourthGrade3Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data13QuizProps1 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-1-3_1.png';
import img2 from '../../Image/3-1-3_2.png';
import img3 from '../../Image/3-1-3_3.png';
import img4 from '../../Image/3-1-3_4.png';
import img5 from '../../Image/3-1-3_5.png';
import img6 from '../../Image/3-1-3_6.png';
import img7 from '../../Image/3-1-3_7.png';
import img8 from '../../Image/3-1-3_8.png';

const FourthGrade13Exercise: React.FC = () => {
  const imgArray = [img2, img3, img4, img5, img6, img7, img8];
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(7), () => new Array(2))
  );
  const key = 'fourth313.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox6 gap={4}>
          <Styled.ImgSize8 src={img1} />
          <Styled.RowWrapBox12>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                size={item.size}
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
          </Styled.RowWrapBox12>
        </Styled.ColGapBox6>
      </Styled.PaddingBox5>
      <div
        onClick={() => {
          handleAnswer({
            type: 1,
            key,
            inputValue,
            answer,
            setCorrect,
          });
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade13Exercise;
