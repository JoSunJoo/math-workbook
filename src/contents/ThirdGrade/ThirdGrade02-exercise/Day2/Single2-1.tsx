import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type2';

import img1 from '../../Image/2-2-1_1.png';
import img2 from '../../Image/2-2-1_2.png';

const Single21 = (props: QuizProps) => {
  const {
    id,
    imgId,
    quiz1,
    quiz2,
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;
  const imgUrl = [img1, img2];
  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[idx][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper8>
        <Styled.InputWrapper3>
          <Styled.ColGapBox gap={1.5}>
            {imgId === 0 ? (
              <Styled.ImgSize5 src={imgUrl[imgId]} alt="" />
            ) : (
              <Styled.ImgSize6 src={imgUrl[imgId]} alt="" />
            )}

            <Styled.RowBox12>
              <Styled.InputWrapper3>
                <div>{quiz1} = (</div>
                <Styled.InputBox1
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 0)}
                  value={inputValue[idx][0]}
                />
                <div>× {quiz2} ) + (</div>
                <Styled.InputBox3
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 1)}
                  value={inputValue[idx][1]}
                />
                <div>× {quiz2} ) =</div>
                <Styled.InputBox1
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 2)}
                  value={inputValue[idx][2]}
                />
              </Styled.InputWrapper3>
            </Styled.RowBox12>
          </Styled.ColGapBox>
        </Styled.InputWrapper3>
      </Styled.SingleWrapper8>
    </Styled.RowBox13>
  );
};

export default Single21;
