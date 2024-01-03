import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type2';

import img1 from '../../Image/2-1-1_2.png';
import img2 from '../../Image/2-1-1_3.png';
import img3 from '../../Image/2-1-1_4.png';
import img4 from '../../Image/2-1-1_5.png';
import img5 from '../../Image/2-1-1_6.png';

const Single11 = (props: QuizProps) => {
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
  const imgUrl = [img1, img2, img3, img4, img5];
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
            <Styled.ImgSize3 src={imgUrl[imgId]} alt="" />
            <Styled.ColGapBox2>
              <Styled.InputWrapper3>
                <div>{quiz1}</div>
                <Styled.InputBox1
                  onChange={e => handleInput(e.target.value, 0)}
                />
              </Styled.InputWrapper3>
              <Styled.RowBox3>
                <Styled.SetCenter>
                  <Styled.InputWrapper3>
                    <div>{quiz2}</div>
                    <Styled.InputBox1
                      onChange={e => handleInput(e.target.value, 1)}
                    />
                    <div>=</div>
                    <Styled.InputBox1
                      onChange={e => handleInput(e.target.value, 2)}
                    />
                  </Styled.InputWrapper3>
                </Styled.SetCenter>
              </Styled.RowBox3>
            </Styled.ColGapBox2>
          </Styled.ColGapBox>
        </Styled.InputWrapper3>
      </Styled.SingleWrapper8>
    </Styled.RowBox13>
  );
};

export default Single11;
