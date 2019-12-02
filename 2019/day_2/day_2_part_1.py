# Take in a list of integers.  The op code is a chunk of 4 integers
# The value can be either 1, 2 or 99.  99 means halt operation
# Op Code 1 adds together from position 1 and 2 to position 3
# Op code 2 is the same as 1 except with multiplication

def opCodeReader(op_codes, starting_location):
    first_number = op_codes[starting_location + 1]
    second_number = op_codes[starting_location + 2]
    save_location = op_codes[starting_location + 3]

    if op_codes[starting_location] == 1:
        op_codes[save_location] = op_codes[first_number] + op_codes[second_number]
    
    if op_codes[starting_location] == 2:
        op_codes[save_location] = op_codes[first_number] * op_codes[second_number]
        

    return op_codes

def opCodeProgram(op_codes):
    op_length = len(op_codes)
    start_location = 0
    
    while start_location < op_length:
        op_codes = opCodeReader(op_codes, start_location)
        start_location += 4

        if op_codes[start_location] == 99:
            break

    return op_codes

if __name__ == '__main__':
    op_codes = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,2,9,19,23,2,13,23,27,1,6,27,31,2,6,31,35,2,13,35,39,1,39,10,43,2,43,13,47,1,9,47,51,1,51,13,55,1,55,13,59,2,59,13,63,1,63,6,67,2,6,67,71,1,5,71,75,2,6,75,79,1,5,79,83,2,83,6,87,1,5,87,91,1,6,91,95,2,95,6,99,1,5,99,103,1,6,103,107,1,107,2,111,1,111,5,0,99,2,14,0,0]
    returned_codes = opCodeProgram(op_codes)
    print('The value is: {}'.format(returned_codes[0]))
