class Solution {
  UncommonChars(str1, str2) {
    let ans = "";
    let used = new Array(26).fill(false);

    const processString = (source, target) => {
      for (let i = 0; i < source.length; i++) {
        let found = false;

        for (let j = 0; j < target.length; j++) {
          if (source[i] === target[j]) {
            found = true;
            break;
          }
        }

        if (!found && !used[source.charCodeAt(i) - 97]) {
          used[source.charCodeAt(i) - 97] = true;
          ans += source[i];
        }
      }
    };

    processString(str1, str2);
    processString(str2, str1);

    ans = ans.split("").sort().join("");

    return ans.length === 0 ? "-1" : ans;
  }
}

const a = new Solution();

console.log(a.UncommonChars("geeksforgeeks", "geeksquiz"));
// do not push it !
