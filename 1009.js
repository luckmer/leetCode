 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = (num)=>parseInt(num.toString(2).split("").map((el)=> el === "0" ? "1" : "0").join("") ,2)
