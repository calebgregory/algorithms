var _ = require('lodash');

var a = _.shuffle(_.range(10,20))

var count = 0;

for (var i = 0 ; i < a.length ; i++) {
  var min = i;

  var j = i+1;
  while( j < a.length ) {
    if(a[j] < a[min]) {
      min = j;
    }
    j++;
  }

  var tmp = a[i];
  a[i] = a[min];
  a[min] = tmp;
  console.log(++count+'>','i:',i,'a:',a);
}
