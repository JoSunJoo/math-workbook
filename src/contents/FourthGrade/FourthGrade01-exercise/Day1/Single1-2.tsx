import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as QuizProps } from '../../Type/Type1';

import img1 from '../../Image/1-1-2_1.png';
import img2 from '../../Image/1-1-2_2.png';
import img3 from '../../Image/1-1-2_3.png';
import img4 from '../../Image/1-1-2_4.png';
import img5 from '../../Image/1-1-2_5.png';
import img6 from '../../Image/1-1-2_6.png';

const Single12 = (props: QuizProps) => {
  const { id, imgId, toggle, setToggle, inputValue, setInputValue, correct } =
    props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };
  const imgArray = [img1, img2, img3, img4, img5, img6];

  return (
    <Styled.RowBox5>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper8>
        <Styled.SetCenter2>
          <Styled.ColGapBox gap={2}>
            <Styled.ImgSize9 src={imgArray[imgId]} alt="" />
            <Styled.InputBox4
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
            />
          </Styled.ColGapBox>
        </Styled.SetCenter2>
      </Styled.SingleWrapper8>
    </Styled.RowBox5>
  );
};

export default Single12;
