class Solution:
    def sumCounts(self, nums: list[int]) -> int:
        sum = 0

        for i in range(len(nums)):
            s = set()

            for j in range(i, len(nums)):
                s.add(nums[j])
                sum += len(s) ** 2

        return sum


solution = Solution()


print(solution.sumCounts([1, 2, 1]))
print(solution.sumCounts([1, 1]))
