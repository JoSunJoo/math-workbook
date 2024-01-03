import Styled from '../../style';

import img from '../../Image/3-5-3.png';

const Example53 = () => {
  return (
    <>
      <Styled.RowBox5>
        <Styled.MarginBox left={2}>
          <Styled.ColGapBox gap={1}>
            <Styled.HandleImgSize src={img} size={2} />
            <Styled.GapRowBox2 gap={1}>
              <Styled.GapRowBox2 gap={0.5}>
                <div>3</div>
                <Styled.ColGapBox gap={0.1}>
                  <Styled.FractUnderLine>
                    <div>1</div>
                  </Styled.FractUnderLine>
                  <Styled.FitBox>2</Styled.FitBox>
                </Styled.ColGapBox>
              </Styled.GapRowBox2>
              <div>=</div>
              <Styled.ColGapBox gap={0.1}>
                <Styled.FractUnderLine>
                  <Styled.InputBox3 placeholder="7" disabled />
                </Styled.FractUnderLine>
                <Styled.InputBox3 placeholder="2" disabled />
              </Styled.ColGapBox>
            </Styled.GapRowBox2>
          </Styled.ColGapBox>
        </Styled.MarginBox>
      </Styled.RowBox5>
    </>
  );
};

export default Example53;
