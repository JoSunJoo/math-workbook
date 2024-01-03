import Styled from '../../style';

import type { Data12QuizProps2 as DataProps } from '../../Type/Type1';

import correctImg from '../../Image/Correct.svg';
import inCorrectImg from '../../Image/inCorrect.svg';

const Single12 = (props: DataProps) => {
  const {
    id,
    idx,
    quiz1,
    quiz2,
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
    <Styled.SingleWrapper>
      <Styled.RelativeBox>
        {id}
        {correct === true ? (
          <Styled.Correct>
            <Styled.ImgSize6 src={correctImg} />
          </Styled.Correct>
        ) : (
          <></>
        )}
        {correct === false ? (
          <Styled.InCorrect>
            <Styled.ImgSize6 src={inCorrectImg} />
          </Styled.InCorrect>
        ) : (
          <></>
        )}
      </Styled.RelativeBox>

      <Styled.FitInputWrapper2>
        <div>{quiz1}</div>
        <div>+</div>
        <div>{quiz2}</div>
        <div>
          <Styled.InputWrapper>
            <div>=</div>
            <Styled.InputBox1 onChange={e => handleInput(e.target.value, 0)} />
            <div>+</div>
            <Styled.InputBox1 onChange={e => handleInput(e.target.value, 1)} />
            <div>+</div>
            <Styled.InputBox1 onChange={e => handleInput(e.target.value, 2)} />
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 3)}
              />
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.FitInputWrapper2>
    </Styled.SingleWrapper>
  );
};

export default Single12;
