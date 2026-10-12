class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        result = ""
        counter = -1

        legends = {"(": "("}

        for i in range(len(s)):
            char = s[i]

            if char in legends and char:
                counter += 1
                if counter:
                    result += char
            else:
                if counter:
                    result += char
                counter -= 1

        return result


solution = Solution()


print(solution.removeOuterParentheses("(()())(())"))
print(solution.removeOuterParentheses("(()())(())(()(()))"))
print(solution.removeOuterParentheses("()()"))
