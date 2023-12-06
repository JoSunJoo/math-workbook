import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const Single53 = (props: QuizProps) => {
  const { id, quiz1 } = props;
  return (
    <Styled.RowBox2>
      <div>{id}</div>
      <Styled.TextBoxWrapper>
        <Styled.TextBox>{quiz1}</Styled.TextBox>
        <div>
          <div>식:</div>
          <div>답:</div>
        </div>
      </Styled.TextBoxWrapper>
    </Styled.RowBox2>
  );
};

export default Single53;
