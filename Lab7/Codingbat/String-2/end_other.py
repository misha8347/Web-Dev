def end_other(a, b):
  a = a.lower()
  b = b.lower()
  if(len(a) < len(b)):
    return(a == b[len(b)-len(a)::])
  return(b == a[len(a)-len(b)::])
    
