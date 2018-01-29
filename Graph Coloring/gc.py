import sys, time
import numpy as np
import pandas as pd

def assign(comb):
    localtime = time.localtime(time.time())

    df = pd.DataFrame(
        columns=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        index=[range(localtime.tm_hour + 1, localtime.tm_hour + 26)]
        )
    df.fillna(0)

    for act in comb:
        if ((act[2] > 2) and (act[2])):

        else:



comb = [('Commuting', 2, 100),
        ('Read Kevin Warwick', 1, 1),
        ('Practice left handwriting', 1, 1),
        ('Gym', 1, 3),
        ('Leisure Time', 6, 100),
        ('See Grace', 1, 2),
        ('Eat', 3, 4),
        ('See Mark', 1, 4),
        ('Sleep', 8, 100)
        ]
