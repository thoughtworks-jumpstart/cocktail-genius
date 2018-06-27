export const sortByAlphabet = (array, fieldToSortBy) => {
  return array.sort((a, b) => {
    var nameA = a[fieldToSortBy]; // ignore upper and lowercase
    var nameB = b[fieldToSortBy]; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
}