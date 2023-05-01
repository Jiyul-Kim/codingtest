# // 10 10
a = input().split(" ")
h = int(a[0])
m = int(a[1])


if 60 > m >= 45:
    m = m-45
    print(h, m)
elif m < 45 and h > 0:
    h = h - 1
    m = m + 45 - 30
    print(h, m)
else:
    h = 23
    m = m + 15
    print(h, m)

# 코드를 간결하게 적고, 중복을 줄이자 
# print 넣는 습관
    
    
    

