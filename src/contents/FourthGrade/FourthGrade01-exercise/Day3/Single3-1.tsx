import Styled from '../../style';

import type { Data31QuizProps as QuizProps } from '../../Type/Type1';

import img1 from '../../Image/1-3-1_2.png';
import img2 from '../../Image/1-3-1_3.png';
//천원 이미지 누락

const Single31 = (props: QuizProps) => {
  const { id, type, quiz1 } = props;

  let img = '';
  if (id === '②') img = img1;
  else if (id === '④') img = img2;
  else img = '';

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      {type === 1 ? (
        <Styled.RowBox4>
          <div>{quiz1}</div>
          <Styled.InputBox4 />
        </Styled.RowBox4>
      ) : (
        <Styled.RowBox4>
          <Styled.ImgSize10 src={img} alt="" />
          <Styled.NonFlexText>이 {quiz1}장 있으면</Styled.NonFlexText>
          <Styled.InputBox4 />
          <div>원</div>
        </Styled.RowBox4>
      )}
    </Styled.RowBox13>
  );
};

export default Single31;
