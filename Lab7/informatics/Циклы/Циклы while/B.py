n = int(input())

flag = 0
i = 2
while(i * i <= n):
    if(n % i == 0):
        flag = 1
        print(i)
        break
    i += 1

if(flag == 0):
    print(n)