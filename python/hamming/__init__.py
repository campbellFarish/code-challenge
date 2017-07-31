# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute( strandA, strandB ):
	if (len(strandA) != len(strandB)):
		raise ValueError()
	else:
		sLen = len(strandA)
		hammingDist = 0
		for i in range(0, sLen):
			if (strandA[i] != strandB[i]):
				hammingDist = hammingDist + 1
		return hammingDist
