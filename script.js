function generate(){
    var quotes = {
        "- Pierce Brown" : '"Man cannot be freed by the same injustice that enslaved it"',
        "- C.S Lewis" : '"I was not born to be free---I was born to adore and obey."',
        "- Albert Borris" : '"The truth will set u free but first it will piss u off"',
        "- Aaron Lauritsen" : '"From this point forward, you don’t even know how to quit in life"',
        "- Emily Climbs" : '"No one can be free who has a thousand ancestors."',
        "- Stefan Molyneux" : '"Socialism, or communism as it is sometimes called, is merely a secular religion, where the State becomes a god."',
        "- Jordan Dane" : '"It s better to die free than live life in a cage"',
        "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it s beauty"',
        "- Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse"',
        "- Deepak Chopra" : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions"',

    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}