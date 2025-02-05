const reformatNumber = (number) => {
  const digits = number.replace(/\D/g, "");
  if (digits.length < 4) return digits;

  const result = [];

  const cutter = digits.length === 4 ? 2 : 3;

  const firstBath = digits.slice(0, cutter);
  result.push(firstBath);

  let last = digits.slice(cutter);

  while (last) {
    let cut = last.length === 4 ? 2 : 3;
    const bath = last.slice(0, cut);
    result.push(bath);
    last = last.slice(cut);
  }

  return result.join("-");
};

const reformatNumberV2 = (number) => {
  const digits = number.replace(/\D/g, "");
  if (digits.length < 4) return digits;

  let chunks = [];
  let remaining = digits;

  while (remaining) {
    const chunkSize = remaining.length === 4 ? 2 : 3;
    chunks.push(remaining.slice(0, chunkSize));
    remaining = remaining.slice(chunkSize);
  }

  return chunks.join("-");
};

console.log(reformatNumber("1-23-45 6")); // 123-456

console.log(reformatNumber("123 4-567")); // 123-45-67

console.log(reformatNumber("123 4-5678")); // 123-456-78

console.log(reformatNumberV2("1-23-45 6")); // 123-456

console.log(reformatNumberV2("123 4-567")); // 123-45-67

console.log(reformatNumberV2("123 4-5678")); // 123-456-78
