import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data51QuizProps2 as QuizProps } from '../../Type/Type1';

import img from '../../Image/1-5-2.png';
const Single52 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    unit,
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
    <Styled.RowBox2>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper4>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          {id === '②' ? <Styled.ImgSize2 src={img} /> : <></>}
          <Styled.TextBoxWrapper>
            <Styled.RowBox3>
              <Styled.TextSize>식:</Styled.TextSize>
              <Styled.LongInput></Styled.LongInput>
              <Styled.TextSize>답:</Styled.TextSize>
              <Styled.ShortInput
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
                value={inputValue[idx][0]}
              />
              <Styled.TextSize>{unit}</Styled.TextSize>
            </Styled.RowBox3>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox2>
  );
};

export default Single52;
