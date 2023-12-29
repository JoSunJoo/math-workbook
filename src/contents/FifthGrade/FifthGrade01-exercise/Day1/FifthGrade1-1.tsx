import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade1Day1 } from '../../utils/handleTitle';
import FifthGrade01 from './FifthGrade01';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day1.title}
      subTitle={FifthGrade1Day1.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade01 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
