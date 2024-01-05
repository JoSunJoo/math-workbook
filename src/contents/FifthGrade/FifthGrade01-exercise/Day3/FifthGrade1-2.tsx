import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade1Day3 } from '../../utils/handleTitle';
import FifthGrade08 from './FifthGrade08';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day3.title}
      subTitle={FifthGrade1Day3.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade08 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
