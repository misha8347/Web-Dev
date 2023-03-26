import numpy as np

arr = list(map(int, input().split()))
my_arr = np.reshape(arr, (3, 3))

print(my_arr)
