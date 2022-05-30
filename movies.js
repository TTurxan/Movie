let movies = [
    {
        "name": "Desperate Riders",
        "imd": "6.1",
        "image": "https://image.tmdb.org/t/p/w1280/7pYYGm1dWZGkbJuhcuaHD6nE6k7.jpg",
        "price": "7"
    },
    {
        "name": "Kimi",
        "imd": "6.2",
        "image": "https://image.tmdb.org/t/p/w1280/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
        "price": "4"
    },
    {
        "name": "Jackass forever",
        "imd": "7",
        "image": "https://image.tmdb.org/t/p/w1280/ugIdyvtAzHWOguD91UjHKoAvfum.jpg",
        "price": "10"
    },
    {
        "name": "Eternals",
        "imd": "7.2",
        "image": "https://image.tmdb.org/t/p/w1280/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
        "price": "12"
    },
    {
        "name": "The King's Man",
        "imd": "7",
        "image": "https://image.tmdb.org/t/p/w1280/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
        "price": "15"
    },
    {
        "name": "Sing 2",
        "imd": "8.1",
        "image": "https://image.tmdb.org/t/p/w1280/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
        "price": "6"
    },
    {
        "name": "The Requin",
        "imd": "4.8",
        "image": "https://image.tmdb.org/t/p/w1280/i0z8g2VRZP3dhVvvSMilbOZMKqR.jpg",
        "price": "14"
    },
    {
        "name": "Last Man Down",
        "imd": "6.2",
        "image": "https://image.tmdb.org/t/p/w1280/4B7liCxNCZIZGONmAMkCnxVlZQV.jpg",
        "price": "9"
    },
    {
        "name": "The Commando",
        "imd": "6.6",
        "image": "https://image.tmdb.org/t/p/w1280/mC66fsuzlYHSoZwb6y6emSCaRv5.jpg",
        "price": "11"
    }
]


for (let i = 0; i < movies.length; i++) {
    movies[i].sebetSayi = 0
    movies[i].id = i.toString()
}