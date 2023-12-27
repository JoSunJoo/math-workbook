import Styled from '../../style';

import type { Data31QuizProps as QuizProps } from '../../Type/Type3';

import breadImg from '../../Image/3-3-1_2.png';
import humanImg from '../../Image/3-3-1_3.png';

const Single31 = (props: QuizProps) => {
  const { id, bread, human } = props;
  const handleImg = (num: number, type: string) => {
    const divs = [];
    switch (type) {
      case 'bread':
        for (let i = 1; i <= num; i++) {
          divs.push(<Styled.ImgSize10 src={breadImg} />);
        }
        return <Styled.RowWrapBox14>{divs}</Styled.RowWrapBox14>;

      case 'human':
        for (let i = 1; i <= num; i++) {
          divs.push(<Styled.HandleImgSize size={2.5} src={humanImg} />);
        }
        return <Styled.RowWrapBox13>{divs}</Styled.RowWrapBox13>;

      default:
        break;
    }
  };
  return (
    <Styled.RowBox18>
      <div>{id}</div>
      <Styled.FitInputWrapper4>
        <Styled.BetweenBox>
          <Styled.RowBox>
            <Styled.ColGapBox gap={1}>
              {handleImg(bread, 'bread')}
              {handleImg(human, 'human')}
            </Styled.ColGapBox>
          </Styled.RowBox>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.ColGapBox>
        </Styled.BetweenBox>
      </Styled.FitInputWrapper4>
    </Styled.RowBox18>
  );
};

export default Single31;
