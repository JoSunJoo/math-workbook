import Styled from '../../style';

import img from '../../Image/4-2-1_1.png';

const Example21 = () => {
  return (
    <Styled.ExampleBox9>
      <Styled.ColGapBox gap={1.5}>
        <Styled.ImgSize6 src={img} alt="" />
        <Styled.RowBox7>
          <div>46 ÷ 2 = </div>
          <Styled.InputBox1 placeholder="23" />
        </Styled.RowBox7>
      </Styled.ColGapBox>
    </Styled.ExampleBox9>
  );
};

export default Example21;
