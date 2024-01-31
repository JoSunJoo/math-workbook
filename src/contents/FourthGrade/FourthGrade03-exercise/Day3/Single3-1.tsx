import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data31QuizProps2 as QuizProps } from '../../Type/Type3';

import breadImg from '../../Image/3-3-1_2.png';
import humanImg from '../../Image/3-3-1_3.png';

const Single31 = (props: QuizProps) => {
  const {
    id,
    bread,
    human,
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[idx][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };
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
      <IdSymbol id={id} correct={correct} />
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
              <Styled.InputBox3
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
                value={inputValue[idx][0]}
              />
            </Styled.FractUnderLine>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 1)}
              value={inputValue[idx][1]}
            />
          </Styled.ColGapBox>
        </Styled.BetweenBox>
      </Styled.FitInputWrapper4>
    </Styled.RowBox18>
  );
};

export default Single31;
