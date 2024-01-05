import { getKeyValue } from '@elice/extcontent-apis';

interface Props {
  key: string;
  setInputValue: any;
}

export const GetData = async (props: Props) => {
  const { setInputValue, key } = props;
  try {
    const res = await getKeyValue({ key });
    if (res !== null) {
      setInputValue(res);
    }
  } catch (error) {
    console.error(error);
  }
};
