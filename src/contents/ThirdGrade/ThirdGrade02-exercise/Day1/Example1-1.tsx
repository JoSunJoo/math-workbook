import Styled from '../../style';

import img from '../../Image/2-1-1_1.png';

const Example11 = () => {
  return (
    <Styled.ExampleBox9>
      <Styled.ColGapBox gap={1.5}>
        <Styled.ImgSize3 src={img} alt="" />
        <Styled.ColGapBox2>
          <Styled.InputWrapper3>
            <div>10 + 10 + 10 + 10 + 10 =</div>
            <Styled.InputBox1 placeholder="50" />
          </Styled.InputWrapper3>
          <Styled.RowBox3>
            <Styled.SetCenter>
              <Styled.InputWrapper3>
                <div>10 ×</div>
                <Styled.InputBox1 placeholder="5" />
                <div>=</div>
                <Styled.InputBox1 placeholder="50" />
              </Styled.InputWrapper3>
            </Styled.SetCenter>
          </Styled.RowBox3>
        </Styled.ColGapBox2>
      </Styled.ColGapBox>
    </Styled.ExampleBox9>
  );
};

export default Example11;
