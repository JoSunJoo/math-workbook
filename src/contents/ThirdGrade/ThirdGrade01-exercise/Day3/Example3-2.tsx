import Styled from '../../style';

const Example32 = () => {
  return (
    <Styled.ExampleBox4>
      <Styled.InputWrapper3>
        <div>322</div>
        <div>+</div>
        <div>547</div>
        <div>
          <Styled.ExampleExplain1>
            <div>300+500</div>
            <div>22+47</div>
          </Styled.ExampleExplain1>
          <Styled.InputWrapper3>
            <div>=</div>
            <Styled.InputBox1 placeholder="800" disabled></Styled.InputBox1>
            <div>+</div>
            <Styled.InputBox1 placeholder="69" disabled></Styled.InputBox1>
            <div>=</div>
            <Styled.InputBox1></Styled.InputBox1>
          </Styled.InputWrapper3>
        </div>
      </Styled.InputWrapper3>
    </Styled.ExampleBox4>
  );
};

export default Example32;
