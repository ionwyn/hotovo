import math


data = {
	'Ionwyn Sean': {
		'Sleeping': 8,
		'Eat': 3.0,
		'Study': 6.0,
		'Toilet': 1.0
	},

	'Grazietta Hof': {
		'Sleeping': 7.0,
		'Eat': 3.0,
		'Side projects': 4.0,
		'Play music': 2.0
	},

	'Cory Henry': {
		'Sleeping': 7.0,
		'Chill out': 4.0,
		'Eat': 3.0,
		'Sex': 1.0,
		'Commute': 1.0,
		'Side projects': 3.0,
		'Play music': 1.0
	},

	'Mark Zuckerberg': {
                'Sleeping': 7.0,
		'Chill out': 4.0,
		'Eat': 2.0,
		'Study': 4.0,
		'Sex': 1.0,
		'Commute': 1.0,
		'Play music': 1.0
	},

	'Hans Zimmer': {
                'Sleeping': 7.0,
		'Chill out': 2.0,
		'Eat': 2.0,
		'Side projects': 4.0,
		'Play music': 2.0
	},

	'Chris Martin': {
                'Sleeping': 7.0,
		'Chill out': 2.0,
		'Eat': 2.0,
		'Study': 4.0,
		'Commute': 1.0,
		'Toilet': 1.0
	},

	'Bill Gates': {
                'Sleeping': 7.0,
		'Chill out': 2.0,
		'Eat': 2.0,
		'Sex': 1.0,
		'Commute': 1.0,
		'Side projects': 3.0,
		'Play music': 2.0
	},

	'Tony Montana': {
                'Sleeping': 7.0,
		'Chill out': 2.0,
		'Eat': 2.0,
		'Study': 2.0,
		'Sex': 1.0,
		'Commute': 1.0,
		'Play music': 1.0
	},

	'Justin Trudeau': {
                'Sleeping': 7.0,
		'Eat': 1.0,
		'Study': 2.0,
		'Sex': 2.0,
		'Commute': 1.0,
		'Toilet': 1.0
	},

	'Professor X': {
                'Sleeping': 7.0,
		'Chill out': 2.0,
		'Eat': 2.0,
		'Study': 4.0,
	},

	'Sinter Klas': {
                'Sleeping': 7.0,
		'Chill out': 2.0,
		'Eat': 2.0,
		'Study': 4.0,
		'Commute': 1.0,
		'Play music': 2.0
	},

	'Leonhard Euler': {
                'Sleeping': 7.0,
		'Chill out': 2.0,
		'Eat': 1.0,
		'Sex': 1.0,
		'Commute': 1.0,
	},

	'Alan Turing': {
                'Sleeping': 7.0,
		'Chill out': 1.5,
		'Eat': 1.0,
		'Study': 4.0,
		'Sex': 1.0,
		'Commute': 1.0,
		'Play music': 1.0
	},

	'James Bond': {
                'Sleeping': 7.0,
		'Eat': 1.0,
		'Study': 4.0,
		'Sex': 2.0,
		'Toilet': 1.0,
	},
        'Future Ion': {

	},
}

# Note that here we have not built a recommender, but the idea is:
# Since euclidean distance has a range of [0,1]
def euclidean(day1, day2):

    common_act = [act for act in data[day1] if act in data[day1]]
    # here hours is analogous to rank
    hours = [(data[day1][act], data[day2][act]) for act in common_act]

    distance = [pow(rank[0] - rank[1], 2) for rank in hours]

    return 1 / (1 + sum(distance))


def recommend(day1, bound, similarity=euclidean):
    scores = [(similarity(day1, other), other) for other in data if other != day1]

    scores.sort()
    scores.reverse()
    scores = scores[0:bound]

    print scores

    recomms = {}

    for sim, other in scores:
    	ranked = data[other]

    	for itm in ranked:
    		if itm not in data[day1]:
    			weight = sim * ranked[itm]

    			if itm in recomms:
    				s, weights = recomms[itm]
    				recomms[itm] = (s + sim, weights + [weight])
    			else:
    				recomms[itm] = (sim, [weight])

    for r in recomms:
    	sim, item = recomms[r]
    	recomms[r] = sum(item) / sim

    return recomms
