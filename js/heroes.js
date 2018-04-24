const HEROES = [  
    "Abel",
    "Alfonse",
    "Alfonse (Hares at the Fair)",
    "Alm",
    "Amelia",
    "Anna",
    "Arden",
    "Arthur",
    "Arvis",
    "Athena",
    "Ayra",
    "Azama",
    "Azura",
    "Azura (Happy New Year!)",
    "Azura (Performing Arts)",
    "Barst",
    "Bartre",
    "Berkut",
    "Beruka",
    "Black Knight",
    "Boey",
    "Bruno",
    "Caeda",
    "Caeda (Bridal Blessings)",
    "Cain",
    "Camilla",
    "Camilla (Happy New Year!)",
    "Camilla (Spring Festival)",
    "Camus",
    "Catria",
    "Catria (Hares at the Fair)",
    "Cecilia",
    "Celica",
    "Celica (Fallen Heroes)",
    "Charlotte (Bridal Blessings)",
    "Cherche",
    "Chrom",
    "Chrom (Spring Festival)",
    "Chrom (Winter's Envoy)",
    "Chrom (The Branded King)",
    "Clair",
    "Clarine",
    "Clarisse",
    "Clive",
    "Cordelia",
    "Cordelia (Bridal Blessings)",
    "Corrin (F)",
    "Corrin (F) (Nohrian Summer)",
    "Corrin (M)",
    "Corrin (M) (Happy New Year!)",
    "Deirdre",
    "Delthea",
    "Donnel",
    "Dorcas",
    "Draug",
    "Effie",
    "Eirika",
    "Eirika (Sacred Memories)",
    "Eldigan",
    "Elincia",
    "Elise",
    "Elise (Nohrian Summer)",
    "Eliwood",
    "Eliwood (Love Abounds)",
    "Ephraim",
    "Ephraim (Legendary Lord)",
    "Est",
    "Fae",
    "Faye",
    "Felicia",
    "Fir",
    "Finn",
    "Fjorm",
    "Florina",
    "Frederick",
    "Frederick (Ylissean Summer)",
    "Gaius",
    "Gaius (Ylissean Summer)",
    "Genny",
    "Gerome",
    "Gordin",
    "Gray",
    "Gunnthrá",
    "Gunter",
    "Gwendolyn",
    "Hana",
    "Hardin",
    "Hawkeye",
    "Hector",
    "Hector (Love Abounds)",
    "Henry",
    "Henry (Trick or Defeat!)",
    "Hinata",
    "Hinoka",
    "Hinoka (Wings of Fate)",
    "Ike",
    "Ike (Brave Heroes)",
    "Ike (Vanguard Legend)",
    "Inigo (Performing Arts)",
    "Innes",
    "Jaffar",
    "Jagen",
    "Jakob",
    "Jakob (Trick or Defeat!)",
    "Jeorge",
    "Joshua",
    "Julia",
    "Kagero",
    "Kagero (Hares at the Fair)",
    "Kana (M)",
    "Kana (F)",
    "Karel",
    "Katarina",
    "Kaze",
    "Klein",
    "L'Arachel",
    "Lachesis",
    "Laegjarn",
    "Laevatein",
    "Laslow",
    "Legion",
    "Leif",
    "Leo",
    "Leo (Nohrian Summer)",
    "Leon",
    "Lilina",
    "Lilina (Love Abounds)",
    "Linde",
    "Lissa",
    "Lissa (Winter's Envoy)",
    "Lloyd",
    "Loki",
    "Lon'qu",
    "Lucina",
    "Lucina (Brave Heroes)",
    "Lucina (Spring Festival)",
    "Lucius",
    "Lukas",
    "Luke",
    "Lute",
    "Lyn",
    "Lyn (Brave Heroes)",
    "Lyn (Bridal Blessings)",
    "Lyn (Love Abounds)",
    "Lyon",
    "Mae",
    "Maria",
    "Marisa",
    "Marth",
    "Marth (Masked)",
    "Mathilda",
    "Matthew",
    "Merric",
    "Mia",
    "Micaiah",
    "Michalis",
    "Minerva",
    "Mist",
    "Morgan (F)",
    "Morgan (M)",
    "Myrrh",
    "Narcian",
    "Nanna",
    "Navarre",
    "Nephenee",
    "Niles",
    "Ninian",
    "Nino",
    "Nowi",
    "Nowi (Trick or Defeat!)",
    "Oboro",
    "Odin",
    "Ogma",
    "Oliver",
    "Olivia",
    "Olivia (Performing Arts)",
    "Olwen",
    "Olwen (World of Thracia)",
    "Oscar",
    "Palla",
    "Peri",
    "Priscilla",
    "Raigh",
    "Raven",
    "Rebecca",
    "Reinhardt",
    "Reinhardt (World of Thracia)",
    "Rhajat",
    "Robin (F)",
    "Robin (F) (Ylissean Summer)",
    "Robin (F) (Fell Vessel)",
    "Robin (M)",
    "Robin (M) (Fallen Heroes)",
    "Robin (M) (Winter's Envoy)",
    "Roderick",
    "Roy",
    "Roy (Brave Heroes)",
    "Roy (Love Abounds)",
    "Ryoma",
    "Saber",
    "Saizo",
    "Saias",
    "Sakura",
    "Sakura (Trick or Defeat!)",
    "Sanaki",
    "Selena",
    "Seliph",
    "Serra",
    "Seth",
    "Setsuna",
    "Shanna",
    "Sharena",
    "Sharena (Hares at the Fair)",
    "Sheena",
    "Shigure (Performing Arts)",
    "Shigure (Wings of Fate)",
    "Shiro",
    "Siegbert",
    "Sigurd",
    "Soleil",
    "Sonya",
    "Sophia",
    "Soren",
    "Sothe",
    "Stahl",
    "Subaki",
    "Sully",
    "Surtr",
    "Tailtiu",
    "Takumi",
    "Takumi (Fallen Heroes)",
    "Takumi (Happy New Year!)",
    "Tana",
    "Tharja",
    "Tharja (Winter's Envoy)",
    "Tiki (Adult)",
    "Tiki (Adult) (Ylissean Summer)",
    "Tiki (Young)",
    "Titania",
    "Tobin",
    "Ursula",
    "Valter",
    "Veronica",
    "Virion",
    "Wrys",
    "Xander",
    "Xander (Nohrian Summer)",
    "Xander (Spring Festival)",
    "Zelgius",
    "Zephiel"
];
