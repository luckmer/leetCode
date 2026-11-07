class Solution:
    def generateTheString(self, n: int) -> str:
        output = ""

        for i in range(1, n + 1):
            output += i == n and i % 2 == 0 and "p" or "z"

        return output


solution = Solution()

print(solution.generateTheString(4))
print(solution.generateTheString(2))
