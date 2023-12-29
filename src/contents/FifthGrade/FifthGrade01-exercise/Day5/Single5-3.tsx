import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const Single53 = (props: QuizProps) => {
  const { id, quiz1, typing } = props;
  return (
    <Styled.RowBox2>
      <div>{id}</div>
      <Styled.TextBoxWrapper>
        <Styled.TextBox>{quiz1}</Styled.TextBox>
        <div>
          <div className="boxCenter">
            식:
            <input className="answerBox" type="text" />
          </div>
          <div className="boxCenter">
            답:
            <input className="answerBox" type="text" />
            <div>{typing}</div>
          </div>
        </div>
      </Styled.TextBoxWrapper>
    </Styled.RowBox2>
  );
};

export default Single53;
