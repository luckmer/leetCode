class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        parser = [False] * len(s)
        stack: list[int] = []

        legeneds = {"(": "("}

        for i in range(len(s)):
            word = s[i]

            if word in legeneds:
                stack.append(i)
            elif len(stack) > 0:
                parser[stack.pop()] = True
                parser[i] = True

        total = 0
        response = 0

        for i in range(len(parser)):
            total = parser[i] == False and total + 1 or total
            response = max(response, total)

        return response


solution = Solution()


print(solution.minAddToMakeValid("((("))
print(solution.minAddToMakeValid("())"))
print(solution.minAddToMakeValid("(()("))
