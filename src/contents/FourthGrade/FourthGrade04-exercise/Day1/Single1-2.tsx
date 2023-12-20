import Styled from '../../style';

import type { Data12QuizProps as Props } from '../../Type/Type4';

const Single12 = (props: Props) => {
  const { id, quiz1, position } = props;
  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      <Styled.InputWrapper1>{quiz1}</Styled.InputWrapper1>
    </Styled.SingleWrapper2>
  );
};

export default Single12;
