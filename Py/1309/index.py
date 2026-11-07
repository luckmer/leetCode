class Solution:
    def freqAlphabets(self, s: str) -> str:
        response = ""
        i = 0

        while i < len(s):
            if i + 2 < len(s) and s[i + 2] == "#":
                response += chr(int(s[i : i + 2]) + 96)
                i += 3
            else:
                response += chr(int(s[i]) + 96)
                i += 1

        return response


solution = Solution()


print(solution.freqAlphabets("10#11#12"))
print(solution.freqAlphabets("1326#"))
