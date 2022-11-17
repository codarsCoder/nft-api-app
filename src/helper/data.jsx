const myData = [
    {
        "name": "bulbasaur",
        "base_experience": 64,
        "height": 7,
        "id": 1,
        "weight": 69,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "blastoise",
        "base_experience": 265,
        "height": 16,
        "id": 9,
        "weight": 855,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "caterpie",
        "base_experience": 39,
        "height": 3,
        "id": 10,
        "weight": 29,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "ivysaur",
        "base_experience": 142,
        "height": 10,
        "id": 2,
        "weight": 130,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "venusaur",
        "base_experience": 263,
        "height": 20,
        "id": 3,
        "weight": 1000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "charmander",
        "base_experience": 62,
        "height": 6,
        "id": 4,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "charmeleon",
        "base_experience": 142,
        "height": 11,
        "id": 5,
        "weight": 190,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "charizard",
        "base_experience": 267,
        "height": 17,
        "id": 6,
        "weight": 905,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "squirtle",
        "base_experience": 63,
        "height": 5,
        "id": 7,
        "weight": 90,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "wartortle",
        "base_experience": 142,
        "height": 10,
        "id": 8,
        "weight": 225,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "metapod",
        "base_experience": 72,
        "height": 7,
        "id": 11,
        "weight": 99,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "butterfree",
        "base_experience": 198,
        "height": 11,
        "id": 12,
        "weight": 320,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "weedle",
        "base_experience": 39,
        "height": 3,
        "id": 13,
        "weight": 32,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "kakuna",
        "base_experience": 72,
        "height": 6,
        "id": 14,
        "weight": 100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "beedrill",
        "base_experience": 178,
        "height": 10,
        "id": 15,
        "weight": 295,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "pidgey",
        "base_experience": 50,
        "height": 3,
        "id": 16,
        "weight": 18,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "pidgeotto",
        "base_experience": 122,
        "height": 11,
        "id": 17,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "pidgeot",
        "base_experience": 216,
        "height": 15,
        "id": 18,
        "weight": 395,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "rattata",
        "base_experience": 51,
        "height": 3,
        "id": 19,
        "weight": 35,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "raticate",
        "base_experience": 145,
        "height": 7,
        "id": 20,
        "weight": 185,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "spearow",
        "base_experience": 52,
        "height": 3,
        "id": 21,
        "weight": 20,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "fearow",
        "base_experience": 155,
        "height": 12,
        "id": 22,
        "weight": 380,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "ekans",
        "base_experience": 58,
        "height": 20,
        "id": 23,
        "weight": 69,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "arbok",
        "base_experience": 157,
        "height": 35,
        "id": 24,
        "weight": 650,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "pikachu",
        "base_experience": 112,
        "height": 4,
        "id": 25,
        "weight": 60,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "raichu",
        "base_experience": 243,
        "height": 8,
        "id": 26,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "sandshrew",
        "base_experience": 60,
        "height": 6,
        "id": 27,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "sandslash",
        "base_experience": 158,
        "height": 10,
        "id": 28,
        "weight": 295,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "nidoran-f",
        "base_experience": 55,
        "height": 4,
        "id": 29,
        "weight": 70,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "nidorina",
        "base_experience": 128,
        "height": 8,
        "id": 30,
        "weight": 200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "nidoqueen",
        "base_experience": 253,
        "height": 13,
        "id": 31,
        "weight": 600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "nidoran-m",
        "base_experience": 55,
        "height": 5,
        "id": 32,
        "weight": 90,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "nidorino",
        "base_experience": 128,
        "height": 9,
        "id": 33,
        "weight": 195,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "nidoking",
        "base_experience": 253,
        "height": 14,
        "id": 34,
        "weight": 620,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "clefairy",
        "base_experience": 113,
        "height": 6,
        "id": 35,
        "weight": 75,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "clefable",
        "base_experience": 242,
        "height": 13,
        "id": 36,
        "weight": 400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "vulpix",
        "base_experience": 60,
        "height": 6,
        "id": 37,
        "weight": 99,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "ninetales",
        "base_experience": 177,
        "height": 11,
        "id": 38,
        "weight": 199,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "jigglypuff",
        "base_experience": 95,
        "height": 5,
        "id": 39,
        "weight": 55,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "wigglytuff",
        "base_experience": 218,
        "height": 10,
        "id": 40,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "zubat",
        "base_experience": 49,
        "height": 8,
        "id": 41,
        "weight": 75,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "golbat",
        "base_experience": 159,
        "height": 16,
        "id": 42,
        "weight": 550,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "oddish",
        "base_experience": 64,
        "height": 5,
        "id": 43,
        "weight": 54,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "gloom",
        "base_experience": 138,
        "height": 8,
        "id": 44,
        "weight": 86,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "vileplume",
        "base_experience": 245,
        "height": 12,
        "id": 45,
        "weight": 186,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "paras",
        "base_experience": 57,
        "height": 3,
        "id": 46,
        "weight": 54,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "parasect",
        "base_experience": 142,
        "height": 10,
        "id": 47,
        "weight": 295,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "venonat",
        "base_experience": 61,
        "height": 10,
        "id": 48,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "venomoth",
        "base_experience": 158,
        "height": 15,
        "id": 49,
        "weight": 125,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "diglett",
        "base_experience": 53,
        "height": 2,
        "id": 50,
        "weight": 8,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "dugtrio",
        "base_experience": 149,
        "height": 7,
        "id": 51,
        "weight": 333,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "meowth",
        "base_experience": 58,
        "height": 4,
        "id": 52,
        "weight": 42,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "persian",
        "base_experience": 154,
        "height": 10,
        "id": 53,
        "weight": 320,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "psyduck",
        "base_experience": 64,
        "height": 8,
        "id": 54,
        "weight": 196,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "golduck",
        "base_experience": 175,
        "height": 17,
        "id": 55,
        "weight": 766,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "mankey",
        "base_experience": 61,
        "height": 5,
        "id": 56,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "primeape",
        "base_experience": 159,
        "height": 10,
        "id": 57,
        "weight": 320,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "growlithe",
        "base_experience": 70,
        "height": 7,
        "id": 58,
        "weight": 190,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "arcanine",
        "base_experience": 194,
        "height": 19,
        "id": 59,
        "weight": 1550,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "poliwag",
        "base_experience": 60,
        "height": 6,
        "id": 60,
        "weight": 124,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "poliwhirl",
        "base_experience": 135,
        "height": 10,
        "id": 61,
        "weight": 200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "poliwrath",
        "base_experience": 255,
        "height": 13,
        "id": 62,
        "weight": 540,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "abra",
        "base_experience": 62,
        "height": 9,
        "id": 63,
        "weight": 195,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "kadabra",
        "base_experience": 140,
        "height": 13,
        "id": 64,
        "weight": 565,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "alakazam",
        "base_experience": 250,
        "height": 15,
        "id": 65,
        "weight": 480,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "machop",
        "base_experience": 61,
        "height": 8,
        "id": 66,
        "weight": 195,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "machoke",
        "base_experience": 142,
        "height": 15,
        "id": 67,
        "weight": 705,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "machamp",
        "base_experience": 253,
        "height": 16,
        "id": 68,
        "weight": 1300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "bellsprout",
        "base_experience": 60,
        "height": 7,
        "id": 69,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "weepinbell",
        "base_experience": 137,
        "height": 10,
        "id": 70,
        "weight": 64,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "victreebel",
        "base_experience": 221,
        "height": 17,
        "id": 71,
        "weight": 155,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "tentacool",
        "base_experience": 67,
        "height": 9,
        "id": 72,
        "weight": 455,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "tentacruel",
        "base_experience": 180,
        "height": 16,
        "id": 73,
        "weight": 550,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "geodude",
        "base_experience": 60,
        "height": 4,
        "id": 74,
        "weight": 200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "graveler",
        "base_experience": 137,
        "height": 10,
        "id": 75,
        "weight": 1050,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "golem",
        "base_experience": 223,
        "height": 14,
        "id": 76,
        "weight": 3000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "ponyta",
        "base_experience": 82,
        "height": 10,
        "id": 77,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "rapidash",
        "base_experience": 175,
        "height": 17,
        "id": 78,
        "weight": 950,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "slowpoke",
        "base_experience": 63,
        "height": 12,
        "id": 79,
        "weight": 360,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "slowbro",
        "base_experience": 172,
        "height": 16,
        "id": 80,
        "weight": 785,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "magnemite",
        "base_experience": 65,
        "height": 3,
        "id": 81,
        "weight": 60,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "magneton",
        "base_experience": 163,
        "height": 10,
        "id": 82,
        "weight": 600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "farfetchd",
        "base_experience": 132,
        "height": 8,
        "id": 83,
        "weight": 150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "doduo",
        "base_experience": 62,
        "height": 14,
        "id": 84,
        "weight": 392,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "dodrio",
        "base_experience": 165,
        "height": 18,
        "id": 85,
        "weight": 852,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "seel",
        "base_experience": 65,
        "height": 11,
        "id": 86,
        "weight": 900,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "dewgong",
        "base_experience": 166,
        "height": 17,
        "id": 87,
        "weight": 1200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "grimer",
        "base_experience": 65,
        "height": 9,
        "id": 88,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "muk",
        "base_experience": 175,
        "height": 12,
        "id": 89,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "shellder",
        "base_experience": 61,
        "height": 3,
        "id": 90,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "cloyster",
        "base_experience": 184,
        "height": 15,
        "id": 91,
        "weight": 1325,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "gastly",
        "base_experience": 62,
        "height": 13,
        "id": 92,
        "weight": 1,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "haunter",
        "base_experience": 142,
        "height": 16,
        "id": 93,
        "weight": 1,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "gengar",
        "base_experience": 250,
        "height": 15,
        "id": 94,
        "weight": 405,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "koffing",
        "base_experience": 68,
        "height": 6,
        "id": 109,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "onix",
        "base_experience": 77,
        "height": 88,
        "id": 95,
        "weight": 2100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "weezing",
        "base_experience": 172,
        "height": 12,
        "id": 110,
        "weight": 95,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "rhyhorn",
        "base_experience": 69,
        "height": 10,
        "id": 111,
        "weight": 1150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "rhydon",
        "base_experience": 170,
        "height": 19,
        "id": 112,
        "weight": 1200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "chansey",
        "base_experience": 395,
        "height": 11,
        "id": 113,
        "weight": 346,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "tangela",
        "base_experience": 87,
        "height": 10,
        "id": 114,
        "weight": 350,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "kangaskhan",
        "base_experience": 172,
        "height": 22,
        "id": 115,
        "weight": 800,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "horsea",
        "base_experience": 59,
        "height": 4,
        "id": 116,
        "weight": 80,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "seadra",
        "base_experience": 154,
        "height": 12,
        "id": 117,
        "weight": 250,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "goldeen",
        "base_experience": 64,
        "height": 6,
        "id": 118,
        "weight": 150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "seaking",
        "base_experience": 158,
        "height": 13,
        "id": 119,
        "weight": 390,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "staryu",
        "base_experience": 68,
        "height": 8,
        "id": 120,
        "weight": 345,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "starmie",
        "base_experience": 182,
        "height": 11,
        "id": 121,
        "weight": 800,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "mr-mime",
        "base_experience": 161,
        "height": 13,
        "id": 122,
        "weight": 545,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "scyther",
        "base_experience": 100,
        "height": 15,
        "id": 123,
        "weight": 560,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "jynx",
        "base_experience": 159,
        "height": 14,
        "id": 124,
        "weight": 406,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "electabuzz",
        "base_experience": 172,
        "height": 11,
        "id": 125,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "magmar",
        "base_experience": 173,
        "height": 13,
        "id": 126,
        "weight": 445,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "pinsir",
        "base_experience": 175,
        "height": 15,
        "id": 127,
        "weight": 550,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "tauros",
        "base_experience": 172,
        "height": 14,
        "id": 128,
        "weight": 884,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "magikarp",
        "base_experience": 40,
        "height": 9,
        "id": 129,
        "weight": 100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "gyarados",
        "base_experience": 189,
        "height": 65,
        "id": 130,
        "weight": 2350,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "lapras",
        "base_experience": 187,
        "height": 25,
        "id": 131,
        "weight": 2200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "ditto",
        "base_experience": 101,
        "height": 3,
        "id": 132,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "eevee",
        "base_experience": 65,
        "height": 3,
        "id": 133,
        "weight": 65,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "vaporeon",
        "base_experience": 184,
        "height": 10,
        "id": 134,
        "weight": 290,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "jolteon",
        "base_experience": 184,
        "height": 8,
        "id": 135,
        "weight": 245,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "flareon",
        "base_experience": 184,
        "height": 9,
        "id": 136,
        "weight": 250,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "porygon",
        "base_experience": 79,
        "height": 8,
        "id": 137,
        "weight": 365,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "omanyte",
        "base_experience": 71,
        "height": 4,
        "id": 138,
        "weight": 75,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "omastar",
        "base_experience": 173,
        "height": 10,
        "id": 139,
        "weight": 350,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "kabuto",
        "base_experience": 71,
        "height": 5,
        "id": 140,
        "weight": 115,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "kabutops",
        "base_experience": 173,
        "height": 13,
        "id": 141,
        "weight": 405,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "aerodactyl",
        "base_experience": 180,
        "height": 18,
        "id": 142,
        "weight": 590,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "snorlax",
        "base_experience": 189,
        "height": 21,
        "id": 143,
        "weight": 4600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "articuno",
        "base_experience": 290,
        "height": 17,
        "id": 144,
        "weight": 554,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "zapdos",
        "base_experience": 290,
        "height": 16,
        "id": 145,
        "weight": 526,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "moltres",
        "base_experience": 290,
        "height": 20,
        "id": 146,
        "weight": 600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "dratini",
        "base_experience": 60,
        "height": 18,
        "id": 147,
        "weight": 33,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "dragonair",
        "base_experience": 147,
        "height": 40,
        "id": 148,
        "weight": 165,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "dragonite",
        "base_experience": 300,
        "height": 22,
        "id": 149,
        "weight": 2100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "drowzee",
        "base_experience": 66,
        "height": 10,
        "id": 96,
        "weight": 324,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "hypno",
        "base_experience": 169,
        "height": 16,
        "id": 97,
        "weight": 756,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "krabby",
        "base_experience": 65,
        "height": 4,
        "id": 98,
        "weight": 65,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "kingler",
        "base_experience": 166,
        "height": 13,
        "id": 99,
        "weight": 600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "voltorb",
        "base_experience": 66,
        "height": 5,
        "id": 100,
        "weight": 104,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "electrode",
        "base_experience": 172,
        "height": 12,
        "id": 101,
        "weight": 666,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "exeggcute",
        "base_experience": 65,
        "height": 4,
        "id": 102,
        "weight": 25,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "exeggutor",
        "base_experience": 186,
        "height": 20,
        "id": 103,
        "weight": 1200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "cubone",
        "base_experience": 64,
        "height": 4,
        "id": 104,
        "weight": 65,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "marowak",
        "base_experience": 149,
        "height": 10,
        "id": 105,
        "weight": 450,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "hitmonlee",
        "base_experience": 159,
        "height": 15,
        "id": 106,
        "weight": 498,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "hitmonchan",
        "base_experience": 159,
        "height": 14,
        "id": 107,
        "weight": 502,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "lickitung",
        "base_experience": 77,
        "height": 12,
        "id": 108,
        "weight": 655,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "mewtwo",
        "base_experience": 340,
        "height": 20,
        "id": 150,
        "weight": 1220,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "mew",
        "base_experience": 300,
        "height": 4,
        "id": 151,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "chikorita",
        "base_experience": 64,
        "height": 9,
        "id": 152,
        "weight": 64,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "bayleef",
        "base_experience": 142,
        "height": 12,
        "id": 153,
        "weight": 158,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "meganium",
        "base_experience": 236,
        "height": 18,
        "id": 154,
        "weight": 1005,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "cyndaquil",
        "base_experience": 62,
        "height": 5,
        "id": 155,
        "weight": 79,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "quilava",
        "base_experience": 142,
        "height": 9,
        "id": 156,
        "weight": 190,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "typhlosion",
        "base_experience": 240,
        "height": 17,
        "id": 157,
        "weight": 795,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "totodile",
        "base_experience": 63,
        "height": 6,
        "id": 158,
        "weight": 95,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "croconaw",
        "base_experience": 142,
        "height": 11,
        "id": 159,
        "weight": 250,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "feraligatr",
        "base_experience": 239,
        "height": 23,
        "id": 160,
        "weight": 888,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "sentret",
        "base_experience": 43,
        "height": 8,
        "id": 161,
        "weight": 60,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "furret",
        "base_experience": 145,
        "height": 18,
        "id": 162,
        "weight": 325,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "hoothoot",
        "base_experience": 52,
        "height": 7,
        "id": 163,
        "weight": 212,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "noctowl",
        "base_experience": 158,
        "height": 16,
        "id": 164,
        "weight": 408,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "ledyba",
        "base_experience": 53,
        "height": 10,
        "id": 165,
        "weight": 108,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "ledian",
        "base_experience": 137,
        "height": 14,
        "id": 166,
        "weight": 356,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "spinarak",
        "base_experience": 50,
        "height": 5,
        "id": 167,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "ariados",
        "base_experience": 140,
        "height": 11,
        "id": 168,
        "weight": 335,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "crobat",
        "base_experience": 268,
        "height": 18,
        "id": 169,
        "weight": 750,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "chinchou",
        "base_experience": 66,
        "height": 5,
        "id": 170,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "lanturn",
        "base_experience": 161,
        "height": 12,
        "id": 171,
        "weight": 225,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "pichu",
        "base_experience": 41,
        "height": 3,
        "id": 172,
        "weight": 20,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "cleffa",
        "base_experience": 44,
        "height": 3,
        "id": 173,
        "weight": 30,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "igglybuff",
        "base_experience": 42,
        "height": 3,
        "id": 174,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "togepi",
        "base_experience": 49,
        "height": 3,
        "id": 175,
        "weight": 15,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "togetic",
        "base_experience": 142,
        "height": 6,
        "id": 176,
        "weight": 32,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "natu",
        "base_experience": 64,
        "height": 2,
        "id": 177,
        "weight": 20,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "xatu",
        "base_experience": 165,
        "height": 15,
        "id": 178,
        "weight": 150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "mareep",
        "base_experience": 56,
        "height": 6,
        "id": 179,
        "weight": 78,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "flaaffy",
        "base_experience": 128,
        "height": 8,
        "id": 180,
        "weight": 133,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "ampharos",
        "base_experience": 230,
        "height": 14,
        "id": 181,
        "weight": 615,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "bellossom",
        "base_experience": 245,
        "height": 4,
        "id": 182,
        "weight": 58,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "marill",
        "base_experience": 88,
        "height": 4,
        "id": 183,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "azumarill",
        "base_experience": 210,
        "height": 8,
        "id": 184,
        "weight": 285,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "sudowoodo",
        "base_experience": 144,
        "height": 12,
        "id": 185,
        "weight": 380,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "politoed",
        "base_experience": 250,
        "height": 11,
        "id": 186,
        "weight": 339,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "hoppip",
        "base_experience": 50,
        "height": 4,
        "id": 187,
        "weight": 5,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "skiploom",
        "base_experience": 119,
        "height": 6,
        "id": 188,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "jumpluff",
        "base_experience": 207,
        "height": 8,
        "id": 189,
        "weight": 30,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "aipom",
        "base_experience": 72,
        "height": 8,
        "id": 190,
        "weight": 115,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "sunkern",
        "base_experience": 36,
        "height": 3,
        "id": 191,
        "weight": 18,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "sunflora",
        "base_experience": 149,
        "height": 8,
        "id": 192,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "yanma",
        "base_experience": 78,
        "height": 12,
        "id": 193,
        "weight": 380,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "wooper",
        "base_experience": 42,
        "height": 4,
        "id": 194,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "quagsire",
        "base_experience": 151,
        "height": 14,
        "id": 195,
        "weight": 750,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "espeon",
        "base_experience": 184,
        "height": 9,
        "id": 196,
        "weight": 265,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "umbreon",
        "base_experience": 184,
        "height": 10,
        "id": 197,
        "weight": 270,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "murkrow",
        "base_experience": 81,
        "height": 5,
        "id": 198,
        "weight": 21,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "slowking",
        "base_experience": 172,
        "height": 20,
        "id": 199,
        "weight": 795,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "misdreavus",
        "base_experience": 87,
        "height": 7,
        "id": 200,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "unown",
        "base_experience": 118,
        "height": 5,
        "id": 201,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "wobbuffet",
        "base_experience": 142,
        "height": 13,
        "id": 202,
        "weight": 285,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "girafarig",
        "base_experience": 159,
        "height": 15,
        "id": 203,
        "weight": 415,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "pineco",
        "base_experience": 58,
        "height": 6,
        "id": 204,
        "weight": 72,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "forretress",
        "base_experience": 163,
        "height": 12,
        "id": 205,
        "weight": 1258,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "dunsparce",
        "base_experience": 145,
        "height": 15,
        "id": 206,
        "weight": 140,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "gligar",
        "base_experience": 86,
        "height": 11,
        "id": 207,
        "weight": 648,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "steelix",
        "base_experience": 179,
        "height": 92,
        "id": 208,
        "weight": 4000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "snubbull",
        "base_experience": 60,
        "height": 6,
        "id": 209,
        "weight": 78,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "granbull",
        "base_experience": 158,
        "height": 14,
        "id": 210,
        "weight": 487,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "qwilfish",
        "base_experience": 88,
        "height": 5,
        "id": 211,
        "weight": 39,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "scizor",
        "base_experience": 175,
        "height": 18,
        "id": 212,
        "weight": 1180,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "shuckle",
        "base_experience": 177,
        "height": 6,
        "id": 213,
        "weight": 205,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "heracross",
        "base_experience": 175,
        "height": 15,
        "id": 214,
        "weight": 540,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "sneasel",
        "base_experience": 86,
        "height": 9,
        "id": 215,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "teddiursa",
        "base_experience": 66,
        "height": 6,
        "id": 216,
        "weight": 88,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "ursaring",
        "base_experience": 175,
        "height": 18,
        "id": 217,
        "weight": 1258,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "slugma",
        "base_experience": 50,
        "height": 7,
        "id": 218,
        "weight": 350,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "magcargo",
        "base_experience": 151,
        "height": 8,
        "id": 219,
        "weight": 550,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "swinub",
        "base_experience": 50,
        "height": 4,
        "id": 220,
        "weight": 65,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "piloswine",
        "base_experience": 158,
        "height": 11,
        "id": 221,
        "weight": 558,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "corsola",
        "base_experience": 144,
        "height": 6,
        "id": 222,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "remoraid",
        "base_experience": 60,
        "height": 6,
        "id": 223,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "octillery",
        "base_experience": 168,
        "height": 9,
        "id": 224,
        "weight": 285,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "delibird",
        "base_experience": 116,
        "height": 9,
        "id": 225,
        "weight": 160,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "mantine",
        "base_experience": 170,
        "height": 21,
        "id": 226,
        "weight": 2200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "skarmory",
        "base_experience": 163,
        "height": 17,
        "id": 227,
        "weight": 505,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "houndour",
        "base_experience": 66,
        "height": 6,
        "id": 228,
        "weight": 108,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "houndoom",
        "base_experience": 175,
        "height": 14,
        "id": 229,
        "weight": 350,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "kingdra",
        "base_experience": 270,
        "height": 18,
        "id": 230,
        "weight": 1520,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "phanpy",
        "base_experience": 66,
        "height": 5,
        "id": 231,
        "weight": 335,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "donphan",
        "base_experience": 175,
        "height": 11,
        "id": 232,
        "weight": 1200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "porygon2",
        "base_experience": 180,
        "height": 6,
        "id": 233,
        "weight": 325,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "stantler",
        "base_experience": 163,
        "height": 14,
        "id": 234,
        "weight": 712,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "smeargle",
        "base_experience": 88,
        "height": 12,
        "id": 235,
        "weight": 580,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "tyrogue",
        "base_experience": 42,
        "height": 7,
        "id": 236,
        "weight": 210,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "hitmontop",
        "base_experience": 159,
        "height": 14,
        "id": 237,
        "weight": 480,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "smoochum",
        "base_experience": 61,
        "height": 4,
        "id": 238,
        "weight": 60,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "elekid",
        "base_experience": 72,
        "height": 6,
        "id": 239,
        "weight": 235,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "magby",
        "base_experience": 73,
        "height": 7,
        "id": 240,
        "weight": 214,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "miltank",
        "base_experience": 172,
        "height": 12,
        "id": 241,
        "weight": 755,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "blissey",
        "base_experience": 635,
        "height": 15,
        "id": 242,
        "weight": 468,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "raikou",
        "base_experience": 290,
        "height": 19,
        "id": 243,
        "weight": 1780,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "entei",
        "base_experience": 290,
        "height": 21,
        "id": 244,
        "weight": 1980,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "suicune",
        "base_experience": 290,
        "height": 20,
        "id": 245,
        "weight": 1870,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "larvitar",
        "base_experience": 60,
        "height": 6,
        "id": 246,
        "weight": 720,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "pupitar",
        "base_experience": 144,
        "height": 12,
        "id": 247,
        "weight": 1520,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "tyranitar",
        "base_experience": 300,
        "height": 20,
        "id": 248,
        "weight": 2020,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "lugia",
        "base_experience": 340,
        "height": 52,
        "id": 249,
        "weight": 2160,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "ho-oh",
        "base_experience": 340,
        "height": 38,
        "id": 250,
        "weight": 1990,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "celebi",
        "base_experience": 300,
        "height": 6,
        "id": 251,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "treecko",
        "base_experience": 62,
        "height": 5,
        "id": 252,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "grovyle",
        "base_experience": 142,
        "height": 9,
        "id": 253,
        "weight": 216,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "sceptile",
        "base_experience": 265,
        "height": 17,
        "id": 254,
        "weight": 522,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "torchic",
        "base_experience": 62,
        "height": 4,
        "id": 255,
        "weight": 25,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "combusken",
        "base_experience": 142,
        "height": 9,
        "id": 256,
        "weight": 195,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "blaziken",
        "base_experience": 265,
        "height": 19,
        "id": 257,
        "weight": 520,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "mudkip",
        "base_experience": 62,
        "height": 4,
        "id": 258,
        "weight": 76,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "marshtomp",
        "base_experience": 142,
        "height": 7,
        "id": 259,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "swampert",
        "base_experience": 268,
        "height": 15,
        "id": 260,
        "weight": 819,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "poochyena",
        "base_experience": 56,
        "height": 5,
        "id": 261,
        "weight": 136,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "mightyena",
        "base_experience": 147,
        "height": 10,
        "id": 262,
        "weight": 370,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "zigzagoon",
        "base_experience": 56,
        "height": 4,
        "id": 263,
        "weight": 175,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "linoone",
        "base_experience": 147,
        "height": 5,
        "id": 264,
        "weight": 325,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "wurmple",
        "base_experience": 56,
        "height": 3,
        "id": 265,
        "weight": 36,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "silcoon",
        "base_experience": 72,
        "height": 6,
        "id": 266,
        "weight": 100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "beautifly",
        "base_experience": 178,
        "height": 10,
        "id": 267,
        "weight": 284,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "cascoon",
        "base_experience": 72,
        "height": 7,
        "id": 268,
        "weight": 115,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "dustox",
        "base_experience": 173,
        "height": 12,
        "id": 269,
        "weight": 316,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "lotad",
        "base_experience": 44,
        "height": 5,
        "id": 270,
        "weight": 26,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "lombre",
        "base_experience": 119,
        "height": 12,
        "id": 271,
        "weight": 325,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "ludicolo",
        "base_experience": 240,
        "height": 15,
        "id": 272,
        "weight": 550,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "seedot",
        "base_experience": 44,
        "height": 5,
        "id": 273,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "nuzleaf",
        "base_experience": 119,
        "height": 10,
        "id": 274,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "shiftry",
        "base_experience": 240,
        "height": 13,
        "id": 275,
        "weight": 596,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "taillow",
        "base_experience": 54,
        "height": 3,
        "id": 276,
        "weight": 23,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "swellow",
        "base_experience": 159,
        "height": 7,
        "id": 277,
        "weight": 198,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "wingull",
        "base_experience": 54,
        "height": 6,
        "id": 278,
        "weight": 95,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "pelipper",
        "base_experience": 154,
        "height": 12,
        "id": 279,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "ralts",
        "base_experience": 40,
        "height": 4,
        "id": 280,
        "weight": 66,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "kirlia",
        "base_experience": 97,
        "height": 8,
        "id": 281,
        "weight": 202,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "gardevoir",
        "base_experience": 259,
        "height": 16,
        "id": 282,
        "weight": 484,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "surskit",
        "base_experience": 54,
        "height": 5,
        "id": 283,
        "weight": 17,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "masquerain",
        "base_experience": 159,
        "height": 8,
        "id": 284,
        "weight": 36,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "shroomish",
        "base_experience": 59,
        "height": 4,
        "id": 285,
        "weight": 45,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "breloom",
        "base_experience": 161,
        "height": 12,
        "id": 286,
        "weight": 392,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "slakoth",
        "base_experience": 56,
        "height": 8,
        "id": 287,
        "weight": 240,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "vigoroth",
        "base_experience": 154,
        "height": 14,
        "id": 288,
        "weight": 465,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "slaking",
        "base_experience": 252,
        "height": 20,
        "id": 289,
        "weight": 1305,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "nincada",
        "base_experience": 53,
        "height": 5,
        "id": 290,
        "weight": 55,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "ninjask",
        "base_experience": 160,
        "height": 8,
        "id": 291,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "shedinja",
        "base_experience": 83,
        "height": 8,
        "id": 292,
        "weight": 12,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "whismur",
        "base_experience": 48,
        "height": 6,
        "id": 293,
        "weight": 163,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "loudred",
        "base_experience": 126,
        "height": 10,
        "id": 294,
        "weight": 405,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "exploud",
        "base_experience": 245,
        "height": 15,
        "id": 295,
        "weight": 840,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "makuhita",
        "base_experience": 47,
        "height": 10,
        "id": 296,
        "weight": 864,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "hariyama",
        "base_experience": 166,
        "height": 23,
        "id": 297,
        "weight": 2538,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "azurill",
        "base_experience": 38,
        "height": 2,
        "id": 298,
        "weight": 20,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "nosepass",
        "base_experience": 75,
        "height": 10,
        "id": 299,
        "weight": 970,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "skitty",
        "base_experience": 52,
        "height": 6,
        "id": 300,
        "weight": 110,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "aron",
        "base_experience": 66,
        "height": 4,
        "id": 304,
        "weight": 600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "delcatty",
        "base_experience": 140,
        "height": 11,
        "id": 301,
        "weight": 326,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "sableye",
        "base_experience": 133,
        "height": 5,
        "id": 302,
        "weight": 110,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "mawile",
        "base_experience": 133,
        "height": 6,
        "id": 303,
        "weight": 115,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "groudon",
        "base_experience": 335,
        "height": 35,
        "id": 383,
        "weight": 9500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "huntail",
        "base_experience": 170,
        "height": 17,
        "id": 367,
        "weight": 270,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "baltoy",
        "base_experience": 60,
        "height": 5,
        "id": 343,
        "weight": 215,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "claydol",
        "base_experience": 175,
        "height": 15,
        "id": 344,
        "weight": 1080,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "lileep",
        "base_experience": 71,
        "height": 10,
        "id": 345,
        "weight": 238,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "clamperl",
        "base_experience": 69,
        "height": 4,
        "id": 366,
        "weight": 525,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "walrein",
        "base_experience": 265,
        "height": 14,
        "id": 365,
        "weight": 1506,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "sealeo",
        "base_experience": 144,
        "height": 11,
        "id": 364,
        "weight": 876,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "spheal",
        "base_experience": 58,
        "height": 8,
        "id": 363,
        "weight": 395,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "vibrava",
        "base_experience": 119,
        "height": 11,
        "id": 329,
        "weight": 153,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "flygon",
        "base_experience": 260,
        "height": 20,
        "id": 330,
        "weight": 820,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "cacnea",
        "base_experience": 67,
        "height": 4,
        "id": 331,
        "weight": 513,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "cacturne",
        "base_experience": 166,
        "height": 13,
        "id": 332,
        "weight": 774,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "swablu",
        "base_experience": 62,
        "height": 4,
        "id": 333,
        "weight": 12,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "altaria",
        "base_experience": 172,
        "height": 11,
        "id": 334,
        "weight": 206,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "zangoose",
        "base_experience": 160,
        "height": 13,
        "id": 335,
        "weight": 403,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "seviper",
        "base_experience": 160,
        "height": 27,
        "id": 336,
        "weight": 525,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "plusle",
        "base_experience": 142,
        "height": 4,
        "id": 311,
        "weight": 42,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "manectric",
        "base_experience": 166,
        "height": 15,
        "id": 310,
        "weight": 402,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "electrike",
        "base_experience": 59,
        "height": 6,
        "id": 309,
        "weight": 152,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "medicham",
        "base_experience": 144,
        "height": 13,
        "id": 308,
        "weight": 315,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "meditite",
        "base_experience": 56,
        "height": 6,
        "id": 307,
        "weight": 112,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "aggron",
        "base_experience": 265,
        "height": 21,
        "id": 306,
        "weight": 3600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "lairon",
        "base_experience": 151,
        "height": 9,
        "id": 305,
        "weight": 1200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "minun",
        "base_experience": 142,
        "height": 4,
        "id": 312,
        "weight": 42,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "numel",
        "base_experience": 61,
        "height": 7,
        "id": 322,
        "weight": 240,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "camerupt",
        "base_experience": 161,
        "height": 19,
        "id": 323,
        "weight": 2200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "grumpig",
        "base_experience": 165,
        "height": 9,
        "id": 326,
        "weight": 715,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "spinda",
        "base_experience": 126,
        "height": 11,
        "id": 327,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "trapinch",
        "base_experience": 58,
        "height": 7,
        "id": 328,
        "weight": 150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "wailord",
        "base_experience": 175,
        "height": 145,
        "id": 321,
        "weight": 3980,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "cradily",
        "base_experience": 173,
        "height": 15,
        "id": 346,
        "weight": 604,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "anorith",
        "base_experience": 71,
        "height": 7,
        "id": 347,
        "weight": 125,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "armaldo",
        "base_experience": 173,
        "height": 15,
        "id": 348,
        "weight": 682,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "feebas",
        "base_experience": 40,
        "height": 6,
        "id": 349,
        "weight": 74,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "milotic",
        "base_experience": 189,
        "height": 62,
        "id": 350,
        "weight": 1620,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "castform",
        "base_experience": 147,
        "height": 3,
        "id": 351,
        "weight": 8,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "shuppet",
        "base_experience": 59,
        "height": 6,
        "id": 353,
        "weight": 23,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "volbeat",
        "base_experience": 151,
        "height": 7,
        "id": 313,
        "weight": 177,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "illumise",
        "base_experience": 151,
        "height": 6,
        "id": 314,
        "weight": 177,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "roselia",
        "base_experience": 140,
        "height": 3,
        "id": 315,
        "weight": 20,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "gulpin",
        "base_experience": 60,
        "height": 4,
        "id": 316,
        "weight": 103,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "swalot",
        "base_experience": 163,
        "height": 17,
        "id": 317,
        "weight": 800,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "torkoal",
        "base_experience": 165,
        "height": 5,
        "id": 324,
        "weight": 804,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "spoink",
        "base_experience": 66,
        "height": 7,
        "id": 325,
        "weight": 306,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "kecleon",
        "base_experience": 154,
        "height": 10,
        "id": 352,
        "weight": 220,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "carvanha",
        "base_experience": 61,
        "height": 8,
        "id": 318,
        "weight": 208,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "sharpedo",
        "base_experience": 161,
        "height": 18,
        "id": 319,
        "weight": 888,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "wailmer",
        "base_experience": 80,
        "height": 20,
        "id": 320,
        "weight": 1300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "glalie",
        "base_experience": 168,
        "height": 15,
        "id": 362,
        "weight": 2565,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "luvdisc",
        "base_experience": 116,
        "height": 6,
        "id": 370,
        "weight": 87,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "bagon",
        "base_experience": 60,
        "height": 6,
        "id": 371,
        "weight": 421,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "shelgon",
        "base_experience": 147,
        "height": 11,
        "id": 372,
        "weight": 1105,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "salamence",
        "base_experience": 300,
        "height": 15,
        "id": 373,
        "weight": 1026,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "beldum",
        "base_experience": 60,
        "height": 6,
        "id": 374,
        "weight": 952,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "metang",
        "base_experience": 147,
        "height": 12,
        "id": 375,
        "weight": 2025,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "metagross",
        "base_experience": 300,
        "height": 16,
        "id": 376,
        "weight": 5500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "lunatone",
        "base_experience": 161,
        "height": 10,
        "id": 337,
        "weight": 1680,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "solrock",
        "base_experience": 161,
        "height": 12,
        "id": 338,
        "weight": 1540,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "barboach",
        "base_experience": 58,
        "height": 4,
        "id": 339,
        "weight": 19,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "whiscash",
        "base_experience": 164,
        "height": 9,
        "id": 340,
        "weight": 236,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "relicanth",
        "base_experience": 170,
        "height": 10,
        "id": 369,
        "weight": 234,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "corphish",
        "base_experience": 62,
        "height": 6,
        "id": 341,
        "weight": 115,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "crawdaunt",
        "base_experience": 164,
        "height": 11,
        "id": 342,
        "weight": 328,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "gorebyss",
        "base_experience": 170,
        "height": 18,
        "id": 368,
        "weight": 226,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "banette",
        "base_experience": 159,
        "height": 11,
        "id": 354,
        "weight": 125,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "duskull",
        "base_experience": 59,
        "height": 8,
        "id": 355,
        "weight": 150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "budew",
        "base_experience": 56,
        "height": 2,
        "id": 406,
        "weight": 12,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "dusclops",
        "base_experience": 159,
        "height": 16,
        "id": 356,
        "weight": 306,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "tropius",
        "base_experience": 161,
        "height": 20,
        "id": 357,
        "weight": 1000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "chimecho",
        "base_experience": 159,
        "height": 6,
        "id": 358,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "absol",
        "base_experience": 163,
        "height": 12,
        "id": 359,
        "weight": 470,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "wynaut",
        "base_experience": 52,
        "height": 6,
        "id": 360,
        "weight": 140,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "snorunt",
        "base_experience": 60,
        "height": 7,
        "id": 361,
        "weight": 168,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "bonsly",
        "base_experience": 58,
        "height": 5,
        "id": 438,
        "weight": 150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "drifloon",
        "base_experience": 70,
        "height": 4,
        "id": 425,
        "weight": 12,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "prinplup",
        "base_experience": 142,
        "height": 8,
        "id": 394,
        "weight": 230,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "amoonguss",
        "base_experience": 162,
        "height": 6,
        "id": 591,
        "weight": 105,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "grotle",
        "base_experience": 142,
        "height": 11,
        "id": 388,
        "weight": 970,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "bibarel",
        "base_experience": 144,
        "height": 10,
        "id": 400,
        "weight": 315,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "lopunny",
        "base_experience": 168,
        "height": 12,
        "id": 428,
        "weight": 333,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "azelf",
        "base_experience": 290,
        "height": 3,
        "id": 482,
        "weight": 3,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "volcarona",
        "base_experience": 275,
        "height": 16,
        "id": 637,
        "weight": 460,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "bidoof",
        "base_experience": 50,
        "height": 5,
        "id": 399,
        "weight": 200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "snover",
        "base_experience": 67,
        "height": 10,
        "id": 459,
        "weight": 505,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "shellos",
        "base_experience": 65,
        "height": 3,
        "id": 422,
        "weight": 63,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "bronzong",
        "base_experience": 175,
        "height": 13,
        "id": 437,
        "weight": 1870,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "burmy",
        "base_experience": 45,
        "height": 2,
        "id": 412,
        "weight": 34,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "vespiquen",
        "base_experience": 166,
        "height": 12,
        "id": 416,
        "weight": 385,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "chatot",
        "base_experience": 144,
        "height": 5,
        "id": 441,
        "weight": 19,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "rayquaza",
        "base_experience": 340,
        "height": 70,
        "id": 384,
        "weight": 2065,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "pansear",
        "base_experience": 63,
        "height": 6,
        "id": 513,
        "weight": 110,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "shieldon",
        "base_experience": 70,
        "height": 5,
        "id": 410,
        "weight": 570,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "lickilicky",
        "base_experience": 180,
        "height": 17,
        "id": 463,
        "weight": 1400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "munchlax",
        "base_experience": 78,
        "height": 6,
        "id": 446,
        "weight": 1050,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "drifblim",
        "base_experience": 174,
        "height": 12,
        "id": 426,
        "weight": 150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "mismagius",
        "base_experience": 173,
        "height": 9,
        "id": 429,
        "weight": 44,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "manaphy",
        "base_experience": 270,
        "height": 3,
        "id": 490,
        "weight": 14,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "serperior",
        "base_experience": 238,
        "height": 33,
        "id": 497,
        "weight": 630,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "tangrowth",
        "base_experience": 187,
        "height": 20,
        "id": 465,
        "weight": 1286,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "musharna",
        "base_experience": 170,
        "height": 11,
        "id": 518,
        "weight": 605,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "hippowdon",
        "base_experience": 184,
        "height": 20,
        "id": 450,
        "weight": 3000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "combee",
        "base_experience": 49,
        "height": 3,
        "id": 415,
        "weight": 55,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "oshawott",
        "base_experience": 62,
        "height": 5,
        "id": 501,
        "weight": 59,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "torterra",
        "base_experience": 236,
        "height": 22,
        "id": 389,
        "weight": 3100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "tympole",
        "base_experience": 59,
        "height": 5,
        "id": 535,
        "weight": 45,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "glaceon",
        "base_experience": 184,
        "height": 8,
        "id": 471,
        "weight": 259,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "venipede",
        "base_experience": 52,
        "height": 4,
        "id": 543,
        "weight": 53,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "roggenrola",
        "base_experience": 56,
        "height": 4,
        "id": 524,
        "weight": 180,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "toxicroak",
        "base_experience": 172,
        "height": 13,
        "id": 454,
        "weight": 444,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "starly",
        "base_experience": 49,
        "height": 3,
        "id": 396,
        "weight": 20,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "happiny",
        "base_experience": 110,
        "height": 6,
        "id": 440,
        "weight": 244,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "roserade",
        "base_experience": 258,
        "height": 9,
        "id": 407,
        "weight": 145,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "victini",
        "base_experience": 300,
        "height": 4,
        "id": 494,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "dwebble",
        "base_experience": 65,
        "height": 3,
        "id": 557,
        "weight": 145,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "stunky",
        "base_experience": 66,
        "height": 4,
        "id": 434,
        "weight": 192,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "purugly",
        "base_experience": 158,
        "height": 10,
        "id": 432,
        "weight": 438,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "spiritomb",
        "base_experience": 170,
        "height": 10,
        "id": 442,
        "weight": 1080,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "skuntank",
        "base_experience": 168,
        "height": 10,
        "id": 435,
        "weight": 380,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "cresselia",
        "base_experience": 300,
        "height": 15,
        "id": 488,
        "weight": 856,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "electivire",
        "base_experience": 270,
        "height": 18,
        "id": 466,
        "weight": 1386,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "garchomp",
        "base_experience": 300,
        "height": 19,
        "id": 445,
        "weight": 950,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "archeops",
        "base_experience": 177,
        "height": 14,
        "id": 567,
        "weight": 320,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "cranidos",
        "base_experience": 70,
        "height": 9,
        "id": 408,
        "weight": 315,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "panpour",
        "base_experience": 63,
        "height": 6,
        "id": 515,
        "weight": 135,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "glameow",
        "base_experience": 62,
        "height": 5,
        "id": 431,
        "weight": 39,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "phione",
        "base_experience": 216,
        "height": 4,
        "id": 489,
        "weight": 31,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "pachirisu",
        "base_experience": 142,
        "height": 4,
        "id": 417,
        "weight": 39,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "tynamo",
        "base_experience": 55,
        "height": 2,
        "id": 602,
        "weight": 3,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "arceus",
        "base_experience": 324,
        "height": 32,
        "id": 493,
        "weight": 3200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "ambipom",
        "base_experience": 169,
        "height": 12,
        "id": 424,
        "weight": 203,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "samurott",
        "base_experience": 238,
        "height": 15,
        "id": 503,
        "weight": 946,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "hippopotas",
        "base_experience": 66,
        "height": 8,
        "id": 449,
        "weight": 495,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "registeel",
        "base_experience": 290,
        "height": 19,
        "id": 379,
        "weight": 2050,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "drapion",
        "base_experience": 175,
        "height": 13,
        "id": 452,
        "weight": 615,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "latias",
        "base_experience": 300,
        "height": 14,
        "id": 380,
        "weight": 400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "joltik",
        "base_experience": 64,
        "height": 1,
        "id": 595,
        "weight": 6,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "floatzel",
        "base_experience": 173,
        "height": 11,
        "id": 419,
        "weight": 335,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "shaymin-land",
        "base_experience": 270,
        "height": 2,
        "id": 492,
        "weight": 21,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "riolu",
        "base_experience": 57,
        "height": 7,
        "id": 447,
        "weight": 202,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "simipour",
        "base_experience": 174,
        "height": 10,
        "id": 516,
        "weight": 290,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "leafeon",
        "base_experience": 184,
        "height": 10,
        "id": 470,
        "weight": 255,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "cottonee",
        "base_experience": 56,
        "height": 3,
        "id": 546,
        "weight": 6,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "carnivine",
        "base_experience": 159,
        "height": 14,
        "id": 455,
        "weight": 270,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "magmortar",
        "base_experience": 270,
        "height": 16,
        "id": 467,
        "weight": 680,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "sawk",
        "base_experience": 163,
        "height": 14,
        "id": 539,
        "weight": 510,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "cherubi",
        "base_experience": 55,
        "height": 4,
        "id": 420,
        "weight": 33,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "togekiss",
        "base_experience": 273,
        "height": 15,
        "id": 468,
        "weight": 380,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "purrloin",
        "base_experience": 56,
        "height": 4,
        "id": 509,
        "weight": 101,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "stunfisk",
        "base_experience": 165,
        "height": 7,
        "id": 618,
        "weight": 110,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "cofagrigus",
        "base_experience": 169,
        "height": 17,
        "id": 563,
        "weight": 765,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "binacle",
        "base_experience": 61,
        "height": 5,
        "id": 688,
        "weight": 310,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "staravia",
        "base_experience": 119,
        "height": 6,
        "id": 397,
        "weight": 155,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "vullaby",
        "base_experience": 74,
        "height": 5,
        "id": 629,
        "weight": 90,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "deino",
        "base_experience": 60,
        "height": 8,
        "id": 633,
        "weight": 173,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "basculin-red-striped",
        "base_experience": 161,
        "height": 10,
        "id": 550,
        "weight": 180,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "mamoswine",
        "base_experience": 265,
        "height": 25,
        "id": 473,
        "weight": 2910,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "alomomola",
        "base_experience": 165,
        "height": 12,
        "id": 594,
        "weight": 316,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "gigalith",
        "base_experience": 258,
        "height": 17,
        "id": 526,
        "weight": 2600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "dewott",
        "base_experience": 145,
        "height": 8,
        "id": 502,
        "weight": 245,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "eelektross",
        "base_experience": 232,
        "height": 21,
        "id": 604,
        "weight": 805,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "sandile",
        "base_experience": 58,
        "height": 7,
        "id": 551,
        "weight": 152,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "woobat",
        "base_experience": 65,
        "height": 4,
        "id": 527,
        "weight": 21,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "unfezant",
        "base_experience": 244,
        "height": 12,
        "id": 521,
        "weight": 290,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "servine",
        "base_experience": 145,
        "height": 8,
        "id": 496,
        "weight": 160,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "ferroseed",
        "base_experience": 61,
        "height": 6,
        "id": 597,
        "weight": 188,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "krokorok",
        "base_experience": 123,
        "height": 10,
        "id": 552,
        "weight": 334,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "vanillite",
        "base_experience": 61,
        "height": 4,
        "id": 582,
        "weight": 57,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "staraptor",
        "base_experience": 218,
        "height": 12,
        "id": 398,
        "weight": 249,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "fennekin",
        "base_experience": 61,
        "height": 4,
        "id": 653,
        "weight": 94,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "finneon",
        "base_experience": 66,
        "height": 4,
        "id": 456,
        "weight": 70,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "cryogonal",
        "base_experience": 180,
        "height": 11,
        "id": 615,
        "weight": 1480,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "carracosta",
        "base_experience": 173,
        "height": 12,
        "id": 565,
        "weight": 810,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "throh",
        "base_experience": 163,
        "height": 13,
        "id": 538,
        "weight": 555,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "reuniclus",
        "base_experience": 245,
        "height": 10,
        "id": 579,
        "weight": 201,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "cinccino",
        "base_experience": 165,
        "height": 5,
        "id": 573,
        "weight": 75,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "honchkrow",
        "base_experience": 177,
        "height": 9,
        "id": 430,
        "weight": 273,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "kyurem",
        "base_experience": 330,
        "height": 30,
        "id": 646,
        "weight": 3250,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "axew",
        "base_experience": 64,
        "height": 6,
        "id": 610,
        "weight": 180,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "druddigon",
        "base_experience": 170,
        "height": 16,
        "id": 621,
        "weight": 1390,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "regice",
        "base_experience": 290,
        "height": 18,
        "id": 378,
        "weight": 1750,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "mienshao",
        "base_experience": 179,
        "height": 14,
        "id": 620,
        "weight": 355,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "garbodor",
        "base_experience": 166,
        "height": 19,
        "id": 569,
        "weight": 1073,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "sigilyph",
        "base_experience": 172,
        "height": 14,
        "id": 561,
        "weight": 140,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "leavanny",
        "base_experience": 225,
        "height": 12,
        "id": 542,
        "weight": 205,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "deerling",
        "base_experience": 67,
        "height": 6,
        "id": 585,
        "weight": 195,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "solosis",
        "base_experience": 58,
        "height": 3,
        "id": 577,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "pidove",
        "base_experience": 53,
        "height": 3,
        "id": 519,
        "weight": 21,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "zoroark",
        "base_experience": 179,
        "height": 16,
        "id": 571,
        "weight": 811,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "darkrai",
        "base_experience": 270,
        "height": 15,
        "id": 491,
        "weight": 505,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "excadrill",
        "base_experience": 178,
        "height": 7,
        "id": 530,
        "weight": 404,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "pawniard",
        "base_experience": 68,
        "height": 5,
        "id": 624,
        "weight": 102,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "bisharp",
        "base_experience": 172,
        "height": 16,
        "id": 625,
        "weight": 700,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "spewpa",
        "base_experience": 75,
        "height": 3,
        "id": 665,
        "weight": 84,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "buizel",
        "base_experience": 66,
        "height": 7,
        "id": 418,
        "weight": 295,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "elgyem",
        "base_experience": 67,
        "height": 5,
        "id": 605,
        "weight": 90,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "darmanitan-standard",
        "base_experience": 168,
        "height": 13,
        "id": 555,
        "weight": 929,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "accelgor",
        "base_experience": 173,
        "height": 8,
        "id": 617,
        "weight": 253,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "floette",
        "base_experience": 130,
        "height": 2,
        "id": 670,
        "weight": 9,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "toucannon",
        "base_experience": 218,
        "height": 11,
        "id": 733,
        "weight": 260,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "foongus",
        "base_experience": 59,
        "height": 2,
        "id": 590,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "greninja",
        "base_experience": 239,
        "height": 15,
        "id": 658,
        "weight": 400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "mandibuzz",
        "base_experience": 179,
        "height": 12,
        "id": 630,
        "weight": 395,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "ducklett",
        "base_experience": 61,
        "height": 5,
        "id": 580,
        "weight": 55,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "braixen",
        "base_experience": 143,
        "height": 10,
        "id": 654,
        "weight": 145,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "herdier",
        "base_experience": 130,
        "height": 9,
        "id": 507,
        "weight": 147,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "kyogre",
        "base_experience": 335,
        "height": 45,
        "id": 382,
        "weight": 3520,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "meloetta-aria",
        "base_experience": 270,
        "height": 6,
        "id": 648,
        "weight": 65,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "cobalion",
        "base_experience": 290,
        "height": 21,
        "id": 638,
        "weight": 2500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "rockruff",
        "base_experience": 56,
        "height": 5,
        "id": 744,
        "weight": 92,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "seismitoad",
        "base_experience": 255,
        "height": 15,
        "id": 537,
        "weight": 620,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "tornadus-incarnate",
        "base_experience": 290,
        "height": 15,
        "id": 641,
        "weight": 630,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "quilladin",
        "base_experience": 142,
        "height": 7,
        "id": 651,
        "weight": 290,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "galvantula",
        "base_experience": 165,
        "height": 8,
        "id": 596,
        "weight": 143,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "bunnelby",
        "base_experience": 47,
        "height": 4,
        "id": 659,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "durant",
        "base_experience": 169,
        "height": 3,
        "id": 632,
        "weight": 330,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "latios",
        "base_experience": 300,
        "height": 20,
        "id": 381,
        "weight": 600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "reshiram",
        "base_experience": 340,
        "height": 32,
        "id": 643,
        "weight": 3300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "gogoat",
        "base_experience": 186,
        "height": 17,
        "id": 673,
        "weight": 910,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "scatterbug",
        "base_experience": 40,
        "height": 3,
        "id": 664,
        "weight": 25,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "patrat",
        "base_experience": 51,
        "height": 5,
        "id": 504,
        "weight": 116,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "karrablast",
        "base_experience": 63,
        "height": 5,
        "id": 588,
        "weight": 59,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "abomasnow",
        "base_experience": 173,
        "height": 22,
        "id": 460,
        "weight": 1355,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "blitzle",
        "base_experience": 59,
        "height": 8,
        "id": 522,
        "weight": 298,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "palpitoad",
        "base_experience": 134,
        "height": 8,
        "id": 536,
        "weight": 170,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "zekrom",
        "base_experience": 340,
        "height": 29,
        "id": 644,
        "weight": 3450,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "regigigas",
        "base_experience": 335,
        "height": 37,
        "id": 486,
        "weight": 4200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "golurk",
        "base_experience": 169,
        "height": 28,
        "id": 623,
        "weight": 3300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "pyroar",
        "base_experience": 177,
        "height": 15,
        "id": 668,
        "weight": 815,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "larvesta",
        "base_experience": 72,
        "height": 11,
        "id": 636,
        "weight": 288,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "snivy",
        "base_experience": 62,
        "height": 6,
        "id": 495,
        "weight": 81,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "terrakion",
        "base_experience": 290,
        "height": 19,
        "id": 639,
        "weight": 2600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "landorus-incarnate",
        "base_experience": 300,
        "height": 15,
        "id": 645,
        "weight": 680,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "frogadier",
        "base_experience": 142,
        "height": 6,
        "id": 657,
        "weight": 109,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "chespin",
        "base_experience": 63,
        "height": 4,
        "id": 650,
        "weight": 90,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "clawitzer",
        "base_experience": 100,
        "height": 13,
        "id": 693,
        "weight": 353,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "klink",
        "base_experience": 60,
        "height": 3,
        "id": 599,
        "weight": 210,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "chesnaught",
        "base_experience": 239,
        "height": 16,
        "id": 652,
        "weight": 900,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "archen",
        "base_experience": 71,
        "height": 5,
        "id": 566,
        "weight": 95,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "porygon-z",
        "base_experience": 268,
        "height": 9,
        "id": 474,
        "weight": 340,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "mantyke",
        "base_experience": 69,
        "height": 10,
        "id": 458,
        "weight": 650,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "duosion",
        "base_experience": 130,
        "height": 6,
        "id": 578,
        "weight": 80,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "beartic",
        "base_experience": 177,
        "height": 26,
        "id": 614,
        "weight": 2600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "genesect",
        "base_experience": 300,
        "height": 15,
        "id": 649,
        "weight": 825,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "thundurus-incarnate",
        "base_experience": 290,
        "height": 15,
        "id": 642,
        "weight": 610,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "avalugg",
        "base_experience": 180,
        "height": 20,
        "id": 713,
        "weight": 5050,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "beheeyem",
        "base_experience": 170,
        "height": 10,
        "id": 606,
        "weight": 345,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "fraxure",
        "base_experience": 144,
        "height": 10,
        "id": 611,
        "weight": 360,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "vivillon",
        "base_experience": 185,
        "height": 12,
        "id": 666,
        "weight": 170,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "rotom",
        "base_experience": 154,
        "height": 3,
        "id": 479,
        "weight": 3,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "froakie",
        "base_experience": 63,
        "height": 3,
        "id": 656,
        "weight": 70,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "lumineon",
        "base_experience": 161,
        "height": 12,
        "id": 457,
        "weight": 240,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "fletchinder",
        "base_experience": 134,
        "height": 7,
        "id": 662,
        "weight": 160,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "litwick",
        "base_experience": 55,
        "height": 3,
        "id": 607,
        "weight": 31,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "hydreigon",
        "base_experience": 300,
        "height": 18,
        "id": 635,
        "weight": 1600,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "escavalier",
        "base_experience": 173,
        "height": 10,
        "id": 589,
        "weight": 330,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "keldeo-ordinary",
        "base_experience": 290,
        "height": 14,
        "id": 647,
        "weight": 485,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "giratina-altered",
        "base_experience": 340,
        "height": 45,
        "id": 487,
        "weight": 7500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "diggersby",
        "base_experience": 148,
        "height": 10,
        "id": 660,
        "weight": 424,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "doublade",
        "base_experience": 157,
        "height": 8,
        "id": 680,
        "weight": 45,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "noibat",
        "base_experience": 49,
        "height": 5,
        "id": 714,
        "weight": 80,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "whimsicott",
        "base_experience": 168,
        "height": 7,
        "id": 547,
        "weight": 66,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "rowlet",
        "base_experience": 64,
        "height": 3,
        "id": 722,
        "weight": 15,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "chandelure",
        "base_experience": 260,
        "height": 10,
        "id": 609,
        "weight": 343,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "trevenant",
        "base_experience": 166,
        "height": 15,
        "id": 709,
        "weight": 710,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "dartrix",
        "base_experience": 147,
        "height": 7,
        "id": 723,
        "weight": 160,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "aromatisse",
        "base_experience": 162,
        "height": 8,
        "id": 683,
        "weight": 155,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "ferrothorn",
        "base_experience": 171,
        "height": 10,
        "id": 598,
        "weight": 1100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "pangoro",
        "base_experience": 173,
        "height": 21,
        "id": 675,
        "weight": 1360,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "sylveon",
        "base_experience": 184,
        "height": 10,
        "id": 700,
        "weight": 235,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "pancham",
        "base_experience": 70,
        "height": 6,
        "id": 674,
        "weight": 80,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "zeraora",
        "base_experience": 300,
        "height": 15,
        "id": 807,
        "weight": 445,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "delphox",
        "base_experience": 240,
        "height": 15,
        "id": 655,
        "weight": 390,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "malamar",
        "base_experience": 169,
        "height": 15,
        "id": 687,
        "weight": 470,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "zweilous",
        "base_experience": 147,
        "height": 14,
        "id": 634,
        "weight": 500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "fletchling",
        "base_experience": 56,
        "height": 3,
        "id": 661,
        "weight": 17,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "barbaracle",
        "base_experience": 175,
        "height": 13,
        "id": 689,
        "weight": 960,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "tyrunt",
        "base_experience": 72,
        "height": 8,
        "id": 696,
        "weight": 260,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "gourgeist-average",
        "base_experience": 173,
        "height": 9,
        "id": 711,
        "weight": 125,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "florges",
        "base_experience": 248,
        "height": 11,
        "id": 671,
        "weight": 100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "uxie",
        "base_experience": 290,
        "height": 3,
        "id": 480,
        "weight": 3,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "litleo",
        "base_experience": 74,
        "height": 6,
        "id": 667,
        "weight": 135,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "slurpuff",
        "base_experience": 168,
        "height": 8,
        "id": 685,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "inkay",
        "base_experience": 58,
        "height": 4,
        "id": 686,
        "weight": 35,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "yamask",
        "base_experience": 61,
        "height": 5,
        "id": 562,
        "weight": 15,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "aegislash-shield",
        "base_experience": 250,
        "height": 17,
        "id": 681,
        "weight": 530,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "bouffalant",
        "base_experience": 172,
        "height": 16,
        "id": 626,
        "weight": 946,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "jellicent",
        "base_experience": 168,
        "height": 22,
        "id": 593,
        "weight": 1350,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "haxorus",
        "base_experience": 270,
        "height": 18,
        "id": 612,
        "weight": 1055,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "goomy",
        "base_experience": 60,
        "height": 3,
        "id": 704,
        "weight": 28,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "vanilluxe",
        "base_experience": 268,
        "height": 13,
        "id": 584,
        "weight": 575,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "rhyperior",
        "base_experience": 268,
        "height": 24,
        "id": 464,
        "weight": 2828,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "poipole",
        "base_experience": 210,
        "height": 6,
        "id": 803,
        "weight": 18,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "vikavolt",
        "base_experience": 250,
        "height": 15,
        "id": 738,
        "weight": 450,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "skrelp",
        "base_experience": 64,
        "height": 5,
        "id": 690,
        "weight": 73,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "nickit",
        "base_experience": 49,
        "height": 6,
        "id": 827,
        "weight": 89,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "torracat",
        "base_experience": 147,
        "height": 7,
        "id": 726,
        "weight": 250,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "chingling",
        "base_experience": 57,
        "height": 2,
        "id": 433,
        "weight": 6,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "ribombee",
        "base_experience": 162,
        "height": 2,
        "id": 743,
        "weight": 5,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "shelmet",
        "base_experience": 61,
        "height": 4,
        "id": 616,
        "weight": 77,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "luxray",
        "base_experience": 262,
        "height": 14,
        "id": 405,
        "weight": 420,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "hawlucha",
        "base_experience": 175,
        "height": 8,
        "id": 701,
        "weight": 215,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "munna",
        "base_experience": 58,
        "height": 6,
        "id": 517,
        "weight": 233,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "noivern",
        "base_experience": 187,
        "height": 15,
        "id": 715,
        "weight": 850,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "rufflet",
        "base_experience": 70,
        "height": 5,
        "id": 627,
        "weight": 105,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "lycanroc-midday",
        "base_experience": 170,
        "height": 8,
        "id": 745,
        "weight": 250,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "mareanie",
        "base_experience": 61,
        "height": 4,
        "id": 747,
        "weight": 80,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "swirlix",
        "base_experience": 68,
        "height": 4,
        "id": 684,
        "weight": 35,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "crabrawler",
        "base_experience": 68,
        "height": 6,
        "id": 739,
        "weight": 70,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "yungoos",
        "base_experience": 51,
        "height": 4,
        "id": 734,
        "weight": 60,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "popplio",
        "base_experience": 64,
        "height": 4,
        "id": 728,
        "weight": 75,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "deoxys-normal",
        "base_experience": 270,
        "height": 17,
        "id": 386,
        "weight": 608,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "pignite",
        "base_experience": 146,
        "height": 10,
        "id": 499,
        "weight": 555,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "krookodile",
        "base_experience": 260,
        "height": 15,
        "id": 553,
        "weight": 963,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "mudbray",
        "base_experience": 77,
        "height": 10,
        "id": 749,
        "weight": 1100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "sewaddle",
        "base_experience": 62,
        "height": 3,
        "id": 540,
        "weight": 25,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "decidueye",
        "base_experience": 265,
        "height": 16,
        "id": 724,
        "weight": 366,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "lillipup",
        "base_experience": 55,
        "height": 4,
        "id": 506,
        "weight": 41,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "amaura",
        "base_experience": 72,
        "height": 13,
        "id": 698,
        "weight": 252,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "phantump",
        "base_experience": 62,
        "height": 4,
        "id": 708,
        "weight": 70,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "araquanid",
        "base_experience": 159,
        "height": 18,
        "id": 752,
        "weight": 820,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "clauncher",
        "base_experience": 66,
        "height": 5,
        "id": 692,
        "weight": 83,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "scolipede",
        "base_experience": 243,
        "height": 25,
        "id": 545,
        "weight": 2005,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "aurorus",
        "base_experience": 104,
        "height": 27,
        "id": 699,
        "weight": 2250,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "litten",
        "base_experience": 64,
        "height": 4,
        "id": 725,
        "weight": 43,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "lucario",
        "base_experience": 184,
        "height": 12,
        "id": 448,
        "weight": 540,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "primarina",
        "base_experience": 265,
        "height": 18,
        "id": 730,
        "weight": 440,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "morgrem",
        "base_experience": 130,
        "height": 8,
        "id": 860,
        "weight": 125,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "darumaka",
        "base_experience": 63,
        "height": 6,
        "id": 554,
        "weight": 375,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "komala",
        "base_experience": 168,
        "height": 4,
        "id": 775,
        "weight": 199,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "goodra",
        "base_experience": 300,
        "height": 20,
        "id": 706,
        "weight": 1505,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "charjabug",
        "base_experience": 140,
        "height": 5,
        "id": 737,
        "weight": 105,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "tyrantrum",
        "base_experience": 182,
        "height": 25,
        "id": 697,
        "weight": 2700,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "piplup",
        "base_experience": 63,
        "height": 4,
        "id": 393,
        "weight": 52,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "mudsdale",
        "base_experience": 175,
        "height": 25,
        "id": 750,
        "weight": 9200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "heliolisk",
        "base_experience": 168,
        "height": 10,
        "id": 695,
        "weight": 210,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "honedge",
        "base_experience": 65,
        "height": 8,
        "id": 679,
        "weight": 20,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "sirfetchd",
        "base_experience": 177,
        "height": 8,
        "id": 865,
        "weight": 1170,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "hoopa",
        "base_experience": 270,
        "height": 5,
        "id": 720,
        "weight": 90,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "empoleon",
        "base_experience": 239,
        "height": 17,
        "id": 395,
        "weight": 845,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "swadloon",
        "base_experience": 133,
        "height": 5,
        "id": 541,
        "weight": 73,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "xerneas",
        "base_experience": 340,
        "height": 30,
        "id": 716,
        "weight": 2150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "dialga",
        "base_experience": 340,
        "height": 54,
        "id": 483,
        "weight": 6830,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "mime-jr",
        "base_experience": 62,
        "height": 6,
        "id": 439,
        "weight": 130,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "grubbin",
        "base_experience": 60,
        "height": 4,
        "id": 736,
        "weight": 44,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "klefki",
        "base_experience": 165,
        "height": 2,
        "id": 707,
        "weight": 30,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "fomantis",
        "base_experience": 50,
        "height": 3,
        "id": 753,
        "weight": 15,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "toxapex",
        "base_experience": 173,
        "height": 7,
        "id": 748,
        "weight": 145,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "stoutland",
        "base_experience": 250,
        "height": 12,
        "id": 508,
        "weight": 610,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "helioptile",
        "base_experience": 58,
        "height": 5,
        "id": 694,
        "weight": 60,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "meowstic-male",
        "base_experience": 163,
        "height": 6,
        "id": 678,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "watchog",
        "base_experience": 147,
        "height": 11,
        "id": 505,
        "weight": 270,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "luxio",
        "base_experience": 127,
        "height": 9,
        "id": 404,
        "weight": 305,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "sliggoo",
        "base_experience": 158,
        "height": 8,
        "id": 705,
        "weight": 175,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "raboot",
        "base_experience": 147,
        "height": 6,
        "id": 814,
        "weight": 90,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "lampent",
        "base_experience": 130,
        "height": 6,
        "id": 608,
        "weight": 130,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "incineroar",
        "base_experience": 265,
        "height": 18,
        "id": 727,
        "weight": 830,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "shiinotic",
        "base_experience": 142,
        "height": 10,
        "id": 756,
        "weight": 115,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "greedent",
        "base_experience": 161,
        "height": 6,
        "id": 820,
        "weight": 60,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "gothorita",
        "base_experience": 137,
        "height": 7,
        "id": 575,
        "weight": 180,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "palkia",
        "base_experience": 340,
        "height": 42,
        "id": 484,
        "weight": 3360,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "tsareena",
        "base_experience": 255,
        "height": 12,
        "id": 763,
        "weight": 214,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "salandit",
        "base_experience": 64,
        "height": 6,
        "id": 757,
        "weight": 48,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "pyukumuku",
        "base_experience": 144,
        "height": 3,
        "id": 771,
        "weight": 12,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "golisopod",
        "base_experience": 186,
        "height": 20,
        "id": 768,
        "weight": 1080,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "dedenne",
        "base_experience": 151,
        "height": 2,
        "id": 702,
        "weight": 22,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "pikipek",
        "base_experience": 53,
        "height": 3,
        "id": 731,
        "weight": 12,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "whirlipede",
        "base_experience": 126,
        "height": 12,
        "id": 544,
        "weight": 585,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "palossand",
        "base_experience": 168,
        "height": 13,
        "id": 770,
        "weight": 2500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "gabite",
        "base_experience": 144,
        "height": 14,
        "id": 444,
        "weight": 560,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "cutiefly",
        "base_experience": 61,
        "height": 1,
        "id": 742,
        "weight": 2,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "bewear",
        "base_experience": 175,
        "height": 21,
        "id": 760,
        "weight": 1350,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "crabominable",
        "base_experience": 167,
        "height": 17,
        "id": 740,
        "weight": 1800,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "trumbeak",
        "base_experience": 124,
        "height": 6,
        "id": 732,
        "weight": 148,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "tepig",
        "base_experience": 62,
        "height": 5,
        "id": 498,
        "weight": 99,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "scraggy",
        "base_experience": 70,
        "height": 6,
        "id": 559,
        "weight": 118,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "infernape",
        "base_experience": 240,
        "height": 12,
        "id": 392,
        "weight": 550,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "bergmite",
        "base_experience": 61,
        "height": 10,
        "id": 712,
        "weight": 995,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "kricketot",
        "base_experience": 39,
        "height": 3,
        "id": 401,
        "weight": 22,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "stufful",
        "base_experience": 68,
        "height": 5,
        "id": 759,
        "weight": 68,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "pumpkaboo-average",
        "base_experience": 67,
        "height": 4,
        "id": 710,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "steenee",
        "base_experience": 102,
        "height": 7,
        "id": 762,
        "weight": 82,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "mienfoo",
        "base_experience": 70,
        "height": 9,
        "id": 619,
        "weight": 200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "flabebe",
        "base_experience": 61,
        "height": 1,
        "id": 669,
        "weight": 1,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "zorua",
        "base_experience": 66,
        "height": 7,
        "id": 570,
        "weight": 125,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "oranguru",
        "base_experience": 172,
        "height": 15,
        "id": 765,
        "weight": 760,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "carbink",
        "base_experience": 100,
        "height": 3,
        "id": 703,
        "weight": 57,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "wooloo",
        "base_experience": 122,
        "height": 6,
        "id": 831,
        "weight": 60,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "volcanion",
        "base_experience": 300,
        "height": 17,
        "id": 721,
        "weight": 1950,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "passimian",
        "base_experience": 172,
        "height": 20,
        "id": 766,
        "weight": 828,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "thwackey",
        "base_experience": 147,
        "height": 7,
        "id": 811,
        "weight": 140,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "bounsweet",
        "base_experience": 42,
        "height": 3,
        "id": 761,
        "weight": 32,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "turtwig",
        "base_experience": 64,
        "height": 4,
        "id": 387,
        "weight": 102,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "bruxish",
        "base_experience": 166,
        "height": 9,
        "id": 779,
        "weight": 190,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "timburr",
        "base_experience": 61,
        "height": 6,
        "id": 532,
        "weight": 125,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "conkeldurr",
        "base_experience": 253,
        "height": 14,
        "id": 534,
        "weight": 870,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "rillaboom",
        "base_experience": 265,
        "height": 21,
        "id": 812,
        "weight": 900,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "weavile",
        "base_experience": 179,
        "height": 11,
        "id": 461,
        "weight": 340,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "wishiwashi-solo",
        "base_experience": 61,
        "height": 2,
        "id": 746,
        "weight": 3,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "buzzwole",
        "base_experience": 285,
        "height": 24,
        "id": 794,
        "weight": 3336,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "sandygast",
        "base_experience": 64,
        "height": 5,
        "id": 769,
        "weight": 700,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "dewpider",
        "base_experience": 54,
        "height": 3,
        "id": 751,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "heatmor",
        "base_experience": 169,
        "height": 14,
        "id": 631,
        "weight": 580,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "comfey",
        "base_experience": 170,
        "height": 1,
        "id": 764,
        "weight": 3,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "cosmog",
        "base_experience": 40,
        "height": 2,
        "id": 789,
        "weight": 1,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "tapu-koko",
        "base_experience": 285,
        "height": 18,
        "id": 785,
        "weight": 205,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "crustle",
        "base_experience": 170,
        "height": 14,
        "id": 558,
        "weight": 2000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "klang",
        "base_experience": 154,
        "height": 6,
        "id": 600,
        "weight": 510,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "yamper",
        "base_experience": 54,
        "height": 3,
        "id": 835,
        "weight": 135,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "scrafty",
        "base_experience": 171,
        "height": 11,
        "id": 560,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "petilil",
        "base_experience": 56,
        "height": 5,
        "id": 548,
        "weight": 66,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "marshadow",
        "base_experience": 300,
        "height": 7,
        "id": 802,
        "weight": 222,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "orbeetle",
        "base_experience": 253,
        "height": 4,
        "id": 826,
        "weight": 408,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "thievul",
        "base_experience": 159,
        "height": 12,
        "id": 828,
        "weight": 199,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "dhelmise",
        "base_experience": 181,
        "height": 39,
        "id": 781,
        "weight": 2100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "lunala",
        "base_experience": 340,
        "height": 40,
        "id": 792,
        "weight": 1200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "tranquill",
        "base_experience": 125,
        "height": 6,
        "id": 520,
        "weight": 150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "tapu-lele",
        "base_experience": 285,
        "height": 12,
        "id": 786,
        "weight": 186,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "kartana",
        "base_experience": 285,
        "height": 3,
        "id": 798,
        "weight": 1,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "corviknight",
        "base_experience": 248,
        "height": 22,
        "id": 823,
        "weight": 750,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "gallade",
        "base_experience": 259,
        "height": 16,
        "id": 475,
        "weight": 520,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "dubwool",
        "base_experience": 172,
        "height": 13,
        "id": 832,
        "weight": 430,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "yveltal",
        "base_experience": 340,
        "height": 58,
        "id": 717,
        "weight": 2030,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "impidimp",
        "base_experience": 53,
        "height": 4,
        "id": 859,
        "weight": 55,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "guzzlord",
        "base_experience": 285,
        "height": 55,
        "id": 799,
        "weight": 8880,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "silvally",
        "base_experience": 285,
        "height": 23,
        "id": 773,
        "weight": 1005,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "spritzee",
        "base_experience": 68,
        "height": 2,
        "id": 682,
        "weight": 5,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "grookey",
        "base_experience": 62,
        "height": 3,
        "id": 810,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "inteleon",
        "base_experience": 265,
        "height": 19,
        "id": 818,
        "weight": 452,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "coalossal",
        "base_experience": 255,
        "height": 28,
        "id": 839,
        "weight": 3105,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "nihilego",
        "base_experience": 285,
        "height": 12,
        "id": 793,
        "weight": 555,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "flapple",
        "base_experience": 170,
        "height": 3,
        "id": 841,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "sandaconda",
        "base_experience": 179,
        "height": 38,
        "id": 844,
        "weight": 655,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "cramorant",
        "base_experience": 166,
        "height": 8,
        "id": 845,
        "weight": 180,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "chimchar",
        "base_experience": 62,
        "height": 5,
        "id": 390,
        "weight": 62,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "blipbug",
        "base_experience": 36,
        "height": 4,
        "id": 824,
        "weight": 80,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "eldegoss",
        "base_experience": 161,
        "height": 5,
        "id": 830,
        "weight": 25,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "barraskewda",
        "base_experience": 172,
        "height": 13,
        "id": 847,
        "weight": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "bronzor",
        "base_experience": 60,
        "height": 5,
        "id": 436,
        "weight": 605,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "brionne",
        "base_experience": 147,
        "height": 6,
        "id": 729,
        "weight": 175,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "swoobat",
        "base_experience": 149,
        "height": 9,
        "id": 528,
        "weight": 105,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "minccino",
        "base_experience": 60,
        "height": 4,
        "id": 572,
        "weight": 58,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "diancie",
        "base_experience": 300,
        "height": 7,
        "id": 719,
        "weight": 88,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "skiddo",
        "base_experience": 70,
        "height": 9,
        "id": 672,
        "weight": 310,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "gothita",
        "base_experience": 58,
        "height": 4,
        "id": 574,
        "weight": 58,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "zygarde-50",
        "base_experience": 300,
        "height": 50,
        "id": 718,
        "weight": 3050,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "gumshoos",
        "base_experience": 146,
        "height": 7,
        "id": 735,
        "weight": 142,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "swanna",
        "base_experience": 166,
        "height": 13,
        "id": 581,
        "weight": 242,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "morelull",
        "base_experience": 57,
        "height": 2,
        "id": 755,
        "weight": 15,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "salazzle",
        "base_experience": 168,
        "height": 12,
        "id": 758,
        "weight": 222,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "turtonator",
        "base_experience": 170,
        "height": 20,
        "id": 776,
        "weight": 2120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "mimikyu-disguised",
        "base_experience": 167,
        "height": 2,
        "id": 778,
        "weight": 7,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "togedemaru",
        "base_experience": 152,
        "height": 3,
        "id": 777,
        "weight": 33,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "zebstrika",
        "base_experience": 174,
        "height": 16,
        "id": 523,
        "weight": 795,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "drampa",
        "base_experience": 170,
        "height": 30,
        "id": 780,
        "weight": 1850,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "furfrou",
        "base_experience": 165,
        "height": 12,
        "id": 676,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "espurr",
        "base_experience": 71,
        "height": 3,
        "id": 677,
        "weight": 35,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "hakamo-o",
        "base_experience": 147,
        "height": 12,
        "id": 783,
        "weight": 470,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "talonflame",
        "base_experience": 175,
        "height": 12,
        "id": 663,
        "weight": 245,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "wimpod",
        "base_experience": 46,
        "height": 5,
        "id": 767,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "tapu-bulu",
        "base_experience": 285,
        "height": 19,
        "id": 787,
        "weight": 455,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "cosmoem",
        "base_experience": 140,
        "height": 1,
        "id": 790,
        "weight": 9999,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "solgaleo",
        "base_experience": 340,
        "height": 34,
        "id": 791,
        "weight": 2300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "pheromosa",
        "base_experience": 285,
        "height": 18,
        "id": 795,
        "weight": 250,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "celesteela",
        "base_experience": 285,
        "height": 92,
        "id": 797,
        "weight": 9999,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "necrozma",
        "base_experience": 300,
        "height": 24,
        "id": 800,
        "weight": 2300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "magearna",
        "base_experience": 300,
        "height": 10,
        "id": 801,
        "weight": 805,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "sawsbuck",
        "base_experience": 166,
        "height": 19,
        "id": 586,
        "weight": 925,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "frillish",
        "base_experience": 67,
        "height": 12,
        "id": 592,
        "weight": 330,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "lurantis",
        "base_experience": 168,
        "height": 9,
        "id": 754,
        "weight": 185,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "type-null",
        "base_experience": 107,
        "height": 19,
        "id": 772,
        "weight": 1205,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "jangmo-o",
        "base_experience": 60,
        "height": 6,
        "id": 782,
        "weight": 297,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "xurkitree",
        "base_experience": 285,
        "height": 38,
        "id": 796,
        "weight": 1000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "naganadel",
        "base_experience": 270,
        "height": 36,
        "id": 804,
        "weight": 1500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "stakataka",
        "base_experience": 285,
        "height": 55,
        "id": 805,
        "weight": 8200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "meltan",
        "base_experience": 150,
        "height": 2,
        "id": 808,
        "weight": 80,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "melmetal",
        "base_experience": 300,
        "height": 25,
        "id": 809,
        "weight": 8000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "sobble",
        "base_experience": 62,
        "height": 3,
        "id": 816,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "skwovet",
        "base_experience": 55,
        "height": 3,
        "id": 819,
        "weight": 25,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "corvisquire",
        "base_experience": 128,
        "height": 8,
        "id": 822,
        "weight": 160,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "gossifleur",
        "base_experience": 50,
        "height": 4,
        "id": 829,
        "weight": 22,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "chewtle",
        "base_experience": 57,
        "height": 3,
        "id": 833,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "dottler",
        "base_experience": 117,
        "height": 4,
        "id": 825,
        "weight": 195,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "drednaw",
        "base_experience": 170,
        "height": 10,
        "id": 834,
        "weight": 1155,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "regirock",
        "base_experience": 290,
        "height": 17,
        "id": 377,
        "weight": 2300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "cherrim",
        "base_experience": 158,
        "height": 5,
        "id": 421,
        "weight": 93,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "boltund",
        "base_experience": 172,
        "height": 10,
        "id": 836,
        "weight": 340,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "rolycoly",
        "base_experience": 48,
        "height": 3,
        "id": 837,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "carkol",
        "base_experience": 144,
        "height": 11,
        "id": 838,
        "weight": 780,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "applin",
        "base_experience": 52,
        "height": 2,
        "id": 840,
        "weight": 5,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "dragalge",
        "base_experience": 173,
        "height": 18,
        "id": 691,
        "weight": 815,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "silicobra",
        "base_experience": 63,
        "height": 22,
        "id": 843,
        "weight": 76,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "toxel",
        "base_experience": 48,
        "height": 4,
        "id": 848,
        "weight": 110,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "toxtricity-amped",
        "base_experience": 176,
        "height": 16,
        "id": 849,
        "weight": 400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "lilligant",
        "base_experience": 168,
        "height": 11,
        "id": 549,
        "weight": 163,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "tapu-fini",
        "base_experience": 285,
        "height": 13,
        "id": 788,
        "weight": 212,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "grapploct",
        "base_experience": 168,
        "height": 16,
        "id": 853,
        "weight": 390,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "polteageist",
        "base_experience": 178,
        "height": 2,
        "id": 855,
        "weight": 4,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "hattrem",
        "base_experience": 130,
        "height": 6,
        "id": 857,
        "weight": 48,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "hatterene",
        "base_experience": 255,
        "height": 21,
        "id": 858,
        "weight": 51,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "obstagoon",
        "base_experience": 260,
        "height": 16,
        "id": 862,
        "weight": 460,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "perrserker",
        "base_experience": 154,
        "height": 8,
        "id": 863,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "cursola",
        "base_experience": 179,
        "height": 10,
        "id": 864,
        "weight": 4,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "mr-rime",
        "base_experience": 182,
        "height": 15,
        "id": 866,
        "weight": 582,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "hatenna",
        "base_experience": 53,
        "height": 4,
        "id": 856,
        "weight": 34,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "runerigus",
        "base_experience": 169,
        "height": 16,
        "id": 867,
        "weight": 666,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "milcery",
        "base_experience": 54,
        "height": 2,
        "id": 868,
        "weight": 3,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "buneary",
        "base_experience": 70,
        "height": 4,
        "id": 427,
        "weight": 55,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "scorbunny",
        "base_experience": 62,
        "height": 3,
        "id": 813,
        "weight": 45,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "alcremie",
        "base_experience": 173,
        "height": 3,
        "id": 869,
        "weight": 5,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "emolga",
        "base_experience": 150,
        "height": 4,
        "id": 587,
        "weight": 50,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "oricorio-baile",
        "base_experience": 167,
        "height": 6,
        "id": 741,
        "weight": 34,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "minior-red-meteor",
        "base_experience": 154,
        "height": 3,
        "id": 774,
        "weight": 400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "arrokuda",
        "base_experience": 56,
        "height": 5,
        "id": 846,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "sinistea",
        "base_experience": 62,
        "height": 1,
        "id": 854,
        "weight": 2,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "falinks",
        "base_experience": 165,
        "height": 30,
        "id": 870,
        "weight": 620,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "pincurchin",
        "base_experience": 152,
        "height": 3,
        "id": 871,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "snom",
        "base_experience": 37,
        "height": 3,
        "id": 872,
        "weight": 38,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "frosmoth",
        "base_experience": 166,
        "height": 13,
        "id": 873,
        "weight": 420,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "eiscue-ice",
        "base_experience": 165,
        "height": 14,
        "id": 875,
        "weight": 890,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "indeedee-male",
        "base_experience": 166,
        "height": 9,
        "id": 876,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "morpeko-full-belly",
        "base_experience": 153,
        "height": 3,
        "id": 877,
        "weight": 30,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "copperajah",
        "base_experience": 175,
        "height": 30,
        "id": 879,
        "weight": 6500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "dracozolt",
        "base_experience": 177,
        "height": 18,
        "id": 880,
        "weight": 1900,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "arctozolt",
        "base_experience": 177,
        "height": 23,
        "id": 881,
        "weight": 1500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "dracovish",
        "base_experience": 177,
        "height": 23,
        "id": 882,
        "weight": 2150,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "arctovish",
        "base_experience": 177,
        "height": 20,
        "id": 883,
        "weight": 1750,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "dragapult",
        "base_experience": 300,
        "height": 30,
        "id": 887,
        "weight": 500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "zacian",
        "base_experience": 335,
        "height": 28,
        "id": 888,
        "weight": 1100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "zamazenta",
        "base_experience": 335,
        "height": 29,
        "id": 889,
        "weight": 2100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "eternatus",
        "base_experience": 345,
        "height": 200,
        "id": 890,
        "weight": 9500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "kubfu",
        "base_experience": 77,
        "height": 6,
        "id": 891,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "urshifu-single-strike",
        "base_experience": 275,
        "height": 19,
        "id": 892,
        "weight": 1050,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "regidrago",
        "base_experience": 290,
        "height": 21,
        "id": 895,
        "weight": 2000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "glastrier",
        "base_experience": 290,
        "height": 22,
        "id": 896,
        "weight": 8000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "calyrex",
        "base_experience": 250,
        "height": 11,
        "id": 898,
        "weight": 77,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "kleavor",
        "base_experience": null,
        "height": 18,
        "id": 900,
        "weight": 890,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "basculegion-male",
        "base_experience": null,
        "height": 30,
        "id": 902,
        "weight": 1100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "sneasler",
        "base_experience": null,
        "height": 13,
        "id": 903,
        "weight": 430,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "enamorus-incarnate",
        "base_experience": null,
        "height": 16,
        "id": 905,
        "weight": 480,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "croagunk",
        "base_experience": 60,
        "height": 7,
        "id": 453,
        "weight": 230,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "clobbopus",
        "base_experience": 62,
        "height": 6,
        "id": 852,
        "weight": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "stonjourner",
        "base_experience": 165,
        "height": 25,
        "id": 874,
        "weight": 5200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "dreepy",
        "base_experience": 54,
        "height": 5,
        "id": 885,
        "weight": 20,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "drakloak",
        "base_experience": 144,
        "height": 14,
        "id": 886,
        "weight": 110,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "zarude",
        "base_experience": 300,
        "height": 18,
        "id": 893,
        "weight": 700,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "kommo-o",
        "base_experience": 300,
        "height": 16,
        "id": 784,
        "weight": 782,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "overqwil",
        "base_experience": null,
        "height": 25,
        "id": 904,
        "weight": 605,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "gliscor",
        "base_experience": 179,
        "height": 20,
        "id": 472,
        "weight": 425,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "probopass",
        "base_experience": 184,
        "height": 14,
        "id": 476,
        "weight": 3400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "dusknoir",
        "base_experience": 263,
        "height": 22,
        "id": 477,
        "weight": 1066,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "froslass",
        "base_experience": 168,
        "height": 13,
        "id": 478,
        "weight": 266,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "monferno",
        "base_experience": 142,
        "height": 9,
        "id": 391,
        "weight": 220,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "braviary",
        "base_experience": 179,
        "height": 15,
        "id": 628,
        "weight": 410,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "duraludon",
        "base_experience": 187,
        "height": 18,
        "id": 884,
        "weight": 400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "mesprit",
        "base_experience": 290,
        "height": 3,
        "id": 481,
        "weight": 3,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "emboar",
        "base_experience": 238,
        "height": 16,
        "id": 500,
        "weight": 1500,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "pansage",
        "base_experience": 63,
        "height": 6,
        "id": 511,
        "weight": 105,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "bastiodon",
        "base_experience": 173,
        "height": 13,
        "id": 411,
        "weight": 1495,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "rampardos",
        "base_experience": 173,
        "height": 16,
        "id": 409,
        "weight": 1025,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "liepard",
        "base_experience": 156,
        "height": 11,
        "id": 510,
        "weight": 375,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ]
    },
    {
        "name": "heatran",
        "base_experience": 300,
        "height": 17,
        "id": 485,
        "weight": 4300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "kricketune",
        "base_experience": 134,
        "height": 10,
        "id": 402,
        "weight": 255,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "spectrier",
        "base_experience": 290,
        "height": 20,
        "id": 897,
        "weight": 445,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "rookidee",
        "base_experience": 49,
        "height": 2,
        "id": 821,
        "weight": 18,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "appletun",
        "base_experience": 170,
        "height": 4,
        "id": 842,
        "weight": 130,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "drizzile",
        "base_experience": 147,
        "height": 7,
        "id": 817,
        "weight": 115,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "skorupi",
        "base_experience": 66,
        "height": 8,
        "id": 451,
        "weight": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "sizzlipede",
        "base_experience": 61,
        "height": 7,
        "id": 850,
        "weight": 10,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "eelektrik",
        "base_experience": 142,
        "height": 12,
        "id": 603,
        "weight": 220,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "yanmega",
        "base_experience": 180,
        "height": 19,
        "id": 469,
        "weight": 515,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "vanillish",
        "base_experience": 138,
        "height": 11,
        "id": 583,
        "weight": 410,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "gothitelle",
        "base_experience": 245,
        "height": 15,
        "id": 576,
        "weight": 440,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "golett",
        "base_experience": 61,
        "height": 10,
        "id": 622,
        "weight": 920,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "tirtouga",
        "base_experience": 71,
        "height": 7,
        "id": 564,
        "weight": 165,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "gastrodon",
        "base_experience": 166,
        "height": 9,
        "id": 423,
        "weight": 299,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "maractus",
        "base_experience": 161,
        "height": 10,
        "id": 556,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "grimmsnarl",
        "base_experience": 255,
        "height": 15,
        "id": 861,
        "weight": 610,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "cufant",
        "base_experience": 66,
        "height": 12,
        "id": 878,
        "weight": 1000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "magnezone",
        "base_experience": 268,
        "height": 12,
        "id": 462,
        "weight": 1800,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "cubchoo",
        "base_experience": 61,
        "height": 5,
        "id": 613,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "wyrdeer",
        "base_experience": null,
        "height": 18,
        "id": 899,
        "weight": 951,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "blacephalon",
        "base_experience": 285,
        "height": 18,
        "id": 806,
        "weight": 130,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ]
    },
    {
        "name": "klinklang",
        "base_experience": 260,
        "height": 6,
        "id": 601,
        "weight": 810,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "centiskorch",
        "base_experience": 184,
        "height": 30,
        "id": 851,
        "weight": 1200,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "gurdurr",
        "base_experience": 142,
        "height": 12,
        "id": 533,
        "weight": 400,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "audino",
        "base_experience": 390,
        "height": 11,
        "id": 531,
        "weight": 310,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "cinderace",
        "base_experience": 265,
        "height": 14,
        "id": 815,
        "weight": 330,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "virizion",
        "base_experience": 290,
        "height": 20,
        "id": 640,
        "weight": 2000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "ursaluna",
        "base_experience": null,
        "height": 24,
        "id": 901,
        "weight": 2900,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "wormadam-plant",
        "base_experience": 148,
        "height": 5,
        "id": 413,
        "weight": 65,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "regieleki",
        "base_experience": 290,
        "height": 12,
        "id": 894,
        "weight": 1450,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "shinx",
        "base_experience": 53,
        "height": 5,
        "id": 403,
        "weight": 95,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "gible",
        "base_experience": 60,
        "height": 7,
        "id": 443,
        "weight": 205,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "simisage",
        "base_experience": 174,
        "height": 11,
        "id": 512,
        "weight": 305,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "mothim",
        "base_experience": 148,
        "height": 9,
        "id": 414,
        "weight": 233,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "simisear",
        "base_experience": 174,
        "height": 10,
        "id": 514,
        "weight": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "boldore",
        "base_experience": 137,
        "height": 9,
        "id": 525,
        "weight": 1020,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "trubbish",
        "base_experience": 66,
        "height": 6,
        "id": 568,
        "weight": 310,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "drilbur",
        "base_experience": 66,
        "height": 3,
        "id": 529,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "jirachi",
        "base_experience": 300,
        "height": 3,
        "id": 385,
        "weight": 11,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    }
]

export default myData