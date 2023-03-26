n = int(input())

arr = list(map(int, input().split()))
ans = 0

for i in range(n-1):
    if((arr[i] > 0 and arr[i+1] > 0) or (arr[i] < 0 and arr[i+1] < 0)):
        ans = 1
        break

if(ans == 0):
    print("NO")
else:
    print("YES")