import Styled from '../../style';

// import type { Data41QuizProps as QuizProps } from '../../Type/Type4';
import img from '../../Image/2-4-1.png';

const Single41 = () => {
  return (
    // 위에서 아래, 왼쪽에서 오른쪽 순
    //미완성
    <Styled.RelativeBox2>
      <Styled.ImgSize4 src={img} />
      <Styled.AbsoluteBox1 />
      <Styled.AbsoluteBox2 />
    </Styled.RelativeBox2>
  );
};

export default Single41;
