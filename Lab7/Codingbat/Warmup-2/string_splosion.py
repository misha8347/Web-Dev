def string_splosion(str):
  ans = ''
  for i in range(1, len(str)+1):
    ans += str[0:i]
  return ans
  
