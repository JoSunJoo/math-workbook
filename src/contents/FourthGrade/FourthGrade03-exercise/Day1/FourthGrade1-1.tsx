import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer11 as answer, Data11Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade3Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-1';

import type { Data11QuizProps1 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-1-1_1.png';
import img2 from '../../Image/3-1-1_2.png';
import img3 from '../../Image/3-1-1_3.png';
import img4 from '../../Image/3-1-1_4.png';
import img5 from '../../Image/3-1-1_5.png';
import img6 from '../../Image/3-1-1_6.png';
import img7 from '../../Image/3-1-1_7.png';
import img8 from '../../Image/3-1-1_8.png';
import img9 from '../../Image/3-1-1_9.png';
import img10 from '../../Image/3-1-1_10.png';
import img11 from '../../Image/3-1-1_11.png';
import img12 from '../../Image/3-1-1_12.png';

const FourthGrade11Exercise: React.FC = () => {
  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(12), () => new Array(2))
  );
  const key = 'fourth311.answer';
  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
          // console.log(res);
          if (res !== null) {
            setInputValue(res);
          }
        })
        .catch(err => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox5>
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
              correct={correct[idx]}
            />
          ))}
        </Styled.RowWrapBox>
      </Styled.PaddingBox5>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade11Exercise;
