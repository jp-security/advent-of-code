from diagnostics import list_of_binaries, test_binaries

def check_zero_or_one(row, number, digit_comparison):
    if row in digit_comparison:
        if number in digit_comparison[row]:
            digit_comparison[row][number] += 1

        if number not in digit_comparison[row]:
            digit_comparison[row][number] = 1

    if row not in digit_comparison:
        digit_comparison[row] = {}
        digit_comparison[row][number] = 1
        if number == '1':
            digit_comparison[row]['0'] = 0
        if number == '0':
            digit_comparison[row]['1'] = 0

    return digit_comparison

def create_dictionary(loop_list):
    digit_comparison = {}

    for binary_number in loop_list:
        for idx, val in enumerate(binary_number):
            digit_comparison = check_zero_or_one(idx, val, digit_comparison)

    return digit_comparison

def create_binary(common, digit_comparison):
    binary_list = []

    for row, _ in digit_comparison.items():
        binary_list.append(str(digit_comparison[row][common]))

    binary_number = ''.join(binary_list)
    return binary_number

def binary_to_decimal(binary_number):
    return int(binary_number, 2)

def get_number(true_false):
    if true_false:
        return 0

    if not true_false:
        return 1

def gamma_rate():
    digit_comparison = create_dictionary(list_of_binaries)

    for row, _ in digit_comparison.items():
        digit_comparison[row]['most_common'] = get_number(digit_comparison[row]['0'] > digit_comparison[row]['1'])

    binary_number = create_binary('most_common', digit_comparison)
    return binary_to_decimal(binary_number)

def epsilon_rate():
    digit_comparison = create_dictionary(list_of_binaries)

    for row, _ in digit_comparison.items():
        digit_comparison[row]['least_common'] = get_number(digit_comparison[row]['0'] < digit_comparison[row]['1'])

    binary_number = create_binary('least_common', digit_comparison)
    return binary_to_decimal(binary_number)

def set_binary_list(wanted_list):
    return_list = []
    for val in wanted_list:
        return_list.append(val)
    return return_list

def pull_binary_row(col, common_number, updated_binary_list):
    pop_list = []
    for idx, binary_number in enumerate(updated_binary_list):
        if int(binary_number[col]) != int(common_number):            
            pop_list.append(idx)

    for ele in sorted(pop_list, reverse=True):
        del updated_binary_list[ele]

    return updated_binary_list

def oxygen_generator_rating():
    # Pull the initial setup
    updated_binary_list = set_binary_list(list_of_binaries)
    col = 0

    while col < len(updated_binary_list[0]):
        digit_comparison = create_dictionary(updated_binary_list)
        digit_comparison[col]['most_common'] = get_number(digit_comparison[col]['0'] > digit_comparison[col]['1'])
        most_common = digit_comparison[col]['most_common']
        updated_binary_list = pull_binary_row(col, most_common, updated_binary_list)

        col += 1

        if len(updated_binary_list) == 1:
            return binary_to_decimal(updated_binary_list[0])

def scrubber_rating():
    # Pull the initial setup
    updated_binary_list = set_binary_list(list_of_binaries)
    col = 0

    while col < len(updated_binary_list[0]):
        digit_comparison = create_dictionary(updated_binary_list)
        digit_comparison[col]['least_common'] = get_number(digit_comparison[col]['0'] <= digit_comparison[col]['1'])        
        least_common = digit_comparison[col]['least_common']
        updated_binary_list = pull_binary_row(col, least_common, updated_binary_list)

        col += 1

        if len(updated_binary_list) == 1:
            return binary_to_decimal(updated_binary_list[0])

if __name__ == '__main__':
    # Power Generation
    gamma = gamma_rate()
    epsilon = epsilon_rate()
    power_consumption = gamma * epsilon

    print(f'Gamma: {gamma} | Epsilon: {epsilon} | Power Consumption: {power_consumption}')

    # Life Support
    oxygen = oxygen_generator_rating()
    scrubber = scrubber_rating()
    life_support = oxygen * scrubber

    print(f'Oxygen: {oxygen} | Scrubber: {scrubber} | Life Support: {life_support}')
