import Styled from '../../style';

const Example12 = () => {
  return (
    <Styled.ImgBox2>
      <Styled.TextSize>
        <Styled.RowBox4>
          <div>• 2.703에서</div>
          <Styled.ColGapBox3 gap={0.4}>
            <div> 2는 일의 자리 숫자이고 2를 나타냅니다. </div>
            <div>7은 소수 첫째 자리 숫자이고 0.7을 나타냅니다.</div>
            <div> 0은 소수 둘째 자리 숫자입니다. </div>
            <div> 3은 소수 셋째 자리 숫자이고 0.003을 나타냅니다.</div>
          </Styled.ColGapBox3>
        </Styled.RowBox4>
      </Styled.TextSize>
    </Styled.ImgBox2>
  );
};

export default Example12;
