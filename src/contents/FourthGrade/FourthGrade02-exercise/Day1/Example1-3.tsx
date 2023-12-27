import Styled from '../../style';

const Example13 = () => {
  return (
    <Styled.ExampleBox8>
      <Styled.DivSingleWrapper2>
        <div />
        <Styled.DivWrapper2>
          <Styled.DivLeftCircle></Styled.DivLeftCircle>
          <Styled.DivLeftNum>30</Styled.DivLeftNum>
          <Styled.DivTopInputWrapper>
            <Styled.InputBox7 placeholder="3" disabled />
          </Styled.DivTopInputWrapper>
          <Styled.DivCenterNum2>
            <Styled.ColGapBox>
              <div>94</div>
              <Styled.UnderLineBox3>
                <Styled.RedSpan>90</Styled.RedSpan>
              </Styled.UnderLineBox3>
              <Styled.RedSpan>
                <Styled.FlexEndBox3>4</Styled.FlexEndBox3>
              </Styled.RedSpan>
            </Styled.ColGapBox>
          </Styled.DivCenterNum2>
        </Styled.DivWrapper2>
      </Styled.DivSingleWrapper2>
    </Styled.ExampleBox8>
  );
};

export default Example13;
