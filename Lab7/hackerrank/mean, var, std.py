# Enter your code here. Read input from STDIN. Print output to STDOUT
import numpy as np

n, m = input().split()
temp = []
for x in range(int(n)):
    arr = input().split('\n')
    cur = list(map(int, arr[0].split()))
    temp.append(cur)

my_arr = np.array(temp)

print(np.mean(my_arr, axis=1))
print(np.var(my_arr, axis=0))
print(round(np.std(my_arr), 11))