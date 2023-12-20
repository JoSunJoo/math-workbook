import Styled from '../../style';

import img from '../../Image/1-1-1_2.png';

const Example11 = () => {
  return (
    <Styled.ImgBox2>
      <Styled.RowBox12>
        <Styled.ImgSize9 src={img} alt="" />
        <Styled.SetCenter>
          <Styled.RowBox4>
            <div>7000 + </div>
            <Styled.InputBox1 placeholder="3000" />
            <div>= 10000</div>
          </Styled.RowBox4>
        </Styled.SetCenter>
      </Styled.RowBox12>
    </Styled.ImgBox2>
  );
};

export default Example11;
