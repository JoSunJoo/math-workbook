import Styled from '../../style';
import {
  handleDeno,
  handleEmptyBox,
  handleExamFrac,
  handleMune,
} from '../../utils/handleExample';

const Example32 = () => {
  const three = handleMune(3); //분자
  const nine = handleDeno(9); //분모
  const frac = handleExamFrac(3, 9);
  return (
    <Styled.ExampleBox5>
      <Styled.RowBox12>
        <Styled.ColGapBox gap={1}>
          <Styled.TextBox2>
            {frac}
            <div>이 15이면 전체는</div>
            <Styled.InputBox6 placeholder="45" />
            <div>입니다.</div>
          </Styled.TextBox2>
          <Styled.ColGapBox gap={0.3}>
            <Styled.RowBox7>
              <Styled.TextBox2>분자: </Styled.TextBox2>
              <Styled.CountExample>
                <div className="color">5</div>
                <div className="color">5</div>
                <div className="last-color">5</div>
                <div />
                {handleEmptyBox()}
              </Styled.CountExample>
            </Styled.RowBox7>
            <Styled.RowBox7>
              <Styled.TextBox2>분모: </Styled.TextBox2>
              <Styled.CountExample>
                <div className="color">5</div>
                <div className="color">5</div>
                <div className="color">5</div>
                <div className="color">5</div>
                <div className="color">5</div>
                <div className="color">5</div>
                <div className="color">5</div>
                <div className="color">5</div>
                <div className="last-color">5</div>
                <div />
              </Styled.CountExample>
            </Styled.RowBox7>
          </Styled.ColGapBox>
        </Styled.ColGapBox>
        <Styled.ColGapBox gap={0.2}>
          <Styled.TextBox3>
            <Styled.BoldSpan>① </Styled.BoldSpan>전체 {nine}칸을 그리고
            {three}칸을 색칠합니다.(
            {frac})
          </Styled.TextBox3>
          <Styled.TextBox3>
            <Styled.BoldSpan>② </Styled.BoldSpan>
            {three}칸이 15이므로 1칸은 5입니다. (15 ÷ {three} = 5)
          </Styled.TextBox3>
          <Styled.TextBox3>
            <Styled.BoldSpan>③ </Styled.BoldSpan> 1칸이 5이므로 전체
            {nine}칸은 45입니다. (5 × {nine} = 45)
          </Styled.TextBox3>
        </Styled.ColGapBox>
      </Styled.RowBox12>
    </Styled.ExampleBox5>
  );
};

export default Example32;
