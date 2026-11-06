import string


class Solution:
    def mapWordWeights(self, words: list[str], weights: list[int]) -> str:
        alphabet = {letter: i for i, letter in enumerate(string.ascii_lowercase)}
        result = ""

        for word in words:
            total = 0

            for char in word:
                index = alphabet[char]
                total += weights[index]

            result += chr(122 - (total % 26))

        return result


solution = Solution()

print(
    solution.mapWordWeights(
        ["abcd", "def", "xyz"],
        [
            5,
            3,
            12,
            14,
            1,
            2,
            3,
            2,
            10,
            6,
            6,
            9,
            7,
            8,
            7,
            10,
            8,
            9,
            6,
            9,
            9,
            8,
            3,
            7,
            7,
            2,
        ],
    )
)
print(
    solution.mapWordWeights(
        ["a", "b", "c"],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    )
)
print(
    solution.mapWordWeights(
        ["abcd"],
        [
            7,
            5,
            3,
            4,
            3,
            5,
            4,
            9,
            4,
            2,
            2,
            7,
            10,
            2,
            5,
            10,
            6,
            1,
            2,
            2,
            4,
            1,
            3,
            4,
            4,
            5,
        ],
    )
)
