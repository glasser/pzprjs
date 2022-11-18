/* dominion.js */

ui.debug.addDebugData("dominion", {
	url: "5/5/h2l2g3k1h1i2",
	failcheck: [
		[
			"csGt2",
			"pzprv3/dominion/5/5/. . 2 . . /. . . . 2 /. 3 . . . /. . 1 . . /1 . . . 2 /. . . . . /. . . . . /. . . # . /. . . # . /. . . # . /"
		],
		[
			"csLt2",
			"pzprv3/dominion/5/5/. . 2 . . /. . . . 2 /. 3 . . . /. . 1 . . /1 . . . 2 /# . . . . /. # . . . /. . # . . /# # . # . /. . . # . /"
		],
		[
			"bkPlNum",
			"pzprv3/dominion/5/5/. . 2 . . /. . . . 2 /. 3 . . . /. . 1 . . /1 . . . 2 /# # . . . /. . # . . /. . # . . /. . . # . /. . . # . /"
		],
		[
			"bkSepNum",
			"pzprv3/dominion/5/5/. . 2 . . /. . . . 2 /. 3 . . . /. . 1 . . /1 . . . 2 /# # . # # /. . # . . /. . # . . /# # . # . /. . . # . /"
		],
		[
			"bkNoNum",
			"pzprv3/dominion/5/5/. . 2 . . /. . . . 2 /. 3 . . . /. . 1 . . /1 . . . 2 /. # . . . /. # . . . /# . . . . /# . . . . /. . . . . /"
		],
		[
			null,
			"pzprv3/dominion/5/5/. . 2 . . /. . . . 2 /. 3 . . . /. . 1 . . /1 . . . 2 /# # + + + /+ + # + + /+ + # + + /# # + # + /+ + + # + /"
		]
	],
	inputs: [
		{ input: ["playmode", "newboard,4,4"] },
		{
			input: [
				"mouse,left, 4,0, 4,4, 2,4, 2,6",
				"mouse,left, 0,6, 6,6, 6,2, 8,2"
			],
			result:
				"pzprv3/dominion/4/4/. . . . /. . . . /. . . . /. . . . /. . # . /. . # . /. . . . /# # . . /"
		}
	]
});