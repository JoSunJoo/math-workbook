import { useState } from 'react';

// import { getKeyValue } from '@elice/extcontent-apis';
import { Answer11 as answer, Data11Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleAnswer } from '../../utils/handleAnswer';
import { FourthGrade1Day1 as Day } from '../../utils/handleTitle';
import ExampleQuiz from './Example1-1';
import SingleQuiz from './Single1-1';

import type { Data11QuizProps as QuizProps } from '../../Type/Type1';

const ThirdGrade11Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(1))
  );
  const key = 'fourth111.answer';

  GetData({ setInputValue, key }).catch(error => {
    console.error('Error:', error);
  });

  // (async () => {
  //   try {
  //     const savedAnswers = await getKeyValue({
  //       key: key,
  //     });
  //     if (savedAnswers) {
  //       // savedAnswers를 사용하는 코드
  //     }
  //   } catch (error) {
  //     console.error('Error loading saved answers:', error);
  //   }
  // })().catch(error => {
  //   console.error('Error:', error);
  // });

  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox5>
        <Styled.ColGapBox2 gap={5}>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              imgId={idx}
              toggle={toggle}
              setToggle={setToggle}
              inputValue={inputValue}
              setInputValue={setInputValue}
              correct={correct[idx]}
            />
          ))}
        </Styled.ColGapBox2>
      </Styled.PaddingBox5>
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

export default ThirdGrade11Exercise;
