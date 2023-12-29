import Styled from '../../style';

import arrow from '../../Image/1-3-3.png';
import img from '../../Image/1-3-3_1.png';
import cir from '../../Image/1-3-3_circle.png';
import tri from '../../Image/1-3-3_triangle.png';

const Example33 = () => {
  return (
    <Styled.RowBox13>
      <div />
      <Styled.ColGapBox2 gap={1.5}>
        <Styled.ImgSize15 src={img} alt="" />
        <Styled.SetCenter>
          <Styled.ColGapBox gap={1}>
            <Styled.RowBox5>
              <Styled.ImgSize10 src={tri} alt="" />
              <Styled.MiddleInput2 placeholder="20000" disabled />
            </Styled.RowBox5>
            <Styled.RowBox5>
              <Styled.ImgSize10 src={cir} alt="" />
              <Styled.MiddleInput2 placeholder="200" disabled />
            </Styled.RowBox5>
          </Styled.ColGapBox>
          <Styled.SetBox1>
            <Styled.ImgSize15 src={arrow} alt="" />
            <Styled.RowBox4>
              <Styled.InputBox1 placeholder="100" disabled />
              <div>배</div>
            </Styled.RowBox4>
          </Styled.SetBox1>
        </Styled.SetCenter>
      </Styled.ColGapBox2>
    </Styled.RowBox13>
  );
};

export default Example33;
