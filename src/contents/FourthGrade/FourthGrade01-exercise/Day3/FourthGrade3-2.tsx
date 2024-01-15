import { useState } from 'react';

import { Answer32 as answer, Data32Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade1Day3 as Day, SubBlank } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-2 ';
import SingleQuiz from './Single3-2';

import type { Data32QuizProps as QuizProps } from '../../Type/Type1';

const FourthGrade32Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(8), () => new Array(1))
  );
  const key = 'fourth132.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
          <ExampleQuiz />
          <Styled.RowWrapBox11>
            {QuizData.map((item: QuizProps, idx) => (
              <Styled.MarginBottomBox2>
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={item.type}
                  quiz1={item.quiz1}
                  quiz2={item.quiz2}
                  idx={idx}
                  toggle={toggle}
                  setToggle={setToggle}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  correct={confirmType ? null : correct[idx]}
                />
              </Styled.MarginBottomBox2>
            ))}
          </Styled.RowWrapBox11>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          if (confirmType)
            handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={3} />
      </div>
    </DayLayout>
  );
};

export default FourthGrade32Exercise;
