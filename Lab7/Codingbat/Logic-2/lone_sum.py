def lone_sum(a, b, c):
  if(a == b):
    if(a != c):
      return c
    return 0
  if(b == c):
    if(a != b):
      return a
    return 0
  if(a == c):
    if(a != b):
      return b
    return 0
  return a + b + c
