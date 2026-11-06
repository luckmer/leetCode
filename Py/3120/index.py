class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        count = {}

        for el in word:
            key = el.lower()

            if el.lower() in word and el.upper() in word:
                count[key] = count.get(key, 0) + 1

        return len(count)


solution = Solution()

print(solution.numberOfSpecialChars("aaAbcBC"))
print(solution.numberOfSpecialChars("abc"))
print(solution.numberOfSpecialChars("abBCab"))
