import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade3Day31 } from '../../utils/handleTitle';
import FifthGrade07 from './FifthGrade07';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day31.title}
      subTitle={FifthGrade3Day31.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade07 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
