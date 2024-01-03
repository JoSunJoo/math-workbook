import { postKeyValue } from '@elice/extcontent-apis';

// export const postDataUtil = async (key: any, value: any) => {
//   const data = {
//     key: key,
//     value: value,
//   };
//   try {
//     const response = await postKeyValue(data);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const postDataUtil = async (key: any, value: any) => {
  try {
    const response = await postKeyValue({ key, value });
    console.log('Success:', response);
  } catch (error) {
    console.error('Error:', error);
  }
};
