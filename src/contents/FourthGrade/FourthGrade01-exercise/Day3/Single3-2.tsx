import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data32QuizProps2 as QuizProps } from '../../Type/Type1';

import img from '../../Image/1-3-2.png';

const Single31 = (props: QuizProps) => {
  const {
    id,
    type,
    quiz1,
    quiz2,
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
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.ColGapBox5>
        <Styled.BetweenBox>
          <Styled.InputSameBox4>{quiz1}</Styled.InputSameBox4>
          {type === 2 ? (
            <Styled.RowBox4>
              <Styled.InputBox4
                onChange={e => handleInput(e.target.value, 0)}
              />
            </Styled.RowBox4>
          ) : (
            <Styled.RowBox4>
              <Styled.InputSameBox4>{quiz2}</Styled.InputSameBox4>
            </Styled.RowBox4>
          )}
        </Styled.BetweenBox>
        <Styled.ImgSize14 src={img} alt="" />
        <Styled.MarginBottomBox3 />
        <Styled.SetCenter>
          {type === 2 ? (
            <Styled.RowBox4>
              <Styled.InputSameBox4>{quiz2}</Styled.InputSameBox4>배
            </Styled.RowBox4>
          ) : (
            <Styled.RowBox4>
              <Styled.InputBox4
                onChange={e => handleInput(e.target.value, 0)}
              />
              배
            </Styled.RowBox4>
          )}
        </Styled.SetCenter>
      </Styled.ColGapBox5>
    </Styled.RowBox13>
  );
};

export default Single31;
