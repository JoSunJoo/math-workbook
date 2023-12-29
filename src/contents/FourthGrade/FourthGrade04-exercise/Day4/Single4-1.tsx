import Styled from '../../style';

import type { Data41QuizProps as QuizProps } from '../../Type/Type4';

const Single41 = (props: QuizProps) => {
  const { id, quiz1, unit, unit2 } = props;
  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      <Styled.InputWrapper1>
        <div>{quiz1}</div>
        <div>=</div>
        <Styled.InputBox1 />
        <div>{unit}</div>
        {unit2 ? (
          <Styled.InputWrapper1>
            <div>=</div>
            <Styled.InputBox1 />
            <div>{unit2}</div>
          </Styled.InputWrapper1>
        ) : (
          <></>
        )}
      </Styled.InputWrapper1>
    </Styled.SingleWrapper2>
  );
};

export default Single41;
