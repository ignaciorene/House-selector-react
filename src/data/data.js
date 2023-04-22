//Database

const questions=[{
    "Id":1,
    "Question":'If you were attending Hogwarts, which pet would you choose to take with you?',
    "Options":[
        {
            "Type":'Cat',
            "Image":"cat.png",
            "Options":[
                {
                    "Answer": "Tabby cat",
                    "Image":"tabby-cat.png",
                    "Gryffindor": 21.85474842,
                    "Ravenclaw": -15.70618627,
                    "Hufflepuff": -18.29258668,
                    "Slytherin": 13.43032963
                },
                {
                    "Answer": "Siamese cat",
                    "Image":"siamese-cat.png",
                    "Gryffindor": 1.195226867,
                    "Ravenclaw": -16.3304582,
                    "Hufflepuff": -16.65956807,
                    "Slytherin": 34.18266524
                },
                {
                    "Answer": "Ginger cat",
                    "Image":"ginger-cat.png",
                    "Gryffindor": 0.839050219,
                    "Ravenclaw": -14.37048947,
                    "Hufflepuff": -16.95729454,
                    "Slytherin": 33.06015636
                },
                {
                    "Answer": "Black cat",
                    "Image":"black-cat.png",
                    "Gryffindor": -3.31335692,
                    "Ravenclaw": -15.09699497,
                    "Hufflepuff": -14.64059784,
                    "Slytherin": 34.29663831
                },
                {
                    "Answer": "White cat",
                    "Image":"white-cat.png",
                    "Gryffindor": -2.010973881,
                    "Ravenclaw": -12.31639926,
                    "Hufflepuff": -14.30409975,
                    "Slytherin": 30.4632386
                }
            ] 
        },
        {
            "Type":'Owl',
            "Image":"owl.png",
            "Options":[
                {
                    "Answer": "Tawny owl",
                    "Image":"tawny-owl.png",
                    "Gryffindor": -0.6218274,
                    "Ravenclaw": 33.24307636,
                    "Hufflepuff": -15.52800838,
                    "Slytherin": -16.11836321
                },
                {
                    "Answer": "Screech owl",
                    "Image":"Screech-Owl.jpeg",
                    "Gryffindor": 4.48854486,
                    "Ravenclaw": 32.14465664,
                    "Hufflepuff": -17.05815483,
                    "Slytherin": -18.02695104
                },
                {
                    "Answer": "Brown owl",
                    "Image":"brown-owl.png",
                    "Gryffindor": 0.915519162,
                    "Ravenclaw": 35.14392634,
                    "Hufflepuff": -16.87498976,
                    "Slytherin": -18.23297959
                },
                {
                    "Answer": "Snowy owl",
                    "Image":"snowy-owl.png",
                    "Gryffindor": -12.04575153,
                    "Ravenclaw": 8.511453759,
                    "Hufflepuff": 13.7489804,
                    "Slytherin": -8.123961651
                },
                {
                    "Answer": "Barn owl",
                    "Image":"barn-owl.png",
                    "Gryffindor": -1.251899991,
                    "Ravenclaw": 34.06472026,
                    "Hufflepuff": -16.7952532,
                    "Slytherin": -15.0925878
                }
            ]
        },
        {
            "Type":'Toad',
            "Image":"toad.png",
            "Options":[
                {
                    "Answer": "Common toad",
                    "Image":"common-toad.png",
                    "Gryffindor": -1.094048974,
                    "Ravenclaw": -21.72975856,
                    "Hufflepuff": 41.40180117,
                    "Slytherin": -16.72326959
                },
                {
                    "Answer": "Natterjack toad",
                    "Image":"natterjack-toad.avif",
                    "Gryffindor": -3.687242276,
                    "Ravenclaw": -21.61573659,
                    "Hufflepuff": 42.45530748,
                    "Slytherin": -15.4372711
                },
                {
                    "Answer": "Dragon toad",
                    "Image":"dragon-toad.webp",
                    "Gryffindor": 19.14913015,
                    "Ravenclaw": -8.1912111,
                    "Hufflepuff": 0.748385153,
                    "Slytherin": -10.04837708
                },
                {
                    "Answer": "Harlequin toad",
                    "Image":"harlequin-toad.jpeg",
                    "Gryffindor": -5.394126249,
                    "Ravenclaw": -20.42261255,
                    "Hufflepuff": 42.91383116,
                    "Slytherin": -15.27359533
                },
                {
                    "Answer": "Three toed tree toad",
                    "Image":"ThreeToedTreeToad.webp",
                    "Gryffindor": -10.19693536,
                    "Ravenclaw": 7.340865871,
                    "Hufflepuff": 12.782762,
                    "Slytherin": -6.9971469200000005
                }
            ]
        }
    ]
},
{
    "Id":2,
    "Question":'Dawn or dusk?',
    "Options":[{
        "Answer": "Dawn",
        "Image":"",
        "Gryffindor": 27.31307938,
        "Ravenclaw": 25.92258493,
        "Hufflepuff": -28.87112887,
        "Slytherin": -22.21557617
    },
    {
        "Answer": "Dusk",
        "Image":"",
        "Gryffindor": -27.07398054,
        "Ravenclaw": -25.53254608,
        "Hufflepuff": 30.81085673,
        "Slytherin": 23.30406316
    }]
},
{
    "Id":3,
    "Question":'Forest or river?',
    "Options":[{
        "Answer": "Forest",
        "Image":"",
        "Gryffindor": 28.81628797,
        "Ravenclaw": 26.53804988,
        "Hufflepuff": -29.61546288,
        "Slytherin": -24.03943097
    },
    {
        "Answer": "River",
        "Image":"",
        "Gryffindor": -27.41760127,
        "Ravenclaw": -25.25110895,
        "Hufflepuff": 29.47879885,
        "Slytherin": 25.29708668
    }]
},
{
    "Id":4,
    "Question":'Moon or stars?',
    "Options":[{
        "Answer": "Moon",
        "Image":"",
        "Gryffindor": -26.99015136,
        "Ravenclaw": 29.21779485,
        "Hufflepuff": -24.15712033,
        "Slytherin": 24.38099947
    },
    {
        "Answer": "Stars",
        "Image":"",
        "Gryffindor": 28.653864,
        "Ravenclaw": -28.67894522,
        "Hufflepuff": 26.97274135,
        "Slytherin": -24.67312267
    }]
},
{
    "Id":5,
    "Question":'Four boxes are placed before you. Which would you try and open?',
    "Options":[{
        "Answer": "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.",
        "Image":"",
        "Gryffindor": -22.52161163,
        "Ravenclaw": -11.39500098,
        "Hufflepuff": 46.9276079,
        "Slytherin": -10.3717712
    },
    {
        "Answer": "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.",
        "Image":"",
        "Gryffindor": -10.90548604,
        "Ravenclaw": -9.593133701,
        "Hufflepuff": -16.14193004,
        "Slytherin": 38.09339906
    },
    {
        "Answer": "The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.",
        "Image":"",
        "Gryffindor": -12.21860138,
        "Ravenclaw": 37.71117418,
        "Hufflepuff": -10.66015592,
        "Slytherin": -13.04771215
    },
    {
        "Answer": "The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the worthy.’",
        "Image":"",
        "Gryffindor": 42.85559784,
        "Ravenclaw": -13.92739453,
        "Hufflepuff": -18.49815241,
        "Slytherin": -7.988791579
    }]
},
{
    "Id":6,
    "Question":'You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:',
    "Options":[{
        "Answer": "Attempt to confuse the troll into letting all three of you pass without fighting?",
        "Image":"",
        "Gryffindor": -12.21949559,
        "Ravenclaw": 39.18673579,
        "Hufflepuff": -14.32592834,
        "Slytherin": -10.15802264 
    },
    {
        "Answer": "Suggest drawing lots to decide which of you will fight?",
        "Image":"",
        "Gryffindor": -16.77231763,
        "Ravenclaw": -9.948193394,
        "Hufflepuff": 45.02575153,
        "Slytherin": -15.61728574
    },
    {
        "Answer": "Suggest that all three of you should fight (without telling the troll)?",
        "Image":"",
        "Gryffindor": -7.926035393,
        "Ravenclaw": -10.24499201,
        "Hufflepuff": -15.64058444,
        "Slytherin": 37.26154927
    },
    {
        "Answer": "Volunteer to fight?",
        "Image":"",
        "Gryffindor": 40.38906615,
        "Ravenclaw": -7.371976409,
        "Hufflepuff": -20.39648571,
        "Slytherin": -11.08309843
    }]
},
{
    "Id":7,
    "Question":'Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of:',
    "Options":[{
        "Answer": "A crackling log fire",
        "Image":"",
        "Gryffindor": 42.20240168,
        "Ravenclaw": -8.357753463,
        "Hufflepuff": -22.78056435,
        "Slytherin": -8.243194893
    },
    {
        "Answer": "The sea",
        "Image":"",
        "Gryffindor": -8.586342901,
        "Ravenclaw": -7.507111586,
        "Hufflepuff": -16.19218269,
        "Slytherin": 35.04330848
    },
    {
        "Answer": "Fresh parchment",
        "Image":"",
        "Gryffindor": -12.55006436,
        "Ravenclaw": 38.93217968,
        "Hufflepuff": -11.48254915,
        "Slytherin": -14.14056557
    },
    {
        "Answer": "Home",
        "Image":"",
        "Gryffindor": -14.20337805,
        "Ravenclaw": -16.50952349,
        "Hufflepuff": 45.40854108,
        "Slytherin": -13.23654274
    }]
},
{
    "Id":8,
    "Question":'One of your house mates has cheated in a Hogwarts exam by using a Self-Spelling Quill. Now he has come top of the class in Charms, beating you into second place. Professor Flitwick is suspicious of what happened. He draws you to one side after his lesson and asks you whether or not your classmate used a forbidden quill. What do you do?',
    "Options":[{
        "Answer": "Lie and say you don’t know (but hope that somebody else tells Professor Flitwick the truth).",
        "Image":"",
        "Gryffindor": -13.48432155,
        "Ravenclaw": -17.29439279,
        "Hufflepuff": 41.3626604,
        "Slytherin": -8.254486504
    },
    {
        "Answer": "Tell Professor Flitwick that he ought to ask your classmate (and resolve to tell your classmate that if he doesn’t tell the truth, you will).",
        "Image":"",
        "Gryffindor": 42.1033363,
        "Ravenclaw": -13.65683918,
        "Hufflepuff": -13.49218299,
        "Slytherin": -12.21474272
    },
    {
        "Answer": "Tell Professor Flitwick the truth. If your classmate is prepared to win by cheating, he deserves to be found out. Also, as you are both in the same house, any points he loses will be regained by you, for coming first in his place.",
        "Image":"",
        "Gryffindor": -10.92391358,
        "Ravenclaw": 38.69530242,
        "Hufflepuff": -13.4125977,
        "Slytherin": -12.69153243
    },
    {
        "Answer": "You would not wait to be asked to tell Professor Flitwick the truth. If you knew that somebody was using a forbidden quill, you would tell the teacher before the exam started.",
        "Image":"",
        "Gryffindor": -13.12925161,
        "Ravenclaw": -8.009293327,
        "Hufflepuff": -13.65120757,
        "Slytherin": 36.94995767
    }]
},
{
    "Id":9,
    "Question":'Which of the following do you find most difficult to deal with?',
    "Options":[{
        "Answer": "Hunger",
        "Image":"",
        "Gryffindor": -28.21972672,
        "Ravenclaw": 26.96307844,
        "Hufflepuff": 31.95072949,
        "Slytherin": -29.10382335
    },
    {
        "Answer": "Cold",
        "Image":"",
        "Gryffindor": -24.05310951,
        "Ravenclaw": -23.48514187,
        "Hufflepuff": 27.93543613,
        "Slytherin": 21.04293859
    },
    {
        "Answer": "Loneliness",
        "Image":"",
        "Gryffindor": 29.03349777,
        "Ravenclaw": -28.05313842,
        "Hufflepuff": 24.90792029,
        "Slytherin": -23.82686029
    },
    {
        "Answer": "Boredom",
        "Image":"",
        "Gryffindor": 29.94248441,
        "Ravenclaw": -19.42137955,
        "Hufflepuff": -35.99363729,
        "Slytherin": 26.75190709
    },
    {
        "Answer": "Being ignored",
        "Image":"",
        "Gryffindor": -26.09709417,
        "Ravenclaw": 31.63714224,
        "Hufflepuff": -24.79204017,
        "Slytherin": 21.68704531
    }]
},
{
    "Id":10,
    "Question":'You enter an enchanted garden. What would you be most curious to examine first?',
    "Options":[{
        "Answer": "The silver leafed tree bearing golden apples",
        "Image":"",
        "Gryffindor": -11.70832774,
        "Ravenclaw": 38.10156627,
        "Hufflepuff": -10.47728774,
        "Slytherin": -14.4066053
    },
    {
        "Answer": "The fat red toadstools that appear to be talking to each other",
        "Image":"",
        "Gryffindor": -11.38975609,
        "Ravenclaw": -19.363342,
        "Hufflepuff": 45.66505899,
        "Slytherin": -12.41636611
    },
    {
        "Answer": "The bubbling pool, in the depths of which something luminous is swirling",
        "Image":"",
        "Gryffindor": -18.79689945,
        "Ravenclaw": -8.167283167,
        "Hufflepuff": -10.95346404,
        "Slytherin": 39.02161532
    },
    {
        "Answer": "The statue of an old wizard with a strangely twinkling eye",
        "Image":"",
        "Gryffindor": 41.23017056,
        "Ravenclaw": -14.2140387,
        "Hufflepuff": -17.91308959,
        "Slytherin": -6.702406531
    }]
},
{
    "Id":11,
    "Question":'Four goblets are placed before you. Which would you choose to drink?',
    "Options":[{
        "Answer": "The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.",
        "Image":"",
        "Gryffindor": -13.99879538,
        "Ravenclaw": 40.11098139,
        "Hufflepuff": -9.406077434,
        "Slytherin": -15.58163736
    },
    {
        "Answer": "The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.",
        "Image":"",
        "Gryffindor": -16.25660413,
        "Ravenclaw": -14.34614176,
        "Hufflepuff": 46.3278991,
        "Slytherin": -14.08038371
    },
    {
        "Answer": "The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.",
        "Image":"",
        "Gryffindor": 40.92686336,
        "Ravenclaw": -11.34270662,
        "Hufflepuff": -17.29827761,
        "Slytherin": -10.81718067
    },
    {
        "Answer": "The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions.",
        "Image":"",
        "Gryffindor": -10.00982635,
        "Ravenclaw": -11.931032890000001,
        "Hufflepuff": -11.01834159,
        "Slytherin": 34.71808527
    }]
},
{
    "Id":12,
    "Question":'What kind of instrument most pleases your ear?',
    "Options":[{
        "Answer": "The violin",
        "Image":"",
        "Gryffindor": -10.33126266,
        "Ravenclaw": -10.98565505,
        "Hufflepuff": -12.52911445,
        "Slytherin": 35.07799069
    },
    {
        "Answer": "The trumpet",
        "Image":"",
        "Gryffindor": -14.00827913,
        "Ravenclaw": -14.41607143,
        "Hufflepuff": 43.22386173,
        "Slytherin": -12.52828715
    },
    {
        "Answer": "The piano",
        "Image":"",
        "Gryffindor": -12.98508415,
        "Ravenclaw": 40.30457373,
        "Hufflepuff": -12.26180667,
        "Slytherin": -12.91961924
    },
    {
        "Answer": "The drum",
        "Image":"",
        "Gryffindor": 44.15185475,
        "Ravenclaw": -14.48981764,
        "Hufflepuff": -19.39087512,
        "Slytherin": -7.911670833
    }]
},
{
    "Id":13,
    "Question":'Which of the following would you most hate people to call you?',
    "Options":[{
        "Answer": "Ordinary",
        "Image":"",
        "Gryffindor": -11.75519742,
        "Ravenclaw": -10.92370078,
        "Hufflepuff": -10.86606985,
        "Slytherin": 35.83478687
    },
    {
        "Answer": "Ignorant",
        "Image":"",
        "Gryffindor": -12.60998441,
        "Ravenclaw": 40.265642,
        "Hufflepuff": -10.2989145,
        "Slytherin": -14.55694498
    },
    {
        "Answer": "Cowardly",
        "Image":"",
        "Gryffindor": 42.87682039,
        "Ravenclaw": -15.5525649,
        "Hufflepuff": -16.60672085,
        "Slytherin": -9.827956095
    },
    {
        "Answer": "Selfish",
        "Image":"",
        "Gryffindor": -15.48432768,
        "Ravenclaw": -18.0245794,
        "Hufflepuff": 45.89311983,
        "Slytherin": -10.87602756
    }]
},
{
    "Id":14,
    "Question":'After you have died, what would you most like people to do when they hear your name?',
    "Options":[{
        "Answer": "Miss you, but smile",
        "Image":"",
        "Gryffindor": -13.7807683,
        "Ravenclaw": -13.91040329,
        "Hufflepuff": 46.49760029,
        "Slytherin": -16.18133969
    },
    {
        "Answer": "Ask for more stories about your adventures",
        "Image":"",
        "Gryffindor": 41.37660787,
        "Ravenclaw": -11.1817536,
        "Hufflepuff": -21.22463154,
        "Slytherin": -7.60796961
    },
    {
        "Answer": "Think with admiration of your achievements",
        "Image":"",
        "Gryffindor": -10.57625107,
        "Ravenclaw": 40.25907324,
        "Hufflepuff": -11.94444904,
        "Slytherin": -15.29969347
    },
    {
        "Answer": "I don't care what people think of me after I'm dead; it's what they think of me while I'm alive that counts",
        "Image":"",
        "Gryffindor": -12.2082282,
        "Ravenclaw": -9.366492361,
        "Hufflepuff": -12.77709973,
        "Slytherin": 36.48253984
    }]
},
{
    "Id":15,
    "Question":'How would you like to be known to history?',
    "Options":[{
        "Answer": "The Wise",
        "Image":"",
        "Gryffindor": -12.39357202,
        "Ravenclaw": 40.07671351,
        "Hufflepuff": -12.50534524,
        "Slytherin": -13.46060562
    },
    {
        "Answer": "The Good",
        "Image":"",
        "Gryffindor": -14.87071125,
        "Ravenclaw": -16.00228703,
        "Hufflepuff": 43.98568091,
        "Slytherin": -11.52986338
    },
    {
        "Answer": "The Great",
        "Image":"",
        "Gryffindor": -11.48453278,
        "Ravenclaw": -10.16648232,
        "Hufflepuff": -15.37467794,
        "Slytherin": 38.23373882
    },
    {
        "Answer": "The Bold",
        "Image":"",
        "Gryffindor": 41.31616697,
        "Ravenclaw": -14.48335335,
        "Hufflepuff": -19.24767597,
        "Slytherin": -5.019035161
    }]
},
{
    "Id":16,
    "Question":'A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:',
    "Options":[{
        "Answer": "Ask what makes them think so?",
        "Image":"",
        "Gryffindor": -18.51698777,
        "Ravenclaw": 43.19651328,
        "Hufflepuff": -5.627175508,
        "Slytherin": -16.24151016
    },
    {
        "Answer": "Agree, and ask whether they’d like a free sample of a jinx?",
        "Image":"",
        "Gryffindor": -5.297205391,
        "Ravenclaw": -17.31138241,
        "Hufflepuff": -10.74329071,
        "Slytherin": 35.97599782
    },
    {
        "Answer": "Agree, and walk away, leaving them to wonder whether you are bluffing?",
        "Image":"",
        "Gryffindor": 40.41114795,
        "Ravenclaw": -8.735245784,
        "Hufflepuff": -18.1847105,
        "Slytherin": -11.05628226
    },
    {
        "Answer": "Tell them that you are worried about their mental health, and offer to call a doctor.",
        "Image":"",
        "Gryffindor": -19.40603566,
        "Ravenclaw": -12.71912669,
        "Hufflepuff": 45.08269049,
        "Slytherin": -11.02696975
    }]
},
{
    "Id":17,
    "Question":'Which nightmare would frighten you most?',
    "Options":[{
        "Answer": "Standing on top of something very high and realizing suddenly that there are no hand- or footholds, nor any barrier to stop you falling.",
        "Image":"",
        "Gryffindor": -16.19003593,
        "Ravenclaw": 38.81152886,
        "Hufflepuff": -12.6984308,
        "Slytherin": -8.023692844
    },
    {
        "Answer": "An eye at the keyhole of the dark, windowless room in which you are locked.",
        "Image":"",
        "Gryffindor": 41.33854576,
        "Ravenclaw": -10.03525098,
        "Hufflepuff": -15.91229289,
        "Slytherin": -13.32183833
    },
    {
        "Answer": "Waking up to find that neither your friends nor your family have any idea who you are.",
        "Image":"",
        "Gryffindor": -12.96227842,
        "Ravenclaw": -16.55271609,
        "Hufflepuff": 45.43418375,
        "Slytherin": -13.83281749
    },
    {
        "Answer": "Being forced to speak in such a silly voice that hardly anyone can understand you, and everyone laughs at you.",
        "Image":"",
        "Gryffindor": -15.94847125,
        "Ravenclaw": -5.745641099,
        "Hufflepuff": -14.83832559,
        "Slytherin": 38.61738702
    }]
},
{
    "Id":18,
    "Question":'Given the choice, would you rather invent a potion that would guarantee you:',
    "Options":[{
        "Answer": "Love?",
        "Image":"",
        "Gryffindor": -15.09086809,
        "Ravenclaw": -13.3779201,
        "Hufflepuff": 43.10458952,
        "Slytherin": -13.19529925
    },
    {
        "Answer": "Glory?",
        "Image":"",
        "Gryffindor": 43.15790393,
        "Ravenclaw": -12.41975537,
        "Hufflepuff": -18.22940109,
        "Slytherin": -10.43593648
    },
    {
        "Answer": "Wisdom?",
        "Image":"",
        "Gryffindor": -15.52102159,
        "Ravenclaw": 42.01691959,
        "Hufflepuff": -8.467320109,
        "Slytherin": -15.59260888
    },
    {
        "Answer": "Power?",
        "Image":"",
        "Gryffindor": -12.48667468,
        "Ravenclaw": -10.53541555,
        "Hufflepuff": -11.03327086,
        "Slytherin": 36.26321903
    }]
},
{
    "Id":19,
    "Question":'If you could have any power, which would you choose?',
    "Options":[{
        "Answer": "The power to read minds",
        "Image":"",
        "Gryffindor": -24.17506604,
        "Ravenclaw": 28.02462586,
        "Hufflepuff": -25.1266397,
        "Slytherin": 22.78835747
    },
    {
        "Answer": "The power of invisibility",
        "Image":"",
        "Gryffindor": 30.94950708,
        "Ravenclaw": -16.89419896,
        "Hufflepuff": 2.016868281,
        "Slytherin": -14.33237054
    },
    {
        "Answer": "The power of superhuman strength",
        "Image":"",
        "Gryffindor": -21.749195190000002,
        "Ravenclaw": -23.24640341,
        "Hufflepuff": 35.67345622,
        "Slytherin": 11.88982939
    },
    {
        "Answer": "The power to speak to animals",
        "Image":"",
        "Gryffindor": -26.37624459,
        "Ravenclaw": 19.87071358,
        "Hufflepuff": 34.83739639,
        "Slytherin": -26.54712946
    },
    {
        "Answer": "The power to change the past",
        "Image":"",
        "Gryffindor": 0.332990318,
        "Ravenclaw": -17.10768552,
        "Hufflepuff": -14.56762339,
        "Slytherin": 33.38204993
    },
    {
        "Answer": "The power to change your appearance at will",
        "Image":"",
        "Gryffindor": -2.458592609,
        "Ravenclaw": 35.53189074,
        "Hufflepuff": -13.20459011,
        "Slytherin": -17.12880799
    }]
},
{
    "Id":20,
    "Question":'Which road tempts you most?',
    "Options":[{
        "Answer": "The wide, sunny, grassy lane",
        "Image":"",
        "Gryffindor": -11.22676033,
        "Ravenclaw": -19.11937453,
        "Hufflepuff": 44.82488386,
        "Slytherin": -11.93639792
    },
    {
        "Answer": "The narrow, dark, lantern-lit alley",
        "Image":"",
        "Gryffindor": -8.811621902,
        "Ravenclaw": -12.02741304,
        "Hufflepuff": -14.9112595,
        "Slytherin": 37.69703494
    },
    {
        "Answer": "The twisting, leaf-strewn path through woods",
        "Image":"",
        "Gryffindor": 42.24315194,
        "Ravenclaw": -12.70821137,
        "Hufflepuff": -18.82743135,
        "Slytherin": -9.136595044
    },
    {
        "Answer": "The cobbled street lined with ancient buildings",
        "Image":"",
        "Gryffindor": -12.43166553,
        "Ravenclaw": 35.99676211,
        "Hufflepuff": -8.879904942,
        "Slytherin": -12.94114978
    }]
},
{
    "Id":21,
    "Question":'Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you:',
    "Options":[{
        "Answer": "Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance?",
        "Image":"",
        "Gryffindor": -14.65804948,
        "Ravenclaw": -15.8493254,
        "Hufflepuff": 44.16189924,
        "Slytherin": -11.70782536
    },
    {
        "Answer": "Draw your wand and try to discover the source of the noise?",
        "Image":"",
        "Gryffindor": 39.6505303,
        "Ravenclaw": -10.56490073,
        "Hufflepuff": -17.17403609,
        "Slytherin": -10.73515537
    },
    {
        "Answer": "Draw your wand and stand your ground?",
        "Image":"",
        "Gryffindor": -10.77612981,
        "Ravenclaw": -13.71260225,
        "Hufflepuff": -11.14976792,
        "Slytherin": 37.69080105
    },
    {
        "Answer": "Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur?",
        "Image":"",
        "Gryffindor": -11.6321132,
        "Ravenclaw": 37.79842292,
        "Hufflepuff": -12.45575343,
        "Slytherin": -12.64871392
    }]
},
{
    "Id":22,
    "Question":'What are you most looking forward to learning at Hogwarts?',
    "Options":[{
        "Answer": "Apparition and Disapparition (being able to materialize and dematerialize at will)",
        "Image":"",
        "Gryffindor": 31.23750325,
        "Ravenclaw": -25.11011193,
        "Hufflepuff": -28.8908555,
        "Slytherin": 25.28530318
    },
    {
        "Answer": "Transfiguration (turning one object into another object)",
        "Image":"",
        "Gryffindor": -14.19988561,
        "Ravenclaw": 38.71431659,
        "Hufflepuff": -9.304880652,
        "Slytherin": -13.19296379
    },
    {
        "Answer": "Flying on a broomstick",
        "Image":"",
        "Gryffindor": 29.72186159,
        "Ravenclaw": -27.4287872,
        "Hufflepuff": 21.78213483,
        "Slytherin": -20.92465167
    },
    {
        "Answer": "Hexes and jinxes",
        "Image":"",
        "Gryffindor": -7.778462793,
        "Ravenclaw": -13.81585107,
        "Hufflepuff": -13.30728434,
        "Slytherin": 35.89289216
    },
    {
        "Answer": "All about magical creatures, and how to befriend/care for them",
        "Image":"",
        "Gryffindor": -12.54890353,
        "Ravenclaw": -18.47726582,
        "Hufflepuff": 48.09882314,
        "Slytherin": -15.26330099
    },
    {
        "Answer": "Secrets about the castle",
        "Image":"",
        "Gryffindor": 42.92989547,
        "Ravenclaw": -9.446864814,
        "Hufflepuff": -19.33008843,
        "Slytherin": -13.34053828
    },
    {
        "Answer": "Every area of magic I can",
        "Image":"",
        "Gryffindor": -11.12421806,
        "Ravenclaw": 39.19823338,
        "Hufflepuff": -9.845999385,
        "Slytherin": -16.51249774
    }]
},
{
    "Id":23,
    "Question":'Which of the following would you most like to study?',
    "Options":[{
        "Answer": "Centaurs",
        "Image":"",
        "Gryffindor": 27.3714009,
        "Ravenclaw": 24.0994136,
        "Hufflepuff": -27.38973573,
        "Slytherin": -22.53814016
    },
    {
        "Answer": "Goblins",
        "Image":"",
        "Gryffindor": -19.64625528,
        "Ravenclaw": 31.81426945,
        "Hufflepuff": -18.49200208,
        "Slytherin": 8.733770043
    },
    {
        "Answer": "Merpeople",
        "Image":"",
        "Gryffindor": -22.93634644,
        "Ravenclaw": -24.86864463,
        "Hufflepuff": 28.12543954,
        "Slytherin": 21.80812282
    },
    {
        "Answer": "Ghosts",
        "Image":"",
        "Gryffindor": 27.95707126,
        "Ravenclaw": 27.5289272,
        "Hufflepuff": -30.00833793,
        "Slytherin": -23.97913683
    },
    {
        "Answer": "Vampires",
        "Image":"",
        "Gryffindor": -11.72034886,
        "Ravenclaw": -10.41163098,
        "Hufflepuff": -11.93375648,
        "Slytherin": 36.37906121
    },
    {
        "Answer": "Werewolves",
        "Image":"",
        "Gryffindor": 24.35997997,
        "Ravenclaw": -25.33791883,
        "Hufflepuff": 27.00762335,
        "Slytherin": -24.61394017
    },
    {
        "Answer": "Trolls",
        "Image":"",
        "Gryffindor": -28.33101425,
        "Ravenclaw": -24.04994569,
        "Hufflepuff": 34.15713638,
        "Slytherin": 19.82128656
    }]
},
{
    "Id":24,
    "Question":'A troll has gone berserk in the Headmaster’s study at Hogwarts. It is about to smash, crush and tear several irreplaceable items and treasures. In which order would you rescue these objects from the troll’s club, if you could?',
    "Options":[{
        "Answer": "First, a nearly perfected cure for dragon pox. Then student records going back 1000 years. Finally, a mysterious handwritten book full of strange runes.",
        "Image":"",
        "Gryffindor": 29.36249156,
        "Ravenclaw": -26.05442147,
        "Hufflepuff": 22.00609388,
        "Slytherin": -23.63817211
    },
    {
        "Answer": "First, student records going back 1000 years. Then a mysterious handwritten book full of strange runes. Finally, a nearly perfected cure for dragon pox.",
        "Image":"",
        "Gryffindor": -9.379429293,
        "Ravenclaw": -7.076799721,
        "Hufflepuff": -13.36717194,
        "Slytherin": 31.65289076
    },
    {
        "Answer": "First, a mysterious handwritten book full of strange runes. Then a nearly perfected cure for dragon pox. Finally, student records going back 1000 years.",
        "Image":"",
        "Gryffindor": -9.700034249,
        "Ravenclaw": 42.34681029,
        "Hufflepuff": -10.37103553,
        "Slytherin": -20.32349944
    },
    {
        "Answer": "First, a nearly perfected cure for dragon pox. Then a mysterious handwritten book full of strange runes. Finally, student records going back 1000 years.",
        "Image":"",
        "Gryffindor": 43.98182657,
        "Ravenclaw": -7.569136306,
        "Hufflepuff": -22.75962425,
        "Slytherin": -11.54315695
    },
    {
        "Answer": "First student records going back 1000 years. Then, a nearly perfected cure for dragon pox. Finally, a mysterious handwritten book full of strange runes.",
        "Image":"",
        "Gryffindor": -6.966899719,
        "Ravenclaw": -17.49563511,
        "Hufflepuff": 41.93544305,
        "Slytherin": -15.12882189
    },
    {
        "Answer": "First, a mysterious handwritten book full of strange runes. Then student records going back 1000 years. Finally, a nearly perfected cure for dragon pox.",
        "Image":"",
        "Gryffindor": -24.05779612,
        "Ravenclaw": 29.0768229,
        "Hufflepuff": -23.46927222,
        "Slytherin": 20.08155918
    }]
},
{
    "Id":25,
    "Question":'Which would you rather be:',
    "Options":[{
        "Answer": "Envied?",
        "Image":"",
        "Gryffindor": -23.38608287,
        "Ravenclaw": 29.56240784,
        "Hufflepuff": -24.43494458,
        "Slytherin": 20.27897556
    },
    {
        "Answer": "Imitated?",
        "Image":"",
        "Gryffindor": -10.02110229,
        "Ravenclaw": 41.34717373,
        "Hufflepuff": -13.15711695,
        "Slytherin": -15.54384446
    },
    {
        "Answer": "Trusted?",
        "Image":"",
        "Gryffindor": 27.74841466,
        "Ravenclaw": -26.66929985,
        "Hufflepuff": 25.37043067,
        "Slytherin": -24.89501457
    },
    {
        "Answer": "Praised?",
        "Image":"",
        "Gryffindor": 34.35667446,
        "Ravenclaw": -14.96501695,
        "Hufflepuff": -28.68955105,
        "Slytherin": 10.71436737
    },
    {
        "Answer": "Liked?",
        "Image":"",
        "Gryffindor": -10.98726978,
        "Ravenclaw": -16.01999991,
        "Hufflepuff": 43.07559247,
        "Slytherin": -13.92482477
    },
    {
        "Answer": "Feared?",
        "Image":"",
        "Gryffindor": -11.84099775,
        "Ravenclaw": -9.375944575,
        "Hufflepuff": -10.65163345,
        "Slytherin": 33.45753935
    }]
},
{
    "Id":26,
    "Question":'Black or White?',
    "Options":[{
        "Answer": "Black",
        "Image":"",
        "Gryffindor": 28.91718573,
        "Ravenclaw": -21.62314612,
        "Hufflepuff": -30.0065675,
        "Slytherin": 25.44278097
    },
    {
        "Answer": "White",
        "Image":"",
        "Gryffindor": -29.32055396,
        "Ravenclaw": 24.3783615,
        "Hufflepuff": 32.97249578,
        "Slytherin": -25.34810279
    }]
},
{
    "Id":27,
    "Question":'Heads or Tails',
    "Options":[{
        "Answer": "Heads",
        "Image":"",
        "Gryffindor": -25.36928858,
        "Ravenclaw": 22.41930741,
        "Hufflepuff": 32.6497265,
        "Slytherin": -27.11046939
    },
    {
        "Answer": "Tails",
        "Image":"",
        "Gryffindor": 30.63227296,
        "Ravenclaw": -23.60407631,
        "Hufflepuff": -31.08418312,
        "Slytherin": 25.892524
    }]
},
{
    "Id":28,
    "Question":'Left or Right',
    "Options":[{
        "Answer": "Left",
        "Image":"",
        "Gryffindor": -27.37364476,
        "Ravenclaw": 28.45701138,
        "Hufflepuff": -23.55695615,
        "Slytherin": 25.02450925
    },
    {
        "Answer": "Right",
        "Image":"",
        "Gryffindor": 27.02941592,
        "Ravenclaw": -27.55102988,
        "Hufflepuff": 25.78541162,
        "Slytherin": -23.44987827
    }]
}]

export default questions