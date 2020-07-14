# Question 1
# Given two strings, compute the minimum number of edits
# needed to transform the first string into the second string. A single edit is an insertion,
# deletion, or substitution of a single character.


def compute_edits(str1, str2):
    if len(str1) == 0:
        return len(str2)

    if len(str2) == 0:
        return len(str1)

    if str2[-1] == str1[-1]:
        return compute_edits(str1[:-1], str2[:-1])

    return 1 + min(compute_edits(str1, str2[:-1]),
                   compute_edits(str1[:-1], str2),
                   compute_edits(str1[:-1], str2[:-1]))
