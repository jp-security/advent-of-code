import time
file = open("./input.txt", "r")
answers = []

tic = time.perf_counter()
first_column = {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissors'
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
    you = you[0]
    
    if you == 'Z':
        # Win
        for winner, loser in win_conditions.items():
            if loser == opponent:
                total_score = total_score + 6 + scores[winner]
    
    if you == 'Y':
        # Draw
        total_score = total_score + 3 + scores[opponent]
    
    if you == 'X':
        # Lose
        total_score = total_score + 0 + scores[win_conditions[opponent]]

toc = time.perf_counter()
print(total_score)
print(f'Speed: {toc-tic:0.4f} seconds')
    





