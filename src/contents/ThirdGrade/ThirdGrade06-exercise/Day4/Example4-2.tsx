import Styled from '../../style';
import {
  handleDeno,
  handleExamFrac,
  handleMune,
} from '../../utils/handleExample';

const Example42 = () => {
  const two = handleMune(2);
  const three = handleDeno(3); //분모
  const frac = handleExamFrac(2, 3);
  return (
    <Styled.ExampleBox7>
      <Styled.ColGapBox2 gap={0.3}>
        <Styled.TextBox2>
          색 테이프 {frac}
          <div>의 길이가 8cm이면</div>
        </Styled.TextBox2>
        <Styled.TextBox2>
          전체의 길이는
          <Styled.InputBox6 placeholder="12" disabled />
          <div>cm 입니다.</div>
        </Styled.TextBox2>
        <Styled.InnerTextBox>
          <Styled.ColGapBox>
            <Styled.SetCenter>
              전체를 {three}으로 나눈 것 중 {two}가 8cm 이므로 1은 4cm입니다.
            </Styled.SetCenter>
            <Styled.SetCenter>
              (8 ÷ {two} = 4) 1이 4 cm이므로 전체 {three}은 12cm입니다. (4×
              {three}= 12)
            </Styled.SetCenter>
          </Styled.ColGapBox>
        </Styled.InnerTextBox>
      </Styled.ColGapBox2>
    </Styled.ExampleBox7>
  );
};

export default Example42;
