
exports.min = function min (arr) { 
    if (Array.isArray(arr) == false || arr.length === 0) return 0;
    arr.sort( (a, b) => a - b );
    return arr[0];  
}

exports.max = function max (arr) {
  if (Array.isArray(arr) == false || arr.length === 0) return 0;
  arr.sort( (a, b) => a - b );
  return arr[arr.length-1];  
}

exports.avg = function avg (arr) {
  if (Array.isArray(arr) == false || arr.length === 0) return 0;
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result/arr.length;
}
