from commands import list_of_commands

# Up subtracts from depth
# Dwon adds to depth

depth = 0
distance = 0

for command in list_of_commands:
    if 'forward' in command:
        distance += int(command[8:])

    if 'up' in command:
        depth -= int(command[3:])

    if 'down' in command:
        depth += int(command[5:])

final_distance = depth * distance
print(final_distance)
