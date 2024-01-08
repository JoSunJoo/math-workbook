import { useState } from 'react';

import { Answer33 as answer, Data33Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade1Day3 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-3';
import SingleQuiz from './Single3-3';

import type { Data33QuizProps1 as QuizProps } from '../../Type/Type1';

const FourthGrade33Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(7), () => new Array(3))
  );
  const key = 'fourth133.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={6}>
          <Styled.RowWrapBox7>
            <ExampleQuiz />
            {QuizData.map((item: QuizProps, idx: number) => (
              <Styled.MarginBottomBox2>
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  imgId={idx}
                  toggle={toggle}
                  setToggle={setToggle}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  correct={confirmType ? null : correct[idx]}
                />
              </Styled.MarginBottomBox2>
            ))}
          </Styled.RowWrapBox7>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
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

export default FourthGrade33Exercise;
