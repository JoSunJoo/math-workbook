import styled from '@emotion/styled';

import correctImg from '../Image/Correct.svg';
import inCorrectImg from '../Image/inCorrect.svg';

interface Props {
  id: string;
  correct: boolean | null | undefined;
}

const IdSymbol = (props: Props) => {
  const { id, correct } = props;

  const handleType = (type: any) => {
    switch (type) {
      case null:
        return <></>;

      case true:
        return (
          <Correct>
            <ImgSize src={correctImg} />
          </Correct>
        );

      case false:
        return (
          <InCorrect>
            <ImgSize src={inCorrectImg} />
          </InCorrect>
        );

      default:
        return <></>;
    }
  };
  return (
    <RelativeBox>
      {id}
      {handleType(correct)}
    </RelativeBox>
  );
};

export default IdSymbol;

const RelativeBox = styled.div`
  position: relative;
`;
const Correct = styled.div`
  position: absolute;
  left: -2rem;
  top: -2.5rem;
  width: 5rem;
  height: 7rem;
  z-index: 1;
`;
const InCorrect = styled.div`
  position: absolute;
  left: -2.5rem;
  top: -3rem;
  width: 5rem;
  height: 7rem;
  z-index: 1;
`;

const ImgSize = styled.img`
  height: 7rem;
`;
