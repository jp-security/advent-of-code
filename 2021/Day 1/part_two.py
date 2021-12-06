from dataclasses import dataclass, field

from measurements import list_of_depths

@dataclass
class Depths:
    depth_one: int
    depth_two: int
    depth_three: int
    depth_total: int = field(init=False)

    def __post_init__(self):
        self.depth_total = self.depth_one + self.depth_two + self.depth_three

previous_measurement = None
larger_measurements = 0

for idx, val in enumerate(list_of_depths):
    try:
        current_depth = Depths(val, list_of_depths[idx + 1], list_of_depths[idx + 2])
    
    except IndexError:
        break

    if previous_measurement is None or previous_measurement >= current_depth.depth_total:        
        previous_measurement = current_depth.depth_total
        pass

    if previous_measurement < current_depth.depth_total:
        larger_measurements += 1
        previous_measurement = current_depth.depth_total

print(larger_measurements)
