class Solution:
    def smallestRangeI(self, nums: list[int], k: int) -> int:

        maxVal = nums[0]
        minVal = nums[0]

        for val in nums:
            maxVal = max(maxVal, val)
            minVal = min(minVal, val)

        result = (maxVal - k) - (minVal + k)
        return result or 0


solution = Solution()


print(solution.smallestRangeI([1], 0))

print(solution.smallestRangeI([0, 10], 2))

print(solution.smallestRangeI([1, 3, 6], 3))
