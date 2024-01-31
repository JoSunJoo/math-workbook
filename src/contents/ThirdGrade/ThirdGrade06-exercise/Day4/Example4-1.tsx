import Styled from '../../style';
import { handleDeno, handleExamFrac } from '../../utils/handleExample';

const Example41 = () => {
  const one = handleDeno(1);
  const nine = handleDeno(9); //분모
  const frac = handleExamFrac(1, 9);
  return (
    <Styled.ExampleBox7>
      <Styled.ColGapBox2 gap={0.3}>
        <Styled.TextBox2>
          막대 {frac}
          <div>의 길이가 11cm이면</div>
        </Styled.TextBox2>
        <Styled.TextBox2>
          전체의 길이는
          <Styled.InputBox6 placeholder="99" disabled />
          <div>cm 입니다.</div>
        </Styled.TextBox2>
        <Styled.InnerTextBox>
          <Styled.ColGapBox>
            <Styled.SetCenter>
              전체를 {nine}로 나눈 것 중 {one}이 11cm 이므로
            </Styled.SetCenter>
            <Styled.SetCenter>
              전체 {nine}는 99cm 입니다. (11 × {nine} = 99)
            </Styled.SetCenter>
          </Styled.ColGapBox>
        </Styled.InnerTextBox>
      </Styled.ColGapBox2>
    </Styled.ExampleBox7>
  );
};

export default Example41;
