const StarMaker = (n) => {
  let NumofBlank = 0;
  let blank = "";
  let Star = "";
  let line = "";
  for (i = 1; i < n + 1; i++) {
    NumofBlank = n - i;
    for (j = 0; j < NumofBlank + 1; j++) {
      blank += " ";
    }
    Star += "*";
    line = blank + Star;
    console.log(line);
    blank = "";
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write any number under 100.\n ->", function (num) {
  let NumofStar = Number(num);
  StarMaker(NumofStar);
  rl.close();
});
