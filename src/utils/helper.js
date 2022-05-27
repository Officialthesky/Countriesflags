export const reverseString = (str) => {
  let reversedString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

export default function findingLengthOfString(inputValue) {
  let reverseStringLength = inputValue.length;
  return reverseStringLength;
}
