import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer31 as answer, Data31Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade1Day3 as Day, SubBlank } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-1';
import SingleQuiz from './Single3-1';

import type { Data31QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/1-3-1.png';

const FourthGrade31Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(5), () => new Array(1))
  );
  const key = 'fourth131.answer';
  useEffect(() => {
    try {
      getKeyValue({ key })
        .then(res => {
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
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
          <Styled.ImgSize4 src={img} alt="" />
          <Styled.RowWrapBox9>
            <Styled.MarginBottomBox>
              <ExampleQuiz />
            </Styled.MarginBottomBox>
            {QuizData.map((item: QuizProps, idx) => (
              <Styled.MarginBottomBox>
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={item.type}
                  quiz1={item.quiz1}
                  idx={idx}
                  toggle={toggle}
                  setToggle={setToggle}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  correct={correct[idx]}
                />
              </Styled.MarginBottomBox>
            ))}
          </Styled.RowWrapBox9>
        </Styled.ColGapBox2>
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

export default FourthGrade31Exercise;
