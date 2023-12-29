import styled from '@emotion/styled';

interface Props {
  width?: string;
  deg?: number;
  sign: string;
}
const SignArrow = (props: Props) => {
  const { width, deg, sign } = props;

  return (
    <Wrapper width={width} deg={deg}>
      <Line>
        <SignBox deg={deg}>{sign}</SignBox>
        <Triangle />
      </Line>
    </Wrapper>
  );
};

export default SignArrow;

const Wrapper = styled.div<{ width?: string; deg?: number }>`
  width: ${props => (props.width ? props.width : '7rem')};
  height: fit-content;
  display: flex;
  transform: ${props => (props.deg ? `rotate(${props.deg}deg)` : ' ')};
  /* rotate(90deg) */
`;
const Line = styled.div`
  position: relative;
  width: 90%;
  height: 0.7rem;
  background-color: #ffa260;
`;
const SignBox = styled.div<{ deg?: number }>`
  position: absolute;
  top: -90%;
  left: 40%;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid #c0c0c0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => (props.deg ? `rotate(-${props.deg}deg)` : ' ')};
`;
const Triangle = styled.div`
  position: absolute;
  top: -90%;
  right: -2rem;
  display: inline-block;
  border: 1rem solid transparent;
  border-left-color: #ffa260;
`;
