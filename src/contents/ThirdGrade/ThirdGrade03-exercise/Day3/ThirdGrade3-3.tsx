import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';

import { Data33Quiz as QuizData } from '../../Data/Book3';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade02-exercise/Day1/Single1-3';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { handleAnswer } from '../../utils/handleAnswer';
import { SubJustCal, ThirdGrade3Day3 } from '../../utils/handleTitle';
import makeAnswer from '../../utils/makeAnswer';

import type { Data12QuizProps } from '../../Type/Type1';

import img from '../../Image/3-3-3.png';

const ThirdGrade33Exercise = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(14), () => new Array(1))
  );
  const key = 'third333.answer';
  const answer = makeAnswer({ type: 1, data: QuizData });
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
    <DayLayout title={ThirdGrade3Day3.title} subTitle={SubJustCal}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.ImgSize4 src={img} />
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
        <ConfirmBtn type={confirmType} day={3} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade33Exercise;
