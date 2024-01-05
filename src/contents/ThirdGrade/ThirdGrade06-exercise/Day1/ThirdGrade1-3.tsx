import { useState } from 'react';

import { Answer13 as answer, Data13Quiz as QuizData } from '../../Data/Book6';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { ThirdGrade6Day1 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data11QuizProps1 as QuizProps } from '../../Type/Type6';

const ThirdGrade13Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(8), () => new Array(4))
  );
  const key = 'third613.answer';
  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle2}>
      <Styled.PaddingBox>
        <Styled.ColGapBox2 gap={5}>
          <Styled.RowWrapBox8>
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
          </Styled.RowWrapBox8>
        </Styled.ColGapBox2>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={1} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade13Exercise;
