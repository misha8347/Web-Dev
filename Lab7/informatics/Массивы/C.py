n = int(input())

arr = list(map(int, input().split()))

cnt = 0
for x in arr:
    if(x > 0):
        cnt += 1

print(cnt)