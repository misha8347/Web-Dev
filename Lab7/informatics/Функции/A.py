def another_min(a, b):
    if(a <= b):
        return a
    return b


def min(a, b, c, d):
    x = another_min(a, b)
    y = another_min(c, d)
    return another_min(x, y)


a, b, c, d = input().split()
a = int(a)
b = int(b)
c = int(c)
d = int(d)

print(min(a, b, c, d))

