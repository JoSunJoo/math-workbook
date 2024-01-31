import Styled from '../../style';

import img from '../../Image/3-3-1.png';

const Example31 = () => {
  return (
    <Styled.ImgBox2>
      <Styled.ColGapBox gap={2}>
        <Styled.ImgSize4 src={img} />
        <Styled.MakeWidth w={44}>
          <Styled.TextBox4>
            <div>
              • 나누는 방법은 다르지만 한 사람이 먹는 빵의 양은 똑같습니다.
            </div>
            <Styled.TextBox4>
              한 사람이 먹는 빵의 양을 분수로 나타내면
              <Styled.MarginBox left={0.5} right={0.3}>
                <Styled.MakeWidth w={0.6}>
                  <Styled.ColGapBox>
                    <Styled.FractUnderLine>
                      <Styled.TextBox3>2</Styled.TextBox3>
                    </Styled.FractUnderLine>
                    <Styled.FractUnderNum>
                      <Styled.TextBox3>3</Styled.TextBox3>
                    </Styled.FractUnderNum>
                  </Styled.ColGapBox>
                </Styled.MakeWidth>
              </Styled.MarginBox>
              입니다.
            </Styled.TextBox4>
            <Styled.TextBox4>
              이와 같이 분수는 나머지가 없도록
              <Styled.RedSpan2>분자를 분모로 똑같이 나눈 몫</Styled.RedSpan2>
              이라는 의미가 있습니다.
            </Styled.TextBox4>
          </Styled.TextBox4>
        </Styled.MakeWidth>
      </Styled.ColGapBox>
    </Styled.ImgBox2>
  );
};

export default Example31;
