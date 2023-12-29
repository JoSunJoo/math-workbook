import Styled from '../../style';

import type { Data22QuizProps as QuizProps } from '../../Type/Type5';

const Single22 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, quiz4 } = props;
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox3>{id}</Styled.IdNumBox3>
      <Styled.SetCenter>
        <Styled.ColGapBox3 gap={1}>
          <Styled.ColGapBox3>
            <Styled.RowBox>
              <Styled.RowBox>
                <Styled.NumBox3></Styled.NumBox3>
                <Styled.NumBox3></Styled.NumBox3>
              </Styled.RowBox>
              <Styled.NumBox2Input noBottom={true}>{quiz4}</Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox3></Styled.NumBox3>
              <Styled.NumBox3></Styled.NumBox3>
              <Styled.NumBox2Input>{quiz3}</Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox2Input noRight={true}>{quiz1}</Styled.NumBox2Input>
              <Styled.NumBox2Input>{quiz2}</Styled.NumBox2Input>
            </Styled.RowBox>
          </Styled.ColGapBox3>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single22;
