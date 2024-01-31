import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data41QuizProps2 as QuizProps } from '../../Type/Type6';

import img from '../../Image/6-5-3.png';

const Single53 = (props: QuizProps) => {
  const {
    id,
    method,
    mune,
    deno,
    len,
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
    <Styled.SingleWrapper5>
      <Styled.IdNumBox2>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox2>

      <Styled.PaddingBox3>
        <Styled.ColGapBox gap={1}>
          {id === '①' ? (
            <Styled.MarginBottomBox2>
              <Styled.ImgSize6 src={img} alt="" />
            </Styled.MarginBottomBox2>
          ) : (
            <></>
          )}
          <Styled.TextBox4>
            <div>{method}의</div>
            <Styled.ColGapBox>
              <Styled.FractUnderLine>{mune}</Styled.FractUnderLine>
              <Styled.FractUnderNum>{deno}</Styled.FractUnderNum>
            </Styled.ColGapBox>
            <div>
              를 사용했습니다. 남은 {method}의 길이가 {len}cm 일 때
            </div>
          </Styled.TextBox4>
          <Styled.TextBox4>
            전체의 길이는
            <Styled.InputBox1
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
              value={inputValue[idx][0]}
            />
            <div>cm 입니다.</div>
          </Styled.TextBox4>
        </Styled.ColGapBox>
      </Styled.PaddingBox3>
    </Styled.SingleWrapper5>
  );
};

export default Single53;
