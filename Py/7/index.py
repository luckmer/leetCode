import math


class Solution:
    def reverse(self, x: int) -> int:
        min = math.pow(-2, 31)
        max = math.pow(2, 31)
        is_negative = x < 0

        val = str(abs(x))
        val = val[::-1]

        a = int(val)
        response = is_negative and -1 * a or a

        if response < min or max < response:
            return 0

        return response


solution = Solution()


print(solution.reverse(123))
print(solution.reverse(-123))
print(solution.reverse(120))
print(solution.reverse(0))
