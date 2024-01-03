import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer11 as answer, Data11Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubBlank, ThirdGrade6Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-1';

import type { Data11QuizProps1 as QuizProps } from '../../Type/Type6';

import img from '../../Image/6-1-1.png';

const ThirdGrade11Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(4))
  );
  const key = 'third611.answer';
  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
          if (res !== null) {
            setInputValue(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={5}>
          <Styled.ImgSize4 src={img} />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              imgId={idx}
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

export default ThirdGrade11Exercise;
