from dataclasses import dataclass
from typing import List

def random_number_pull():
    return '25,8,32,53,22,94,55,80,33,4,63,14,60,95,31,89,30,5,47,66,84,70,17,74,99,82,21,35,64,2,76,9,90,56,78,28,51,86,49,98,29,96,23,58,52,75,41,50,13,72,92,83,62,37,18,11,34,71,91,85,27,12,24,73,7,77,10,93,15,61,3,46,16,97,1,57,65,40,0,48,69,6,20,68,19,45,42,79,88,44,26,38,36,54,81,59,43,87,39,67'

@dataclass
class BingoCard:
    row_one: List[int]
    row_two: List[int]
    row_three: List[int]
    row_four: List[int]
    row_five: List[int]

def bingo_cards():
    bingo_card_row = []
