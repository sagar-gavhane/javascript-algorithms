process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
  stdin_input += input;
});

process.stdin.on("end", function() {
  main(stdin_input);
});

function main(input) {
  var lines = input.split("\n");
  const length = parseInt(lines[0], 10);
  const noOfPhotos = parseInt(lines[1], 10);

  for (let index = 0; index < noOfPhotos; index++) {
    const currentLine = lines[2 + index].split(" ");
    const width = parseInt(currentLine[0], 10);
    const height = parseInt(currentLine[1], 10);

    if (width >= length && height >= length) {
      if (width === height) {
        process.stdout.write("ACCEPTED\n");
      } else {
        process.stdout.write("CROP IT\n");
      }
    } else {
      process.stdout.write("UPLOAD ANOTHER\n");
    }
  }
}
