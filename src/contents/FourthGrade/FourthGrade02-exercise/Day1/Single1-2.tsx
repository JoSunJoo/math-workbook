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
          <Styled.UnderLineBox2Input
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 1)}
            value={inputValue[idx][1]}
          />
          개의
        </Styled.RowBox>
        <Styled.RowBox>
          상자를 채우고 사탕{' '}
          <Styled.UnderLineBox2Input
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 2)}
            value={inputValue[idx][2]}
          />
          개가 남습니다.
        </Styled.RowBox>
      </Styled.ColGapBox>
      <Styled.RowBox4>
        {rightQuiz1} ÷ {rightQuiz2} =
        <Styled.InputBox3
          disabled={correct === null ? false : true}
          onChange={e => handleInput(e.target.value, 3)}
          value={inputValue[idx][3]}
        />
        ···
        <Styled.InputBox1
          disabled={correct === null ? false : true}
          onChange={e => handleInput(e.target.value, 4)}
          value={inputValue[idx][4]}
        />
      </Styled.RowBox4>
    </Styled.ColorBox3>
  );
};

export default Single12;
