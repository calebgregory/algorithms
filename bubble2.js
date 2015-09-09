var _ = require('lodash');

var a = _.shuffle(_.range(10,20));

var count = 0;

var start = new Date();
var done = false;
while (!done) {
  done = true;
  for (var i = 0; i < a.length; i++) {
    if(a[i]>a[i+1]) {
      done = false;
      var tmp = a[i];
      a[i] = a[i+1];
      a[i+1] = tmp;
    }
    console.log(++count+'>','i:',i,'i+1:',i+1,'a:',a)
  }
}
var finish = new Date();

console.log('>>> that took',
            finish.getUTCMilliseconds()
            - start.getUTCMilliseconds(),
           'ms')
