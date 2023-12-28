import Styled from '../../style';

import type { Data13QuizProps2 as QuizProps } from '../../Type/Type3';

const Single13 = (props: QuizProps) => {
  const { id, size, imgId, imgArray } = props;

  const handleSize = () => {
    switch (size) {
      case 1:
        return <Styled.HandleImgSize src={imgArray[imgId]} size={7} />;

      case 2:
        return <Styled.HandleImgSize src={imgArray[imgId]} size={6} />;

      case 3:
        return <Styled.HandleImgSize src={imgArray[imgId]} size={4} />;

      case 4:
        return <Styled.HandleImgSize src={imgArray[imgId]} size={3} />;

      default:
        break;
    }
  };

  return (
    <Styled.RowBox5>
      <div>{id}</div>
      <Styled.FixedWrapper>
        <Styled.RowBox12>
          {handleSize()}
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.ColGapBox>
        </Styled.RowBox12>
      </Styled.FixedWrapper>
    </Styled.RowBox5>
  );
};

export default Single13;
