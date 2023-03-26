def sum13(nums):
  ans = 0
  skip = 0
  
  for i in range(len(nums)):
    if(nums[i] == 13):
      skip = 1
    else:
      if(skip == 0):
        ans += nums[i]
      else:
        skip = 0
  return ans
