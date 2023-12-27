import Styled from '../../style';

import img from '../../Image/1-2-1_1.png';

const Example21 = () => {
  return (
    <Styled.ImgBox2>
      <Styled.ColGapBox gap={2}>
        <Styled.ImgSize4 src={img} alt="" />
        <Styled.SetCenter>
          <Styled.ColGapBox4 gap={1}>
            <Styled.BetweenBox>
              <Styled.InputBox4 placeholder="40000" />
              <div> + </div>
              <Styled.InputBox1 placeholder="3000" />
              <div> + </div>
              <Styled.InputBox1 placeholder="500" />
              <div> + </div>
              <Styled.InputBox1 placeholder="30" />
              <div> + </div>
              <Styled.InputBox3 placeholder="4" />
            </Styled.BetweenBox>
            <Styled.SetCenter>
              <Styled.RowBox5>
                <div>=</div>
                <Styled.InputBox4 placeholder="43534" />
              </Styled.RowBox5>
            </Styled.SetCenter>
          </Styled.ColGapBox4>
        </Styled.SetCenter>
      </Styled.ColGapBox>
    </Styled.ImgBox2>
  );
};

export default Example21;
