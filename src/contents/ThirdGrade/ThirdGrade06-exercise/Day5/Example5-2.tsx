import Styled from '../../style';
import {
  handleDeno,
  handleExamFrac,
  handleMune,
} from '../../utils/handleExample';

const Example52 = () => {
  const three = handleMune(3);
  const five = handleDeno(5); //분모
  const frac = handleExamFrac(3, 5);
  return (
    <Styled.ExampleBox7>
      <Styled.ColGapBox gap={0.4}>
        <Styled.TextBox2>
          승희네 반 학생의 {frac}
          <div>이 18명일 때</div>
          <Styled.RowBox13Upper>18 ÷ {three} = 6</Styled.RowBox13Upper>
        </Styled.TextBox2>
        <Styled.TextBox2>
          전체 승희네 반 학생은
          <Styled.InputBox6 placeholder="30" />
          <div>명입니다.</div>
          <Styled.RowBox13Lower>6 × {five} = 30</Styled.RowBox13Lower>
        </Styled.TextBox2>
      </Styled.ColGapBox>
    </Styled.ExampleBox7>
  );
};

export default Example52;
