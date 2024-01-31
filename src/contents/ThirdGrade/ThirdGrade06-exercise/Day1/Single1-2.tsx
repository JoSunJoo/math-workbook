import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type6';

import img1 from '../../Image/6-1-2_1.png';
import img2 from '../../Image/6-1-2_2.png';
import img3 from '../../Image/6-1-2_3.png';
import img4 from '../../Image/6-1-2_4.png';
import img5 from '../../Image/6-1-2_5.png';
import img6 from '../../Image/6-1-2_6.png';
import img7 from '../../Image/6-1-2_7.png';
import img8 from '../../Image/6-1-2_8.png';
import img9 from '../../Image/6-1-2_9.png';
import img10 from '../../Image/6-1-2_10.png';
import img from '../../Image/blueArrow.png';

const Single12 = (props: QuizProps) => {
  const { id, imgId, toggle, setToggle, inputValue, setInputValue, correct } =
    props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  return (
    <Styled.RowBox>
      <Styled.IdNumBox4>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox4>
      <Styled.GapRowBox gap={1}>
        <Styled.HandleImgSize src={imgArray[imgId]} size={5} />
        <Styled.HandleImgSize src={img} size={1.5} />
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
              value={inputValue[imgId][0]}
            />
          </Styled.FractUnderLine>
          <Styled.InputBox3
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 1)}
            value={inputValue[imgId][1]}
          />
        </Styled.ColGapBox>
      </Styled.GapRowBox>
    </Styled.RowBox>
  );
};

export default Single12;
