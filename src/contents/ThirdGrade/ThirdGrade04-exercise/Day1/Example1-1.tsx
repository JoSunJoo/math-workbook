import Styled from '../../style';

import img from '../../Image/4-1-1_1.png';

const Example11 = () => {
  return (
    <Styled.FitExampleBox>
      <Styled.SetCenter>
        <Styled.ColGapBox gap={1}>
          <Styled.ImgSize3 src={img} />
          <Styled.RowBox7>
            <div>60 ÷ 3 = </div>
            <Styled.InputBox1 placeholder="20" disabled />
          </Styled.RowBox7>
        </Styled.ColGapBox>
      </Styled.SetCenter>
    </Styled.FitExampleBox>
  );
};

export default Example11;
