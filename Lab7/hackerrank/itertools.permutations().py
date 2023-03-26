from itertools import permutations

s1,n = input().split()
s = sorted(s1)
arr = list(permutations(s, int(n)))

for x in arr:
    str = ''
    for c in x:
        str += c
    print(str)