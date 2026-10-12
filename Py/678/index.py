class Solution:
    def checkValidString(self, s: str) -> bool:
        open = 0

        for i in range(len(s)):
            open += s[i] == ")" and -1 or 1
            if open < 0:
                return False

        close = 0
        for i in range(len(s), 0, -1):
            close += -1 if s[i - 1] == "(" else 1
            if close < 0:
                return False

        return True


solution = Solution()

print(solution.checkValidString("()"))
print(solution.checkValidString("(*)"))
print(solution.checkValidString("("))
