def sum67(nums):
  ans = 0
  skip = 0
  for x in nums:
    if(x == 6):
      skip = 1
    elif(x == 7 and skip == 1):
      skip = 0
    else:
      if(skip == 0):
        ans += x
    
  return ans
