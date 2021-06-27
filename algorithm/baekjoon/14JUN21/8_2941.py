#ljes=njak

#변경할 알파벳
chg = ['c=','c-','dz=','d-','lj','nj','s=','z=']
word = input()  #ljes=njak

#chg 요소를 반복하여 word에 있는 요소를 *로 변경
for i in chg:
    word = word.replace(i,'.')
#'.e..ak'
#len은 총 6
print(len(word))