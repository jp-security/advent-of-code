file = open("./input.txt", "r")
answers = []

first_column = {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissors'
}

second_column = {
    'X': 'rock',
    'Y': 'paper',
    'Z': 'scissors'
}

scores = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
}

win_conditions = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}

total_score = 0

while True:
    line = file.readline()

    if not line:
        break
    opponent, you = line.split(' ')
    opponent = first_column[opponent]
    you = second_column[you[0]]
    
    if you == opponent:
        total_score = total_score + 3 + scores[you]
    
    if win_conditions[you] == opponent:
        total_score = total_score + 6 + scores[you]
    
    if win_conditions[opponent] == you:
        total_score = total_score + 0 + scores[you]

print(total_score)
    





