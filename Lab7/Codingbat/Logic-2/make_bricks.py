def make_bricks(small, big, goal):
  if(big * 5 < goal):
    goal -= big * 5
  else:
    goal -= (goal // 5) * 5
  
  return goal <= small
