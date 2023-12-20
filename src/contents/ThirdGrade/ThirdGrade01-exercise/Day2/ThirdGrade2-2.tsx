import { useState } from 'react';

import { Data22Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { SubJustCal, ThirdGrade1Day2 } from '../../utils/handleTitle';
// import ExampleQuiz from './Example2-1';
import SingleQuiz from './Single2-1';

import type { Data21QuizProps1 as DataProps } from '../../Type/Type1';

const ThirdGrade22Exercise: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string[][]>([]);
  const [inputValue2, setInputValue2] = useState<string[]>([]);

  return (
    <DayLayout title={ThirdGrade1Day2.title} subTitle={SubJustCal}>
      <Styled.ColGapBox gap={0}>
        {/* <ExampleQuiz /> */}
        <Styled.PaddingBox2>
          <Styled.RowWrapBox3>
            {QuizData.map((item: DataProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                id2={idx}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                toggle={toggle}
                setToggle={setToggle}
                inputValue={inputValue}
                inputValue2={inputValue2}
                setInputValue={setInputValue}
                setInputValue2={setInputValue2}
              />
            ))}
          </Styled.RowWrapBox3>
        </Styled.PaddingBox2>
        <ConfirmBtn type={true} day={2} />
      </Styled.ColGapBox>
    </DayLayout>
  );
};

export default ThirdGrade22Exercise;
