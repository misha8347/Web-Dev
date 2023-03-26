def swap_case(s):
    str = ''
    for x in s:
        if(ord(x) >= 65 and ord(x) <= 90):
            x = chr(ord(x) + 32)
        elif(ord(x) >= 97 and ord(x) <= 122):
            x = chr(ord(x) - 32)
        str += x
    return str

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)