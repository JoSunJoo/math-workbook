import Styled from '../../style';

import type { Data52QuizProps as QuizProps } from '../../Type/Type3';

const Single21 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, quiz4, sign1 } = props;
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox3>{id}</Styled.IdNumBox3>
      <Styled.SetCenter>
        <Styled.ColGapBox3 gap={1}>
          <Styled.ColGapBox3>
            <Styled.RowBox>
              <Styled.RowBox>
                <Styled.NumBox2 color="rgba(98, 151, 255, 0.4)">
                  {quiz1}
                </Styled.NumBox2>
                <Styled.NumBox2 color="rgba(98, 151, 255, 0.4)">
                  {quiz2}
                </Styled.NumBox2>
              </Styled.RowBox>
              <Styled.NumBox2Input noBottom={true}></Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox2 color="rgba(98, 151, 255, 0.4)">
                {quiz3}
              </Styled.NumBox2>
              <Styled.NumBox2 color="rgba(98, 151, 255, 0.4)">
                {quiz4}
              </Styled.NumBox2>
              <Styled.NumBox2Input></Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox2Input noRight={true}></Styled.NumBox2Input>
              <Styled.NumBox2Input></Styled.NumBox2Input>
            </Styled.RowBox>
          </Styled.ColGapBox3>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single21;
