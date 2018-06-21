const caesarsCipher = (str) => {
  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let result = '';
  const len = [...str].length;

  for (let i = 0; i < len; i++) {
    result += alphabets[i + 13] !== undefined ? alphabets[Math.abs(13 + i)] : alphabets[Math.abs(13 - i)];
  }

  return result;
};

console.log(caesarsCipher('lsasasak kjsajjasja sa hahsncjsaj masjajsaj cjjsams'));
