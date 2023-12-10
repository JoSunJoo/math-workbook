import Styled from '../../style';
import { handleEmptyBox, handleExamFrac } from '../../utils/handleExample';

const Example33 = () => {
  const frac = handleExamFrac(4, 6);
  return (
    <Styled.ExampleBox7>
      <Styled.ColGapBox gap={1}>
        <Styled.TextBox2>
          {frac}
          <div>이 15이면 전체는</div>
          <Styled.InputBox6 placeholder="30" />
          <div>입니다.</div>
        </Styled.TextBox2>
        <Styled.ColGapBox gap={0.3}>
          <Styled.RowBox7>
            <Styled.TextBox2>분자: </Styled.TextBox2>
            <Styled.CountExample>
              <div className="color">5</div>
              <div className="color">5</div>
              <div className="color">5</div>
              <div className="last-color">5</div>
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
              <div className="last-color">5</div>
              <div />
              <div />
              <div />
              <div />
            </Styled.CountExample>
          </Styled.RowBox7>
        </Styled.ColGapBox>
      </Styled.ColGapBox>
    </Styled.ExampleBox7>
  );
};

export default Example33;
