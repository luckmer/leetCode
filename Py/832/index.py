class Solution:
    def flipAndInvertImage(self, image: list[list[int]]) -> list[list[int]]:

        for row in image:
            row.reverse()

            for j in range(len(row)):
                if row[j] == 1:
                    row[j] = 0
                else:
                    row[j] = 1

        return image


solution = Solution()

print(solution.flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))
print(
    solution.flipAndInvertImage(
        [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
    )
)
