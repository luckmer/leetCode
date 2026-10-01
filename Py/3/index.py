class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        best = 0
        seen: set[str] = set()
        left = 0

        for word in s:
            while word in seen:
                seen.remove(s[left])
                left += 1

            seen.add(word)
            best = max(best, len(seen))

        return best


solution = Solution()

print(solution.lengthOfLongestSubstring("abcabcbb"))
print(solution.lengthOfLongestSubstring("bbbbb"))
print(solution.lengthOfLongestSubstring("pwwkew"))
