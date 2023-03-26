def centered_average(nums):
  nums.sort()
  nums = nums[1:len(nums)-1]
  ans = 0
  for x in nums:
    ans += x
  return ans // len(nums)
