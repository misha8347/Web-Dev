n = int(input())

flag = 0
i = 1
while(i <= n):
    if(i == n):
        flag = 1
        break
    i = i * 2

if(flag):
    print("YES")
else:
    print("NO")