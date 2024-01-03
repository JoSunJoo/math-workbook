import Styled from '../../style';

import type { Data12QuizProps2 as QuizProps } from '../../Type/Type2';

const Single12 = (props: QuizProps) => {
  const {
    rightQuiz1,
    rightQuiz2,
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[idx][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.ColorBox3>
      <Styled.ColGapBox>
        <Styled.RowBox>
          {rightQuiz1}개의 사탕을 상자에 {rightQuiz2}개씩 담으면
          <Styled.UnderLineBox2 /> 개의
        </Styled.RowBox>
        <Styled.RowBox>
          상자를 채우고 사탕 <Styled.UnderLineBox2 /> 개가 남습니다.
        </Styled.RowBox>
      </Styled.ColGapBox>
      <Styled.RowBox4>
        {rightQuiz1} ÷ {rightQuiz2} =
        <Styled.InputBox3 onChange={e => handleInput(e.target.value, 1)} /> ···
        <Styled.InputBox1 onChange={e => handleInput(e.target.value, 2)} />
      </Styled.RowBox4>
    </Styled.ColorBox3>
  );
};

export default Single12;
