"""
This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways you can climb the staircase.
The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2

What if, instead of being able to climb 1 or 2 steps at a time,
you could climb any number from a set of positive integers X?
For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
"""

def count_stair_stepping_permutations(n, x):
    """
    Compute the number of unique ways we can climb a staircase.

    For each step size k in set x of size p, the nth step can be reached
    from the n-kth step, so long as n >= k.

    This observation allows us to define the following recursion relation:
        for step sizes k1, k2, ... , kj, ... , kp in x:
            ways(n) = ways(n-k1) + ways(n-k2) + ... + ways(n-kj) + ... + ways(n-kp)

    By using a dynamic programming optimization, the algorithm runs in O(n) time.

    Parameters:
    n (int): The number of stairs in the staircase. Must be positive.
    x (set<int>): A set of stepsizes. Must be comprised solely of positive integers.

    Returns:
    (int): The number of ways we can climb n steps given steps sizes provided in x.
    """
    if (n <= 0 or 
        len(x) == 0 or
        0 in x):
        return 0
    
    num_ways = 0
    previously_computed_ways = {}
    for k in x:
        if n - k < 0:
            continue
        elif n - k == 0:
            num_ways += 1
        else:
            if k not in previously_computed_ways:
                previously_computed_ways[k] = count_stair_stepping_permutations(n-k, x)
            num_ways += previously_computed_ways[k]
    return num_ways


assert count_stair_stepping_permutations(0, set([1,2,3,4])) == 0
assert count_stair_stepping_permutations(100, set()) == 0
assert count_stair_stepping_permutations(100, set([0, 1, 2, 3])) == 0
assert count_stair_stepping_permutations(4, set([1,2])) == 5
