#두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
#7 3

#사이 공백으로 input값 나눔
a,b = input().split()

#a와 b는 자연수
a=int(a)
b=int(b)

print(a+b)
print(a-b)
print(a*b)
print(int(a/b))
print(a%b)