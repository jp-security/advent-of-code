from commands import list_of_commands

# down X increases your aim by X units
# up X decreases your aim by X units
# forward increases horizontal by X units AND increases your depth by your aim multiplied by X

# Depth is Distance * Aim
depth = 0
distance = 0

# Aim is increased or decreased by up/down
aim = 0

for command in list_of_commands:
    if 'forward' in command:
        traveled = int(command[8:])

        if aim == 0:
            distance += traveled
            pass

        if aim != 0:
            distance += traveled
            increased_depth = traveled * aim
            depth += increased_depth

    if 'up' in command:
        aim -= int(command[3:])

    if 'down' in command:
        aim += int(command[5:])

final_distance = depth * distance
print(final_distance)
