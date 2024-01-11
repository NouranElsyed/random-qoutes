var quotes =[
    {
        quot: '"Venture outside your comfort zone. The rewards are worth it" ',
        aut:"Rapunzel (Tangled)"
    },
    {
        quot: '"All it takes is faith and trust" ',
        aut: "Peter Pan (Peter Pan)"
    },
    {
        quot:'"The flower that blooms in adversity is the most rare and beautiful of all"',
        aut:"The Emperor (Mulan)"
    },
    {
        quot: '"The problem is not the problem. The problem is your attitude about the problem" ',
        aut: "Jack Sparrow (Pirates of the Caribbean)"
    },
    {
        quot: '"In every job that must be done, there is an element of fun"',
        aut: "Mary Poppins (Mary Poppins)"
    },
    {
        quot: '"Believe you can, then you will"',
        aut: "Mulan (Princess Stories)"
    },
    {
        quot: '"Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it" ',
        aut: " Rafiki (The Lion King)"
    },
    {
        quot: '"Happiness is the richest thing we will ever own" ',
        aut: "Donald Duck"
    },
    {
        quot: '"The only thing predictable about life is its unpredictability." ',
        aut: "Remy (Ratatouille)"
    },
]
var result 
function generate (){
    do{
    var num = Math.floor(Math.random()*quotes.length);
    }while(num===result)
    var x = quotes[num];
    console.log(num);
    var author = x.aut;
    var quote = x.quot;
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author
    result=num
    }