a = int(input())
b = int(input())

for i in range(0, b+1):
    if i * i <= b and i * i >= a:
        print(i * i)
