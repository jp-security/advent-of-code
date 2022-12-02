import pandas as pd

file = open("./input.txt", 'r')
df_setup = []
elf_count = 0
count = 0
previous_sum = 0
while True:
    count += 1
    line = file.readline()

    if not line:
        break        

    if line == '\n':
        df_setup.append({'Elf Name': f'elf-{elf_count}', 'Calories': previous_sum})
        elf_count += 1
        previous_sum = 0
        continue
    previous_sum += int(line)
    
file.close()

df = pd.DataFrame(df_setup)
df = df.sort_values(by=["Calories"], ascending=False)
print(df)
print(df.head(3).Calories.sum())
