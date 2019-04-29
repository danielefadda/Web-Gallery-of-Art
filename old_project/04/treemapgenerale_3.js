$(function () {
var data={
    "Akademie der Bildenden Knste, Vienna": {
        "genre": {
            "Danish": 2,
            "dutch": 10,
            "Flemish": 4,
            "French": 1,
            "German": 2,
            "Italian": 2,
            "Other": 1,
            "Spanish": 1
        },
        "historical": {
            "Austrian": 1,
            "Flemish": 1,
            "Italian": 2
        },
        "landscape": {
            "Austrian": 8,
            "dutch": 14,
            "Flemish": 1,
            "French": 8,
            "German": 2,
            "Italian": 8
        },
        "mythological": {
            "Austrian": 3,
            "dutch": 2,
            "Flemish": 5,
            "German": 2,
            "Hungarian": 1,
            "Italian": 8
        },
        "Other": {
            "Austrian": 1,
            "dutch": 1,
            "Flemish": 1,
            "French": 2
        },
        "portrait": {
            "Austrian": 9,
            "Bohemian": 1,
            "dutch": 5,
            "Flemish": 4,
            "French": 2,
            "German": 5,
            "Italian": 1,
            "Other": 1,
            "Swiss": 1
        },
        "religious": {
            "Austrian": 3,
            "dutch": 1,
            "Flemish": 10,
            "German": 6,
            "Italian": 17,
            "Netherlandish": 8,
            "Spanish": 1,
            "Swiss": 1
        },
        "still-life": {
            "Austrian": 2,
            "dutch": 9,
            "Flemish": 1,
            "Italian": 2
        }
    },
    "Alte Pinakothek, Munich": {
        "genre": {
            "dutch": 10,
            "Flemish": 6,
            "French": 4,
            "Italian": 3,
            "Netherlandish": 1,
            "Spanish": 5
        },
        "historical": {
            "German": 2,
            "Italian": 1
        },
        "interior": {
            "dutch": 1
        },
        "landscape": {
            "dutch": 14,
            "Flemish": 4,
            "French": 3,
            "German": 2,
            "Italian": 1
        },
        "mythological": {
            "dutch": 2,
            "Flemish": 11,
            "French": 2,
            "German": 9,
            "Italian": 5
        },
        "Other": {
            "Flemish": 2,
            "French": 1,
            "German": 1
        },
        "portrait": {
            "dutch": 10,
            "Flemish": 7,
            "French": 6,
            "German": 14,
            "Italian": 4,
            "Netherlandish": 1,
            "Spanish": 1
        },
        "religious": {
            "Austrian": 9,
            "dutch": 8,
            "Flemish": 23,
            "French": 3,
            "German": 41,
            "Italian": 32,
            "Netherlandish": 8,
            "Polish": 1,
            "Spanish": 3
        },
        "still-life": {
            "dutch": 6,
            "Flemish": 2,
            "German": 2,
            "Italian": 1,
            "Netherlandish": 1
        }
    },
    "Cappella Scrovegni (Arena Chapel), Padua": {
        "Other": {
            "Italian": 2
        },
        "religious": {
            "Italian": 109
        }
    },
    "Cappella Sistina, Vatican": {
        "interior": {
            "Italian": 2
        },
        "religious": {
            "Italian": 81
        }
    },
    "Galleria Borghese, Rome": {
        "genre": {
            "dutch": 1,
            "Flemish": 1,
            "Italian": 3
        },
        "landscape": {
            "Flemish": 1,
            "Italian": 2
        },
        "mythological": {
            "dutch": 2,
            "Flemish": 1,
            "German": 1,
            "Italian": 21
        },
        "Other": {
            "dutch": 1
        },
        "portrait": {
            "German": 1,
            "Italian": 19
        },
        "religious": {
            "dutch": 1,
            "Flemish": 2,
            "Italian": 50
        },
        "still-life": {
            "Italian": 3
        }
    },
    "Galleria degli Uffizi, Florence": {
        "genre": {
            "dutch": 5,
            "French": 3,
            "Italian": 7
        },
        "historical": {
            "Flemish": 1,
            "French": 1,
            "Italian": 4
        },
        "landscape": {
            "dutch": 4,
            "Flemish": 2,
            "French": 1,
            "German": 1,
            "Italian": 4
        },
        "mythological": {
            "dutch": 1,
            "German": 1,
            "Italian": 35
        },
        "Other": {
            "Flemish": 1,
            "German": 1,
            "Italian": 1
        },
        "portrait": {
            "dutch": 4,
            "English": 1,
            "Flemish": 11,
            "French": 14,
            "German": 10,
            "Italian": 113,
            "Scottish": 1,
            "Spanish": 3,
            "Swiss": 3
        },
        "religious": {
            "dutch": 1,
            "Flemish": 11,
            "French": 4,
            "German": 12,
            "Italian": 190,
            "Netherlandish": 1,
            "Spanish": 3
        },
        "still-life": {
            "dutch": 3,
            "Flemish": 1,
            "Italian": 4
        }
    },
    "Galleria Nazionale d'Arte Antica, Rome": {
        "genre": {
            "dutch": 1,
            "French": 1,
            "Italian": 3
        },
        "landscape": {
            "Flemish": 1,
            "Italian": 3
        },
        "mythological": {
            "dutch": 1,
            "French": 3,
            "German": 2,
            "Italian": 17
        },
        "Other": {
            "German": 1
        },
        "portrait": {
            "dutch": 1,
            "Flemish": 2,
            "German": 1,
            "Italian": 9
        },
        "religious": {
            "French": 7,
            "Italian": 59,
            "Spanish": 3
        },
        "still-life": {
            "French": 1,
            "German": 2
        }
    },
    "Galleria Palatina (Palazzo Pitti), Florence": {
        "genre": {
            "dutch": 2,
            "Flemish": 1,
            "Italian": 8
        },
        "historical": {
            "Italian": 4
        },
        "interior": {
            "Italian": 4
        },
        "landscape": {
            "dutch": 4,
            "Flemish": 2,
            "Hungarian": 1,
            "Italian": 7,
            "Polish": 1
        },
        "mythological": {
            "dutch": 1,
            "Flemish": 3,
            "Italian": 16
        },
        "Other": {
            "Italian": 2
        },
        "portrait": {
            "dutch": 1,
            "English": 1,
            "Flemish": 17,
            "French": 4,
            "German": 1,
            "Italian": 46,
            "Spanish": 1
        },
        "religious": {
            "Flemish": 2,
            "Italian": 60,
            "Spanish": 1
        },
        "still-life": {
            "dutch": 9,
            "Flemish": 4,
            "Italian": 4
        }
    },
    "Gallerie dell'Accademia, Venice": {
        "genre": {
            "Italian": 8
        },
        "historical": {
            "Italian": 3
        },
        "landscape": {
            "Italian": 18
        },
        "mythological": {
            "German": 1,
            "Italian": 22
        },
        "Other": {
            "Italian": 2
        },
        "portrait": {
            "Flemish": 1,
            "Italian": 18
        },
        "religious": {
            "German": 3,
            "Italian": 159
        },
        "still-life": {
            "Italian": 1
        },
        "study": {
            "Italian": 1
        }
    },
    "Gem„ldegalerie, Dresden": {
        "genre": {
            "Austrian": 1,
            "dutch": 16,
            "Flemish": 4,
            "French": 6,
            "German": 2,
            "Italian": 2,
            "Swiss": 1
        },
        "historical": {
            "German": 2,
            "Italian": 1,
            "Spanish": 1
        },
        "interior": {
            "dutch": 2
        },
        "landscape": {
            "Austrian": 1,
            "dutch": 12,
            "Flemish": 2,
            "French": 3,
            "German": 13,
            "Italian": 18,
            "Norwegian": 1
        },
        "mythological": {
            "dutch": 2,
            "Flemish": 4,
            "French": 2,
            "German": 1,
            "Italian": 10,
            "Swiss": 1
        },
        "Other": {
            "Flemish": 1,
            "German": 1
        },
        "portrait": {
            "dutch": 4,
            "Flemish": 2,
            "French": 1,
            "German": 9,
            "Italian": 11,
            "Spanish": 2,
            "Swiss": 1
        },
        "religious": {
            "dutch": 3,
            "Flemish": 5,
            "French": 3,
            "German": 20,
            "Italian": 36,
            "Spanish": 2
        },
        "still-life": {
            "dutch": 7,
            "Flemish": 2,
            "German": 1,
            "Italian": 1
        }
    },
    "Groeninge Museum, Bruges": {
        "genre": {
            "dutch": 2,
            "Flemish": 1
        },
        "historical": {
            "Flemish": 5
        },
        "landscape": {
            "Flemish": 5,
            "French": 1
        },
        "mythological": {
            "Flemish": 6
        },
        "Other": {
            "Flemish": 2
        },
        "portrait": {
            "Belgian": 3,
            "dutch": 1,
            "Flemish": 21
        },
        "religious": {
            "Flemish": 49,
            "French": 1,
            "German": 1,
            "Netherlandish": 1
        },
        "still-life": {
            "Flemish": 6
        }
    },
    "Koninklijk Museum voor Schone Kunsten, Antwerp": {
        "genre": {
            "Belgian": 1,
            "dutch": 4,
            "Flemish": 10
        },
        "interior": {
            "dutch": 1
        },
        "landscape": {
            "Belgian": 1,
            "dutch": 4,
            "Flemish": 13
        },
        "mythological": {
            "Flemish": 7
        },
        "Other": {
            "Flemish": 1
        },
        "portrait": {
            "dutch": 6,
            "Flemish": 17,
            "French": 1
        },
        "religious": {
            "Flemish": 37,
            "French": 1,
            "German": 2,
            "Italian": 6,
            "Netherlandish": 2
        },
        "still-life": {
            "Belgian": 1,
            "dutch": 2,
            "Flemish": 5
        },
        "study": {
            "Flemish": 1
        }
    },
    "Kunsthistorisches Museum, Vienna": {
        "genre": {
            "dutch": 10,
            "Flemish": 4,
            "German": 2,
            "Italian": 1,
            "Netherlandish": 4
        },
        "historical": {
            "Flemish": 1,
            "Netherlandish": 1
        },
        "interior": {
            "Flemish": 2
        },
        "landscape": {
            "dutch": 9,
            "English": 1,
            "Flemish": 3,
            "German": 1,
            "Italian": 5,
            "Netherlandish": 6
        },
        "mythological": {
            "dutch": 2,
            "Flemish": 7,
            "German": 3,
            "Italian": 17,
            "Swiss": 2
        },
        "Other": {
            "Flemish": 1,
            "Italian": 1,
            "Netherlandish": 1
        },
        "portrait": {
            "Austrian": 5,
            "dutch": 4,
            "English": 1,
            "Flemish": 9,
            "French": 4,
            "German": 11,
            "Italian": 25,
            "Other": 2,
            "Spanish": 8
        },
        "religious": {
            "Austrian": 1,
            "dutch": 4,
            "Flemish": 20,
            "French": 1,
            "German": 12,
            "Italian": 36,
            "Netherlandish": 7
        },
        "still-life": {
            "dutch": 2,
            "Flemish": 2,
            "Netherlandish": 1,
            "Spanish": 1
        }
    },
    "Liechtenstein Museum, Vienna": {
        "genre": {
            "dutch": 4,
            "Flemish": 2,
            "French": 1
        },
        "historical": {
            "Italian": 2
        },
        "interior": {
            "Italian": 1
        },
        "landscape": {
            "dutch": 4,
            "Flemish": 4,
            "Italian": 1
        },
        "mythological": {
            "Austrian": 3,
            "dutch": 1,
            "Flemish": 3,
            "French": 1,
            "German": 1,
            "Italian": 6
        },
        "Other": {
            "Flemish": 2,
            "German": 2,
            "Scottish": 1
        },
        "portrait": {
            "Austrian": 1,
            "dutch": 6,
            "Flemish": 13,
            "German": 7,
            "Italian": 7
        },
        "religious": {
            "dutch": 3,
            "Flemish": 5,
            "Italian": 18
        },
        "still-life": {
            "Bohemian": 1,
            "dutch": 6,
            "Flemish": 1,
            "German": 1
        }
    },
    "Magyar Nemzeti Gal‚ria, Budapest": {
        "genre": {
            "Hungarian": 53
        },
        "historical": {
            "Austrian": 1,
            "Hungarian": 15
        },
        "landscape": {
            "Hungarian": 57
        },
        "mythological": {
            "Hungarian": 6
        },
        "Other": {
            "Hungarian": 7
        },
        "portrait": {
            "Hungarian": 32
        },
        "religious": {
            "Austrian": 3,
            "Hungarian": 15
        },
        "still-life": {
            "Hungarian": 7
        }
    },
    "Metropolitan Museum of Art, New York": {
        "genre": {
            "American": 4,
            "dutch": 54,
            "Flemish": 1,
            "French": 20,
            "Italian": 4,
            "Spanish": 1
        },
        "historical": {
            "American": 2,
            "dutch": 1,
            "English": 1,
            "French": 2,
            "Italian": 2
        },
        "interior": {
            "dutch": 6
        },
        "landscape": {
            "American": 8,
            "Austrian": 1,
            "dutch": 43,
            "English": 2,
            "Flemish": 2,
            "French": 36,
            "Italian": 2,
            "Netherlandish": 1,
            "Spanish": 1
        },
        "mythological": {
            "American": 1,
            "dutch": 11,
            "Flemish": 1,
            "French": 6,
            "German": 2,
            "Italian": 4
        },
        "Other": {
            "French": 8,
            "Italian": 2
        },
        "portrait": {
            "American": 5,
            "dutch": 72,
            "English": 6,
            "Flemish": 11,
            "French": 23,
            "German": 6,
            "Italian": 22,
            "Netherlandish": 1,
            "Spanish": 9,
            "Swedish": 1
        },
        "religious": {
            "dutch": 16,
            "Flemish": 20,
            "French": 5,
            "German": 2,
            "Italian": 46,
            "Netherlandish": 1,
            "Spanish": 9
        },
        "still-life": {
            "American": 1,
            "dutch": 18,
            "French": 6,
            "Italian": 1
        },
        "religious": {
            "dutch": 16,
            "Flemish": 20,
            "French": 5,
            "German": 2,
            "Italian": 46,
            "Netherlandish": 1,
            "Spanish": 9
        },
        "still-life": {
            "American": 1,
            "dutch": 18,
            "French": 6,
            "Italian": 1
        },
        "study": {
            "dutch": 1,
            "French": 1
        }
    },
    "Mus‚e d'Orsay, Paris": {
        "genre": {
            "American": 1,
            "dutch": 2,
            "English": 2,
            "French": 56,
            "Italian": 1
        },
        "historical": {
            "French": 10
        },
        "interior": {
            "dutch": 1
        },
        "landscape": {
            "American": 1,
            "Belgian": 3,
            "dutch": 9,
            "French": 95,
            "Italian": 2
        },
        "mythological": {
            "French": 13
        },
        "Other": {
            "American": 1,
            "dutch": 2,
            "English": 2,
            "French": 27
        },
        "portrait": {
            "American": 2,
            "dutch": 4,
            "English": 1,
            "French": 71,
            "German": 1,
            "Hungarian": 1,
            "Italian": 1
        },
        "religious": {
            "French": 3
        },
        "still-life": {
            "dutch": 1,
            "French": 13
        },
        "study": {
            "French": 2
        }
    },
    "Mus‚e du Louvre, Paris": {
        "genre": {
            "dutch": 42,
            "English": 1,
            "Flemish": 10,
            "French": 57,
            "Italian": 9,
            "Netherlandish": 2,
            "Spanish": 3
        },
        "historical": {
            "dutch": 1,
            "Flemish": 10,
            "French": 38,
            "Italian": 9
        },
        "interior": {
            "dutch": 2,
            "Flemish": 4,
            "French": 7,
            "Italian": 3
        },
        "landscape": {
            "dutch": 29,
            "English": 7,
            "Flemish": 14,
            "French": 63,
            "German": 1,
            "Italian": 16,
            "Russian": 1
        },
        "mythological": {
            "dutch": 5,
            "Flemish": 12,
            "French": 70,
            "German": 3,
            "Italian": 41,
            "Netherlandish": 1,
            "Spanish": 1
        },
        "Other": {
            "Danish": 1,
            "dutch": 2,
            "French": 25,
            "Italian": 2,
            "Swiss": 1
        },
        "portrait": {
            "Austrian": 1,
            "Danish": 1,
            "dutch": 15,
            "English": 4,
            "Flemish": 18,
            "French": 129,
            "German": 7,
            "Italian": 36,
            "Polish": 1,
            "Portuguese": 1,
            "Scottish": 2,
            "Spanish": 6,
            "Swedish": 2,
            "Swiss": 1
        },
        "religious": {
            "Austrian": 2,
            "Catalan": 2,
            "dutch": 13,
            "Flemish": 56,
            "French": 70,
            "German": 7,
            "Italian": 174,
            "Netherlandish": 4,
            "Spanish": 17,
            "Swiss": 1
        },
        "still-life": {
            "dutch": 13,
            "Flemish": 4,
            "French": 31,
            "German": 2,
            "Italian": 1,
            "Spanish": 3
        },
        "study": {
            "Flemish": 2,
            "French": 3,
            "Italian": 2
        }
    },
    "Mus‚es Royaux des Beaux-Arts, Brussels": {
        "genre": {
            "Belgian": 1,
            "dutch": 4,
            "Flemish": 5,
            "Netherlandish": 1
        },
        "historical": {
            "Flemish": 1,
            "French": 1
        },
        "landscape": {
            "Belgian": 1,
            "dutch": 4,
            "Flemish": 4,
            "French": 1,
            "Italian": 1,
            "Netherlandish": 2
        },
        "mythological": {
            "Belgian": 1,
            "Flemish": 5,
            "French": 1,
            "German": 2,
            "Italian": 2,
            "Spanish": 1
        },
        "Other": {
            "Flemish": 1
        },
        "portrait": {
            "dutch": 6,
            "Flemish": 14,
            "French": 1,
            "German": 1
        },
        "religious": {
            "dutch": 5,
            "Flemish": 33,
            "French": 5,
            "Italian": 5,
            "Netherlandish": 7
        },
        "still-life": {
            "dutch": 3,
            "Flemish": 3,
            "Italian": 1
        },
        "study": {
            "Flemish": 2
        }
    },
    "Museo del Prado, Madrid": {
        "genre": {
            "dutch": 4,
            "Flemish": 10,
            "French": 4,
            "Italian": 2,
            "Netherlandish": 1,
            "Spanish": 11
        },
        "historical": {
            "dutch": 1,
            "French": 1,
            "Italian": 8,
            "Spanish": 8
        },
        "interior": {
            "Flemish": 1
        },
        "landscape": {
            "Catalan": 3,
            "dutch": 2,
            "Flemish": 13,
            "French": 9,
            "German": 1,
            "Italian": 3,
            "Scottish": 1,
            "Spanish": 14
        },
        "mythological": {
            "Flemish": 18,
            "French": 7,
            "German": 4,
            "Italian": 18,
            "Netherlandish": 1,
            "Spanish": 15
        },
        "Other": {
            "dutch": 1,
            "Flemish": 2,
            "German": 1,
            "Spanish": 21
        },
        "portrait": {
            "English": 4,
            "Flemish": 11,
            "French": 8,
            "German": 7,
            "Irish": 1,
            "Italian": 16,
            "Netherlandish": 1,
            "Spanish": 74
        },
        "religious": {
            "Catalan": 1,
            "dutch": 1,
            "Flemish": 33,
            "French": 6,
            "German": 3,
            "Italian": 56,
            "Netherlandish": 22,
            "Spanish": 113
        },
        "still-life": {
            "dutch": 2,
            "Flemish": 9,
            "Spanish": 17
        },
        "study": {
            "Flemish": 1
        }
    },
    "Museo Thyssen-Bornemisza, Madrid": {
        "genre": {
            "American": 1,
            "dutch": 5,
            "Flemish": 2,
            "French": 7,
            "Italian": 3,
            "Netherlandish": 1
        },
        "historical": {
            "French": 2
        },
        "interior": {
            "dutch": 1,
            "Flemish": 1
        },
        "landscape": {
            "American": 12,
            "Austrian": 1,
            "dutch": 21,
            "English": 1,
            "French": 7,
            "German": 2,
            "Italian": 7
        },
        "mythological": {
            "Flemish": 1,
            "French": 2,
            "German": 2,
            "Italian": 6
        },
        "Other": {
            "American": 1,
            "French": 3
        },
        "portrait": {
            "American": 1,
            "dutch": 5,
            "English": 4,
            "Flemish": 8,
            "French": 5,
            "German": 11,
            "Italian": 19,
            "Polish": 1,
            "Spanish": 3,
            "Swedish": 1,
            "Swiss": 1
        },
        "religious": {
            "Catalan": 1,
            "dutch": 4,
            "Flemish": 13,
            "French": 2,
            "German": 9,
            "Italian": 28,
            "Spanish": 5
        },
        "still-life": {
            "American": 3,
            "dutch": 7,
            "Flemish": 1,
            "French": 4,
            "Spanish": 1
        }
    },
    "Museum of Fine Arts, Boston": {
        "genre": {
            "American": 5,
            "Danish": 1,
            "dutch": 4,
            "French": 10,
            "Italian": 2
        },
        "historical": {
            "English": 1
        },
        "interior": {
            "Flemish": 1
        },
        "landscape": {
            "American": 7,
            "dutch": 1,
            "English": 1,
            "French": 25,
            "Italian": 3
        },
        "mythological": {
            "dutch": 1,
            "French": 3,
            "Italian": 2
        },
        "Other": {
            "American": 3,
            "dutch": 1,
            "French": 3
        },
        "portrait": {
            "American": 2,
            "dutch": 3,
            "English": 3,
            "Flemish": 2,
            "French": 6,
            "German": 1,
            "Italian": 5,
            "Spanish": 2,
            "Swedish": 1
        },
        "religious": {
            "dutch": 1,
            "Flemish": 3,
            "French": 1,
            "Italian": 26,
            "Spanish": 1
        },
        "still-life": {
            "American": 2,
            "Flemish": 1,
            "French": 1,
            "German": 1,
            "Italian": 2,
            "Spanish": 1
        },
        "study": {
            "Belgian": 1
        }
    },
    "National Gallery of Art, Washington": {
        "genre": {
            "American": 3,
            "dutch": 5,
            "English": 1,
            "French": 41,
            "Italian": 1,
            "Spanish": 2
        },
        "historical": {
            "American": 1,
            "English": 1,
            "French": 1,
            "Italian": 1
        },
        "interior": {
            "French": 1
        },
        "landscape": {
            "American": 2,
            "dutch": 8,
            "French": 18,
            "Italian": 7
        },
        "mythological": {
            "dutch": 1,
            "French": 11,
            "Italian": 9,
            "Spanish": 1
        },
        "Other": {
            "French": 6,
            "Italian": 1
        },
        "portrait": {
            "American": 2,
            "dutch": 9,
            "English": 3,
            "Flemish": 7,
            "French": 42,
            "German": 6,
            "Italian": 23,
            "Spanish": 6
        },
        "religious": {
            "Austrian": 1,
            "dutch": 2,
            "Flemish": 13,
            "French": 13,
            "German": 5,
            "Italian": 76,
            "Netherlandish": 2,
            "Spanish": 13
        },
        "still-life": {
            "dutch": 2,
            "Flemish": 1,
            "French": 7
        },
        "study": {
            "French": 1
        }
    },
    "National Gallery, London": {
        "genre": {
            "dutch": 18,
            "English": 2,
            "French": 10,
            "Italian": 2,
            "Spanish": 1
        },
        "historical": {
            "Flemish": 2,
            "French": 3,
            "Italian": 4
        },
        "interior": {
            "dutch": 5
        },
        "landscape": {
            "dutch": 26,
            "English": 6,
            "Flemish": 2,
            "French": 18,
            "German": 2,
            "Italian": 11
        },
        "mythological": {
            "dutch": 2,
            "English": 2,
            "Flemish": 6,
            "French": 6,
            "German": 3,
            "Italian": 26,
            "Spanish": 1
        },
        "Other": {
            "French": 6,
            "Italian": 1,
            "Spanish": 1
        },
        "portrait": {
            "dutch": 10,
            "English": 10,
            "Flemish": 20,
            "French": 10,
            "German": 7,
            "Italian": 24,
            "Spanish": 5
        },
        "religious": {
            "dutch": 7,
            "Flemish": 17,
            "French": 11,
            "German": 4,
            "Italian": 91,
            "Netherlandish": 3,
            "Spanish": 6
        },
        "still-life": {
            "dutch": 7,
            "French": 2,
            "Spanish": 2
        }
    },
    "Nationalgalerie, Berlin": {
        "genre": {
            "Austrian": 2,
            "French": 3,
            "German": 11,
            "Italian": 1
        },
        "historical": {
            "German": 3
        },
        "interior": {
            "Danish": 1,
            "German": 4
        },
        "landscape": {
            "Austrian": 2,
            "English": 1,
            "French": 5,
            "German": 46
        }

            
        
        
                
    }
};
   Highcharts.setOptions({colors:['red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red',                      'red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red','red']});
	var points = [],
		region_p,
		region_val,
		region_i,
		country_p,
		country_i,
		cause_p,
		cause_i,
		cause_name = [];
    cause_name['American'] = 'American';
    cause_name['Austrian'] = 'Austrian';
    cause_name['Belgian'] = 'Belgian';
    cause_name['Bohemian'] = 'Boehmian';
    cause_name['Catalan'] = 'Catalan';
	cause_name['Danish'] = 'Danish';
	cause_name['dutch'] = 'dutch';
    cause_name['English'] = 'English';
	cause_name['Flemish'] = 'Flemish';
    cause_name['French'] = 'French';
    cause_name['German'] = 'German';
    cause_name['Greek'] = 'Greek';
    cause_name['Hungarian'] = 'Hungarian';
    cause_name['Irish'] = 'Irish';
    cause_name['Italian'] = 'Italian';
    cause_name['Netherlandish'] = 'Netherlandish';
    cause_name['Norwegian'] = 'Norwegian';
    cause_name['Other'] = 'Other';
    cause_name['Polish'] = 'Polish';
    cause_name['Portuguese'] = 'Portuguese';
    cause_name['Russian'] = 'Russian';
    cause_name['Scottish'] = 'Scottish';
    cause_name['Spanish'] = 'Spanish';
    cause_name['Swedish'] = 'Swedish';
    cause_name['Swiss'] = 'Swiss';
    region_i = 0;
	for (var region in data) {
		region_val = 0;
		region_p = {
			id: "id_" + region_i,
			name: region,
			color: Highcharts.getOptions().colors[region_i]
		};
		country_i = 0;
		for (var country in data[region]) {
			country_p = {
				id: region_p.id + "_" + country_i,
				name: country,
				parent: region_p.id
			};
			points.push(country_p);
			cause_i = 0;
			for (var cause in data[region][country]) {
				cause_p = {
					id: country_p.id + "_" + cause_i,
					name: cause_name[cause],
					parent: country_p.id,
					value: Math.round(+data[region][country][cause])
				};
				region_val += cause_p.value;
				points.push(cause_p);
				cause_i++;
			}
			country_i++;
		}
		region_p.value = Math.round(region_val / country_i);
		points.push(region_p);
		region_i++;
	}
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'treemapgenerale',
            backgroundColor: '#e8e3cf'
		},
		series: [{
			type: "treemap",
			layoutAlgorithm: 'squarified',
			allowDrillToNode: true,
			dataLabels: {
				enabled: false
			},
			levelIsConstant: false,
			levels: [{
				level: 1,
				dataLabels: {
					enabled: true
				},
				borderWidth: 3
			}],
			data: points
		}],
		subtitle: {
			text: 'Click points to drill down. Source: <a href="http://www.wga.hu/">WGA</a>.'
		},
		title: {
			text: 'Quadri divisi per musei, tipo di dipinti, scuola'
		}
	});
});