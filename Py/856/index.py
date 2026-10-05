class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        stack = [0]

        legends = {"(": "("}

        for i in range(len(s)):
            word = s[i]

            if word in legends:
                stack.append(0)
            else:
                val = stack.pop()
                score = val == 0 and 1 or val * 2

                stack[-1] += score

        return stack[0]


solution = Solution()

print(solution.scoreOfParentheses("()"))
print(solution.scoreOfParentheses("(())"))
print(solution.scoreOfParentheses("()()"))
