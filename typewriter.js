const sentence = "whatever you";

let timer = 0;

for(const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
    //this is actually print out each character at time really fast,
    //so need a timer from 0 to 50 to 150 to 200 to run it at 50ms stops
  }, timer +=500)
}

setTimeout(() => {
  process.stdout.write('\n')
}, timer);

// setTimeout(() => {
//   console.log()
// }, timer); //or use console.log() to start a new line any way.

//setTimeout实际上是指向同一个时点-也就是当下，其实是去电脑的系统取得时间；所以在for loop
//运行完成之后,timer已经被设置到了500 * letter.length，后一个timer取的是同一个时间；
//换句话说，在同一个script里面，任何地点设置的setTimeout可以理解为从同一个now，开始；