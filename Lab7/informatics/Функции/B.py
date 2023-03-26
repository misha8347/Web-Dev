def power(a, n):
    ans = 1

    for i in range(n):
        ans = ans * a
    return ans

a, n = input().split()
a = float(a)
n = int(n)

print(power(a, n))