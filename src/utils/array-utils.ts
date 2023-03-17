import _ from "lodash";

import type { NonEmptyArray } from "./models";

const shuffleArray = <T>(
  array: T[] | NonEmptyArray<T>
): T[] | NonEmptyArray<T> => {
  const newArray = _.cloneDeep(array);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
};

export { shuffleArray };
