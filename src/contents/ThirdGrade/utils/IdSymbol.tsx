import Styled from '../style';

import correctImg from '../Image/Correct.svg';
import inCorrectImg from '../Image/inCorrect.svg';

interface Props {
  id: string;
  correct: boolean | null | undefined;
}

const IdSymbol = (props: Props) => {
  const { id, correct } = props;
  return (
    <Styled.RelativeBox>
      {id}
      {correct === true ? (
        <Styled.Correct>
          <Styled.ImgSize6 src={correctImg} />
        </Styled.Correct>
      ) : (
        <></>
      )}
      {correct === false ? (
        <Styled.InCorrect>
          <Styled.ImgSize6 src={inCorrectImg} />
        </Styled.InCorrect>
      ) : (
        <></>
      )}
    </Styled.RelativeBox>
  );
};

export default IdSymbol;
