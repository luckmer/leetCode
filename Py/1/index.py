from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = []

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    res.append(i)
                    res.append(j)

        return res


solution = Solution()

print(solution.twoSum([2, 7, 11, 15], 9))
print(solution.twoSum([3, 2, 4], 6))
print(solution.twoSum([3, 3], 6))
