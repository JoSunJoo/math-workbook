import Styled from '../../style';

import type { Data13QuizProps as Props } from '../../Type/Type4';

const Single13 = (props: Props) => {
  const { id, type, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      {type === 1 ? (
        <Styled.InputWrapper1>
          <Styled.ColGapBox>
            <Styled.FractUnderLine>{quiz1}</Styled.FractUnderLine>
            <Styled.FractUnderNum>{quiz2}</Styled.FractUnderNum>
          </Styled.ColGapBox>
          <div>=</div>
          <Styled.InputBox4 />
        </Styled.InputWrapper1>
      ) : (
        <Styled.InputWrapper1>
          <div>{quiz1}</div>
          <div>=</div>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox1 />
            </Styled.FractUnderLine>
            <Styled.FractUnderNum>
              <Styled.InputBox1 />
            </Styled.FractUnderNum>
          </Styled.ColGapBox>
        </Styled.InputWrapper1>
      )}
    </Styled.SingleWrapper2>
  );
};

export default Single13;
