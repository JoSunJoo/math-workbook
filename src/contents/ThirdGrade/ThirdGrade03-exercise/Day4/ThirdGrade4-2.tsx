import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer42 as answer, Data42Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubBlank, ThirdGrade3Day4 } from '../../utils/handleTitle';
import SingleQuiz from './Single4-1';

import type { Data12QuizProps } from '../../Type/Type1';

const ThirdGrade41Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(12), () => new Array(5))
  );
  const key = 'third342.answer';
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
    <DayLayout title={ThirdGrade3Day4.title} subTitle={SubBlank}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.RowWrapBox>
            {QuizData.map((item: Data12QuizProps, idx) => (
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
                correct={correct[idx]}
              />
            ))}
          </Styled.RowWrapBox>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({ key, inputValue, answer, setScore, setCorrect });
          setToggle(!toggle);
          setConfirmType(false);
        }}
      >
        <ConfirmBtn type={confirmType} day={4} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade41Exercise;
