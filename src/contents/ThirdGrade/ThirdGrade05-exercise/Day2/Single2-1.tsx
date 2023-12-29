import Styled from '../../style';

import type { Data21QuizProps as QuizProps } from '../../Type/Type5';

const Single21 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8 } = props;
  const handleComponent = (num: string) => {
    if (num === '') return <Styled.NumBox3></Styled.NumBox3>;
    else
      return (
        <Styled.NumBox2 color="rgba(98, 151, 255, 0.3)">{num}</Styled.NumBox2>
      );
  };
  return (
    <Styled.SingleWrapper8>
      <Styled.IdNumBox3>{id}</Styled.IdNumBox3>
      <Styled.SetCenter>
        <Styled.ColGapBox3 gap={1}>
          <Styled.ColGapBox3>
            <Styled.RowBox>
              <Styled.RowBox>
                {handleComponent(quiz5)}
                {handleComponent(quiz8)}
              </Styled.RowBox>
              <Styled.NumBox2Input noBottom={true}>{quiz4}</Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              {handleComponent(quiz6)}
              {handleComponent(quiz7)}
              <Styled.NumBox2Input>{quiz3}</Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox2Input noRight={true}>{quiz1}</Styled.NumBox2Input>
              <Styled.NumBox2Input>{quiz2}</Styled.NumBox2Input>
            </Styled.RowBox>
          </Styled.ColGapBox3>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper8>
  );
};

export default Single21;
