def close_far(a, b, c):
  if(abs(a-b) <= 1):
    return abs(a-c) >= 2 and abs(b-c) >= 2
  if(abs(a-c) <= 1):
    return abs(a-b) >= 2 and abs(b-c) >= 2
  if(abs(b-c) <= 1):
    return abs(b-a) >= 2 and abs(c-a) >= 2
  return False
