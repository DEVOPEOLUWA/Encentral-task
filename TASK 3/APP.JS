// // Javascript program to check if a sentence
// // can be formed from a given set of words.

// // Function to check if the word
// // is in the dictionary or not
// function match_words(dictionary, sentence, n, m)
// {
	
// 	// map to store all words in
// 	// dictionary with their count
// 	let mp = new Map();
	
// 	// Adding all words in map
// 	for(let i = 0; i < n; i++)
// 	{
// 		if(mp.has(dictionary[i]))
// 		{
// 			mp.set(dictionary[i],
// 			mp.get(dictionary[i]) + 1);
// 		}
// 		else
// 		{
// 			mp.set(dictionary[i], 1);
// 		}
// 	}
	
// 	// Search in map for all
// 	// words in the sentence
// 	for(let i = 0; i < m; i++)
// 	{
// 		if (mp.has(sentence[i]))
// 			mp.set(sentence[i],
// 			mp.get(sentence[i]) - 1);
// 		else
// 			return false;
// 	}
	
// 	// All words of sentence are present
// 	return true;
// }

// // Driver code
// let dictionary = [ 'hair' ,'year','road','tale','food',	'map',	'ear',
// 				'poet',		'hall','sir','menu',		'son'	, 'art',	'exam', 'city',	'ad','goal','gene',
// 				'way',		'math',		'dirt',	'loss',	 'debt', 'dad',	'mall','love','fact','town',
// 				'king',
// 				'oven',
// 				'song',
// 			'lady',
// 				'area',		'mode',	'girl',		'gate','	bird','poem',
// 'mom',
// 'news',
// 'meat',
// 'desk',
// 'bath',
// 'wife',
// 'data',
// 'wood',
// 'unit',
// 'idea',
// 'lab',

// 					];

// let n = dictionary.length;

// let sentence = [ "find", "all", "answers", "on",
// 				"geeks", "for", "geeks" ];

// let m = sentence.length;

// // Calling function to check if words are
// // present in the dictionary or not
// if (match_words(dictionary, sentence, n, m))
// 	document.write("YES");
// else
// 	document.write("NO");

// // This code is contributed by patel2127


// A recursive program to print all possible
// partitions of a given string into dictionary
// words

// Prints all possible word breaks of given string
function wordBreak(n,dict,s)
{
	let ans="";
	wordBreakUtil(n, s, dict, ans);
}

function wordBreakUtil(n,s,dict,ans)
{
	for(let i = 1; i <= n; i++)
	{

	// Extract substring from 0 to i in prefix
	let prefix=s.substring(0, i);

	// If dictionary contains this prefix, then
	// we check for remaining string. Otherwise
	// we ignore this prefix (there is no else for
	// this if) and try next
	if(dict.includes(prefix))
	{
		// If no more elements are there, print it
		if(i == n)
		{

		// Add this element to previous prefix
		ans += prefix;
		document.write(ans+"<br>");
		return;
		}
		wordBreakUtil(n - i, s.substring(i,n), dict, ans+prefix+" ");
	}
	}
}

// main function
let str1 = "dreowsalet"; // for first test case
let n1 = str1.length;				 // length of first string


// List of strings in dictionary
let dict= ['hair' ,'year','road','tale','food',	'map',	'ear',
				'poet',		'hall','sir','menu',		'son'	, 'art',	'exam', 'city',	'ad','goal','gene',
				'way',		'math',		'dirt',	'loss',	 'debt', 'dad',	'mall','love','fact','town',
				'king',
				'oven',
				'song',
			'lady',
				'area',		'mode',	'girl',		'gate','	bird','poem',];	

wordBreak(n1,dict,str1);

// This code is contributed by avanitrachhadiya2155

