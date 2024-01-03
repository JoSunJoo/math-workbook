import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer41 as answer } from '../../Data/Book2';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade2Day4 as Day } from '../../utils/handleTitle';
import IdSymbol from '../../utils/IdSymbol';
import SingleQuiz from './Single4-1';

const FourthGrade41Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(1), () => new Array(25))
  );
  const key = 'fourth241.answer';
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
        <Styled.RowBox5>
          <IdSymbol id={'★'} correct={correct[0]} />
          <SingleQuiz
            toggle={toggle}
            setToggle={setToggle}
            inputValue={inputValue}
            setInputValue={setInputValue}
            correct={correct}
          />
        </Styled.RowBox5>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
          console.log('answer');
          console.log(answer);
          console.log('inputValue');
          console.log(inputValue);
        }}
      >
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
