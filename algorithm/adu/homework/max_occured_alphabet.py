

input = "hello my name is sparta"

def find_max_occurred_alphabet(string):
    max = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        arr = ord(char)-ord("a")
        max[arr] += 1

    max_occurrence = 0
    max_index = 0
    for index in range(len(max)):
        alphabet = max[index]
        if alphabet > max_occurrence:
                max_occurrence = alphabet
                max_index = index


 

    return chr(max_index + 97)


result = find_max_occurred_alphabet(input)
print(result)