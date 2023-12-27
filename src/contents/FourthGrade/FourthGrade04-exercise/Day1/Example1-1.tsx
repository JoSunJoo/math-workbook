import Styled from '../../style';

const Example11 = () => {
  return (
    <Styled.ImgBox2>
      <Styled.TextSize>
        <Styled.ColGapBox3 gap={1}>
          <div>
            • 0.1은 1을 10으로 나눈 것 중 1이고, 0.01은 1을 100으로 나눈 것 중
            1이며
          </div>
          <Styled.MarginBox left={1}>
            0.001은 1을 1000으로 나눈 것 중 1입니다.
          </Styled.MarginBox>
        </Styled.ColGapBox3>
      </Styled.TextSize>
    </Styled.ImgBox2>
  );
};

export default Example11;
