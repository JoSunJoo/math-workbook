import { useState } from 'react';

import { Data33Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade2Day3 as Day, SubBlank } from '../../utils/handleTitle';
import makeAnswer from '../../utils/makeAnswer';
import SingleQuiz from '../Day2/Single2-3';

import type { Data33QuizProps as QuizProps } from '../../Type/Type2';

const FourthGrade33Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(18), () => new Array(2))
  );
  const key = 'fourth233.answer';
  const answer = makeAnswer({ type: 3, data: QuizData });
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox6>
            {QuizData.map((item: QuizProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
                correct={confirmType ? null : correct[idx]}
              />
            ))}
          </Styled.RowWrapBox6>
        </Styled.ColGapBox>
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
        <ConfirmBtn type={confirmType} day={3} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade33Exercise;
