def pos_neg(a, b, negative):
  if(not negative):
    return abs(a + b) < abs(a) + abs(b)
  else:
    return a < 0 and b < 0
