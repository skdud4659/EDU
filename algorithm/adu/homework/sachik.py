input = [0, 3, 5, 6, 1, 2, 4]


def find_max_plus_or_multiply(array):
    plus = 0
    for num in array:
        if  plus <=1 or num <= 1:
            plus += num
        else:
            plus *=num
    return plus


result = find_max_plus_or_multiply(input)
print(result)