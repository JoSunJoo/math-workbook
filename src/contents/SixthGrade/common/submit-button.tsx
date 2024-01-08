import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface SubmitButtonProps {
  onClick: () => void;
  myColor: string;
  isSolved: boolean;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { onClick, myColor, isSolved } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginY: '2rem',
      }}
    >
      <CustomButton onClick={onClick} myColor={myColor} isSolved={isSolved}>
        {isSolved ? '다시풀기' : '제출하기'}
      </CustomButton>
    </Box>
  );
}

interface CustomButtonProps {
  isSolved?: boolean;
  myColor?: string;
}

const CustomButton = styled.button<CustomButtonProps>`
  /* layout */
  display: flex;
  padding: 0.8rem 2.2rem;
  margin: 1rem;
  gap: 0.625rem;
  flex-shrink: 0;

  /* style */
  border-radius: 0.625rem;
  background: ${props => (props.isSolved ? '#ffff' : props.myColor)};
  border: 4px solid ${props => props.myColor};

  /* font */
  color: ${props => (props.isSolved ? props.myColor : '#ffff')};
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 1.875rem */
  letter-spacing: 0rem;

  &:hover {
    cursor: pointer;
    border-radius: 0.625rem;
    background: ${props => (props.isSolved ? '#fffff' : props.myColor)};
    border: 4px solid ${props => props.myColor};
    color: ${props => (props.isSolved ? props.myColor : '#fffff')};
  }
`;
