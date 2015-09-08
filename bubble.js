Array.prototype.bubblesort = function() {
  var done = false;
  while (!done) {
    done = true;
    for(var i = 0; i < this.length; i++) {
      if (arr[i-1] > arr[i]) {
        done = false;
        [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
        // alternatively,
        // done = false
        // var tmp = arr[i]
        // arr[i] = arr[i-1]
        // arr[i-1] = tmp;
      }
    }
  }
  return this;
}
