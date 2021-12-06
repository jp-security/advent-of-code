from measurements import list_of_depths

previous_measurement = None
larger_measurements = 0

for x in list_of_depths:
    if previous_measurement is None or x <= previous_measurement:
        previous_measurement = x
        pass

    if x > previous_measurement:
        larger_measurements += 1
        previous_measurement = x    

print(larger_measurements)