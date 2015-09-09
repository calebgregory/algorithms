var _ = require('lodash');

var myA = [3,7,8,5,2,1,9,5,4];
// if you're feeling frisky, redefine myA
// here, e.g.,
//    myA = _.shuffle(_.range(100));

console.log('\n0>',myA,'\n')

var count = 0;


var quicksort = a => {

  var hi = a.length-1;

  if(a.length < 2) {
    console.log('>> > > > > > > > > > > > > > > >>',a);
    return a;
  }

  var lo = 0;
  while (hi >= lo) {

    while(a[hi] < a[lo]) {

      if(hi-1 > lo) {

        print(a,hi,lo,true);

        [a[hi],a[hi-1],a[lo]] = [a[lo],a[hi],a[hi-1]];

      } else {

        print(a,hi,lo);

        [a[hi],a[lo]] = [a[lo],a[hi]];

      }

      hi--;
      print(a);

    }

    lo++;

  }

  var lower = a.slice(0,hi);
  var upper = a.slice(hi+1);

  var b = quicksort(lower)
    .concat(a[hi])
    .concat(quicksort(upper));

  console.log('> > > > > > > > > > > > > > > > >',b)
  return b;

}

var start = new Date();
quicksort(myA);
var finish = new Date();
console.log('that took',
           finish.getUTCMilliseconds()
           - start.getUTCMilliseconds(),
           'ms');

function print(a,hi,i,threeway) {
  if(threeway) {
    // when you see it printed it makes more sense
    return console.log(
    " > ,- "+a[i]+" <- "+a[hi-1]+" <- "+a[hi]+" <-,             "+a[hi]+"<"+a[i]+" ? "+(a[hi]<a[i])+"\n"+
    " > '-. lo, hi-1, hi .-\n");
  } else if(hi) {
    // same
    return console.log(
    " > ,- "+a[i]+" <- "+a[hi]+" <-,                  "+a[hi]+"<"+a[i]+" ? "+(a[hi]<a[i])+"\n"+
                      " > '-. lo, hi .-\n");
  } else {
    return console.log(++count+'>', a, '\n');
  }
}
