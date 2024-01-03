import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Answer22 as answer, Data22Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubJustCal, ThirdGrade1Day2 } from '../../utils/handleTitle';
import SingleQuiz from './Single2-2';

import type { Data21QuizProps1 as DataProps } from '../../Type/Type1';

const ThirdGrade22Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(12), () => new Array(12))
  );
  const key = 'third122.answer';

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
    <DayLayout title={ThirdGrade1Day2.title} subTitle={SubJustCal}>
      <Styled.ColGapBox gap={0}>
        <Styled.PaddingBox2>
          <Styled.RowWrapBox3>
            {QuizData.map((item: DataProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                id2={idx}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                idx={idx}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            ))}
          </Styled.RowWrapBox3>
        </Styled.PaddingBox2>
        <div
          onClick={() => {
            handleAnswer({ key, inputValue, answer, setScore, setCorrect });
            setToggle(!toggle);
            setConfirmType(false);
          }}
        >
          <ConfirmBtn type={confirmType} day={2} />
        </div>
      </Styled.ColGapBox>
    </DayLayout>
  );
};

export default ThirdGrade22Exercise;
