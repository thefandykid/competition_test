function checkCharDuplicate(stringValue) {
    let result = '';
    for( i = 0; i < stringValue.length; i++) {
      if(result.indexOf(stringValue[i]) < 0) {
        result += stringValue[i];
      }
    }
    return result;
}

console.log(checkCharDuplicate("alagcgcdodol"));