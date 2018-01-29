import sys, json, zerorpc
from minimizer import minimize

# idea behind the algorithm can be found on the link below:
# http://www.es.ele.tue.nl/education/5MC10/Solutions/knapsack.pdf

# activities is a tuple (activity_name, time_needed, activitiy_value)
# hours will default to 24, though will change to be tuned

def read_in():
    lines = sys.stdin.readlines()

    return json.loads(lines[0])


def knapsack(activities, hours):
    # get data as list from read_in()

    d= {
        '0': 'sleep',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
    }

    # create table table[0..n, 0..W]
    table = [[0 for w in xrange(hours + 1)] for i in xrange(len(activities) + 1)]

    for i in xrange(1, len(activities) + 1):
        act_name, act_time, act_value = activities[i-1]
        for t in xrange(1, hours + 1):
            if (act_time > t):
                table[i][t] = table[i - 1][t]
            else:
                table[i][t] = max(table[i - 1][t], table[i - 1][t - act_time] + act_value)

    result = []
    t = hours
    for i in xrange(len(activities), 0, -1):
        if (table[i][t] != table[i - 1][t]):
            act_name, act_time, act_value = activities[i - 1]
            result.append(activities[i - 1])
            t -= act_time
    comb = result
    #total_value = totalvalue(comb)
    #todo(comb)
    # print str(result) + ' ' + str(type(result))
    res = json.dumps(result)
    print res

def totalvalue(comb):
    value_total = 0
    for act_name, act_time, act_value in comb:
        value_total += act_value
    return (value_total)

def todo(comb):
    for act_name in comb:
        print act_name[0]




# start process:
activities = read_in()
minimize(activities)


knapsack(activities, 24)
