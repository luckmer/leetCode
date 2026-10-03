class Solution:
    def longestValidParentheses(self, s: str) -> int:

        data = []
        paired = [False] * len(s)

        for i in range(len(s)):
            if s[i] == "(":
                data.append(i)
            elif s[i] == ")" and data:
                paired[data.pop()] = True
                paired[i] = True

        total = 0
        response = 0

        for i in range(len(paired)):
            total = paired[i] == True and total + 1 or 0
            response = max(response, total)

        return response


solution = Solution()


print(solution.longestValidParentheses("(()"))
print(solution.longestValidParentheses(")()())"))
print(solution.longestValidParentheses(""))
