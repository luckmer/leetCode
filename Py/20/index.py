from typing import List


class Solution:
    def isValid(self, s: str) -> bool:
        legends = {"(": "(", "{": "{", "[": "["}
        check = {"(": ")", "{": "}", "[": "]"}
        data: List[str] = []

        for word in s:
            if word in legends:
                data.append(word)
            elif not data or check[data.pop()] != word:
                return False

        return len(data) == 0


solution = Solution()


print(solution.isValid("()"))
print(solution.isValid("()[]{}"))
print(solution.isValid("(]"))
print(solution.isValid("([)]"))
print(solution.isValid("{[]}"))
