// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming 
{
	constructor() 
	{
		this.HammingDist = 0;
	}

	compute( strandInA, strandInB ) 
	{
		var strandLenA = strandInA.length;
		var strandLenB = strandInB.length;

		if( strandLenA != strandLenB )
			throw "DNA strands must be of equal length.";

		this.HammingDist = 0;

		for( var i=0; i<strandLenA; i++ )
		{
			if( strandInA.charAt(i) != strandInB.charAt(i) )
			{
				this.HammingDist++;
			}
		}

		return this.HammingDist;
	}
}

module.exports = Hamming;
