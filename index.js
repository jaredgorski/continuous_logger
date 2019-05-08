console.log('starting...');

let count = 0;
let linesLimit = 20000;
const throttle = 3000;

function continuousLogger() {
  if (count < linesLimit) {
    console.log('logging line # ' + count);
    count++;
    setTimeout(() => {
      continuousLogger()
    }, throttle);
  } else {
    console.log('finished');
  }
}

continuousLogger();
