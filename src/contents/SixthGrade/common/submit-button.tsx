import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

interface SubmitButtonProps {
  onClick: () => void;
  mycolor: string;
  isSolved: boolean;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { onClick, mycolor, isSolved } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginY: '2rem',
      }}
    >
      <CustomButton onClick={onClick} mycolor={mycolor} isSolved={isSolved}>
        {isSolved ? '다시풀기' : '제출하기'}
      </CustomButton>
    </Box>
  );
}

interface CustomButtonProps {
  isSolved?: boolean;
  mycolor?: string;
}

const CustomButton = styled(Button)<CustomButtonProps>`
  /* layout */
  display: flex;
  padding: 0.8rem 2.2rem;
  margin: 1rem;
  gap: 0.625rem;
  flex-shrink: 0;

  /* style */
  border-radius: 0.625rem;
  background: ${props => (props.isSolved ? '#ffff' : props.mycolor)};
  border: 4px solid ${props => props.mycolor};

  /* font */
  color: ${props => (props.isSolved ? props.mycolor : '#ffff')};
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 1.875rem */
  letter-spacing: 0rem;

  &:hover {
    border-radius: 0.625rem;
    background: ${props => (props.isSolved ? '#fffff' : props.mycolor)};
    border: 4px solid ${props => props.mycolor};
    color: ${props => (props.isSolved ? props.mycolor : '#fffff')};
  }
`;
