import { useEffect, useState } from 'react';

import { Data21Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade1Day2 } from '../../utils/handleTitle';
import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps1 as DataProps } from '../../Type/Type1';

const ThirdGrade21Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(8), () => new Array(12))
  );
  const [inputValue2, setInputValue2] = useState<string[]>([]);
  useEffect(() => {
    console.log('inputValue');
    console.log(inputValue);
    console.log('inputValue2');
    console.log(inputValue2);
  }, [toggle]);
  return (
    <DayLayout
      title={ThirdGrade1Day2.title}
      subTitle={ThirdGrade1Day2.subTitle}
    >
      <Styled.ColGapBox gap={3.75}>
        <ExampleQuiz />
        <Styled.RowWrapBox3>
          {QuizData.map((item: DataProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              id2={idx}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
              inputValue={inputValue}
              inputValue2={inputValue2}
              toggle={toggle}
              setToggle={setToggle}
              setInputValue={setInputValue}
              setInputValue2={setInputValue2}
            />
          ))}
        </Styled.RowWrapBox3>
        <ConfirmBtn type={true} day={2} />
      </Styled.ColGapBox>
    </DayLayout>
  );
};

export default ThirdGrade21Exercise;
