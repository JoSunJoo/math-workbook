import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade3Day33 } from '../../utils/handleTitle';
import FifthGrade09 from './FifthGrade09';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day33.title}
      subTitle={FifthGrade3Day33.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade09 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
