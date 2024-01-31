import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data13QuizProps2 as QuizProps } from '../../Type/Type3';

const Single13 = (props: QuizProps) => {
  const {
    id,
    size,
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

  const handleSize = () => {
    switch (size) {
      case 1:
        return <Styled.HandleImgSize src={imgArray[imgId]} size={7} />;

      case 2:
        return <Styled.HandleImgSize src={imgArray[imgId]} size={6} />;

      case 3:
        return <Styled.HandleImgSize src={imgArray[imgId]} size={4} />;

      case 4:
        return <Styled.HandleImgSize src={imgArray[imgId]} size={3} />;

      default:
        break;
    }
  };

  return (
    <Styled.RowBox5>
      <IdSymbol id={id} correct={correct} />
      <Styled.FixedWrapper>
        <Styled.RowBox12>
          {handleSize()}
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox8
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
                value={inputValue[idx][0]}
              />
            </Styled.FractUnderLine>
            <Styled.InputBox8
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 1)}
              value={inputValue[idx][1]}
            />
          </Styled.ColGapBox>
        </Styled.RowBox12>
      </Styled.FixedWrapper>
    </Styled.RowBox5>
  );
};

export default Single13;
