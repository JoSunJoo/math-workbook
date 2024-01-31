import { useState } from 'react';

import { Data13Quiz as QuizData } from '../../Data/Book2';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade2Day1 as Day, SubJustCal } from '../../utils/handleTitle';
import makeAnswer from '../../utils/makeAnswer';
import ExampleQuiz from './Example1-3';
import SingleQuiz from './NewSingle1-3';

import type { Data13QuizProps as QuizProps } from '../../Type/Type2';
const FourthGrade13Exercise: React.FC = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(15), () => new Array(2))
  );
  const key = 'fourth213.answer';
  const answer = makeAnswer({ type: 3, data: QuizData });
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={SubJustCal}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox8>
            <ExampleQuiz />
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
          </Styled.RowWrapBox8>
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
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade13Exercise;
