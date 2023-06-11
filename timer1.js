
const argv = process.argv.slice(2);

let timer = () => {
  argv.sort();
  
  for (let num of argv) {
    if (num > 0) {
      setTimeout(() => {
        process.stdout.write('coco ');
        process.stdout.write('\x07');
      }, num * 1000);
    }
  }
};


timer();