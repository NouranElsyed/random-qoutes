var quotes =[

    {
        quot: '"All it takes is faith and trust" ',
        aut: "Peter Pan (Peter Pan)",
        audio: '<audio autoplay src="./assets/All it takes is faith, trust and just a little bit of pixie dust.mp3"></audio>'

    },
    {
        quot:'"The flower that blooms in adversity is the most rare and beautiful of all"',
        aut:"The Emperor (Mulan)",
        audio: '<audio autoplay src="./assets/Fa Zhou Blossom Speech.mp3"></audio>'

    },
    
    {
        quot: '"In every job that must be done, there is an element of fun"',
        aut: "Mary Poppins (Mary Poppins)",
        audio: '<audio autoplay src="./assets/In every job that must be done.mp3"></audio>'

    },
    {
        quot: '"Believe you can, then you will"',
        aut: "Mulan (Princess Stories)",
        audio: '<audio autoplay src="./assets/All it takes is faith, trust and just a little bit of pixie dust.mp3"></audio>'

    },
    {
        quot: '"Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it" ',
        aut: " Rafiki (The Lion King)",
        audio: '<audio autoplay src="./assets/All it takes is faith, trust and just a little bit of pixie dust.mp3"></audio>'

    },
    {
        quot: '"Happiness is the richest thing we will ever own" ',
        aut: "Donald Duck",
        audio: '<audio autoplay src="./assets/All it takes is faith, trust and just a little bit of pixie dust.mp3"></audio>'

    },
    {
        quot: '"The only thing predictable about life is its unpredictability." ',
        aut: "Remy (Ratatouille)",
        audio: '<audio autoplay src="./assets/All it takes is faith, trust and just a little bit of pixie dust.mp3"></audio>'

    },
    {
        quot: '"The problem is not the problem. The problem is your attitude about the problem" ',
        aut: "Jack Sparrow (Pirates of the Caribbean)",
        audio: '<audio  autoplay src="./assets/All it takes is faith, trust and just a little bit of pixie dust.mp3"></audio>'

    },
    {
        quot: '"Venture outside your comfort zone. The rewards are worth it" ',
        aut:"Rapunzel (Tangled)",
        audio: '<audio autoplay src="./assets/All it takes is faith, trust and just a little bit of pixie dust.mp3"></audio>'

    }
]
var random = document.querySelector("button")
random.addEventListener("click", generate)
var result 
function generate (){
    do{
    var num = Math.floor(Math.random()*quotes.length);
    }while(num===result)
    var x = quotes[num];
    console.log(num);
    var author = x.aut;
    var quote = x.quot;
    var audio = x.audio;
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    document.getElementById("audio").innerHTML = audio;
    document.getElementById("press").innerHTML ="";


    result=num
    }