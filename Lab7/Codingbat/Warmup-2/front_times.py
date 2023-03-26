def front_times(str, n):
  if(len(str) < 3):
    return n * str
  else:
    substr = str[0:3]
    return n * substr
