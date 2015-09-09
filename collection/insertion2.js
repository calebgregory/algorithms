var _ = require('lodash');

var a = _.shuffle(_.range(10,19));

console.log('> arr at start:',a);

var start = new Date();
var count = 0;
for (var i = 0 ; i < a.length ; i++) {
  var j = i+1;
  while(j > 0 && a[j] < a[j-1]) {
    var tmp = a[j];
    a[j] = a[j-1];
    a[j-1] = tmp;
    console.log(++count+'>','i:',i,'j:',j,'a:',a);
    j--;
  }
}
var finish = new Date();

console.log('>>>> that took',
            finish.getUTCMilliseconds()
            - start.getUTCMilliseconds(),
            'ms');
