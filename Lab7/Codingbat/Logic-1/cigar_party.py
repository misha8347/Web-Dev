def cigar_party(cigars, is_weekend):
  if(is_weekend):
    return cigars >= 40
  else:
    return cigars <= 60 and cigars >= 40
