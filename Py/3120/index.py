class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        arr: list[str] = []

        for i in range(len(word)):
            el = word[i].lower()

            if el.lower() in word and el.upper() in word and el not in arr:
                arr.append(el)

        return len(arr)


solution = Solution()

print(solution.numberOfSpecialChars("aaAbcBC"))
print(solution.numberOfSpecialChars("abc"))
print(solution.numberOfSpecialChars("abBCab"))
