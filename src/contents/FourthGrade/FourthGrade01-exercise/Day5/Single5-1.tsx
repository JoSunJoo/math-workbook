import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data51QuizProps2 as QuizProps } from '../../Type/Type1';

import img from '../../Image/1-5-1_1.png';

const Single51 = (props: QuizProps) => {
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
    <Styled.RowBox5>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper4>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.FlexEndBox2>
              <Styled.ColGapBox gap={0.2}>
                <Styled.RowBox4>
                  <Styled.InputBox4
                    disabled={correct === null ? false : true}
                    onChange={e => handleInput(e.target.value, 2)}
                  />
                  배
                </Styled.RowBox4>
                <Styled.ImgSize17 src={img} alt="" />
                <Styled.RowBox12>
                  <Styled.RowBox4>
                    <Styled.InputBox4
                      disabled={correct === null ? false : true}
                      onChange={e => handleInput(e.target.value, 0)}
                    />
                    {unit}
                  </Styled.RowBox4>
                  <Styled.RowBox4>
                    <Styled.InputBox4
                      disabled={correct === null ? false : true}
                      onChange={e => handleInput(e.target.value, 1)}
                    />
                    {unit}
                  </Styled.RowBox4>
                </Styled.RowBox12>
              </Styled.ColGapBox>
              <Styled.RowBox4>
                <Styled.TextSize>답: </Styled.TextSize>
                <Styled.InputBox4
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 3)}
                />
                <Styled.TextSize>{unit}</Styled.TextSize>
              </Styled.RowBox4>
            </Styled.FlexEndBox2>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox5>
  );
};

export default Single51;
