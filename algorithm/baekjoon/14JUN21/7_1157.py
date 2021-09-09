#알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
#첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

#input값을 다 대문자로 받음 > 출력을 대문자로 해야해서
#'hello'
input = input().upper()
#input값을 set으로 리스트를 만들어 중복된 알파벳을 삭제
#'h,e,l,o'
words = list(set(input))

#최빈값을 구하기 위해
cnt_list = []

for i in words:
    #input값에서 각 알파벳 카운팅
    #2(l),1,1,1
    cnt = input.count(i)
    #리스트에 붙여줌
    cnt_list.append(cnt)
    
#만약 cnt_list의 최대값이 1보다 많으면 = 중복되면
if cnt_list.count(max(cnt_list))>1:
    print('?')
#최빈값 = 최대값 인덱스
else :
    max_index = cnt_list.index(max(cnt_list))
    print(words[max_index])


