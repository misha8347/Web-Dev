def xor(x, y):
    if(x == y):
        return 0
    return 1

a, b = input().split()

print(xor(a, b))