var a = [13,7,2,9,1,8,3,12,2];
console.log('> arr at start:',a);

var start = new Date();
var count = 0;
for (var i = 0 ; i < a.length ; i++) {
  for(var j = i+1; j < a.length; j++) {
    if(a[i] > a[j]) {
      var tmp = a[j];
      a[j] = a[i];
      a[i] = tmp;
    }
    console.log(++count+'>','i:',i,'j:',j,'a:',a);
  }
}
var finish = new Date();

console.log('>>>> that took',
            finish.getUTCMilliseconds()
            - start.getUTCMilliseconds(),
            'ms');
