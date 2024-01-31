import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data31QuizProps2 as QuizProps } from '../../Type/Type2';

import img1 from '../../Image/2-4-1_1.png';
import img2 from '../../Image/2-4-1_2.png';
import img3 from '../../Image/2-4-1_3.png';

const Single41 = (props: QuizProps) => {
  const {
    id,
    imgId,
    quiz1,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;
  const imgUrl = [img1, img2, img3];
  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper5>
        <Styled.InputWrapper3>
          <Styled.ColGapBox gap={1.5}>
            <Styled.ImgSize6 src={imgUrl[imgId]} alt="" />
            <Styled.ColGapBox2>
              <Styled.InputWrapper3>
                <div>{quiz1}</div>
              </Styled.InputWrapper3>
              <Styled.SetCenter>
                <Styled.RowBox3>
                  <Styled.InputWrapper3>
                    <div>=</div>
                    <Styled.InputBox1
                      disabled={correct === null ? false : true}
                      onChange={e => handleInput(e.target.value, 0)}
                      value={inputValue[imgId][0]}
                    />
                    <div>+</div>
                    <Styled.InputBox1
                      disabled={correct === null ? false : true}
                      onChange={e => handleInput(e.target.value, 1)}
                      value={inputValue[imgId][1]}
                    />
                    <div>=</div>
                    <Styled.InputBox1
                      disabled={correct === null ? false : true}
                      onChange={e => handleInput(e.target.value, 2)}
                      value={inputValue[imgId][2]}
                    />
                  </Styled.InputWrapper3>
                </Styled.RowBox3>
              </Styled.SetCenter>
            </Styled.ColGapBox2>
          </Styled.ColGapBox>
        </Styled.InputWrapper3>
      </Styled.SingleWrapper5>
    </Styled.RowBox13>
  );
};

export default Single41;
