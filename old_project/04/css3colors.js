$(function () {
	$('#css3colorsV2').highcharts({
		series: [{
			type: "treemap",
            layoutAlgorithm: 'stripes',
            alternateStartingDirection: true,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: false,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        fontSize: '10px',
                        fontWeight: 'bold'
                    }
                }
            }],
			data: [{
                name: 'Black',
				color: "black",
                value: 16473

			}, {
                name: 'Darkslategrayk',
				color: "darkslategray",
                value: 13633

			}, {
                name: 'Darkolivegreen',
				color: 'darkolivegreen',
                value: 10366

			},{
                name: 'Sienna',
				color: 'sienna',
                value: 6891
			},{
                name: 'Dimgrey',
				color: 'dimgrey',
                value: 6246


			},{
                name: 'Saddlebrown',
				color: 'saddlebrown',
                value: 4853

			},{
                name: 'Grey',
				color: 'grey',
                value: 4538

			},{
                name: 'Rosybrow',
				color: 'rosybrown',
                value: 3490

			},{
                name: 'Peru',
				color: 'peru',
                value: 3298

			},{
                name: 'Tan',
				color: 'tan',
                value: 3163

			},{
                name: 'Silver',
				color: 'silver',
                value: 2287

			},{
                name: 'Darkgrey',
				color: 'darkgrey',
                value: 2040

			},{
                name: 'Darkkhaki',
				color: 'darkkhaki',
                value: 1892

			},{
                name: 'Burlywood',
				color: 'burlywood',
                value: 1302

			},{
                name: 'Lightgray',
				color: 'lightgray',
                value: 1199

			},{
                name: 'Wheat',
				color: 'wheat',
                value: 1155

			},{
                name: 'Maroon',
				color: 'maroon',
                value: 732

			},{
                name: 'Gainsboro',
				color: 'gainsboro',
                value: 705

			},{
                name: 'Indianred',
				color: 'indianred',
                value: 589

			},{
                name: 'Lightslategrey',
				color: 'lightslategrey',
                value: 505

			},{
                name: 'Darksalmon',
				color: 'darksalmon',
                value: 388

			},{
                name: 'Brown',
				color: 'brown',
                value: 336

			},{
                name: 'Slategray',
				color: 'slategray',
                value: 334

			},{
                name: 'Sandybrown',
				color: 'sandybrown',
                value: 282

			},{
                name: 'Antiquewhite',
				color: 'antiquewhite',
                value: 246

			},{
                name: 'Darkslateblue',
				color: 'darkslateblue',
                value: 154

			},{
                name: 'Lightsteelblue',
				color: 'lightsteelblue',
                value: 148

			},{
                name: 'Bisque',
				color: 'bisque',
                value: 145

			},{
                name: 'Linen',
				color: 'linen',
                value: 125

			},{
                name: 'Palegoldenrod',
				color: 'palegoldenrod',
                value: 124

			},{
                name: 'Chocolate',
				color: 'chocolate',
                value: 101

			},{
                name: 'Khaki',
				color: 'khaki',
                value: 91


			},{
                name: 'Whitesmoke',
				color: 'whitesmoke',
                value: 75


			},{
                name: 'Darkseagreen',
				color: 'darkseagreen',
                value: 67

			},{
                name: 'Lavender',
				color: 'lavender',
                value: 59

			},{
                name: 'Darkgoldenrod',
				color: 'darkgoldenrod',
                value: 56

			},{
                name: 'Snow',
				color: 'snow',
                value: 53

			},{
                name: 'White',
				color: 'white',
                value: 47

			},{
                name: 'Beige',
				color: 'beige',
                value: 46

			},{
                name: 'Firebrick',
				color: 'firebrick',
                value: 40

			},{
                name: 'Steelblue',                                
				color: 'steelblue',
                value: 34

			},{
                name: 'Midnightblue', 
				color: 'midnightblue',
                value: 32

			},{
                name: 'Cadetblue',
				color: 'cadetblue',
                value: 31

			},{
                name: 'Goldenrod',
				color: 'goldenrod',
                value: 31

			},{
                name: 'Navajowhite',
				color: 'navajowhite',
                value: 24

			},{
                name: 'Olivedrab',
				color: 'olivedrab',
                value: 19


			},{
                name: 'Blanchedalmond',
				color: 'blanchedalmond',
                value: 17

			},{
                name: 'Thistle',
				color: 'thistle',
                value: 16

			},{
                name: 'Oldlace',
				color: 'oldlace',
                value: 15

			},{
                name: 'Powderblue',
				color: 'powderblue',
                value: 12

			},{
                name: 'Skyblue',
				color: 'skyblue',
                value: 12

			},{
                name: 'Cornflowerblue',
				color: 'cornflowerblue',
                value: 11

			},{
                name: 'Darkred',
				color: 'darkred',
                value: 10

			},{
                name: 'Peachpuff',
				color: 'peachpuff',
                value: 10

			},{
                name: 'Mediumpurple',
				color: 'mediumpurple',
                value: 9

			},{
                name: 'Moccasin',
				color: 'moccasin',
                value: 9

			},{
                name: 'Lightblue',
				color: 'lightblue',
                value: 9

			},{
                name: 'Mistyrose',
				color: 'mistyrose',
                value: 8

			},{
                name: 'Lightpink',
				color: 'lightpink',
                value: 7

			},{
                name: 'Olive',
				color: 'olive',
                value: 5

			},{
                name: 'Papayawhip',
				color: 'papayawhip',
                value: 5

			},{
                name: 'Coral',
				color: 'coral',
                value: 4

			},{
                name: 'Ghostwhite',
				color: 'ghostwhite',
                value: 4

			},{
                name: 'Slateblue',
				color: 'slateblue',
                value: 4

			},{
                name: 'Pink',
				color: 'pink',
                value: 4

			},{
                name: 'Lightgoldenrodyellow',
				color: 'lightgoldenrodyellow',
                value: 3

			},{
                name: 'Seashell',
				color: 'seashell',
                value: 3

			},{
                name: 'Tomato',
				color: 'tomato',
                value: 3

			},{
                name: 'Floralwhite',
				color: 'floralwhite',
                value: 2

			},{
                name: 'Lavenderblush',
				color: 'lavenderblush',
                value: 2

			},{
                name: 'Honeydew',
				color: 'honeydew',
                value: 2

			},{
                name: 'Mediumturquoise',
				color: 'mediumturquoise',
                value: 1

			},{
                name: 'Plum',
				color: 'plum',
                value: 1

			},{
                name: 'Mediumaquamarine',
				color: 'mediumaquamarine',
                value: 1

			},{
                name: 'Salmon',
				color: 'salmon',
                value: 1

			},{
                name: 'Orange',
				color: 'orange',
                value: 1

			},{
                name: 'Lemonchiffon',
				color: 'lemonchiffon',
                value: 1

			},{
                name: 'Mintcream',
				color: 'mintcream',
                value: 1

			},{
                name: 'Seagreen',
				color: 'seagreen',
                value: 1

			},{
                name: 'Darkorange',
				color: 'darkorange',
                value: 1

			},{
                name: 'Teal',
				color: 'teal',
                value: 1

			}]
		}],
		title: {
            text: ''
		}
	});
});