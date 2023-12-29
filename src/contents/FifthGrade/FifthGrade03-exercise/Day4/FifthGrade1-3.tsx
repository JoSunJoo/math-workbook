import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade3Day43 } from '../../utils/handleTitle';
import FifthGrade12 from './FifthGrade12';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day43.title}
      subTitle={FifthGrade3Day43.subTitle}
    >
      <FifthGrade12 />
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
