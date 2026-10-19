class Solution:
    def targetIndices(self, nums: list[int], target: int) -> list[int]:
        nums.sort()

        result = []
        for i in range(len(nums)):
            if nums[i] == target:
                result.append(i)

        return result


solution = Solution()


print(solution.targetIndices([1, 2, 5, 2, 3], 2))
print(solution.targetIndices([1, 2, 5, 2, 3], 3))
print(solution.targetIndices([1, 2, 5, 2, 3], 5))
