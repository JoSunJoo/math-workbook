import { useState } from 'react';

import { Answer41 as answer } from '../../Data/Book2';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade2Day4 as Day } from '../../utils/handleTitle';
import IdSymbol from '../../utils/IdSymbol';
import SingleQuiz from './Single4-1';

const FourthGrade41Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(1), () => new Array(25))
  );
  const key = 'fourth241.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.RowBox5>
          <IdSymbol id={'★'} correct={confirmType ? null : correct[0]} />
          <SingleQuiz
            toggle={toggle}
            setToggle={setToggle}
            inputValue={inputValue}
            setInputValue={setInputValue}
            singleCorrect={confirmType ? null : correct[0]}
          />
        </Styled.RowBox5>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          if (confirmType === true) {
            handleAnswer({ key, inputValue, answer, setCorrect });
          }
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade41Exercise;
