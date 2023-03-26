def make_chocolate(small, big, goal):
  if(big * 5 < goal):
    goal -= big * 5
  else:
    goal -= (goal // 5) * 5
  
  if(goal <= small):
    return goal
  return -1
