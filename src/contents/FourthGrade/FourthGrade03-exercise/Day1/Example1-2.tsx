import Styled from '../../style';

import img from '../../Image/3-1-2_1.png';

const Example12 = () => {
  return (
    <Styled.ExampleBox8>
      <Styled.RowBox12>
        <Styled.ImgSize6 src={img} />
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <Styled.InputBox3 placeholder="2" />
          </Styled.FractUnderLine>
          <Styled.InputBox3 placeholder="6" />
        </Styled.ColGapBox>
      </Styled.RowBox12>
    </Styled.ExampleBox8>
  );
};

export default Example12;
