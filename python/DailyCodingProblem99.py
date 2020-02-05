"""
This problem was asked by Microsoft.
"""


def longest_consecutive_sequence(arr):
    """
    Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

    For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4].
    Return its length: 4.
    Runs in O(n) complexity.
  
    Parameters: 
    arr (list<int>): An unsorted list of integers.
  
    Returns: 
    int: The length of the longest consecutive sequence
         which can be constructed from elements of arr.
    """
    if len(arr) == 0:
        return 0
    
    # dictionaries which map the starting/ending value of a consecutive sequence
    # to the sequence itself in list format
    sequence_starts = {}
    sequence_endings = {}
    previously_observed_elements = set()

    # build sequences
    for i in arr:
        if (i+1 in sequence_starts and
            i-1 in sequence_endings):
            # connect two existing sequences
            prev_start = sequence_starts[i+1]
            prev_end = sequence_endings[i-1]
            del sequence_starts[i+1]
            del sequence_endings[i-1]
            new_seq = prev_end + [i] + prev_start
            sequence_starts[new_seq[0]] = new_seq
            sequence_endings[new_seq[-1]] = new_seq
        elif i+1 in sequence_starts:
            # prepend i to existing sequence
            prev = sequence_starts[i+1]
            del sequence_starts[i+1]
            sequence_starts[i] = [i] + prev
        elif i-1 in sequence_endings:
            # append i to existing sequence
            prev = sequence_endings[i-1]
            del sequence_endings[i-1]
            prev.append(i)
            sequence_endings[i] = prev
        else:
            # create a new sequence containing only i,
            # so long as i is not a duplicate
            if i not in previously_observed_elements:
                sequence_starts[i] = [i]
                sequence_endings[i] = [i]
        
        # mark element as observed
        previously_observed_elements.add(i)

    # find longest sequence and return its length
    return max([len(sequence) for sequence in (list(sequence_starts.values()) + list(sequence_endings.values()))])
        

assert longest_consecutive_sequence([]) == 0
assert longest_consecutive_sequence([-20]) == 1
assert longest_consecutive_sequence([100, 200, 1]) == 1
assert longest_consecutive_sequence([100, 200, 1, 2]) == 2
assert longest_consecutive_sequence([100, 200, 1, 2, 3]) == 3
assert longest_consecutive_sequence([100, 4, 200, 1, 2, 3]) == 4
assert longest_consecutive_sequence([5, 100, 4, 200, 1, 2, 3]) == 5