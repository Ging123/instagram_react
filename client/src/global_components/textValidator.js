function validateRegexp(text = "", regExp = "") {
  if(text.search(regExp) === -1) return true; //case match regex
  return false;
}

export {validateRegexp};