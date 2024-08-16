function isEmpty(obj) {
  // Check if the given object is null or undefined
  if (obj == null) {
    return true;
  }

  // Check if the object has any own enumerable properties
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}
