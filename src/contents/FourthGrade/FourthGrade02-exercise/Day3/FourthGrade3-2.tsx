import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer32 as answer, Data32Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade2Day3 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single3-1';

import type { Data31QuizProps1 as QuizProps } from '../../Type/Type2';

const FourthGrade32Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(9), () => new Array(1))
  );
  const key = 'fourth232.answer';
  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
          console.log(res);
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
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.GapMarginTopBox gap={3}>
          <Styled.ColGapBox gap={2}>
            <Styled.RowWrapBox6>
              {QuizData.map((item: QuizProps, idx: number) => (
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={2}
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
            </Styled.RowWrapBox6>
          </Styled.ColGapBox>
        </Styled.GapMarginTopBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={3} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade32Exercise;
