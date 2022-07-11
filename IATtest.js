define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Zero', //Will appear in the data.
			title : {
				media : {word : 'Zero'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'zero sugar'}, 
    			{word : 'zero emmision'}, 
    			{word : 'zero fat'}, 
    			{word : 'zero interest'}, 
    			{word : 'zero gluten'}, 
    			{word : 'zero gravity'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'free', //Will appear in the data.
			title : {
				media : {word : 'Free'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'sugar free'}, 
    			{word : 'emmision free'}, 
    			{word : 'fat free'}, 
    			{word : 'interest free'}, 
    			{word : 'gluten free'}, 
    			{word : 'gravity free'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		attribute1 :
		{
			name : 'Definitive',
			title : {
				media : {word : 'Definitive'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'definitive'},
				{word: 'actual'},
				{word: 'clearcut'},
				{word: 'precise'},
				{word: 'reliable'},
				{word: 'specific'},
				{word: 'unambigious'},
				{word: 'absolute'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Ambigious',
			title : {
				media : {word : 'Ambigious'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'ambigious'},
				{word: 'vague'},
				{word: 'indefinite'},
				{word: 'inexact'},
				{word: 'inconclusive'},
				{word: 'imprecise'},
				{word: 'questionable'},
				{word: 'unreliable'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
