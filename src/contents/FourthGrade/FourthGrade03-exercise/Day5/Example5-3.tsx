import Styled from '../../style';

import img from '../../Image/3-5-2.png';

const Example53 = () => {
  return (
    <>
      <Styled.RowBox5>
        <Styled.MarginBox left={2}>
          <Styled.ColGapBox gap={1}>
            <Styled.HandleImgSize src={img} size={2} />
            <Styled.GapRowBox2 gap={1}>
              <Styled.ColGapBox gap={0.1}>
                <Styled.FractUnderLine>
                  <div>11</div>
                </Styled.FractUnderLine>
                <Styled.FitBox>5</Styled.FitBox>
              </Styled.ColGapBox>
              <div>=</div>
              <Styled.GapRowBox2 gap={0.5}>
                <Styled.InputBox3 placeholder="2" />
                <Styled.ColGapBox gap={0.1}>
                  <Styled.FractUnderLine>
                    <Styled.InputBox3 placeholder="1" />
                  </Styled.FractUnderLine>
                  <Styled.InputBox3 placeholder="5" />
                </Styled.ColGapBox>
              </Styled.GapRowBox2>
            </Styled.GapRowBox2>
          </Styled.ColGapBox>
        </Styled.MarginBox>
      </Styled.RowBox5>
    </>
  );
};

export default Example53;
