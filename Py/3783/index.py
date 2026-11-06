class Solution:
    def mirrorDistance(self, n: int) -> int:
        mirror = int(str(n)[::-1])

        return abs(mirror - n)


solution = Solution()


print(solution.mirrorDistance(25))
print(solution.mirrorDistance(10))
print(solution.mirrorDistance(7))
