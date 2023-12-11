import Styled from '../../style';

import type { Data32QuizProps as Props } from '../../Type/Type4';

const Single32 = (props: Props) => {
  const { id, type, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      {type === 1 ? (
        <Styled.InputWrapper1>
          <div>{quiz1}</div>
          <div> × </div>
          <Styled.InputBox2 />
          <div>=</div>
          <div>{quiz2}</div>
        </Styled.InputWrapper1>
      ) : (
        <Styled.InputWrapper1>
          <Styled.InputBox2 />
          <div> × </div>
          <div>{quiz1}</div>
          <div>=</div>
          <div>{quiz2}</div>
        </Styled.InputWrapper1>
      )}
    </Styled.SingleWrapper2>
  );
};

export default Single32;
