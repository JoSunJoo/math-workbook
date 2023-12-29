import Styled from '../../style';

import img from '../../Image/1-4-3.png';

const Example43 = () => {
  return (
    <Styled.FitExampleBox>
      <Styled.RowBox6>
        <Styled.RowBox13>
          <div />
          <Styled.ColorBox1>251의 10배</Styled.ColorBox1>
          <Styled.CircleInput placeholder="<" disabled />
          <Styled.ColorBox2>3500</Styled.ColorBox2>
        </Styled.RowBox13>
        <Styled.ImgSize6 src={img} alt="" />
      </Styled.RowBox6>
    </Styled.FitExampleBox>
  );
};

export default Example43;
