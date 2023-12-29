import Styled from '../../style';

const Example31 = () => {
  return (
    <Styled.ExampleBox8>
      <Styled.RowWrapBox4>
        <Styled.RowBox4>
          <Styled.IdNumBox2>①</Styled.IdNumBox2>
          <div>10</div>
        </Styled.RowBox4>
        <Styled.RowBox4>
          <Styled.IdNumBox2>②</Styled.IdNumBox2>
          <div>100</div>
        </Styled.RowBox4>
        <Styled.RowBox4>
          <Styled.IdNumBox2>③</Styled.IdNumBox2>
          <div>1000</div>
        </Styled.RowBox4>
        <Styled.RowBox4>
          <Styled.IdNumBox2>④</Styled.IdNumBox2>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>1</Styled.FractUnderLine>
            <Styled.FractUnderNum>10</Styled.FractUnderNum>
          </Styled.ColGapBox>
        </Styled.RowBox4>
        <Styled.RowBox4>
          <Styled.IdNumBox2>⑤</Styled.IdNumBox2>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>1</Styled.FractUnderLine>
            <Styled.FractUnderNum>100</Styled.FractUnderNum>
          </Styled.ColGapBox>
        </Styled.RowBox4>
        <Styled.RowBox4>
          <Styled.IdNumBox2>⑥</Styled.IdNumBox2>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>1</Styled.FractUnderLine>
            <Styled.FractUnderNum>1000</Styled.FractUnderNum>
          </Styled.ColGapBox>
        </Styled.RowBox4>
      </Styled.RowWrapBox4>
    </Styled.ExampleBox8>
  );
};

export default Example31;
