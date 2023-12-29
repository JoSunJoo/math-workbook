import Styled from '../../style';
import {
  handleDeno,
  handleEmptyBox,
  handleExamFrac,
  handleMune,
} from '../../utils/handleExample';

const Example31 = () => {
  const three = handleMune(3);
  const four = handleDeno(4);
  const frac = handleExamFrac(3, 4);
  return (
    <Styled.ExampleBox5>
      <Styled.RowBox12>
        <Styled.ColGapBox gap={1}>
          <Styled.TextBox2>
            {frac}
            <div>이 6이면 전체는</div>
            <Styled.InputBox5 placeholder="8" />
            <div>입니다.</div>
          </Styled.TextBox2>
          <Styled.ColGapBox gap={0.3}>
            <Styled.RowBox7>
              <Styled.TextBox2>분자: </Styled.TextBox2>
              <Styled.CountExample>
                <div className="color">2</div>
                <div className="color">2</div>
                <div className="last-color">2</div>
                <div />
                {handleEmptyBox()}
              </Styled.CountExample>
            </Styled.RowBox7>
            <Styled.RowBox7>
              <Styled.TextBox2>분모: </Styled.TextBox2>
              <Styled.CountExample>
                <div className="color">2</div>
                <div className="color">2</div>
                <div className="color">2</div>
                <div className="last-color">2</div>
                {handleEmptyBox()}
              </Styled.CountExample>
            </Styled.RowBox7>
          </Styled.ColGapBox>
        </Styled.ColGapBox>
        <Styled.ColGapBox gap={0.2}>
          <Styled.TextBox3>
            <Styled.BoldSpan>① </Styled.BoldSpan>전체 {four}칸을 그리고
            {three}칸을 색칠합니다.(
            {frac})
          </Styled.TextBox3>
          <Styled.TextBox3>
            <Styled.BoldSpan>② </Styled.BoldSpan>
            {three}칸이 6이므로 1칸은 2입니다. (6 ÷ {three} = 2)
          </Styled.TextBox3>
          <Styled.TextBox3>
            <Styled.BoldSpan>③ </Styled.BoldSpan> 1칸이 2이므로 전체
            {four}칸은 8입니다. (2 × {four} = 8)
          </Styled.TextBox3>
        </Styled.ColGapBox>
      </Styled.RowBox12>
    </Styled.ExampleBox5>
  );
};

export default Example31;
