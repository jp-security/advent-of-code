import requests

def get_day_data(day):
    base_html = f'http://adventofcode.com/2021/day/{day}/input'
    data = requests.get(base_html)
    print(data)
