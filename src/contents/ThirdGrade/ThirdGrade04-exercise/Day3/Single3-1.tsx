import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as Props } from '../../Type/Type1';

const Single31 = (props: Props) => {
  const {
    id,
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
    <Styled.DivSingleWrapper3>
      <IdSymbol id={id} correct={correct} />
      <Styled.DivWrapper3>
        <Styled.DivLeftCircle></Styled.DivLeftCircle>
        <Styled.DivLeftNum>{quiz2}</Styled.DivLeftNum>
        <Styled.DivTopInputWrapper>
          <Styled.InputBox3
            maxLength={1}
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
            value={inputValue[idx][0]}
          />
          <Styled.InputBox3
            maxLength={1}
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 1)}
            value={inputValue[idx][1]}
          />
        </Styled.DivTopInputWrapper>
        <Styled.DivCenterNum3>{quiz1}</Styled.DivCenterNum3>
        <Styled.DashedOrNotBoxWrapper>
          <Styled.RowBox>
            <Styled.DashedOrNotBox
              maxLength={1}
              top={false}
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 2)}
              value={inputValue[idx][2]}
            />
            <Styled.DashedOrNotBox
              maxLength={1}
              right={true}
              top={false}
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 3)}
              value={inputValue[idx][3]}
            />
          </Styled.RowBox>
          <Styled.RowBox>
            <Styled.DashedOrNotBox
              maxLength={1}
              bottom={true}
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 4)}
              value={inputValue[idx][4]}
            />
            <Styled.DashedOrNotBox
              maxLength={1}
              right={true}
              bottom={true}
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 5)}
              value={inputValue[idx][5]}
            />
          </Styled.RowBox>
          <Styled.RowBox>
            <Styled.DashedOrNotBox
              maxLength={1}
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 6)}
              value={inputValue[idx][6]}
            />
            <Styled.DashedOrNotBox
              maxLength={1}
              right={true}
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 7)}
              value={inputValue[idx][7]}
            />
          </Styled.RowBox>
          <Styled.RowBox>
            <Styled.DashedOrNotBoxEnd
              maxLength={1}
              isLeft={true}
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 8)}
              value={inputValue[idx][8]}
            />
            <Styled.DashedOrNotBoxEnd
              maxLength={1}
              isLeft={false}
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 9)}
              value={inputValue[idx][9]}
            />
          </Styled.RowBox>
        </Styled.DashedOrNotBoxWrapper>
      </Styled.DivWrapper3>
    </Styled.DivSingleWrapper3>
  );
};

export default Single31;
