t = int(input())
for i in range(t):
    a, b = input().split()
    try:
        print(int(a)//int(b))
    except Exception as e:
        print("Error Code:", e)
        
    