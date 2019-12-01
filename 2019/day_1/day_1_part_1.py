from math import floor

def fuelRequired(mass):
    # To figure out the amount of fuel required take the mass divided by 3 rounded down subtracted by 2

    floored_number = floor(mass / 3)
    fuel_required = floored_number - 2

    return fuel_required

def massListCreator(file_name):
    with open(file_name) as f:
        mass_list = [mass.strip() for mass in f]

    return mass_list

def totalFuel(mass_list):
    total_fuel = 0

    for mass in mass_list:
        fuel = fuelRequired(int(mass))
        total_fuel += fuel

    return total_fuel

if __name__ == '__main__':
    file_name = input('Please enter a list: ')
    mass_list = massListCreator(file_name)
    fuel_needs = totalFuel(mass_list)
    print(fuel_needs)
