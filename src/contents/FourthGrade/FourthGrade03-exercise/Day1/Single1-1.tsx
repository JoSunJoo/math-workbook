import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type3';

const Single11 = (props: QuizProps) => {
  const {
    id,
    imgId,
    imgArray,
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
      <Styled.FitInputWrapper2>
        <Styled.RowBox12>
          <Styled.ImgSize6 src={imgArray[imgId]} />
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
                value={inputValue[idx][0]}
              />
            </Styled.FractUnderLine>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 1)}
              value={inputValue[idx][1]}
            />
          </Styled.ColGapBox>
        </Styled.RowBox12>
      </Styled.FitInputWrapper2>
    </Styled.RowBox5>
  );
};

export default Single11;
