class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        product = 1
        total = 0

        for ch in str(n):
            digit = int(ch)
            product *= digit
            total += digit

        return product - total


solution = Solution()

print(solution.subtractProductAndSum(234))
print(solution.subtractProductAndSum(4421))
