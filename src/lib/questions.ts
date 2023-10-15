type Question = {
	id: number;
	name: string;
	link: string;
	description: string;
};

export const questions: Question[] = [
	{
		id: 1,
		name: 'Contains Duplicate',
		link: 'https://leetcode.com/problems/contains-duplicate/',
		description:
			'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.\n\n\nExample 1:\n\nInput: nums = [1,2,3,1]\nOutput: true\n\n\nExample 2:\n\nInput: nums = [1,2,3,4]\nOutput: false\n\n\nExample 3:\n\nInput: nums = [1,1,1,3,3,4,3,2,4,2]\nOutput: true\n\n\nConstraints:\n\n * 1 <= nums.length <= 105\n * -109 <= nums[i] <= 109'
	},
	{
		id: 2,
		name: 'Valid Anagram',
		link: 'https://leetcode.com/problems/valid-anagram/',
		description:
			'Given two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.\n\n\nExample 1:\n\nInput: s = "anagram", t = "nagaram"\nOutput: true\n\n\nExample 2:\n\nInput: s = "rat", t = "car"\nOutput: false\n\n\nConstraints:\n\n * 1 <= s.length, t.length <= 5 * 104\n * s and t consist of lowercase English letters.\n\n\nFollow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?'
	},
	{
		id: 3,
		name: 'Two Sum',
		link: 'https://leetcode.com/problems/two-sum/',
		description:
			'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.\n\n\nExample 1:\n\n\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n\n\nExample 2:\n\n\nInput: nums = [3,2,4], target = 6\nOutput: [1,2]\n\n\nExample 3:\n\n\nInput: nums = [3,3], target = 6\nOutput: [0,1]\n\n\nConstraints:\n\n * 2 <= nums.length <= 104\n * -109 <= nums[i] <= 109\n * -109 <= target <= 109\n * Only one valid answer exists.\n\n\nFollow-up: Can you come up with an algorithm that is less than O(n2) time complexity?'
	},
	{
		id: 4,
		name: 'Group Anagrams',
		link: 'https://leetcode.com/problems/group-anagrams/',
		description:
			'Given an array of strings strs, group the anagrams together. You can return the answer in any order.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.\n\n\nExample 1:\n\nInput: strs = ["eat","tea","tan","ate","nat","bat"]\nOutput: [["bat"],["nat","tan"],["ate","eat","tea"]]\n\n\nExample 2:\n\nInput: strs = [""]\nOutput: [[""]]\n\n\nExample 3:\n\nInput: strs = ["a"]\nOutput: [["a"]]\n\n\nConstraints:\n\n * 1 <= strs.length <= 104\n * 0 <= strs[i].length <= 100\n * strs[i] consists of lowercase English letters.'
	},
	{
		id: 5,
		name: 'Top K Frequent Elements',
		link: 'https://leetcode.com/problems/top-k-frequent-elements/',
		description:
			"Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.\n\n\nExample 1:\n\nInput: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]\n\n\nExample 2:\n\nInput: nums = [1], k = 1\nOutput: [1]\n\n\nConstraints:\n\n * 1 <= nums.length <= 105\n * -104 <= nums[i] <= 104\n * k is in the range [1, the number of unique elements in the array].\n * It is guaranteed that the answer is unique.\n\n\nFollow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size."
	},
	{
		id: 6,
		name: 'Product of Array Except Self',
		link: 'https://leetcode.com/problems/product-of-array-except-self/',
		description:
			'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].\n\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm that runs in O(n) time and without using the division operation.\n\n\nExample 1:\n\nInput: nums = [1,2,3,4]\nOutput: [24,12,8,6]\n\n\nExample 2:\n\nInput: nums = [-1,1,0,-3,3]\nOutput: [0,0,9,0,0]\n\n\nConstraints:\n\n * 2 <= nums.length <= 105\n * -30 <= nums[i] <= 30\n * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.\n\n\nFollow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)'
	},
	{
		id: 7,
		name: 'Valid Sudoku',
		link: 'https://leetcode.com/problems/valid-sudoku/',
		description:
			'Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:\n\n 1. Each row must contain the digits 1-9 without repetition.\n 2. Each column must contain the digits 1-9 without repetition.\n 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.\n\nNote:\n\n * A Sudoku board (partially filled) could be valid but is not necessarily solvable.\n * Only the filled cells need to be validated according to the mentioned rules.\n\n\nExample 1:\n\n[https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png]\n\n\nInput: board = \n[["5","3",".",".","7",".",".",".","."]\n,["6",".",".","1","9","5",".",".","."]\n,[".","9","8",".",".",".",".","6","."]\n,["8",".",".",".","6",".",".",".","3"]\n,["4",".",".","8",".","3",".",".","1"]\n,["7",".",".",".","2",".",".",".","6"]\n,[".","6",".",".",".",".","2","8","."]\n,[".",".",".","4","1","9",".",".","5"]\n,[".",".",".",".","8",".",".","7","9"]]\nOutput: true\n\n\nExample 2:\n\n\nInput: board = \n[["8","3",".",".","7",".",".",".","."]\n,["6",".",".","1","9","5",".",".","."]\n,[".","9","8",".",".",".",".","6","."]\n,["8",".",".",".","6",".",".",".","3"]\n,["4",".",".","8",".","3",".",".","1"]\n,["7",".",".",".","2",".",".",".","6"]\n,[".","6",".",".",".",".","2","8","."]\n,[".",".",".","4","1","9",".",".","5"]\n,[".",".",".",".","8",".",".","7","9"]]\nOutput: false\nExplanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8\'s in the top left 3x3 sub-box, it is invalid.\n\n\nConstraints:\n\n * board.length == 9\n * board[i].length == 9\n * board[i][j] is a digit 1-9 or \'.\'.'
	},
	{
		id: 8,
		name: 'Encode and Decode Strings',
		link: 'https://www.lintcode.com/problem/659/',
		description:
			'Powerful coding training system. LintCode has the most interview problems covering Google, Facebook, Linkedin, Amazon, Microsoft and so on. We provide Chinese and English versions for coders around the world.'
	},
	{
		id: 9,
		name: 'Longest Consecutive Sequence',
		link: 'https://leetcode.com/problems/longest-consecutive-sequence/',
		description:
			'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.\n\nYou must write an algorithm that runs in O(n) time.\n\n\nExample 1:\n\n\nInput: nums = [100,4,200,1,3,2]\nOutput: 4\nExplanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.\n\n\nExample 2:\n\n\nInput: nums = [0,3,7,2,5,8,4,6,0,1]\nOutput: 9\n\n\nConstraints:\n\n * 0 <= nums.length <= 105\n * -109 <= nums[i] <= 109'
	},
	{
		id: 10,
		name: 'Valid Palindrome',
		link: 'https://leetcode.com/problems/valid-palindrome/',
		description:
			'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string s, return true if it is a palindrome, or false otherwise.\n\n\nExample 1:\n\n\nInput: s = "A man, a plan, a canal: Panama"\nOutput: true\nExplanation: "amanaplanacanalpanama" is a palindrome.\n\n\nExample 2:\n\n\nInput: s = "race a car"\nOutput: false\nExplanation: "raceacar" is not a palindrome.\n\n\nExample 3:\n\n\nInput: s = " "\nOutput: true\nExplanation: s is an empty string "" after removing non-alphanumeric characters.\nSince an empty string reads the same forward and backward, it is a palindrome.\n\n\nConstraints:\n\n * 1 <= s.length <= 2 * 105\n * s consists only of printable ASCII characters.'
	},
	{
		id: 11,
		name: 'Two Sum II Input Array Is Sorted',
		link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
		description:
			'Two Sum II - Input Array Is Sorted - Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.\n\nReturn the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.\n\nThe tests are generated such that there is exactly one solution. You may not use the same element twice.\n\nYour solution must use only constant extra space.\n\n\nExample 1:\n\n\nInput: numbers = [2,7,11,15], target = 9\nOutput: [1,2]\nExplanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].\n\n\nExample 2:\n\n\nInput: numbers = [2,3,4], target = 6\nOutput: [1,3]\nExplanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].\n\n\nExample 3:\n\n\nInput: numbers = [-1,0], target = -1\nOutput: [1,2]\nExplanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].\n\n\nConstraints:\n\n * 2 <= numbers.length <= 3 * 104\n * -1000 <= numbers[i] <= 1000\n * numbers is sorted in non-decreasing order.\n * -1000 <= target <= 1000\n * The tests are generated such that there is exactly one solution.'
	},
	{
		id: 12,
		name: '3Sum',
		link: 'https://leetcode.com/problems/3sum/',
		description:
			'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n\nNotice that the solution set must not contain duplicate triplets.\n\n\nExample 1:\n\n\nInput: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]\nExplanation: \nnums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\nThe distinct triplets are [-1,0,1] and [-1,-1,2].\nNotice that the order of the output and the order of the triplets does not matter.\n\n\nExample 2:\n\n\nInput: nums = [0,1,1]\nOutput: []\nExplanation: The only possible triplet does not sum up to 0.\n\n\nExample 3:\n\n\nInput: nums = [0,0,0]\nOutput: [[0,0,0]]\nExplanation: The only possible triplet sums up to 0.\n\n\nConstraints:\n\n * 3 <= nums.length <= 3000\n * -105 <= nums[i] <= 105'
	},
	{
		id: 13,
		name: 'Container With Most Water',
		link: 'https://leetcode.com/problems/container-with-most-water/',
		description:
			'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.\n\nNotice that you may not slant the container.\n\n\nExample 1:\n\n[https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg]\n\n\nInput: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49\nExplanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n\n\nExample 2:\n\n\nInput: height = [1,1]\nOutput: 1\n\n\nConstraints:\n\n * n == height.length\n * 2 <= n <= 105\n * 0 <= height[i] <= 104'
	},
	{
		id: 14,
		name: 'Trapping Rain Water',
		link: 'https://leetcode.com/problems/trapping-rain-water/',
		description:
			'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png]\n\n\nInput: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6\nExplanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.\n\n\nExample 2:\n\n\nInput: height = [4,2,0,3,2,5]\nOutput: 9\n\n\nConstraints:\n\n * n == height.length\n * 1 <= n <= 2 * 104\n * 0 <= height[i] <= 105'
	},
	{
		id: 15,
		name: 'Best Time to Buy And Sell Stock',
		link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
		description:
			'Best Time to Buy and Sell Stock - You are given an array prices where prices[i] is the price of a given stock on the ith day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.\n\n\nExample 1:\n\n\nInput: prices = [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\nNote that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.\n\n\nExample 2:\n\n\nInput: prices = [7,6,4,3,1]\nOutput: 0\nExplanation: In this case, no transactions are done and the max profit = 0.\n\n\nConstraints:\n\n * 1 <= prices.length <= 105\n * 0 <= prices[i] <= 104'
	},
	{
		id: 16,
		name: 'Longest Substring Without Repeating Characters',
		link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
		description:
			'Given a string s, find the length of the longest substring without repeating characters.\n\n\nExample 1:\n\n\nInput: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n\n\nExample 2:\n\n\nInput: s = "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.\n\n\nExample 3:\n\n\nInput: s = "pwwkew"\nOutput: 3\nExplanation: The answer is "wke", with the length of 3.\nNotice that the answer must be a substring, "pwke" is a subsequence and not a substring.\n\n\nConstraints:\n\n * 0 <= s.length <= 5 * 104\n * s consists of English letters, digits, symbols and spaces.'
	},
	{
		id: 17,
		name: 'Longest Repeating Character Replacement',
		link: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
		description:
			'You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.\n\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.\n\n\nExample 1:\n\n\nInput: s = "ABAB", k = 2\nOutput: 4\nExplanation: Replace the two \'A\'s with two \'B\'s or vice versa.\n\n\nExample 2:\n\n\nInput: s = "AABABBA", k = 1\nOutput: 4\nExplanation: Replace the one \'A\' in the middle with \'B\' and form "AABBBBA".\nThe substring "BBBB" has the longest repeating letters, which is 4.\nThere may exists other ways to achive this answer too.\n\n\nConstraints:\n\n * 1 <= s.length <= 105\n * s consists of only uppercase English letters.\n * 0 <= k <= s.length'
	},
	{
		id: 18,
		name: 'Permutation In String',
		link: 'https://leetcode.com/problems/permutation-in-string/',
		description:
			'Permutation in String - Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.\n\nIn other words, return true if one of s1\'s permutations is the substring of s2.\n\n\nExample 1:\n\n\nInput: s1 = "ab", s2 = "eidbaooo"\nOutput: true\nExplanation: s2 contains one permutation of s1 ("ba").\n\n\nExample 2:\n\n\nInput: s1 = "ab", s2 = "eidboaoo"\nOutput: false\n\n\nConstraints:\n\n * 1 <= s1.length, s2.length <= 104\n * s1 and s2 consist of lowercase English letters.'
	},
	{
		id: 19,
		name: 'Minimum Window Substring',
		link: 'https://leetcode.com/problems/minimum-window-substring/',
		description:
			'Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".\n\nThe testcases will be generated such that the answer is unique.\n\n\nExample 1:\n\n\nInput: s = "ADOBECODEBANC", t = "ABC"\nOutput: "BANC"\nExplanation: The minimum window substring "BANC" includes \'A\', \'B\', and \'C\' from string t.\n\n\nExample 2:\n\n\nInput: s = "a", t = "a"\nOutput: "a"\nExplanation: The entire string s is the minimum window.\n\n\nExample 3:\n\n\nInput: s = "a", t = "aa"\nOutput: ""\nExplanation: Both \'a\'s from t must be included in the window.\nSince the largest window of s only has one \'a\', return empty string.\n\n\nConstraints:\n\n * m == s.length\n * n == t.length\n * 1 <= m, n <= 105\n * s and t consist of uppercase and lowercase English letters.\n\n\nFollow up: Could you find an algorithm that runs in O(m + n) time?'
	},
	{
		id: 20,
		name: 'Sliding Window Maximum',
		link: 'https://leetcode.com/problems/sliding-window-maximum/',
		description:
			'You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the max sliding window.\n\n\nExample 1:\n\n\nInput: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]\nExplanation: \nWindow position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7\n\n\nExample 2:\n\n\nInput: nums = [1], k = 1\nOutput: [1]\n\n\nConstraints:\n\n * 1 <= nums.length <= 105\n * -104 <= nums[i] <= 104\n * 1 <= k <= nums.length'
	},
	{
		id: 21,
		name: 'Valid Parentheses',
		link: 'https://leetcode.com/problems/valid-parentheses/',
		description:
			"Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n\n 1. Open brackets must be closed by the same type of brackets.\n 2. Open brackets must be closed in the correct order.\n 3. Every close bracket has a corresponding open bracket of the same type.\n\n\nExample 1:\n\n\nInput: s = \"()\"\nOutput: true\n\n\nExample 2:\n\n\nInput: s = \"()[]{}\"\nOutput: true\n\n\nExample 3:\n\n\nInput: s = \"(]\"\nOutput: false\n\n\nConstraints:\n\n * 1 <= s.length <= 104\n * s consists of parentheses only '()[]{}'."
	},
	{
		id: 22,
		name: 'Min Stack',
		link: 'https://leetcode.com/problems/min-stack/',
		description:
			'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the MinStack class:\n\n * MinStack() initializes the stack object.\n * void push(int val) pushes the element val onto the stack.\n * void pop() removes the element on the top of the stack.\n * int top() gets the top element of the stack.\n * int getMin() retrieves the minimum element in the stack.\n\nYou must implement a solution with O(1) time complexity for each function.\n\n\nExample 1:\n\n\nInput\n["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\nOutput\n[null,null,null,null,-3,null,0,-2]\n\nExplanation\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // return -3\nminStack.pop();\nminStack.top();    // return 0\nminStack.getMin(); // return -2\n\n\nConstraints:\n\n * -231 <= val <= 231 - 1\n * Methods pop, top and getMin operations will always be called on non-empty stacks.\n * At most 3 * 104 calls will be made to push, pop, top, and getMin.'
	},
	{
		id: 23,
		name: 'Evaluate Reverse Polish Notation',
		link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
		description:
			'You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation [http://en.wikipedia.org/wiki/Reverse_Polish_notation].\n\nEvaluate the expression. Return an integer that represents the value of the expression.\n\nNote that:\n\n * The valid operators are \'+\', \'-\', \'*\', and \'/\'.\n * Each operand may be an integer or another expression.\n * The division between two integers always truncates toward zero.\n * There will not be any division by zero.\n * The input represents a valid arithmetic expression in a reverse polish notation.\n * The answer and all the intermediate calculations can be represented in a 32-bit integer.\n\n\nExample 1:\n\n\nInput: tokens = ["2","1","+","3","*"]\nOutput: 9\nExplanation: ((2 + 1) * 3) = 9\n\n\nExample 2:\n\n\nInput: tokens = ["4","13","5","/","+"]\nOutput: 6\nExplanation: (4 + (13 / 5)) = 6\n\n\nExample 3:\n\n\nInput: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\nOutput: 22\nExplanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / (12 * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 17 + 5\n= 22\n\n\nConstraints:\n\n * 1 <= tokens.length <= 104\n * tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].'
	},
	{
		id: 24,
		name: 'Generate Parentheses',
		link: 'https://leetcode.com/problems/generate-parentheses/',
		description:
			'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n\n\nExample 1:\n\nInput: n = 3\nOutput: ["((()))","(()())","(())()","()(())","()()()"]\n\n\nExample 2:\n\nInput: n = 1\nOutput: ["()"]\n\n\nConstraints:\n\n * 1 <= n <= 8'
	},
	{
		id: 25,
		name: 'Daily Temperatures',
		link: 'https://leetcode.com/problems/daily-temperatures/',
		description:
			'Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.\n\n\nExample 1:\n\nInput: temperatures = [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]\n\n\nExample 2:\n\nInput: temperatures = [30,40,50,60]\nOutput: [1,1,1,0]\n\n\nExample 3:\n\nInput: temperatures = [30,60,90]\nOutput: [1,1,0]\n\n\nConstraints:\n\n * 1 <= temperatures.length <= 105\n * 30 <= temperatures[i] <= 100'
	},
	{
		id: 26,
		name: 'Car Fleet',
		link: 'https://leetcode.com/problems/car-fleet/',
		description:
			"There are n cars going to the same destination along a one-lane road. The destination is target miles away.\n\nYou are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).\n\nA car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).\n\nA car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.\n\nIf a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.\n\nReturn the number of car fleets that will arrive at the destination.\n\n\nExample 1:\n\n\nInput: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]\nOutput: 3\nExplanation:\nThe cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.\nThe car starting at 0 does not catch up to any other car, so it is a fleet by itself.\nThe cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.\nNote that no other cars meet these fleets before the destination, so the answer is 3.\n\n\nExample 2:\n\n\nInput: target = 10, position = [3], speed = [3]\nOutput: 1\nExplanation: There is only one car, hence there is only one fleet.\n\n\nExample 3:\n\n\nInput: target = 100, position = [0,2,4], speed = [4,2,1]\nOutput: 1\nExplanation:\nThe cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.\nThen, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.\n\n\nConstraints:\n\n * n == position.length == speed.length\n * 1 <= n <= 105\n * 0 < target <= 106\n * 0 <= position[i] < target\n * All the values of position are unique.\n * 0 < speed[i] <= 106"
	},
	{
		id: 27,
		name: 'Largest Rectangle In Histogram',
		link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
		description:
			"Largest Rectangle in Histogram - Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg]\n\n\nInput: heights = [2,1,5,6,2,3]\nOutput: 10\nExplanation: The above is a histogram where width of each bar is 1.\nThe largest rectangle is shown in the red area, which has an area = 10 units.\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg]\n\n\nInput: heights = [2,4]\nOutput: 4\n\n\nConstraints:\n\n * 1 <= heights.length <= 105\n * 0 <= heights[i] <= 104"
	},
	{
		id: 28,
		name: 'Binary Search',
		link: 'https://leetcode.com/problems/binary-search/',
		description:
			'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.\n\n\nExample 1:\n\n\nInput: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4\nExplanation: 9 exists in nums and its index is 4\n\n\nExample 2:\n\n\nInput: nums = [-1,0,3,5,9,12], target = 2\nOutput: -1\nExplanation: 2 does not exist in nums so return -1\n\n\nConstraints:\n\n * 1 <= nums.length <= 104\n * -104 < nums[i], target < 104\n * All the integers in nums are unique.\n * nums is sorted in ascending order.'
	},
	{
		id: 29,
		name: 'Search a 2D Matrix',
		link: 'https://leetcode.com/problems/search-a-2d-matrix/',
		description:
			'You are given an m x n integer matrix matrix with the following two properties:\n\n * Each row is sorted in non-decreasing order.\n * The first integer of each row is greater than the last integer of the previous row.\n\nGiven an integer target, return true if target is in matrix or false otherwise.\n\nYou must write a solution in O(log(m * n)) time complexity.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/10/05/mat.jpg]\n\n\nInput: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3\nOutput: true\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg]\n\n\nInput: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13\nOutput: false\n\n\nConstraints:\n\n * m == matrix.length\n * n == matrix[i].length\n * 1 <= m, n <= 100\n * -104 <= matrix[i][j], target <= 104'
	},
	{
		id: 30,
		name: 'Koko Eating Bananas',
		link: 'https://leetcode.com/problems/koko-eating-bananas/',
		description:
			'Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.\n\nKoko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.\n\nKoko likes to eat slowly but still wants to finish eating all the bananas before the guards return.\n\nReturn the minimum integer k such that she can eat all the bananas within h hours.\n\n\nExample 1:\n\n\nInput: piles = [3,6,7,11], h = 8\nOutput: 4\n\n\nExample 2:\n\n\nInput: piles = [30,11,23,4,20], h = 5\nOutput: 30\n\n\nExample 3:\n\n\nInput: piles = [30,11,23,4,20], h = 6\nOutput: 23\n\n\nConstraints:\n\n * 1 <= piles.length <= 104\n * piles.length <= h <= 109\n * 1 <= piles[i] <= 109'
	},
	{
		id: 31,
		name: 'Find Minimum In Rotated Sorted Array',
		link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
		description:
			'Find Minimum in Rotated Sorted Array - Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:\n\n * [4,5,6,7,0,1,2] if it was rotated 4 times.\n * [0,1,2,4,5,6,7] if it was rotated 7 times.\n\nNotice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].\n\nGiven the sorted rotated array nums of unique elements, return the minimum element of this array.\n\nYou must write an algorithm that runs in O(log n) time.\n\n\nExample 1:\n\n\nInput: nums = [3,4,5,1,2]\nOutput: 1\nExplanation: The original array was [1,2,3,4,5] rotated 3 times.\n\n\nExample 2:\n\n\nInput: nums = [4,5,6,7,0,1,2]\nOutput: 0\nExplanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.\n\n\nExample 3:\n\n\nInput: nums = [11,13,15,17]\nOutput: 11\nExplanation: The original array was [11,13,15,17] and it was rotated 4 times. \n\n\nConstraints:\n\n * n == nums.length\n * 1 <= n <= 5000\n * -5000 <= nums[i] <= 5000\n * All the integers of nums are unique.\n * nums is sorted and rotated between 1 and n times.'
	},
	{
		id: 32,
		name: 'Search In Rotated Sorted Array',
		link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
		description:
			'Search in Rotated Sorted Array - There is an integer array nums sorted in ascending order (with distinct values).\n\nPrior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].\n\nGiven the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.\n\nYou must write an algorithm with O(log n) runtime complexity.\n\n\nExample 1:\n\nInput: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4\n\n\nExample 2:\n\nInput: nums = [4,5,6,7,0,1,2], target = 3\nOutput: -1\n\n\nExample 3:\n\nInput: nums = [1], target = 0\nOutput: -1\n\n\nConstraints:\n\n * 1 <= nums.length <= 5000\n * -104 <= nums[i] <= 104\n * All values of nums are unique.\n * nums is an ascending array that is possibly rotated.\n * -104 <= target <= 104'
	},
	{
		id: 33,
		name: 'Time Based Key Value Store',
		link: 'https://leetcode.com/problems/time-based-key-value-store/',
		description:
			'Time Based Key-Value Store - Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key\'s value at a certain timestamp.\n\nImplement the TimeMap class:\n\n * TimeMap() Initializes the object of the data structure.\n * void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.\n * String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".\n\n\nExample 1:\n\n\nInput\n["TimeMap", "set", "get", "get", "set", "get", "get"]\n[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]\nOutput\n[null, null, "bar", "bar", null, "bar2", "bar2"]\n\nExplanation\nTimeMap timeMap = new TimeMap();\ntimeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.\ntimeMap.get("foo", 1);         // return "bar"\ntimeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".\ntimeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.\ntimeMap.get("foo", 4);         // return "bar2"\ntimeMap.get("foo", 5);         // return "bar2"\n\n\nConstraints:\n\n * 1 <= key.length, value.length <= 100\n * key and value consist of lowercase English letters and digits.\n * 1 <= timestamp <= 107\n * All the timestamps timestamp of set are strictly increasing.\n * At most 2 * 105 calls will be made to set and get.'
	},
	{
		id: 34,
		name: 'Median of Two Sorted Arrays',
		link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
		description:
			'Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.'
	},
	{
		id: 35,
		name: 'Reverse Linked List',
		link: 'https://leetcode.com/problems/reverse-linked-list/',
		description:
			'Given the head of a singly linked list, reverse the list, and return the reversed list.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg]\n\n\nInput: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg]\n\n\nInput: head = [1,2]\nOutput: [2,1]\n\n\nExample 3:\n\n\nInput: head = []\nOutput: []\n\n\nConstraints:\n\n * The number of nodes in the list is the range [0, 5000].\n * -5000 <= Node.val <= 5000\n\n\nFollow up: A linked list can be reversed either iteratively or recursively. Could you implement both?'
	},
	{
		id: 36,
		name: 'Merge Two Sorted Lists',
		link: 'https://leetcode.com/problems/merge-two-sorted-lists/',
		description:
			'You are given the heads of two sorted linked lists list1 and list2.\n\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn the head of the merged linked list.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg]\n\n\nInput: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]\n\n\nExample 2:\n\n\nInput: list1 = [], list2 = []\nOutput: []\n\n\nExample 3:\n\n\nInput: list1 = [], list2 = [0]\nOutput: [0]\n\n\nConstraints:\n\n * The number of nodes in both lists is in the range [0, 50].\n * -100 <= Node.val <= 100\n * Both list1 and list2 are sorted in non-decreasing order.'
	},
	{
		id: 37,
		name: 'Reorder List',
		link: 'https://leetcode.com/problems/reorder-list/',
		description:
			"You are given the head of a singly linked-list. The list can be represented as:\n\n\nL0 → L1 → … → Ln - 1 → Ln\n\n\nReorder the list to be on the following form:\n\n\nL0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …\n\n\nYou may not modify the values in the list's nodes. Only nodes themselves may be changed.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg]\n\n\nInput: head = [1,2,3,4]\nOutput: [1,4,2,3]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg]\n\n\nInput: head = [1,2,3,4,5]\nOutput: [1,5,2,4,3]\n\n\nConstraints:\n\n * The number of nodes in the list is in the range [1, 5 * 104].\n * 1 <= Node.val <= 1000"
	},
	{
		id: 38,
		name: 'Remove Nth Node From End of List',
		link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
		description:
			'Given the head of a linked list, remove the nth node from the end of the list and return its head.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg]\n\n\nInput: head = [1,2,3,4,5], n = 2\nOutput: [1,2,3,5]\n\n\nExample 2:\n\n\nInput: head = [1], n = 1\nOutput: []\n\n\nExample 3:\n\n\nInput: head = [1,2], n = 1\nOutput: [1]\n\n\nConstraints:\n\n * The number of nodes in the list is sz.\n * 1 <= sz <= 30\n * 0 <= Node.val <= 100\n * 1 <= n <= sz\n\n\nFollow up: Could you do this in one pass?'
	},
	{
		id: 39,
		name: 'Copy List With Random Pointer',
		link: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
		description:
			'Copy List with Random Pointer - A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.\n\nConstruct a deep copy [https://en.wikipedia.org/wiki/Object_copying#Deep_copy] of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.\n\nFor example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.\n\nReturn the head of the copied linked list.\n\nThe linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:\n\n * val: an integer representing Node.val\n * random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.\n\nYour code will only be given the head of the original linked list.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2019/12/18/e1.png]\n\n\nInput: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: [[7,null],[13,0],[11,4],[10,2],[1,0]]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2019/12/18/e2.png]\n\n\nInput: head = [[1,1],[2,1]]\nOutput: [[1,1],[2,1]]\n\n\nExample 3:\n\n[https://assets.leetcode.com/uploads/2019/12/18/e3.png]\n\n\nInput: head = [[3,null],[3,0],[3,null]]\nOutput: [[3,null],[3,0],[3,null]]\n\n\nConstraints:\n\n * 0 <= n <= 1000\n * -104 <= Node.val <= 104\n * Node.random is null or is pointing to some node in the linked list.'
	},
	{
		id: 40,
		name: 'Add Two Numbers',
		link: 'https://leetcode.com/problems/add-two-numbers/',
		description:
			'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg]\n\n\nInput: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807.\n\n\nExample 2:\n\n\nInput: l1 = [0], l2 = [0]\nOutput: [0]\n\n\nExample 3:\n\n\nInput: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\nOutput: [8,9,9,9,0,0,0,1]\n\n\nConstraints:\n\n * The number of nodes in each linked list is in the range [1, 100].\n * 0 <= Node.val <= 9\n * It is guaranteed that the list represents a number that does not have leading zeros.'
	},
	{
		id: 41,
		name: 'Linked List Cycle',
		link: 'https://leetcode.com/problems/linked-list-cycle/',
		description:
			"Given head, the head of a linked list, determine if the linked list has a cycle in it.\n\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.\n\nReturn true if there is a cycle in the linked list. Otherwise, return false.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png]\n\n\nInput: head = [3,2,0,-4], pos = 1\nOutput: true\nExplanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png]\n\n\nInput: head = [1,2], pos = 0\nOutput: true\nExplanation: There is a cycle in the linked list, where the tail connects to the 0th node.\n\n\nExample 3:\n\n[https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png]\n\n\nInput: head = [1], pos = -1\nOutput: false\nExplanation: There is no cycle in the linked list.\n\n\nConstraints:\n\n * The number of the nodes in the list is in the range [0, 104].\n * -105 <= Node.val <= 105\n * pos is -1 or a valid index in the linked-list.\n\n\nFollow up: Can you solve it using O(1) (i.e. constant) memory?"
	},
	{
		id: 42,
		name: 'Find The Duplicate Number',
		link: 'https://leetcode.com/problems/find-the-duplicate-number/',
		description:
			'Find the Duplicate Number - Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.\n\nThere is only one repeated number in nums, return this repeated number.\n\nYou must solve the problem without modifying the array nums and uses only constant extra space.\n\n\nExample 1:\n\n\nInput: nums = [1,3,4,2,2]\nOutput: 2\n\n\nExample 2:\n\n\nInput: nums = [3,1,3,4,2]\nOutput: 3\n\n\nConstraints:\n\n * 1 <= n <= 105\n * nums.length == n + 1\n * 1 <= nums[i] <= n\n * All the integers in nums appear only once except for precisely one integer which appears two or more times.\n\n\nFollow up:\n\n * How can we prove that at least one duplicate number must exist in nums?\n * Can you solve the problem in linear runtime complexity?'
	},
	{
		id: 43,
		name: 'LRU Cache',
		link: 'https://leetcode.com/problems/lru-cache/',
		description:
			'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache [https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU].\n\nImplement the LRUCache class:\n\n * LRUCache(int capacity) Initialize the LRU cache with positive size capacity.\n * int get(int key) Return the value of the key if the key exists, otherwise return -1.\n * void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.\n\nThe functions get and put must each run in O(1) average time complexity.\n\n\nExample 1:\n\n\nInput\n["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\nOutput\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\nExplanation\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // cache is {1=1}\nlRUCache.put(2, 2); // cache is {1=1, 2=2}\nlRUCache.get(1);    // return 1\nlRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}\nlRUCache.get(2);    // returns -1 (not found)\nlRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}\nlRUCache.get(1);    // return -1 (not found)\nlRUCache.get(3);    // return 3\nlRUCache.get(4);    // return 4\n\n\nConstraints:\n\n * 1 <= capacity <= 3000\n * 0 <= key <= 104\n * 0 <= value <= 105\n * At most 2 * 105 calls will be made to get and put.'
	},
	{
		id: 44,
		name: 'Merge K Sorted Lists',
		link: 'https://leetcode.com/problems/merge-k-sorted-lists/',
		description:
			'Merge k Sorted Lists - You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.\n\nMerge all the linked-lists into one sorted linked-list and return it.\n\n\nExample 1:\n\n\nInput: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]\nExplanation: The linked-lists are:\n[\n  1->4->5,\n  1->3->4,\n  2->6\n]\nmerging them into one sorted list:\n1->1->2->3->4->4->5->6\n\n\nExample 2:\n\n\nInput: lists = []\nOutput: []\n\n\nExample 3:\n\n\nInput: lists = [[]]\nOutput: []\n\n\nConstraints:\n\n * k == lists.length\n * 0 <= k <= 104\n * 0 <= lists[i].length <= 500\n * -104 <= lists[i][j] <= 104\n * lists[i] is sorted in ascending order.\n * The sum of lists[i].length will not exceed 104.'
	},
	{
		id: 45,
		name: 'Reverse Nodes In K Group',
		link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
		description:
			"Reverse Nodes in k-Group - Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.\n\nk is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.\n\nYou may not alter the values in the list's nodes, only nodes themselves may be changed.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg]\n\n\nInput: head = [1,2,3,4,5], k = 2\nOutput: [2,1,4,3,5]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg]\n\n\nInput: head = [1,2,3,4,5], k = 3\nOutput: [3,2,1,4,5]\n\n\nConstraints:\n\n * The number of nodes in the list is n.\n * 1 <= k <= n <= 5000\n * 0 <= Node.val <= 1000\n\n\nFollow-up: Can you solve the problem in O(1) extra memory space?"
	},
	{
		id: 46,
		name: 'Invert Binary Tree',
		link: 'https://leetcode.com/problems/invert-binary-tree/',
		description:
			'Given the root of a binary tree, invert the tree, and return its root.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg]\n\n\nInput: root = [4,2,7,1,3,6,9]\nOutput: [4,7,2,9,6,3,1]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg]\n\n\nInput: root = [2,1,3]\nOutput: [2,3,1]\n\n\nExample 3:\n\n\nInput: root = []\nOutput: []\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [0, 100].\n * -100 <= Node.val <= 100'
	},
	{
		id: 47,
		name: 'Maximum Depth of Binary Tree',
		link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
		description:
			"Given the root of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg]\n\n\nInput: root = [3,9,20,null,null,15,7]\nOutput: 3\n\n\nExample 2:\n\n\nInput: root = [1,null,2]\nOutput: 2\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [0, 104].\n * -100 <= Node.val <= 100"
	},
	{
		id: 48,
		name: 'Diameter of Binary Tree',
		link: 'https://leetcode.com/problems/diameter-of-binary-tree/',
		description:
			'Given the root of a binary tree, return the length of the diameter of the tree.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.\n\nThe length of a path between two nodes is represented by the number of edges between them.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg]\n\n\nInput: root = [1,2,3,4,5]\nOutput: 3\nExplanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].\n\n\nExample 2:\n\n\nInput: root = [1,2]\nOutput: 1\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [1, 104].\n * -100 <= Node.val <= 100'
	},
	{
		id: 49,
		name: 'Balanced Binary Tree',
		link: 'https://leetcode.com/problems/balanced-binary-tree/',
		description:
			'Given a binary tree, determine if it is height-balanced.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg]\n\n\nInput: root = [3,9,20,null,null,15,7]\nOutput: true\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg]\n\n\nInput: root = [1,2,2,3,3,null,null,4,4]\nOutput: false\n\n\nExample 3:\n\n\nInput: root = []\nOutput: true\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [0, 5000].\n * -104 <= Node.val <= 104'
	},
	{
		id: 50,
		name: 'Same Tree',
		link: 'https://leetcode.com/problems/same-tree/',
		description:
			'Given the roots of two binary trees p and q, write a function to check if they are the same or not.\n\nTwo binary trees are considered the same if they are structurally identical, and the nodes have the same value.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg]\n\n\nInput: p = [1,2,3], q = [1,2,3]\nOutput: true\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg]\n\n\nInput: p = [1,2], q = [1,null,2]\nOutput: false\n\n\nExample 3:\n\n[https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg]\n\n\nInput: p = [1,2,1], q = [1,1,2]\nOutput: false\n\n\nConstraints:\n\n * The number of nodes in both trees is in the range [0, 100].\n * -104 <= Node.val <= 104'
	},
	{
		id: 51,
		name: 'Subtree of Another Tree',
		link: 'https://leetcode.com/problems/subtree-of-another-tree/',
		description:
			"Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.\n\nA subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/04/28/subtree1-tree.jpg]\n\n\nInput: root = [3,4,5,1,2], subRoot = [4,1,2]\nOutput: true\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/04/28/subtree2-tree.jpg]\n\n\nInput: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]\nOutput: false\n\n\nConstraints:\n\n * The number of nodes in the root tree is in the range [1, 2000].\n * The number of nodes in the subRoot tree is in the range [1, 1000].\n * -104 <= root.val <= 104\n * -104 <= subRoot.val <= 104"
	},
	{
		id: 52,
		name: 'Lowest Common Ancestor of a Binary Search Tree',
		link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
		description:
			'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.\n\nAccording to the definition of LCA on Wikipedia [https://en.wikipedia.org/wiki/Lowest_common_ancestor]: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png]\n\n\nInput: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6\nExplanation: The LCA of nodes 2 and 8 is 6.\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png]\n\n\nInput: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\nOutput: 2\nExplanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.\n\n\nExample 3:\n\n\nInput: root = [2,1], p = 2, q = 1\nOutput: 2\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [2, 105].\n * -109 <= Node.val <= 109\n * All Node.val are unique.\n * p != q\n * p and q will exist in the BST.'
	},
	{
		id: 53,
		name: 'Binary Tree Level Order Traversal',
		link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
		description:
			"Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg]\n\n\nInput: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]\n\n\nExample 2:\n\n\nInput: root = [1]\nOutput: [[1]]\n\n\nExample 3:\n\n\nInput: root = []\nOutput: []\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [0, 2000].\n * -1000 <= Node.val <= 1000"
	},
	{
		id: 54,
		name: 'Binary Tree Right Side View',
		link: 'https://leetcode.com/problems/binary-tree-right-side-view/',
		description:
			'Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/02/14/tree.jpg]\n\n\nInput: root = [1,2,3,null,5,null,4]\nOutput: [1,3,4]\n\n\nExample 2:\n\n\nInput: root = [1,null,3]\nOutput: [1,3]\n\n\nExample 3:\n\n\nInput: root = []\nOutput: []\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [0, 100].\n * -100 <= Node.val <= 100'
	},
	{
		id: 55,
		name: 'Count Good Nodes In Binary Tree',
		link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/',
		description:
			'Count Good Nodes in Binary Tree - Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.\n\nReturn the number of good nodes in the binary tree.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/04/02/test_sample_1.png]\n\n\r\nInput: root = [3,1,4,3,null,1,5]\r\nOutput: 4\r\nExplanation: Nodes in blue are good.\r\nRoot Node (3) is always a good node.\r\nNode 4 -> (3,4) is the maximum value in the path starting from the root.\r\nNode 5 -> (3,4,5) is the maximum value in the path\r\nNode 3 -> (3,1,3) is the maximum value in the path.\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/04/02/test_sample_2.png]\n\n\r\nInput: root = [3,3,null,4,2]\r\nOutput: 3\r\nExplanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.\n\nExample 3:\n\n\r\nInput: root = [1]\r\nOutput: 1\r\nExplanation: Root is considered as good.\n\n\nConstraints:\n\n * The number of nodes in the binary tree is in the range [1, 10^5].\n * Each node\'s value is between [-10^4, 10^4].'
	},
	{
		id: 56,
		name: 'Validate Binary Search Tree',
		link: 'https://leetcode.com/problems/validate-binary-search-tree/',
		description:
			"Given the root of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST is defined as follows:\n\n * The left subtree of a node contains only nodes with keys less than the node's key.\n * The right subtree of a node contains only nodes with keys greater than the node's key.\n * Both the left and right subtrees must also be binary search trees.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg]\n\n\nInput: root = [2,1,3]\nOutput: true\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg]\n\n\nInput: root = [5,1,4,null,null,3,6]\nOutput: false\nExplanation: The root node's value is 5 but its right child's value is 4.\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [1, 104].\n * -231 <= Node.val <= 231 - 1"
	},
	{
		id: 57,
		name: 'Kth Smallest Element In a Bst',
		link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
		description:
			'Kth Smallest Element in a BST - Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg]\n\n\nInput: root = [3,1,4,null,2], k = 1\nOutput: 1\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg]\n\n\nInput: root = [5,3,6,2,4,null,null,1], k = 3\nOutput: 3\n\n\nConstraints:\n\n * The number of nodes in the tree is n.\n * 1 <= k <= n <= 104\n * 0 <= Node.val <= 104\n\n\nFollow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?'
	},
	{
		id: 58,
		name: 'Construct Binary Tree From Preorder And Inorder Traversal',
		link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
		description:
			'Construct Binary Tree from Preorder and Inorder Traversal - Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/02/19/tree.jpg]\n\n\nInput: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\nOutput: [3,9,20,null,null,15,7]\n\n\nExample 2:\n\n\nInput: preorder = [-1], inorder = [-1]\nOutput: [-1]\n\n\nConstraints:\n\n * 1 <= preorder.length <= 3000\n * inorder.length == preorder.length\n * -3000 <= preorder[i], inorder[i] <= 3000\n * preorder and inorder consist of unique values.\n * Each value of inorder also appears in preorder.\n * preorder is guaranteed to be the preorder traversal of the tree.\n * inorder is guaranteed to be the inorder traversal of the tree.'
	},
	{
		id: 59,
		name: 'Binary Tree Maximum Path Sum',
		link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
		description:
			"A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.\n\nThe path sum of a path is the sum of the node's values in the path.\n\nGiven the root of a binary tree, return the maximum path sum of any non-empty path.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg]\n\n\nInput: root = [1,2,3]\nOutput: 6\nExplanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg]\n\n\nInput: root = [-10,9,20,null,null,15,7]\nOutput: 42\nExplanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [1, 3 * 104].\n * -1000 <= Node.val <= 1000"
	},
	{
		id: 60,
		name: 'Serialize And Deserialize Binary Tree',
		link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
		description:
			'Serialize and Deserialize Binary Tree - Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.\n\nDesign an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.\n\nClarification: The input/output format is the same as how LeetCode serializes a binary tree [https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-]. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg]\n\n\nInput: root = [1,2,3,null,null,4,5]\nOutput: [1,2,3,null,null,4,5]\n\n\nExample 2:\n\n\nInput: root = []\nOutput: []\n\n\nConstraints:\n\n * The number of nodes in the tree is in the range [0, 104].\n * -1000 <= Node.val <= 1000'
	},
	{
		id: 61,
		name: 'Implement Trie Prefix Tree',
		link: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
		description:
			'Implement Trie (Prefix Tree) - A trie [https://en.wikipedia.org/wiki/Trie] (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.\n\nImplement the Trie class:\n\n * Trie() Initializes the trie object.\n * void insert(String word) Inserts the string word into the trie.\n * boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.\n * boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.\n\n\nExample 1:\n\n\nInput\n["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]\nOutput\n[null, null, true, false, true, null, true]\n\nExplanation\nTrie trie = new Trie();\ntrie.insert("apple");\ntrie.search("apple");   // return True\ntrie.search("app");     // return False\ntrie.startsWith("app"); // return True\ntrie.insert("app");\ntrie.search("app");     // return True\n\n\nConstraints:\n\n * 1 <= word.length, prefix.length <= 2000\n * word and prefix consist only of lowercase English letters.\n * At most 3 * 104 calls in total will be made to insert, search, and startsWith.'
	},
	{
		id: 62,
		name: 'Design Add And Search Words Data Structure',
		link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
		description:
			'Design Add and Search Words Data Structure - Design a data structure that supports adding new words and finding if a string matches any previously added string.\n\nImplement the WordDictionary class:\n\n * WordDictionary() Initializes the object.\n * void addWord(word) Adds word to the data structure, it can be matched later.\n * bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots \'.\' where dots can be matched with any letter.\n\n\nExample:\n\n\nInput\n["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]\nOutput\n[null,null,null,null,false,true,true,true]\n\nExplanation\nWordDictionary wordDictionary = new WordDictionary();\nwordDictionary.addWord("bad");\nwordDictionary.addWord("dad");\nwordDictionary.addWord("mad");\nwordDictionary.search("pad"); // return False\nwordDictionary.search("bad"); // return True\nwordDictionary.search(".ad"); // return True\nwordDictionary.search("b.."); // return True\n\n\nConstraints:\n\n * 1 <= word.length <= 25\n * word in addWord consists of lowercase English letters.\n * word in search consist of \'.\' or lowercase English letters.\n * There will be at most 2 dots in word for search queries.\n * At most 104 calls will be made to addWord and search.'
	},
	{
		id: 63,
		name: 'Word Search II',
		link: 'https://leetcode.com/problems/word-search-ii/',
		description:
			'Given an m x n board of characters and a list of strings words, return all words on the board.\n\nEach word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/11/07/search1.jpg]\n\n\nInput: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]\nOutput: ["eat","oath"]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/11/07/search2.jpg]\n\n\nInput: board = [["a","b"],["c","d"]], words = ["abcb"]\nOutput: []\n\n\nConstraints:\n\n * m == board.length\n * n == board[i].length\n * 1 <= m, n <= 12\n * board[i][j] is a lowercase English letter.\n * 1 <= words.length <= 3 * 104\n * 1 <= words[i].length <= 10\n * words[i] consists of lowercase English letters.\n * All the strings of words are unique.'
	},
	{
		id: 64,
		name: 'Kth Largest Element In a Stream',
		link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
		description:
			'Kth Largest Element in a Stream - Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.\n\nImplement KthLargest class:\n\n * KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.\n * int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.\n\n\nExample 1:\n\n\nInput\n["KthLargest", "add", "add", "add", "add", "add"]\n[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]\nOutput\n[null, 4, 5, 5, 8, 8]\n\nExplanation\nKthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);\nkthLargest.add(3);   // return 4\nkthLargest.add(5);   // return 5\nkthLargest.add(10);  // return 5\nkthLargest.add(9);   // return 8\nkthLargest.add(4);   // return 8\n\n\nConstraints:\n\n * 1 <= k <= 104\n * 0 <= nums.length <= 104\n * -104 <= nums[i] <= 104\n * -104 <= val <= 104\n * At most 104 calls will be made to add.\n * It is guaranteed that there will be at least k elements in the array when you search for the kth element.'
	},
	{
		id: 65,
		name: 'Last Stone Weight',
		link: 'https://leetcode.com/problems/last-stone-weight/',
		description:
			"You are given an array of integers stones where stones[i] is the weight of the ith stone.\n\nWe are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:\n\n * If x == y, both stones are destroyed, and\n * If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.\n\nAt the end of the game, there is at most one stone left.\n\nReturn the weight of the last remaining stone. If there are no stones left, return 0.\n\n\nExample 1:\n\n\nInput: stones = [2,7,4,1,8,1]\nOutput: 1\nExplanation: \nWe combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,\nwe combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,\nwe combine 2 and 1 to get 1 so the array converts to [1,1,1] then,\nwe combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.\n\n\nExample 2:\n\n\nInput: stones = [1]\nOutput: 1\n\n\nConstraints:\n\n * 1 <= stones.length <= 30\n * 1 <= stones[i] <= 1000"
	},
	{
		id: 66,
		name: 'K Closest Points to Origin',
		link: 'https://leetcode.com/problems/k-closest-points-to-origin/',
		description:
			'Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).\n\nThe distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).\n\nYou may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg]\n\n\nInput: points = [[1,3],[-2,2]], k = 1\nOutput: [[-2,2]]\nExplanation:\nThe distance between (1, 3) and the origin is sqrt(10).\nThe distance between (-2, 2) and the origin is sqrt(8).\nSince sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.\nWe only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].\n\n\nExample 2:\n\n\nInput: points = [[3,3],[5,-1],[-2,4]], k = 2\nOutput: [[3,3],[-2,4]]\nExplanation: The answer [[-2,4],[3,3]] would also be accepted.\n\n\nConstraints:\n\n * 1 <= k <= points.length <= 104\n * -104 <= xi, yi <= 104'
	},
	{
		id: 67,
		name: 'Kth Largest Element In An Array',
		link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
		description:
			'Kth Largest Element in an Array - Given an integer array nums and an integer k, return the kth largest element in the array.\n\nNote that it is the kth largest element in the sorted order, not the kth distinct element.\n\nCan you solve it without sorting?\n\n\nExample 1:\n\nInput: nums = [3,2,1,5,6,4], k = 2\nOutput: 5\n\n\nExample 2:\n\nInput: nums = [3,2,3,1,2,4,5,5,6], k = 4\nOutput: 4\n\n\nConstraints:\n\n * 1 <= k <= nums.length <= 105\n * -104 <= nums[i] <= 104'
	},
	{
		id: 68,
		name: 'Task Scheduler',
		link: 'https://leetcode.com/problems/task-scheduler/',
		description:
			'Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.\n\nHowever, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.\n\nReturn the least number of units of times that the CPU will take to finish all the given tasks.\n\n\nExample 1:\n\n\nInput: tasks = ["A","A","A","B","B","B"], n = 2\nOutput: 8\nExplanation: \nA -> B -> idle -> A -> B -> idle -> A -> B\nThere is at least 2 units of time between any two same tasks.\n\n\nExample 2:\n\n\nInput: tasks = ["A","A","A","B","B","B"], n = 0\nOutput: 6\nExplanation: On this case any permutation of size 6 would work since n = 0.\n["A","A","A","B","B","B"]\n["A","B","A","B","A","B"]\n["B","B","B","A","A","A"]\n...\nAnd so on.\n\n\nExample 3:\n\n\nInput: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2\nOutput: 16\nExplanation: \nOne possible solution is\nA -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A\n\n\nConstraints:\n\n * 1 <= task.length <= 104\n * tasks[i] is upper-case English letter.\n * The integer n is in the range [0, 100].'
	},
	{
		id: 69,
		name: 'Design Twitter',
		link: 'https://leetcode.com/problems/design-twitter/',
		description:
			'Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user\'s news feed.\n\nImplement the Twitter class:\n\n * Twitter() Initializes your twitter object.\n * void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.\n * List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user\'s news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.\n * void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.\n * void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.\n\n\nExample 1:\n\n\nInput\n["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]\n[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]\nOutput\n[null, null, [5], null, null, [6, 5], null, [5]]\n\nExplanation\nTwitter twitter = new Twitter();\ntwitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).\ntwitter.getNewsFeed(1);  // User 1\'s news feed should return a list with 1 tweet id -> [5]. return [5]\ntwitter.follow(1, 2);    // User 1 follows user 2.\ntwitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).\ntwitter.getNewsFeed(1);  // User 1\'s news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.\ntwitter.unfollow(1, 2);  // User 1 unfollows user 2.\ntwitter.getNewsFeed(1);  // User 1\'s news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.\n\n\nConstraints:\n\n * 1 <= userId, followerId, followeeId <= 500\n * 0 <= tweetId <= 104\n * All the tweets have unique IDs.\n * At most 3 * 104 calls will be made to postTweet, getNewsFeed, follow, and unfollow.'
	},
	{
		id: 70,
		name: 'Find Median From Data Stream',
		link: 'https://leetcode.com/problems/find-median-from-data-stream/',
		description:
			'Find Median from Data Stream - The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.\n\n * For example, for arr = [2,3,4], the median is 3.\n * For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.\n\nImplement the MedianFinder class:\n\n * MedianFinder() initializes the MedianFinder object.\n * void addNum(int num) adds the integer num from the data stream to the data structure.\n * double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.\n\n\nExample 1:\n\n\nInput\n["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]\n[[], [1], [2], [], [3], []]\nOutput\n[null, null, null, 1.5, null, 2.0]\n\nExplanation\nMedianFinder medianFinder = new MedianFinder();\nmedianFinder.addNum(1);    // arr = [1]\nmedianFinder.addNum(2);    // arr = [1, 2]\nmedianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)\nmedianFinder.addNum(3);    // arr[1, 2, 3]\nmedianFinder.findMedian(); // return 2.0\n\n\nConstraints:\n\n * -105 <= num <= 105\n * There will be at least one element in the data structure before calling findMedian.\n * At most 5 * 104 calls will be made to addNum and findMedian.\n\n\nFollow up:\n\n * If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?\n * If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?'
	},
	{
		id: 71,
		name: 'Subsets',
		link: 'https://leetcode.com/problems/subsets/',
		description:
			'Given an integer array nums of unique elements, return all possible subsets (the power set).\n\nThe solution set must not contain duplicate subsets. Return the solution in any order.\n\n\nExample 1:\n\n\nInput: nums = [1,2,3]\nOutput: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n\n\nExample 2:\n\n\nInput: nums = [0]\nOutput: [[],[0]]\n\n\nConstraints:\n\n * 1 <= nums.length <= 10\n * -10 <= nums[i] <= 10\n * All the numbers of nums are unique.'
	},
	{
		id: 72,
		name: 'Combination Sum',
		link: 'https://leetcode.com/problems/combination-sum/',
		description:
			'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.\n\nThe same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.\n\nThe test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.\n\n\nExample 1:\n\n\nInput: candidates = [2,3,6,7], target = 7\nOutput: [[2,2,3],[7]]\nExplanation:\n2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.\n7 is a candidate, and 7 = 7.\nThese are the only two combinations.\n\n\nExample 2:\n\n\nInput: candidates = [2,3,5], target = 8\nOutput: [[2,2,2,2],[2,3,3],[3,5]]\n\n\nExample 3:\n\n\nInput: candidates = [2], target = 1\nOutput: []\n\n\nConstraints:\n\n * 1 <= candidates.length <= 30\n * 2 <= candidates[i] <= 40\n * All elements of candidates are distinct.\n * 1 <= target <= 40'
	},
	{
		id: 73,
		name: 'Permutations',
		link: 'https://leetcode.com/problems/permutations/',
		description:
			'Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.\n\n\nExample 1:\n\nInput: nums = [1,2,3]\nOutput: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n\n\nExample 2:\n\nInput: nums = [0,1]\nOutput: [[0,1],[1,0]]\n\n\nExample 3:\n\nInput: nums = [1]\nOutput: [[1]]\n\n\nConstraints:\n\n * 1 <= nums.length <= 6\n * -10 <= nums[i] <= 10\n * All the integers of nums are unique.'
	},
	{
		id: 74,
		name: 'Subsets II',
		link: 'https://leetcode.com/problems/subsets-ii/',
		description:
			'Given an integer array nums that may contain duplicates, return all possible subsets (the power set).\n\nThe solution set must not contain duplicate subsets. Return the solution in any order.\n\n\nExample 1:\n\nInput: nums = [1,2,2]\nOutput: [[],[1],[1,2],[1,2,2],[2],[2,2]]\n\n\nExample 2:\n\nInput: nums = [0]\nOutput: [[],[0]]\n\n\nConstraints:\n\n * 1 <= nums.length <= 10\n * -10 <= nums[i] <= 10'
	},
	{
		id: 75,
		name: 'Combination Sum II',
		link: 'https://leetcode.com/problems/combination-sum-ii/',
		description:
			'Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.\n\nEach number in candidates may only be used once in the combination.\n\nNote: The solution set must not contain duplicate combinations.\n\n\nExample 1:\n\n\nInput: candidates = [10,1,2,7,6,1,5], target = 8\nOutput: \n[\n[1,1,6],\n[1,2,5],\n[1,7],\n[2,6]\n]\n\n\nExample 2:\n\n\nInput: candidates = [2,5,2,1,2], target = 5\nOutput: \n[\n[1,2,2],\n[5]\n]\n\n\nConstraints:\n\n * 1 <= candidates.length <= 100\n * 1 <= candidates[i] <= 50\n * 1 <= target <= 30'
	},
	{
		id: 76,
		name: 'Word Search',
		link: 'https://leetcode.com/problems/word-search/',
		description:
			'Given an m x n grid of characters board and a string word, return true if word exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/11/04/word2.jpg]\n\n\nInput: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"\nOutput: true\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg]\n\n\nInput: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"\nOutput: true\n\n\nExample 3:\n\n[https://assets.leetcode.com/uploads/2020/10/15/word3.jpg]\n\n\nInput: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"\nOutput: false\n\n\nConstraints:\n\n * m == board.length\n * n = board[i].length\n * 1 <= m, n <= 6\n * 1 <= word.length <= 15\n * board and word consists of only lowercase and uppercase English letters.\n\n\nFollow up: Could you use search pruning to make your solution faster with a larger board?'
	},
	{
		id: 77,
		name: 'Palindrome Partitioning',
		link: 'https://leetcode.com/problems/palindrome-partitioning/',
		description:
			'Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.\n\n\nExample 1:\n\nInput: s = "aab"\nOutput: [["a","a","b"],["aa","b"]]\n\n\nExample 2:\n\nInput: s = "a"\nOutput: [["a"]]\n\n\nConstraints:\n\n * 1 <= s.length <= 16\n * s contains only lowercase English letters.'
	},
	{
		id: 78,
		name: 'Letter Combinations of a Phone Number',
		link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
		description:
			'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.\n\nA mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.\n\n[https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png]\n\n\nExample 1:\n\n\nInput: digits = "23"\nOutput: ["ad","ae","af","bd","be","bf","cd","ce","cf"]\n\n\nExample 2:\n\n\nInput: digits = ""\nOutput: []\n\n\nExample 3:\n\n\nInput: digits = "2"\nOutput: ["a","b","c"]\n\n\nConstraints:\n\n * 0 <= digits.length <= 4\n * digits[i] is a digit in the range [\'2\', \'9\'].'
	},
	{
		id: 79,
		name: 'N Queens',
		link: 'https://leetcode.com/problems/n-queens/',
		description:
			'N-Queens - The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.\n\nGiven an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.\n\nEach solution contains a distinct board configuration of the n-queens\' placement, where \'Q\' and \'.\' both indicate a queen and an empty space, respectively.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/11/13/queens.jpg]\n\n\nInput: n = 4\nOutput: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\nExplanation: There exist two distinct solutions to the 4-queens puzzle as shown above\n\n\nExample 2:\n\n\nInput: n = 1\nOutput: [["Q"]]\n\n\nConstraints:\n\n * 1 <= n <= 9'
	},
	{
		id: 80,
		name: 'Number of Islands',
		link: 'https://leetcode.com/problems/number-of-islands/',
		description:
			'Given an m x n 2D binary grid grid which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.\n\n\nExample 1:\n\n\nInput: grid = [\n  ["1","1","1","1","0"],\n  ["1","1","0","1","0"],\n  ["1","1","0","0","0"],\n  ["0","0","0","0","0"]\n]\nOutput: 1\n\n\nExample 2:\n\n\nInput: grid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]\nOutput: 3\n\n\nConstraints:\n\n * m == grid.length\n * n == grid[i].length\n * 1 <= m, n <= 300\n * grid[i][j] is \'0\' or \'1\'.'
	},
	{
		id: 81,
		name: 'Clone Graph',
		link: 'https://leetcode.com/problems/clone-graph/',
		description:
			"Given a reference of a node in a connected [https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph] undirected graph.\n\nReturn a deep copy [https://en.wikipedia.org/wiki/Object_copying#Deep_copy] (clone) of the graph.\n\nEach node in the graph contains a value (int) and a list (List[Node]) of its neighbors.\n\n\nclass Node {\n    public int val;\n    public List<Node> neighbors;\n}\n\n\nTest case format:\n\nFor simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.\n\nAn adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.\n\nThe given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png]\n\n\nInput: adjList = [[2,4],[1,3],[2,4],[1,3]]\nOutput: [[2,4],[1,3],[2,4],[1,3]]\nExplanation: There are 4 nodes in the graph.\n1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/01/07/graph.png]\n\n\nInput: adjList = [[]]\nOutput: [[]]\nExplanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.\n\n\nExample 3:\n\n\nInput: adjList = []\nOutput: []\nExplanation: This an empty graph, it does not have any nodes.\n\n\nConstraints:\n\n * The number of nodes in the graph is in the range [0, 100].\n * 1 <= Node.val <= 100\n * Node.val is unique for each node.\n * There are no repeated edges and no self-loops in the graph.\n * The Graph is connected and all nodes can be visited starting from the given node."
	},
	{
		id: 82,
		name: 'Max Area of Island',
		link: 'https://leetcode.com/problems/max-area-of-island/',
		description:
			"You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.\n\nThe area of an island is the number of cells with a value 1 in the island.\n\nReturn the maximum area of an island in grid. If there is no island, return 0.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg]\n\n\nInput: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]\nOutput: 6\nExplanation: The answer is not 11, because the island must be connected 4-directionally.\n\n\nExample 2:\n\n\nInput: grid = [[0,0,0,0,0,0,0,0]]\nOutput: 0\n\n\nConstraints:\n\n * m == grid.length\n * n == grid[i].length\n * 1 <= m, n <= 50\n * grid[i][j] is either 0 or 1."
	},
	{
		id: 83,
		name: 'Pacific Atlantic Water Flow',
		link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
		description:
			"There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.\n\nThe island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).\n\nThe island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.\n\nReturn a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg]\n\n\nInput: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\nOutput: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\nExplanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:\n[0,4]: [0,4] -> Pacific Ocean \n       [0,4] -> Atlantic Ocean\n[1,3]: [1,3] -> [0,3] -> Pacific Ocean \n       [1,3] -> [1,4] -> Atlantic Ocean\n[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean \n       [1,4] -> Atlantic Ocean\n[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean \n       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean\n[3,0]: [3,0] -> Pacific Ocean \n       [3,0] -> [4,0] -> Atlantic Ocean\n[3,1]: [3,1] -> [3,0] -> Pacific Ocean \n       [3,1] -> [4,1] -> Atlantic Ocean\n[4,0]: [4,0] -> Pacific Ocean \n       [4,0] -> Atlantic Ocean\nNote that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.\n\n\nExample 2:\n\n\nInput: heights = [[1]]\nOutput: [[0,0]]\nExplanation: The water can flow from the only cell to the Pacific and Atlantic oceans.\n\n\nConstraints:\n\n * m == heights.length\n * n == heights[r].length\n * 1 <= m, n <= 200\n * 0 <= heights[r][c] <= 105"
	},
	{
		id: 84,
		name: 'Surrounded Regions',
		link: 'https://leetcode.com/problems/surrounded-regions/',
		description:
			'Given an m x n matrix board containing \'X\' and \'O\', capture all regions that are 4-directionally surrounded by \'X\'.\n\nA region is captured by flipping all \'O\'s into \'X\'s in that surrounded region.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg]\n\n\nInput: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]\nOutput: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]\nExplanation: Notice that an \'O\' should not be flipped if:\n- It is on the border, or\n- It is adjacent to an \'O\' that should not be flipped.\nThe bottom \'O\' is on the border, so it is not flipped.\nThe other three \'O\' form a surrounded region, so they are flipped.\n\n\nExample 2:\n\n\nInput: board = [["X"]]\nOutput: [["X"]]\n\n\nConstraints:\n\n * m == board.length\n * n == board[i].length\n * 1 <= m, n <= 200\n * board[i][j] is \'X\' or \'O\'.'
	},
	{
		id: 85,
		name: 'Rotting Oranges',
		link: 'https://leetcode.com/problems/rotting-oranges/',
		description:
			'You are given an m x n grid where each cell can have one of three values:\n\n * 0 representing an empty cell,\n * 1 representing a fresh orange, or\n * 2 representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2019/02/16/oranges.png]\n\n\nInput: grid = [[2,1,1],[1,1,0],[0,1,1]]\nOutput: 4\n\n\nExample 2:\n\n\nInput: grid = [[2,1,1],[0,1,1],[1,0,1]]\nOutput: -1\nExplanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.\n\n\nExample 3:\n\n\nInput: grid = [[0,2]]\nOutput: 0\nExplanation: Since there are already no fresh oranges at minute 0, the answer is just 0.\n\n\nConstraints:\n\n * m == grid.length\n * n == grid[i].length\n * 1 <= m, n <= 10\n * grid[i][j] is 0, 1, or 2.'
	},
	{
		id: 86,
		name: 'Walls And Gates',
		link: 'https://www.lintcode.com/problem/663/',
		description:
			'Powerful coding training system. LintCode has the most interview problems covering Google, Facebook, Linkedin, Amazon, Microsoft and so on. We provide Chinese and English versions for coders around the world.'
	},
	{
		id: 87,
		name: 'Course Schedule',
		link: 'https://leetcode.com/problems/course-schedule/',
		description:
			'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n\n * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\n\nReturn true if you can finish all courses. Otherwise, return false.\n\n\nExample 1:\n\n\nInput: numCourses = 2, prerequisites = [[1,0]]\nOutput: true\nExplanation: There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0. So it is possible.\n\n\nExample 2:\n\n\nInput: numCourses = 2, prerequisites = [[1,0],[0,1]]\nOutput: false\nExplanation: There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.\n\n\nConstraints:\n\n * 1 <= numCourses <= 2000\n * 0 <= prerequisites.length <= 5000\n * prerequisites[i].length == 2\n * 0 <= ai, bi < numCourses\n * All the pairs prerequisites[i] are unique.'
	},
	{
		id: 88,
		name: 'Course Schedule II',
		link: 'https://leetcode.com/problems/course-schedule-ii/',
		description:
			'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n\n * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\n\nReturn the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.\n\n\nExample 1:\n\n\nInput: numCourses = 2, prerequisites = [[1,0]]\nOutput: [0,1]\nExplanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].\n\n\nExample 2:\n\n\nInput: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\nOutput: [0,2,1,3]\nExplanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.\nSo one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].\n\n\nExample 3:\n\n\nInput: numCourses = 1, prerequisites = []\nOutput: [0]\n\n\nConstraints:\n\n * 1 <= numCourses <= 2000\n * 0 <= prerequisites.length <= numCourses * (numCourses - 1)\n * prerequisites[i].length == 2\n * 0 <= ai, bi < numCourses\n * ai != bi\n * All the pairs [ai, bi] are distinct.'
	},
	{
		id: 89,
		name: 'Redundant Connection',
		link: 'https://leetcode.com/problems/redundant-connection/',
		description:
			'In this problem, a tree is an undirected graph that is connected and has no cycles.\n\nYou are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.\n\nReturn an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/05/02/reduntant1-1-graph.jpg]\n\n\nInput: edges = [[1,2],[1,3],[2,3]]\nOutput: [2,3]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/05/02/reduntant1-2-graph.jpg]\n\n\nInput: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]\nOutput: [1,4]\n\n\nConstraints:\n\n * n == edges.length\n * 3 <= n <= 1000\n * edges[i].length == 2\n * 1 <= ai < bi <= edges.length\n * ai != bi\n * There are no repeated edges.\n * The given graph is connected.'
	},
	{
		id: 90,
		name: 'Number of Connected Components In An Undirected Graph',
		link: 'https://www.lintcode.com/problem/3651/',
		description:
			'Powerful coding training system. LintCode has the most interview problems covering Google, Facebook, Linkedin, Amazon, Microsoft and so on. We provide Chinese and English versions for coders around the world.'
	},
	{
		id: 91,
		name: 'Graph Valid Tree',
		link: 'https://www.lintcode.com/problem/178/',
		description:
			'Powerful coding training system. LintCode has the most interview problems covering Google, Facebook, Linkedin, Amazon, Microsoft and so on. We provide Chinese and English versions for coders around the world.'
	},
	{
		id: 92,
		name: 'Word Ladder',
		link: 'https://leetcode.com/problems/word-ladder/',
		description:
			'A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:\n\n * Every adjacent pair of words differs by a single letter.\n * Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.\n * sk == endWord\n\nGiven two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.\n\n\nExample 1:\n\n\nInput: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]\nOutput: 5\nExplanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.\n\n\nExample 2:\n\n\nInput: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]\nOutput: 0\nExplanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.\n\n\nConstraints:\n\n * 1 <= beginWord.length <= 10\n * endWord.length == beginWord.length\n * 1 <= wordList.length <= 5000\n * wordList[i].length == beginWord.length\n * beginWord, endWord, and wordList[i] consist of lowercase English letters.\n * beginWord != endWord\n * All the words in wordList are unique.'
	},
	{
		id: 93,
		name: 'Reconstruct Itinerary',
		link: 'https://leetcode.com/problems/reconstruct-itinerary/',
		description:
			'You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.\n\nAll of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.\n\n * For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].\n\nYou may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/03/14/itinerary1-graph.jpg]\n\n\nInput: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]\nOutput: ["JFK","MUC","LHR","SFO","SJC"]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/03/14/itinerary2-graph.jpg]\n\n\nInput: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]\nOutput: ["JFK","ATL","JFK","SFO","ATL","SFO"]\nExplanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.\n\n\nConstraints:\n\n * 1 <= tickets.length <= 300\n * tickets[i].length == 2\n * fromi.length == 3\n * toi.length == 3\n * fromi and toi consist of uppercase English letters.\n * fromi != toi'
	},
	{
		id: 94,
		name: 'Min Cost to Connect All Points',
		link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/',
		description:
			'You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].\n\nThe cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.\n\nReturn the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/08/26/d.png]\n\n\nInput: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]\nOutput: 20\nExplanation: \n[https://assets.leetcode.com/uploads/2020/08/26/c.png]\nWe can connect the points as shown above to get the minimum cost of 20.\nNotice that there is a unique path between every pair of points.\n\n\nExample 2:\n\n\nInput: points = [[3,12],[-2,5],[-4,1]]\nOutput: 18\n\n\nConstraints:\n\n * 1 <= points.length <= 1000\n * -106 <= xi, yi <= 106\n * All pairs (xi, yi) are distinct.'
	},
	{
		id: 95,
		name: 'Network Delay Time',
		link: 'https://leetcode.com/problems/network-delay-time/',
		description:
			'You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.\n\nWe will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2019/05/23/931_example_1.png]\n\n\nInput: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2\nOutput: 2\n\n\nExample 2:\n\n\nInput: times = [[1,2,1]], n = 2, k = 1\nOutput: 1\n\n\nExample 3:\n\n\nInput: times = [[1,2,1]], n = 2, k = 2\nOutput: -1\n\n\nConstraints:\n\n * 1 <= k <= n <= 100\n * 1 <= times.length <= 6000\n * times[i].length == 3\n * 1 <= ui, vi <= n\n * ui != vi\n * 0 <= wi <= 100\n * All the pairs (ui, vi) are unique. (i.e., no multiple edges.)'
	},
	{
		id: 96,
		name: 'Swim In Rising Water',
		link: 'https://leetcode.com/problems/swim-in-rising-water/',
		description:
			'Swim in Rising Water - You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).\n\nThe rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.\n\nReturn the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/06/29/swim1-grid.jpg]\n\n\nInput: grid = [[0,2],[1,3]]\nOutput: 3\nExplanation:\nAt time 0, you are in grid location (0, 0).\nYou cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.\nYou cannot reach point (1, 1) until time 3.\nWhen the depth of water is 3, we can swim anywhere inside the grid.\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/06/29/swim2-grid-1.jpg]\n\n\nInput: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]\nOutput: 16\nExplanation: The final route is shown.\nWe need to wait until time 16 so that (0, 0) and (4, 4) are connected.\n\n\nConstraints:\n\n * n == grid.length\n * n == grid[i].length\n * 1 <= n <= 50\n * 0 <= grid[i][j] < n2\n * Each value grid[i][j] is unique.'
	},
	{
		id: 97,
		name: 'Alien Dictionary',
		link: 'https://www.lintcode.com/problem/892/',
		description:
			'Powerful coding training system. LintCode has the most interview problems covering Google, Facebook, Linkedin, Amazon, Microsoft and so on. We provide Chinese and English versions for coders around the world.'
	},
	{
		id: 98,
		name: 'Cheapest Flights Within K Stops',
		link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
		description:
			'There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.\n\nYou are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-3drawio.png]\n\n\nInput: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1\nOutput: 700\nExplanation:\nThe graph is shown above.\nThe optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.\nNote that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-1drawio.png]\n\n\nInput: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1\nOutput: 200\nExplanation:\nThe graph is shown above.\nThe optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.\n\n\nExample 3:\n\n[https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png]\n\n\nInput: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0\nOutput: 500\nExplanation:\nThe graph is shown above.\nThe optimal path with no stops from city 0 to 2 is marked in red and has cost 500.\n\n\nConstraints:\n\n * 1 <= n <= 100\n * 0 <= flights.length <= (n * (n - 1) / 2)\n * flights[i].length == 3\n * 0 <= fromi, toi < n\n * fromi != toi\n * 1 <= pricei <= 104\n * There will not be any multiple flights between two cities.\n * 0 <= src, dst, k < n\n * src != dst'
	},
	{
		id: 99,
		name: 'Climbing Stairs',
		link: 'https://leetcode.com/problems/climbing-stairs/',
		description:
			'You are climbing a staircase. It takes n steps to reach the top.\n\nEach time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n\n\nExample 1:\n\n\nInput: n = 2\nOutput: 2\nExplanation: There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps\n\n\nExample 2:\n\n\nInput: n = 3\nOutput: 3\nExplanation: There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step\n\n\nConstraints:\n\n * 1 <= n <= 45'
	},
	{
		id: 100,
		name: 'Min Cost Climbing Stairs',
		link: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
		description:
			'You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.\n\nYou can either start from the step with index 0, or the step with index 1.\n\nReturn the minimum cost to reach the top of the floor.\n\n\nExample 1:\n\n\nInput: cost = [10,15,20]\nOutput: 15\nExplanation: You will start at index 1.\n- Pay 15 and climb two steps to reach the top.\nThe total cost is 15.\n\n\nExample 2:\n\n\nInput: cost = [1,100,1,1,1,100,1,1,100,1]\nOutput: 6\nExplanation: You will start at index 0.\n- Pay 1 and climb two steps to reach index 2.\n- Pay 1 and climb two steps to reach index 4.\n- Pay 1 and climb two steps to reach index 6.\n- Pay 1 and climb one step to reach index 7.\n- Pay 1 and climb two steps to reach index 9.\n- Pay 1 and climb one step to reach the top.\nThe total cost is 6.\n\n\nConstraints:\n\n * 2 <= cost.length <= 1000\n * 0 <= cost[i] <= 999'
	},
	{
		id: 101,
		name: 'House Robber',
		link: 'https://leetcode.com/problems/house-robber/',
		description:
			'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.\n\n\nExample 1:\n\n\nInput: nums = [1,2,3,1]\nOutput: 4\nExplanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.\n\n\nExample 2:\n\n\nInput: nums = [2,7,9,3,1]\nOutput: 12\nExplanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).\nTotal amount you can rob = 2 + 9 + 1 = 12.\n\n\nConstraints:\n\n * 1 <= nums.length <= 100\n * 0 <= nums[i] <= 400'
	},
	{
		id: 102,
		name: 'House Robber II',
		link: 'https://leetcode.com/problems/house-robber-ii/',
		description:
			'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.\n\n\nExample 1:\n\n\nInput: nums = [2,3,2]\nOutput: 3\nExplanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.\n\n\nExample 2:\n\n\nInput: nums = [1,2,3,1]\nOutput: 4\nExplanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.\n\n\nExample 3:\n\n\nInput: nums = [1,2,3]\nOutput: 3\n\n\nConstraints:\n\n * 1 <= nums.length <= 100\n * 0 <= nums[i] <= 1000'
	},
	{
		id: 103,
		name: 'Longest Palindromic Substring',
		link: 'https://leetcode.com/problems/longest-palindromic-substring/',
		description:
			'Given a string s, return the longest palindromic substring in s.\n\n\nExample 1:\n\n\nInput: s = "babad"\nOutput: "bab"\nExplanation: "aba" is also a valid answer.\n\n\nExample 2:\n\n\nInput: s = "cbbd"\nOutput: "bb"\n\n\nConstraints:\n\n * 1 <= s.length <= 1000\n * s consist of only digits and English letters.'
	},
	{
		id: 104,
		name: 'Palindromic Substrings',
		link: 'https://leetcode.com/problems/palindromic-substrings/',
		description:
			'Given a string s, return the number of palindromic substrings in it.\n\nA string is a palindrome when it reads the same backward as forward.\n\nA substring is a contiguous sequence of characters within the string.\n\n\nExample 1:\n\n\nInput: s = "abc"\nOutput: 3\nExplanation: Three palindromic strings: "a", "b", "c".\n\n\nExample 2:\n\n\nInput: s = "aaa"\nOutput: 6\nExplanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".\n\n\nConstraints:\n\n * 1 <= s.length <= 1000\n * s consists of lowercase English letters.'
	},
	{
		id: 105,
		name: 'Decode Ways',
		link: 'https://leetcode.com/problems/decode-ways/',
		description:
			'A message containing letters from A-Z can be encoded into numbers using the following mapping:\n\n\n\'A\' -> "1"\n\'B\' -> "2"\n...\n\'Z\' -> "26"\n\n\nTo decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:\n\n * "AAJF" with the grouping (1 1 10 6)\n * "KJF" with the grouping (11 10 6)\n\nNote that the grouping (1 11 06) is invalid because "06" cannot be mapped into \'F\' since "6" is different from "06".\n\nGiven a string s containing only digits, return the number of ways to decode it.\n\nThe test cases are generated so that the answer fits in a 32-bit integer.\n\n\nExample 1:\n\n\nInput: s = "12"\nOutput: 2\nExplanation: "12" could be decoded as "AB" (1 2) or "L" (12).\n\n\nExample 2:\n\n\nInput: s = "226"\nOutput: 3\nExplanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).\n\n\nExample 3:\n\n\nInput: s = "06"\nOutput: 0\nExplanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").\n\n\nConstraints:\n\n * 1 <= s.length <= 100\n * s contains only digits and may contain leading zero(s).'
	},
	{
		id: 106,
		name: 'Coin Change',
		link: 'https://leetcode.com/problems/coin-change/',
		description:
			'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.\n\nYou may assume that you have an infinite number of each kind of coin.\n\n\nExample 1:\n\n\nInput: coins = [1,2,5], amount = 11\nOutput: 3\nExplanation: 11 = 5 + 5 + 1\n\n\nExample 2:\n\n\nInput: coins = [2], amount = 3\nOutput: -1\n\n\nExample 3:\n\n\nInput: coins = [1], amount = 0\nOutput: 0\n\n\nConstraints:\n\n * 1 <= coins.length <= 12\n * 1 <= coins[i] <= 231 - 1\n * 0 <= amount <= 104'
	},
	{
		id: 107,
		name: 'Maximum Product Subarray',
		link: 'https://leetcode.com/problems/maximum-product-subarray/',
		description:
			'Given an integer array nums, find a subarray that has the largest product, and return the product.\n\nThe test cases are generated so that the answer will fit in a 32-bit integer.\n\n\nExample 1:\n\n\nInput: nums = [2,3,-2,4]\nOutput: 6\nExplanation: [2,3] has the largest product 6.\n\n\nExample 2:\n\n\nInput: nums = [-2,0,-1]\nOutput: 0\nExplanation: The result cannot be 2, because [-2,-1] is not a subarray.\n\n\nConstraints:\n\n * 1 <= nums.length <= 2 * 104\n * -10 <= nums[i] <= 10\n * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.'
	},
	{
		id: 108,
		name: 'Word Break',
		link: 'https://leetcode.com/problems/word-break/',
		description:
			'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.\n\n\nExample 1:\n\n\nInput: s = "leetcode", wordDict = ["leet","code"]\nOutput: true\nExplanation: Return true because "leetcode" can be segmented as "leet code".\n\n\nExample 2:\n\n\nInput: s = "applepenapple", wordDict = ["apple","pen"]\nOutput: true\nExplanation: Return true because "applepenapple" can be segmented as "apple pen apple".\nNote that you are allowed to reuse a dictionary word.\n\n\nExample 3:\n\n\nInput: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]\nOutput: false\n\n\nConstraints:\n\n * 1 <= s.length <= 300\n * 1 <= wordDict.length <= 1000\n * 1 <= wordDict[i].length <= 20\n * s and wordDict[i] consist of only lowercase English letters.\n * All the strings of wordDict are unique.'
	},
	{
		id: 109,
		name: 'Longest Increasing Subsequence',
		link: 'https://leetcode.com/problems/longest-increasing-subsequence/',
		description:
			'Given an integer array nums, return the length of the longest strictly increasing subsequence.\n\n\nExample 1:\n\n\nInput: nums = [10,9,2,5,3,7,101,18]\nOutput: 4\nExplanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.\n\n\nExample 2:\n\n\nInput: nums = [0,1,0,3,2,3]\nOutput: 4\n\n\nExample 3:\n\n\nInput: nums = [7,7,7,7,7,7,7]\nOutput: 1\n\n\nConstraints:\n\n * 1 <= nums.length <= 2500\n * -104 <= nums[i] <= 104\n\n\nFollow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?'
	},
	{
		id: 110,
		name: 'Partition Equal Subset Sum',
		link: 'https://leetcode.com/problems/partition-equal-subset-sum/',
		description:
			'Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.\n\n\nExample 1:\n\n\nInput: nums = [1,5,11,5]\nOutput: true\nExplanation: The array can be partitioned as [1, 5, 5] and [11].\n\n\nExample 2:\n\n\nInput: nums = [1,2,3,5]\nOutput: false\nExplanation: The array cannot be partitioned into equal sum subsets.\n\n\nConstraints:\n\n * 1 <= nums.length <= 200\n * 1 <= nums[i] <= 100'
	},
	{
		id: 111,
		name: 'Unique Paths',
		link: 'https://leetcode.com/problems/unique-paths/',
		description:
			'There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.\n\nGiven the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.\n\nThe test cases are generated so that the answer will be less than or equal to 2 * 109.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png]\n\n\nInput: m = 3, n = 7\nOutput: 28\n\n\nExample 2:\n\n\nInput: m = 3, n = 2\nOutput: 3\nExplanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:\n1. Right -> Down -> Down\n2. Down -> Down -> Right\n3. Down -> Right -> Down\n\n\nConstraints:\n\n * 1 <= m, n <= 100'
	},
	{
		id: 112,
		name: 'Longest Common Subsequence',
		link: 'https://leetcode.com/problems/longest-common-subsequence/',
		description:
			'Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.\n\n * For example, "ace" is a subsequence of "abcde".\n\nA common subsequence of two strings is a subsequence that is common to both strings.\n\n\nExample 1:\n\n\nInput: text1 = "abcde", text2 = "ace" \nOutput: 3  \nExplanation: The longest common subsequence is "ace" and its length is 3.\n\n\nExample 2:\n\n\nInput: text1 = "abc", text2 = "abc"\nOutput: 3\nExplanation: The longest common subsequence is "abc" and its length is 3.\n\n\nExample 3:\n\n\nInput: text1 = "abc", text2 = "def"\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.\n\n\nConstraints:\n\n * 1 <= text1.length, text2.length <= 1000\n * text1 and text2 consist of only lowercase English characters.'
	},
	{
		id: 113,
		name: 'Best Time to Buy And Sell Stock With Cooldown',
		link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
		description:
			'Best Time to Buy and Sell Stock with Cooldown - You are given an array prices where prices[i] is the price of a given stock on the ith day.\n\nFind the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:\n\n * After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).\n\nNote: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).\n\n\nExample 1:\n\n\nInput: prices = [1,2,3,0,2]\nOutput: 3\nExplanation: transactions = [buy, sell, cooldown, buy, sell]\n\n\nExample 2:\n\n\nInput: prices = [1]\nOutput: 0\n\n\nConstraints:\n\n * 1 <= prices.length <= 5000\n * 0 <= prices[i] <= 1000'
	},
	{
		id: 114,
		name: 'Coin Change II',
		link: 'https://leetcode.com/problems/coin-change-ii/',
		description:
			'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.\n\nReturn the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.\n\nYou may assume that you have an infinite number of each kind of coin.\n\nThe answer is guaranteed to fit into a signed 32-bit integer.\n\n\nExample 1:\n\n\nInput: amount = 5, coins = [1,2,5]\nOutput: 4\nExplanation: there are four ways to make up the amount:\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1\n\n\nExample 2:\n\n\nInput: amount = 3, coins = [2]\nOutput: 0\nExplanation: the amount of 3 cannot be made up just with coins of 2.\n\n\nExample 3:\n\n\nInput: amount = 10, coins = [10]\nOutput: 1\n\n\nConstraints:\n\n * 1 <= coins.length <= 300\n * 1 <= coins[i] <= 5000\n * All the values of coins are unique.\n * 0 <= amount <= 5000'
	},
	{
		id: 115,
		name: 'Target Sum',
		link: 'https://leetcode.com/problems/target-sum/',
		description:
			"You are given an integer array nums and an integer target.\n\nYou want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.\n\n * For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression \"+2-1\".\n\nReturn the number of different expressions that you can build, which evaluates to target.\n\n\nExample 1:\n\n\nInput: nums = [1,1,1,1,1], target = 3\nOutput: 5\nExplanation: There are 5 ways to assign symbols to make the sum of nums be target 3.\n-1 + 1 + 1 + 1 + 1 = 3\n+1 - 1 + 1 + 1 + 1 = 3\n+1 + 1 - 1 + 1 + 1 = 3\n+1 + 1 + 1 - 1 + 1 = 3\n+1 + 1 + 1 + 1 - 1 = 3\n\n\nExample 2:\n\n\nInput: nums = [1], target = 1\nOutput: 1\n\n\nConstraints:\n\n * 1 <= nums.length <= 20\n * 0 <= nums[i] <= 1000\n * 0 <= sum(nums[i]) <= 1000\n * -1000 <= target <= 1000"
	},
	{
		id: 116,
		name: 'Interleaving String',
		link: 'https://leetcode.com/problems/interleaving-string/',
		description:
			'Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.\n\nAn interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:\n\n * s = s1 + s2 + ... + sn\n * t = t1 + t2 + ... + tm\n * |n - m| <= 1\n * The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...\n\nNote: a + b is the concatenation of strings a and b.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg]\n\n\nInput: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"\nOutput: true\nExplanation: One way to obtain s3 is:\nSplit s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".\nInterleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".\nSince s3 can be obtained by interleaving s1 and s2, we return true.\n\n\nExample 2:\n\n\nInput: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"\nOutput: false\nExplanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.\n\n\nExample 3:\n\n\nInput: s1 = "", s2 = "", s3 = ""\nOutput: true\n\n\nConstraints:\n\n * 0 <= s1.length, s2.length <= 100\n * 0 <= s3.length <= 200\n * s1, s2, and s3 consist of lowercase English letters.\n\n\nFollow up: Could you solve it using only O(s2.length) additional memory space?'
	},
	{
		id: 117,
		name: 'Longest Increasing Path In a Matrix',
		link: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
		description:
			'Longest Increasing Path in a Matrix - Given an m x n integers matrix, return the length of the longest increasing path in matrix.\n\nFrom each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/01/05/grid1.jpg]\n\n\nInput: matrix = [[9,9,4],[6,6,8],[2,1,1]]\nOutput: 4\nExplanation: The longest increasing path is [1, 2, 6, 9].\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2021/01/27/tmp-grid.jpg]\n\n\nInput: matrix = [[3,4,5],[3,2,6],[2,2,1]]\nOutput: 4\nExplanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.\n\n\nExample 3:\n\n\nInput: matrix = [[1]]\nOutput: 1\n\n\nConstraints:\n\n * m == matrix.length\n * n == matrix[i].length\n * 1 <= m, n <= 200\n * 0 <= matrix[i][j] <= 231 - 1'
	},
	{
		id: 118,
		name: 'Distinct Subsequences',
		link: 'https://leetcode.com/problems/distinct-subsequences/',
		description:
			'Given two strings s and t, return the number of distinct subsequences of s which equals t.\n\nThe test cases are generated so that the answer fits on a 32-bit signed integer.\n\n\nExample 1:\n\n\nInput: s = "rabbbit", t = "rabbit"\nOutput: 3\nExplanation:\nAs shown below, there are 3 ways you can generate "rabbit" from s.\nrabbbit\nrabbbit\nrabbbit\n\n\nExample 2:\n\n\nInput: s = "babgbag", t = "bag"\nOutput: 5\nExplanation:\nAs shown below, there are 5 ways you can generate "bag" from s.\nbabgbag\nbabgbag\nbabgbag\nbabgbag\nbabgbag\n\n\nConstraints:\n\n * 1 <= s.length, t.length <= 1000\n * s and t consist of English letters.'
	},
	{
		id: 119,
		name: 'Edit Distance',
		link: 'https://leetcode.com/problems/edit-distance/',
		description:
			"Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.\n\nYou have the following three operations permitted on a word:\n\n * Insert a character\n * Delete a character\n * Replace a character\n\n\nExample 1:\n\n\nInput: word1 = \"horse\", word2 = \"ros\"\nOutput: 3\nExplanation: \nhorse -> rorse (replace 'h' with 'r')\nrorse -> rose (remove 'r')\nrose -> ros (remove 'e')\n\n\nExample 2:\n\n\nInput: word1 = \"intention\", word2 = \"execution\"\nOutput: 5\nExplanation: \nintention -> inention (remove 't')\ninention -> enention (replace 'i' with 'e')\nenention -> exention (replace 'n' with 'x')\nexention -> exection (replace 'n' with 'c')\nexection -> execution (insert 'u')\n\n\nConstraints:\n\n * 0 <= word1.length, word2.length <= 500\n * word1 and word2 consist of lowercase English letters."
	},
	{
		id: 120,
		name: 'Burst Balloons',
		link: 'https://leetcode.com/problems/burst-balloons/',
		description:
			'You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.\n\nIf you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.\n\nReturn the maximum coins you can collect by bursting the balloons wisely.\n\n\nExample 1:\n\n\nInput: nums = [3,1,5,8]\nOutput: 167\nExplanation:\nnums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []\ncoins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167\n\nExample 2:\n\n\nInput: nums = [1,5]\nOutput: 10\n\n\nConstraints:\n\n * n == nums.length\n * 1 <= n <= 300\n * 0 <= nums[i] <= 100'
	},
	{
		id: 121,
		name: 'Regular Expression Matching',
		link: 'https://leetcode.com/problems/regular-expression-matching/',
		description:
			'Given an input string s and a pattern p, implement regular expression matching with support for \'.\' and \'*\' where:\n\n * \'.\' Matches any single character.\n * \'*\' Matches zero or more of the preceding element.\n\nThe matching should cover the entire input string (not partial).\n\n\nExample 1:\n\n\nInput: s = "aa", p = "a"\nOutput: false\nExplanation: "a" does not match the entire string "aa".\n\n\nExample 2:\n\n\nInput: s = "aa", p = "a*"\nOutput: true\nExplanation: \'*\' means zero or more of the preceding element, \'a\'. Therefore, by repeating \'a\' once, it becomes "aa".\n\n\nExample 3:\n\n\nInput: s = "ab", p = ".*"\nOutput: true\nExplanation: ".*" means "zero or more (*) of any character (.)".\n\n\nConstraints:\n\n * 1 <= s.length <= 20\n * 1 <= p.length <= 20\n * s contains only lowercase English letters.\n * p contains only lowercase English letters, \'.\', and \'*\'.\n * It is guaranteed for each appearance of the character \'*\', there will be a previous valid character to match.'
	},
	{
		id: 122,
		name: 'Maximum Subarray',
		link: 'https://leetcode.com/problems/maximum-subarray/',
		description:
			'Given an integer array nums, find the subarray with the largest sum, and return its sum.\n\n\nExample 1:\n\n\nInput: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: The subarray [4,-1,2,1] has the largest sum 6.\n\n\nExample 2:\n\n\nInput: nums = [1]\nOutput: 1\nExplanation: The subarray [1] has the largest sum 1.\n\n\nExample 3:\n\n\nInput: nums = [5,4,-1,7,8]\nOutput: 23\nExplanation: The subarray [5,4,-1,7,8] has the largest sum 23.\n\n\nConstraints:\n\n * 1 <= nums.length <= 105\n * -104 <= nums[i] <= 104\n\n\nFollow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.'
	},
	{
		id: 123,
		name: 'Jump Game',
		link: 'https://leetcode.com/problems/jump-game/',
		description:
			"You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.\n\nReturn true if you can reach the last index, or false otherwise.\n\n\nExample 1:\n\n\nInput: nums = [2,3,1,1,4]\nOutput: true\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.\n\n\nExample 2:\n\n\nInput: nums = [3,2,1,0,4]\nOutput: false\nExplanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.\n\n\nConstraints:\n\n * 1 <= nums.length <= 104\n * 0 <= nums[i] <= 105"
	},
	{
		id: 124,
		name: 'Jump Game II',
		link: 'https://leetcode.com/problems/jump-game-ii/',
		description:
			"You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].\n\nEach element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:\n\n * 0 <= j <= nums[i] and\n * i + j < n\n\nReturn the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].\n\n\nExample 1:\n\n\nInput: nums = [2,3,1,1,4]\nOutput: 2\nExplanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.\n\n\nExample 2:\n\n\nInput: nums = [2,3,0,1,4]\nOutput: 2\n\n\nConstraints:\n\n * 1 <= nums.length <= 104\n * 0 <= nums[i] <= 1000\n * It's guaranteed that you can reach nums[n - 1]."
	},
	{
		id: 125,
		name: 'Gas Station',
		link: 'https://leetcode.com/problems/gas-station/',
		description:
			"There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].\n\nYou have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.\n\nGiven two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique\n\n\nExample 1:\n\n\nInput: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\nOutput: 3\nExplanation:\nStart at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 4. Your tank = 4 - 1 + 5 = 8\nTravel to station 0. Your tank = 8 - 2 + 1 = 7\nTravel to station 1. Your tank = 7 - 3 + 2 = 6\nTravel to station 2. Your tank = 6 - 4 + 3 = 5\nTravel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.\nTherefore, return 3 as the starting index.\n\n\nExample 2:\n\n\nInput: gas = [2,3,4], cost = [3,4,3]\nOutput: -1\nExplanation:\nYou can't start at station 0 or 1, as there is not enough gas to travel to the next station.\nLet's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 0. Your tank = 4 - 3 + 2 = 3\nTravel to station 1. Your tank = 3 - 3 + 3 = 3\nYou cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.\nTherefore, you can't travel around the circuit once no matter where you start.\n\n\nConstraints:\n\n * n == gas.length == cost.length\n * 1 <= n <= 105\n * 0 <= gas[i], cost[i] <= 104"
	},
	{
		id: 126,
		name: 'Hand of Straights',
		link: 'https://leetcode.com/problems/hand-of-straights/',
		description:
			"Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.\n\nGiven an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.\n\n\nExample 1:\n\n\nInput: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3\nOutput: true\nExplanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]\n\n\nExample 2:\n\n\nInput: hand = [1,2,3,4,5], groupSize = 4\nOutput: false\nExplanation: Alice's hand can not be rearranged into groups of 4.\n\n\nConstraints:\n\n * 1 <= hand.length <= 104\n * 0 <= hand[i] <= 109\n * 1 <= groupSize <= hand.length\n\n\nNote: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/ [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/]"
	},
	{
		id: 127,
		name: 'Merge Triplets to Form Target Triplet',
		link: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/',
		description:
			'A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain.\n\nTo obtain target, you may apply the following operation on triplets any number of times (possibly zero):\n\n * Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)].\n   * For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].\n\nReturn true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise.\n\n\nExample 1:\n\n\nInput: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]\nOutput: true\nExplanation: Perform the following operations:\n- Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]\nThe target triplet [2,7,5] is now an element of triplets.\n\n\nExample 2:\n\n\nInput: triplets = [[3,4,5],[4,5,6]], target = [3,2,5]\nOutput: false\nExplanation: It is impossible to have [3,2,5] as an element because there is no 2 in any of the triplets.\n\n\nExample 3:\n\n\nInput: triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]\nOutput: true\nExplanation: Perform the following operations:\n- Choose the first and third triplets [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]. Update the third triplet to be [max(2,1), max(5,2), max(3,5)] = [2,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,2,3]].\n- Choose the third and fourth triplets [[2,5,3],[2,3,4],[2,5,5],[5,2,3]]. Update the fourth triplet to be [max(2,5), max(5,2), max(5,3)] = [5,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,5,5]].\nThe target triplet [5,5,5] is now an element of triplets.\n\n\nConstraints:\n\n * 1 <= triplets.length <= 105\n * triplets[i].length == target.length == 3\n * 1 <= ai, bi, ci, x, y, z <= 1000'
	},
	{
		id: 128,
		name: 'Partition Labels',
		link: 'https://leetcode.com/problems/partition-labels/',
		description:
			'You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.\n\nNote that the partition is done so that after concatenating all the parts in order, the resultant string should be s.\n\nReturn a list of integers representing the size of these parts.\n\n\nExample 1:\n\n\nInput: s = "ababcbacadefegdehijhklij"\nOutput: [9,7,8]\nExplanation:\nThe partition is "ababcbaca", "defegde", "hijhklij".\nThis is a partition so that each letter appears in at most one part.\nA partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.\n\n\nExample 2:\n\n\nInput: s = "eccbbbbdec"\nOutput: [10]\n\n\nConstraints:\n\n * 1 <= s.length <= 500\n * s consists of lowercase English letters.'
	},
	{
		id: 129,
		name: 'Valid Parenthesis String',
		link: 'https://leetcode.com/problems/valid-parenthesis-string/',
		description:
			"Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.\n\nThe following rules define a valid string:\n\n * Any left parenthesis '(' must have a corresponding right parenthesis ')'.\n * Any right parenthesis ')' must have a corresponding left parenthesis '('.\n * Left parenthesis '(' must go before the corresponding right parenthesis ')'.\n * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string \"\".\n\n\nExample 1:\n\nInput: s = \"()\"\nOutput: true\n\n\nExample 2:\n\nInput: s = \"(*)\"\nOutput: true\n\n\nExample 3:\n\nInput: s = \"(*))\"\nOutput: true\n\n\nConstraints:\n\n * 1 <= s.length <= 100\n * s[i] is '(', ')' or '*'."
	},
	{
		id: 130,
		name: 'Insert Interval',
		link: 'https://leetcode.com/problems/insert-interval/',
		description:
			'You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.\n\nInsert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).\n\nReturn intervals after the insertion.\n\n\nExample 1:\n\n\nInput: intervals = [[1,3],[6,9]], newInterval = [2,5]\nOutput: [[1,5],[6,9]]\n\n\nExample 2:\n\n\nInput: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\nOutput: [[1,2],[3,10],[12,16]]\nExplanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].\n\n\nConstraints:\n\n * 0 <= intervals.length <= 104\n * intervals[i].length == 2\n * 0 <= starti <= endi <= 105\n * intervals is sorted by starti in ascending order.\n * newInterval.length == 2\n * 0 <= start <= end <= 105'
	},
	{
		id: 131,
		name: 'Merge Intervals',
		link: 'https://leetcode.com/problems/merge-intervals/',
		description:
			'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.\n\n\nExample 1:\n\n\nInput: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]\nExplanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].\n\n\nExample 2:\n\n\nInput: intervals = [[1,4],[4,5]]\nOutput: [[1,5]]\nExplanation: Intervals [1,4] and [4,5] are considered overlapping.\n\n\nConstraints:\n\n * 1 <= intervals.length <= 104\n * intervals[i].length == 2\n * 0 <= starti <= endi <= 104'
	},
	{
		id: 132,
		name: 'Non Overlapping Intervals',
		link: 'https://leetcode.com/problems/non-overlapping-intervals/',
		description:
			"Non-overlapping Intervals - Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.\n\n\nExample 1:\n\n\nInput: intervals = [[1,2],[2,3],[3,4],[1,3]]\nOutput: 1\nExplanation: [1,3] can be removed and the rest of the intervals are non-overlapping.\n\n\nExample 2:\n\n\nInput: intervals = [[1,2],[1,2],[1,2]]\nOutput: 2\nExplanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.\n\n\nExample 3:\n\n\nInput: intervals = [[1,2],[2,3]]\nOutput: 0\nExplanation: You don't need to remove any of the intervals since they're already non-overlapping.\n\n\nConstraints:\n\n * 1 <= intervals.length <= 105\n * intervals[i].length == 2\n * -5 * 104 <= starti < endi <= 5 * 104"
	},
	{
		id: 133,
		name: 'Meeting Rooms',
		link: 'https://www.lintcode.com/problem/920/',
		description:
			'Powerful coding training system. LintCode has the most interview problems covering Google, Facebook, Linkedin, Amazon, Microsoft and so on. We provide Chinese and English versions for coders around the world.'
	},
	{
		id: 134,
		name: 'Meeting Rooms II',
		link: 'https://www.lintcode.com/problem/919/',
		description:
			'Powerful coding training system. LintCode has the most interview problems covering Google, Facebook, Linkedin, Amazon, Microsoft and so on. We provide Chinese and English versions for coders around the world.'
	},
	{
		id: 135,
		name: 'Minimum Interval to Include Each Query',
		link: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/',
		description:
			'You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1.\n\nYou are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1.\n\nReturn an array containing the answers to the queries.\n\n\nExample 1:\n\n\nInput: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]\nOutput: [3,3,1,4]\nExplanation: The queries are processed as follows:\n- Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.\n- Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.\n- Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.\n- Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.\n\n\nExample 2:\n\n\nInput: intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]\nOutput: [2,-1,4,6]\nExplanation: The queries are processed as follows:\n- Query = 2: The interval [2,3] is the smallest interval containing 2. The answer is 3 - 2 + 1 = 2.\n- Query = 19: None of the intervals contain 19. The answer is -1.\n- Query = 5: The interval [2,5] is the smallest interval containing 5. The answer is 5 - 2 + 1 = 4.\n- Query = 22: The interval [20,25] is the smallest interval containing 22. The answer is 25 - 20 + 1 = 6.\n\n\nConstraints:\n\n * 1 <= intervals.length <= 105\n * 1 <= queries.length <= 105\n * intervals[i].length == 2\n * 1 <= lefti <= righti <= 107\n * 1 <= queries[j] <= 107'
	},
	{
		id: 136,
		name: 'Rotate Image',
		link: 'https://leetcode.com/problems/rotate-image/',
		description:
			'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).\n\nYou have to rotate the image in-place [https://en.wikipedia.org/wiki/In-place_algorithm], which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg]\n\n\nInput: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7,4,1],[8,5,2],[9,6,3]]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg]\n\n\nInput: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\nOutput: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]\n\n\nConstraints:\n\n * n == matrix.length == matrix[i].length\n * 1 <= n <= 20\n * -1000 <= matrix[i][j] <= 1000'
	},
	{
		id: 137,
		name: 'Spiral Matrix',
		link: 'https://leetcode.com/problems/spiral-matrix/',
		description:
			'Given an m x n matrix, return all elements of the matrix in spiral order.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg]\n\n\nInput: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1,2,3,6,9,8,7,4,5]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg]\n\n\nInput: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\nOutput: [1,2,3,4,8,12,11,10,9,5,6,7]\n\n\nConstraints:\n\n * m == matrix.length\n * n == matrix[i].length\n * 1 <= m, n <= 10\n * -100 <= matrix[i][j] <= 100'
	},
	{
		id: 138,
		name: 'Set Matrix Zeroes',
		link: 'https://leetcode.com/problems/set-matrix-zeroes/',
		description:
			"Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.\n\nYou must do it in place [https://en.wikipedia.org/wiki/In-place_algorithm].\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg]\n\n\nInput: matrix = [[1,1,1],[1,0,1],[1,1,1]]\nOutput: [[1,0,1],[0,0,0],[1,0,1]]\n\n\nExample 2:\n\n[https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg]\n\n\nInput: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\nOutput: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n\n\nConstraints:\n\n * m == matrix.length\n * n == matrix[0].length\n * 1 <= m, n <= 200\n * -231 <= matrix[i][j] <= 231 - 1\n\n\nFollow up:\n\n * A straightforward solution using O(mn) space is probably a bad idea.\n * A simple improvement uses O(m + n) space, but still not the best solution.\n * Could you devise a constant space solution?"
	},
	{
		id: 139,
		name: 'Happy Number',
		link: 'https://leetcode.com/problems/happy-number/',
		description:
			'Write an algorithm to determine if a number n is happy.\n\nA happy number is a number defined by the following process:\n\n * Starting with any positive integer, replace the number by the sum of the squares of its digits.\n * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.\n * Those numbers for which this process ends in 1 are happy.\n\nReturn true if n is a happy number, and false if not.\n\n\nExample 1:\n\n\nInput: n = 19\nOutput: true\nExplanation:\n12 + 92 = 82\n82 + 22 = 68\n62 + 82 = 100\n12 + 02 + 02 = 1\n\n\nExample 2:\n\n\nInput: n = 2\nOutput: false\n\n\nConstraints:\n\n * 1 <= n <= 231 - 1'
	},
	{
		id: 140,
		name: 'Plus One',
		link: 'https://leetcode.com/problems/plus-one/',
		description:
			"You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.\n\nIncrement the large integer by one and return the resulting array of digits.\n\n\nExample 1:\n\n\nInput: digits = [1,2,3]\nOutput: [1,2,4]\nExplanation: The array represents the integer 123.\nIncrementing by one gives 123 + 1 = 124.\nThus, the result should be [1,2,4].\n\n\nExample 2:\n\n\nInput: digits = [4,3,2,1]\nOutput: [4,3,2,2]\nExplanation: The array represents the integer 4321.\nIncrementing by one gives 4321 + 1 = 4322.\nThus, the result should be [4,3,2,2].\n\n\nExample 3:\n\n\nInput: digits = [9]\nOutput: [1,0]\nExplanation: The array represents the integer 9.\nIncrementing by one gives 9 + 1 = 10.\nThus, the result should be [1,0].\n\n\nConstraints:\n\n * 1 <= digits.length <= 100\n * 0 <= digits[i] <= 9\n * digits does not contain any leading 0's."
	},
	{
		id: 141,
		name: 'Pow(x, n)',
		link: 'https://leetcode.com/problems/powx-n/',
		description:
			'Implement pow(x, n) [http://www.cplusplus.com/reference/valarray/pow/], which calculates x raised to the power n (i.e., xn).\n\n\nExample 1:\n\n\nInput: x = 2.00000, n = 10\nOutput: 1024.00000\n\n\nExample 2:\n\n\nInput: x = 2.10000, n = 3\nOutput: 9.26100\n\n\nExample 3:\n\n\nInput: x = 2.00000, n = -2\nOutput: 0.25000\nExplanation: 2-2 = 1/22 = 1/4 = 0.25\n\n\nConstraints:\n\n * -100.0 < x < 100.0\n * -231 <= n <= 231-1\n * n is an integer.\n * Either x is not zero or n > 0.\n * -104 <= xn <= 104'
	},
	{
		id: 142,
		name: 'Multiply Strings',
		link: 'https://leetcode.com/problems/multiply-strings/',
		description:
			'Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.\n\nNote: You must not use any built-in BigInteger library or convert the inputs to integer directly.\n\n\nExample 1:\n\nInput: num1 = "2", num2 = "3"\nOutput: "6"\n\n\nExample 2:\n\nInput: num1 = "123", num2 = "456"\nOutput: "56088"\n\n\nConstraints:\n\n * 1 <= num1.length, num2.length <= 200\n * num1 and num2 consist of digits only.\n * Both num1 and num2 do not contain any leading zero, except the number 0 itself.'
	},
	{
		id: 143,
		name: 'Detect Squares',
		link: 'https://leetcode.com/problems/detect-squares/',
		description:
			'You are given a stream of points on the X-Y plane. Design an algorithm that:\n\n * Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as different points.\n * Given a query point, counts the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area.\n\nAn axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis.\n\nImplement the DetectSquares class:\n\n * DetectSquares() Initializes the object with an empty data structure.\n * void add(int[] point) Adds a new point point = [x, y] to the data structure.\n * int count(int[] point) Counts the number of ways to form axis-aligned squares with point point = [x, y] as described above.\n\n\nExample 1:\n\n[https://assets.leetcode.com/uploads/2021/09/01/image.png]\n\n\nInput\n["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]\n[[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]\nOutput\n[null, null, null, null, 1, 0, null, 2]\n\nExplanation\nDetectSquares detectSquares = new DetectSquares();\ndetectSquares.add([3, 10]);\ndetectSquares.add([11, 2]);\ndetectSquares.add([3, 2]);\ndetectSquares.count([11, 10]); // return 1. You can choose:\n                               //   - The first, second, and third points\ndetectSquares.count([14, 8]);  // return 0. The query point cannot form a square with any points in the data structure.\ndetectSquares.add([11, 2]);    // Adding duplicate points is allowed.\ndetectSquares.count([11, 10]); // return 2. You can choose:\n                               //   - The first, second, and third points\n                               //   - The first, third, and fourth points\n\n\nConstraints:\n\n * point.length == 2\n * 0 <= x, y <= 1000\n * At most 3000 calls in total will be made to add and count.'
	},
	{
		id: 144,
		name: 'Single Number',
		link: 'https://leetcode.com/problems/single-number/',
		description:
			'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.\n\n\nExample 1:\n\nInput: nums = [2,2,1]\nOutput: 1\n\n\nExample 2:\n\nInput: nums = [4,1,2,1,2]\nOutput: 4\n\n\nExample 3:\n\nInput: nums = [1]\nOutput: 1\n\n\nConstraints:\n\n * 1 <= nums.length <= 3 * 104\n * -3 * 104 <= nums[i] <= 3 * 104\n * Each element in the array appears twice except for one element which appears only once.'
	},
	{
		id: 145,
		name: 'Number of 1 Bits',
		link: 'https://leetcode.com/problems/number-of-1-bits/',
		description:
			"Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight [http://en.wikipedia.org/wiki/Hamming_weight]).\n\nNote:\n\n * Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.\n * In Java, the compiler represents the signed integers using 2's complement notation [https://en.wikipedia.org/wiki/Two%27s_complement]. Therefore, in Example 3, the input represents the signed integer. -3.\n\n\nExample 1:\n\n\nInput: n = 00000000000000000000000000001011\nOutput: 3\nExplanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.\n\n\nExample 2:\n\n\nInput: n = 00000000000000000000000010000000\nOutput: 1\nExplanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.\n\n\nExample 3:\n\n\nInput: n = 11111111111111111111111111111101\nOutput: 31\nExplanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.\n\n\nConstraints:\n\n * The input must be a binary string of length 32.\n\n\nFollow up: If this function is called many times, how would you optimize it?"
	},
	{
		id: 146,
		name: 'Counting Bits',
		link: 'https://leetcode.com/problems/counting-bits/',
		description:
			"Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.\n\n\nExample 1:\n\n\nInput: n = 2\nOutput: [0,1,1]\nExplanation:\n0 --> 0\n1 --> 1\n2 --> 10\n\n\nExample 2:\n\n\nInput: n = 5\nOutput: [0,1,1,2,1,2]\nExplanation:\n0 --> 0\n1 --> 1\n2 --> 10\n3 --> 11\n4 --> 100\n5 --> 101\n\n\nConstraints:\n\n * 0 <= n <= 105\n\n\nFollow up:\n\n * It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?\n * Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?"
	},
	{
		id: 147,
		name: 'Reverse Bits',
		link: 'https://leetcode.com/problems/reverse-bits/',
		description:
			"Reverse bits of a given 32 bits unsigned integer.\n\nNote:\n\n * Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.\n * In Java, the compiler represents the signed integers using 2's complement notation [https://en.wikipedia.org/wiki/Two%27s_complement]. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.\n\n\nExample 1:\n\n\nInput: n = 00000010100101000001111010011100\nOutput:    964176192 (00111001011110000010100101000000)\nExplanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.\n\n\nExample 2:\n\n\nInput: n = 11111111111111111111111111111101\nOutput:   3221225471 (10111111111111111111111111111111)\nExplanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.\n\n\nConstraints:\n\n * The input must be a binary string of length 32\n\n\nFollow up: If this function is called many times, how would you optimize it?"
	},
	{
		id: 148,
		name: 'Missing Number',
		link: 'https://leetcode.com/problems/missing-number/',
		description:
			'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.\n\n\nExample 1:\n\n\nInput: nums = [3,0,1]\nOutput: 2\nExplanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.\n\n\nExample 2:\n\n\nInput: nums = [0,1]\nOutput: 2\nExplanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.\n\n\nExample 3:\n\n\nInput: nums = [9,6,4,2,3,5,7,0,1]\nOutput: 8\nExplanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.\n\n\nConstraints:\n\n * n == nums.length\n * 1 <= n <= 104\n * 0 <= nums[i] <= n\n * All the numbers of nums are unique.\n\n\nFollow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?'
	},
	{
		id: 149,
		name: 'Sum of Two Integers',
		link: 'https://leetcode.com/problems/sum-of-two-integers/',
		description:
			'Given two integers a and b, return the sum of the two integers without using the operators + and -.\n\n\nExample 1:\n\nInput: a = 1, b = 2\nOutput: 3\n\n\nExample 2:\n\nInput: a = 2, b = 3\nOutput: 5\n\n\nConstraints:\n\n * -1000 <= a, b <= 1000'
	},
	{
		id: 150,
		name: 'Reverse Integer',
		link: 'https://leetcode.com/problems/reverse-integer/',
		description:
			'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.\n\nAssume the environment does not allow you to store 64-bit integers (signed or unsigned).\n\n\nExample 1:\n\n\nInput: x = 123\nOutput: 321\n\n\nExample 2:\n\n\nInput: x = -123\nOutput: -321\n\n\nExample 3:\n\n\nInput: x = 120\nOutput: 21\n\n\nConstraints:\n\n * -231 <= x <= 231 - 1'
	}
];
