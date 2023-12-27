import Styled from '../../style';

import type { Data32QuizProps as Props } from '../../Type/Type4';

const Single31 = (props: Props) => {
  const { id, type, quiz1, quiz2 } = props;
  return (
    <Styled.MarginBottomBox3>
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
            <div>{quiz1}</div>
            <div> × </div>
            <Styled.InputBox2 />
            <div>{'<'} </div>
            <div>{quiz2}</div>
          </Styled.InputWrapper1>
        )}
      </Styled.SingleWrapper2>
    </Styled.MarginBottomBox3>
  );
};

export default Single31;
