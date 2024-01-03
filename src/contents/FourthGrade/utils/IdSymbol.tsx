import styled from '@emotion/styled';

import correctImg from '../Image/Correct.svg';
import inCorrectImg from '../Image/inCorrect.svg';

interface Props {
  id: string;
  correct: boolean | null | undefined;
}

const IdSymbol = (props: Props) => {
  const { id, correct } = props;
  return (
    <RelativeBox>
      {id}
      {correct === true ? (
        <Correct>
          <ImgSize src={correctImg} />
        </Correct>
      ) : (
        <></>
      )}
      {correct === false ? (
        <InCorrect>
          <ImgSize src={inCorrectImg} />
        </InCorrect>
      ) : (
        <></>
      )}
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
