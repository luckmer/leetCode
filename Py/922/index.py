class Solution:
    def sortArrayByParityII(self, nums: list[int]) -> list[int]:
        evens = [n for n in nums if n % 2 == 0]
        odds = [n for n in nums if n % 2 == 1]
        output = []

        for i in range(len(nums)):
            if i % 2 == 0:
                output.append(evens.pop())
            else:
                output.append(odds.pop())

        return output


solution = Solution()

print(solution.sortArrayByParityII([4, 2, 5, 7]))
print(solution.sortArrayByParityII([2, 3]))
