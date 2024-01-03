import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data21QuizProps2 as QuizProps } from '../../Type/Type1';

import img1 from '../../Image/1-2-1_2.png';
import img2 from '../../Image/1-2-1_3.png';
import img3 from '../../Image/1-2-1_4.png';

const Single21 = (props: QuizProps) => {
  const { id, imgId, toggle, setToggle, inputValue, setInputValue, correct } =
    props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };
  const imgArray = [img1, img2, img3];

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper8>
        <Styled.ColGapBox gap={2}>
          <Styled.ImgSize4 src={imgArray[imgId]} alt="" />
          <Styled.SetCenter>
            <Styled.PaddingBox6>
              <Styled.ColGapBox4 gap={1}>
                <Styled.BetweenBox>
                  <Styled.InputBox4
                    onChange={e => handleInput(e.target.value, 0)}
                  />
                  <div> + </div>
                  <Styled.InputBox1
                    onChange={e => handleInput(e.target.value, 1)}
                  />
                  <div> + </div>
                  <Styled.InputBox1
                    onChange={e => handleInput(e.target.value, 2)}
                  />
                  <div> + </div>
                  <Styled.InputBox1
                    onChange={e => handleInput(e.target.value, 3)}
                  />
                  <div> + </div>
                  <Styled.InputBox3
                    onChange={e => handleInput(e.target.value, 4)}
                  />
                </Styled.BetweenBox>
                <Styled.SetCenter>
                  <Styled.RowBox5>
                    <div>=</div>
                    <Styled.InputBox4
                      onChange={e => handleInput(e.target.value, 5)}
                    />
                  </Styled.RowBox5>
                </Styled.SetCenter>
              </Styled.ColGapBox4>
            </Styled.PaddingBox6>
          </Styled.SetCenter>
        </Styled.ColGapBox>
      </Styled.SingleWrapper8>
    </Styled.RowBox13>
  );
};

export default Single21;
