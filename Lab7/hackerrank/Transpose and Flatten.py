import numpy as np

n, m = input().split()
temp = []
for x in range(int(n)):
    arr = input().split("\n")
    cur = list(map(int, arr[0].split()))
    temp.append(cur)

my_arr1 = np.array(temp)
print(np.transpose(my_arr1))
print(my_arr1.flatten())