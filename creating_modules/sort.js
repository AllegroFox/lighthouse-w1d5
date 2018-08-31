

var list = [];

function sortArray(array) {
  array.sort(function(a,b) {
  return a - b
});
  return array;
}



module.exports = {
  takeNumber: function(num) {
    list.push(num);
    return list;
  },

  sortedNumbers: function() {
    var sortedList = sortArray(list);
    console.log(sortedList);
    return sortedList;
  }
}