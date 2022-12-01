const heroesData = [
        {
            ID: "abathur",
            Name: "Abathur",
            URL: "https://nexuscompendium.com/sales/abathur",
            ImageURL: "https://nexuscompendium.com/images/portraits/abathur.png"
        },
        {
            ID: "alarak",
            Name: "Alarak",
            URL: "https://nexuscompendium.com/sales/alarak",
            ImageURL: "https://nexuscompendium.com/images/portraits/alarak.png"
        },
        {
            ID: "alexstrasza",
            Name: "Alexstrasza",
            URL: "https://nexuscompendium.com/sales/alexstrasza",
            ImageURL: "https://nexuscompendium.com/images/portraits/alexstrasza.png"
        },
        {
            ID: "ana",
            Name: "Ana",
            URL: "https://nexuscompendium.com/sales/ana",
            ImageURL: "https://nexuscompendium.com/images/portraits/ana.png"
        },
        {
            ID: "anduin",
            Name: "Anduin",
            URL: "https://nexuscompendium.com/sales/anduin",
            ImageURL: "https://nexuscompendium.com/images/portraits/anduin.png"
        },
        {
            ID: "anubarak",
            Name: "Anub'arak",
            URL: "https://nexuscompendium.com/sales/anubarak",
            ImageURL: "https://nexuscompendium.com/images/portraits/anubarak.png"
        },
        {
            ID: "artanis",
            Name: "Artanis",
            URL: "https://nexuscompendium.com/sales/artanis",
            ImageURL: "https://nexuscompendium.com/images/portraits/artanis.png"
        },
        {
            ID: "arthas",
            Name: "Arthas",
            URL: "https://nexuscompendium.com/sales/arthas",
            ImageURL: "https://nexuscompendium.com/images/portraits/arthas.png"
        },
        {
            ID: "auriel",
            Name: "Auriel",
            URL: "https://nexuscompendium.com/sales/auriel",
            ImageURL: "https://nexuscompendium.com/images/portraits/auriel.png"
        },
        {
            ID: "azmodan",
            Name: "Azmodan",
            URL: "https://nexuscompendium.com/sales/azmodan",
            ImageURL: "https://nexuscompendium.com/images/portraits/azmodan.png"
        },
        {
            ID: "blaze",
            Name: "Blaze",
            URL: "https://nexuscompendium.com/sales/blaze",
            ImageURL: "https://nexuscompendium.com/images/portraits/blaze.png"
        },
        {
            ID: "brightwing",
            Name: "Brightwing",
            URL: "https://nexuscompendium.com/sales/brightwing",
            ImageURL: "https://nexuscompendium.com/images/portraits/brightwing.png"
        },
        {
            ID: "cassia",
            Name: "Cassia",
            URL: "https://nexuscompendium.com/sales/cassia",
            ImageURL: "https://nexuscompendium.com/images/portraits/cassia.png"
        },
        {
            ID: "chen",
            Name: "Chen",
            URL: "https://nexuscompendium.com/sales/chen",
            ImageURL: "https://nexuscompendium.com/images/portraits/chen.png"
        },
        {
            ID: "cho",
            Name: "Cho",
            URL: "https://nexuscompendium.com/sales/cho",
            ImageURL: "https://nexuscompendium.com/images/portraits/cho.png"
        },
        {
            ID: "chromie",
            Name: "Chromie",
            URL: "https://nexuscompendium.com/sales/chromie",
            ImageURL: "https://nexuscompendium.com/images/portraits/chromie.png"
        },
        {
            ID: "deathwing",
            Name: "Deathwing",
            URL: "https://nexuscompendium.com/sales/deathwing",
            ImageURL: "https://nexuscompendium.com/images/portraits/deathwing.png"
        },
        {
            ID: "deckard",
            Name: "Deckard",
            URL: "https://nexuscompendium.com/sales/deckard",
            ImageURL: "https://nexuscompendium.com/images/portraits/deckard.png"
        },
        {
            ID: "dehaka",
            Name: "Dehaka",
            URL: "https://nexuscompendium.com/sales/dehaka",
            ImageURL: "https://nexuscompendium.com/images/portraits/dehaka.png"
        },
        {
            ID: "diablo",
            Name: "Diablo",
            URL: "https://nexuscompendium.com/sales/diablo",
            ImageURL: "https://nexuscompendium.com/images/portraits/diablo.png"
        },
        {
            ID: "dva",
            Name: "D.Va",
            URL: "https://nexuscompendium.com/sales/dva",
            ImageURL: "https://nexuscompendium.com/images/portraits/dva.png"
        },
        {
            ID: "etc",
            Name: "E.T.C.",
            URL: "https://nexuscompendium.com/sales/etc",
            ImageURL: "https://nexuscompendium.com/images/portraits/etc.png"
        },
        {
            ID: "falstad",
            Name: "Falstad",
            URL: "https://nexuscompendium.com/sales/falstad",
            ImageURL: "https://nexuscompendium.com/images/portraits/falstad.png"
        },
        {
            ID: "fenix",
            Name: "Fenix",
            URL: "https://nexuscompendium.com/sales/fenix",
            ImageURL: "https://nexuscompendium.com/images/portraits/fenix.png"
        },
        {
            ID: "gall",
            Name: "Gall",
            URL: "https://nexuscompendium.com/sales/gall",
            ImageURL: "https://nexuscompendium.com/images/portraits/gall.png"
        },
        {
            ID: "garrosh",
            Name: "Garrosh",
            URL: "https://nexuscompendium.com/sales/garrosh",
            ImageURL: "https://nexuscompendium.com/images/portraits/garrosh.png"
        },
        {
            ID: "gazlowe",
            Name: "Gazlowe",
            URL: "https://nexuscompendium.com/sales/gazlowe",
            ImageURL: "https://nexuscompendium.com/images/portraits/gazlowe.png"
        },
        {
            ID: "genji",
            Name: "Genji",
            URL: "https://nexuscompendium.com/sales/genji",
            ImageURL: "https://nexuscompendium.com/images/portraits/genji.png"
        },
        {
            ID: "greymane",
            Name: "Greymane",
            URL: "https://nexuscompendium.com/sales/greymane",
            ImageURL: "https://nexuscompendium.com/images/portraits/greymane.png"
        },
        {
            ID: "guldan",
            Name: "Gul'dan",
            URL: "https://nexuscompendium.com/sales/guldan",
            ImageURL: "https://nexuscompendium.com/images/portraits/guldan.png"
        },
        {
            ID: "hanzo",
            Name: "Hanzo",
            URL: "https://nexuscompendium.com/sales/hanzo",
            ImageURL: "https://nexuscompendium.com/images/portraits/hanzo.png"
        },
        {
            ID: "hogger",
            Name: "Hogger",
            URL: "https://nexuscompendium.com/sales/hogger",
            ImageURL: "https://nexuscompendium.com/images/portraits/hogger.png"
        },
        {
            ID: "illidan",
            Name: "Illidan",
            URL: "https://nexuscompendium.com/sales/illidan",
            ImageURL: "https://nexuscompendium.com/images/portraits/illidan.png"
        },
        {
            ID: "imperius",
            Name: "Imperius",
            URL: "https://nexuscompendium.com/sales/imperius",
            ImageURL: "https://nexuscompendium.com/images/portraits/imperius.png"
        },
        {
            ID: "jaina",
            Name: "Jaina",
            URL: "https://nexuscompendium.com/sales/jaina",
            ImageURL: "https://nexuscompendium.com/images/portraits/jaina.png"
        },
        {
            ID: "johanna",
            Name: "Johanna",
            URL: "https://nexuscompendium.com/sales/johanna",
            ImageURL: "https://nexuscompendium.com/images/portraits/johanna.png"
        },
        {
            ID: "junkrat",
            Name: "Junkrat",
            URL: "https://nexuscompendium.com/sales/junkrat",
            ImageURL: "https://nexuscompendium.com/images/portraits/junkrat.png"
        },
        {
            ID: "kaelthas",
            Name: "Kael'thas",
            URL: "https://nexuscompendium.com/sales/kaelthas",
            ImageURL: "https://nexuscompendium.com/images/portraits/kaelthas.png"
        },
        {
            ID: "kelthuzad",
            Name: "Kel'Thuzad",
            URL: "https://nexuscompendium.com/sales/kelthuzad",
            ImageURL: "https://nexuscompendium.com/images/portraits/kelthuzad.png"
        },
        {
            ID: "kerrigan",
            Name: "Kerrigan",
            URL: "https://nexuscompendium.com/sales/kerrigan",
            ImageURL: "https://nexuscompendium.com/images/portraits/kerrigan.png"
        },
        {
            ID: "kharazim",
            Name: "Kharazim",
            URL: "https://nexuscompendium.com/sales/kharazim",
            ImageURL: "https://nexuscompendium.com/images/portraits/kharazim.png"
        },
        {
            ID: "leoric",
            Name: "Leoric",
            URL: "https://nexuscompendium.com/sales/leoric",
            ImageURL: "https://nexuscompendium.com/images/portraits/leoric.png"
        },
        {
            ID: "li-li",
            Name: "Li Li",
            URL: "https://nexuscompendium.com/sales/li-li",
            ImageURL: "https://nexuscompendium.com/images/portraits/li-li.png"
        },
        {
            ID: "li-ming",
            Name: "Li-Ming",
            URL: "https://nexuscompendium.com/sales/li-ming",
            ImageURL: "https://nexuscompendium.com/images/portraits/li-ming.png"
        },
        {
            ID: "lt-morales",
            Name: "Lt. Morales",
            URL: "https://nexuscompendium.com/sales/lt-morales",
            ImageURL: "https://nexuscompendium.com/images/portraits/lt-morales.png"
        },
        {
            ID: "lucio",
            Name: "Lúcio",
            URL: "https://nexuscompendium.com/sales/lucio",
            ImageURL: "https://nexuscompendium.com/images/portraits/lucio.png"
        },
        {
            ID: "lunara",
            Name: "Lunara",
            URL: "https://nexuscompendium.com/sales/lunara",
            ImageURL: "https://nexuscompendium.com/images/portraits/lunara.png"
        },
        {
            ID: "maiev",
            Name: "Maiev",
            URL: "https://nexuscompendium.com/sales/maiev",
            ImageURL: "https://nexuscompendium.com/images/portraits/maiev.png"
        },
        {
            ID: "malfurion",
            Name: "Malfurion",
            URL: "https://nexuscompendium.com/sales/malfurion",
            ImageURL: "https://nexuscompendium.com/images/portraits/malfurion.png"
        },
        {
            ID: "malganis",
            Name: "Mal'Ganis",
            URL: "https://nexuscompendium.com/sales/malganis",
            ImageURL: "https://nexuscompendium.com/images/portraits/malganis.png"
        },
        {
            ID: "malthael",
            Name: "Malthael",
            URL: "https://nexuscompendium.com/sales/malthael",
            ImageURL: "https://nexuscompendium.com/images/portraits/malthael.png"
        },
        {
            ID: "medivh",
            Name: "Medivh",
            URL: "https://nexuscompendium.com/sales/medivh",
            ImageURL: "https://nexuscompendium.com/images/portraits/medivh.png"
        },
        {
            ID: "mei",
            Name: "Mei",
            URL: "https://nexuscompendium.com/sales/mei",
            ImageURL: "https://nexuscompendium.com/images/portraits/mei.png"
        },
        {
            ID: "mephisto",
            Name: "Mephisto",
            URL: "https://nexuscompendium.com/sales/mephisto",
            ImageURL: "https://nexuscompendium.com/images/portraits/mephisto.png"
        },
        {
            ID: "muradin",
            Name: "Muradin",
            URL: "https://nexuscompendium.com/sales/muradin",
            ImageURL: "https://nexuscompendium.com/images/portraits/muradin.png"
        },
        {
            ID: "murky",
            Name: "Murky",
            URL: "https://nexuscompendium.com/sales/murky",
            ImageURL: "https://nexuscompendium.com/images/portraits/murky.png"
        },
        {
            ID: "nazeebo",
            Name: "Nazeebo",
            URL: "https://nexuscompendium.com/sales/nazeebo",
            ImageURL: "https://nexuscompendium.com/images/portraits/nazeebo.png"
        },
        {
            ID: "nova",
            Name: "Nova",
            URL: "https://nexuscompendium.com/sales/nova",
            ImageURL: "https://nexuscompendium.com/images/portraits/nova.png"
        },
        {
            ID: "orphea",
            Name: "Orphea",
            URL: "https://nexuscompendium.com/sales/orphea",
            ImageURL: "https://nexuscompendium.com/images/portraits/orphea.png"
        },
        {
            ID: "probius",
            Name: "Probius",
            URL: "https://nexuscompendium.com/sales/probius",
            ImageURL: "https://nexuscompendium.com/images/portraits/probius.png"
        },
        {
            ID: "qhira",
            Name: "Qhira",
            URL: "https://nexuscompendium.com/sales/qhira",
            ImageURL: "https://nexuscompendium.com/images/portraits/qhira.png"
        },
        {
            ID: "ragnaros",
            Name: "Ragnaros",
            URL: "https://nexuscompendium.com/sales/ragnaros",
            ImageURL: "https://nexuscompendium.com/images/portraits/ragnaros.png"
        },
        {
            ID: "raynor",
            Name: "Raynor",
            URL: "https://nexuscompendium.com/sales/raynor",
            ImageURL: "https://nexuscompendium.com/images/portraits/raynor.png"
        },
        {
            ID: "rehgar",
            Name: "Rehgar",
            URL: "https://nexuscompendium.com/sales/rehgar",
            ImageURL: "https://nexuscompendium.com/images/portraits/rehgar.png"
        },
        {
            ID: "rexxar",
            Name: "Rexxar",
            URL: "https://nexuscompendium.com/sales/rexxar",
            ImageURL: "https://nexuscompendium.com/images/portraits/rexxar.png"
        },
        {
            ID: "samuro",
            Name: "Samuro",
            URL: "https://nexuscompendium.com/sales/samuro",
            ImageURL: "https://nexuscompendium.com/images/portraits/samuro.png"
        },
        {
            ID: "sgt-hammer",
            Name: "Sgt. Hammer",
            URL: "https://nexuscompendium.com/sales/sgt-hammer",
            ImageURL: "https://nexuscompendium.com/images/portraits/sgt-hammer.png"
        },
        {
            ID: "sonya",
            Name: "Sonya",
            URL: "https://nexuscompendium.com/sales/sonya",
            ImageURL: "https://nexuscompendium.com/images/portraits/sonya.png"
        },
        {
            ID: "stitches",
            Name: "Stitches",
            URL: "https://nexuscompendium.com/sales/stitches",
            ImageURL: "https://nexuscompendium.com/images/portraits/stitches.png"
        },
        {
            ID: "stukov",
            Name: "Stukov",
            URL: "https://nexuscompendium.com/sales/stukov",
            ImageURL: "https://nexuscompendium.com/images/portraits/stukov.png"
        },
        {
            ID: "sylvanas",
            Name: "Sylvanas",
            URL: "https://nexuscompendium.com/sales/sylvanas",
            ImageURL: "https://nexuscompendium.com/images/portraits/sylvanas.png"
        },
        {
            ID: "tassadar",
            Name: "Tassadar",
            URL: "https://nexuscompendium.com/sales/tassadar",
            ImageURL: "https://nexuscompendium.com/images/portraits/tassadar.png"
        },
        {
            ID: "the-butcher",
            Name: "The Butcher",
            URL: "https://nexuscompendium.com/sales/the-butcher",
            ImageURL: "https://nexuscompendium.com/images/portraits/the-butcher.png"
        },
        {
            ID: "the-lost-vikings",
            Name: "The Lost Vikings",
            URL: "https://nexuscompendium.com/sales/the-lost-vikings",
            ImageURL: "https://nexuscompendium.com/images/portraits/the-lost-vikings.png"
        },
        {
            ID: "thrall",
            Name: "Thrall",
            URL: "https://nexuscompendium.com/sales/thrall",
            ImageURL: "https://nexuscompendium.com/images/portraits/thrall.png"
        },
        {
            ID: "tracer",
            Name: "Tracer",
            URL: "https://nexuscompendium.com/sales/tracer",
            ImageURL: "https://nexuscompendium.com/images/portraits/tracer.png"
        },
        {
            ID: "tychus",
            Name: "Tychus",
            URL: "https://nexuscompendium.com/sales/tychus",
            ImageURL: "https://nexuscompendium.com/images/portraits/tychus.png"
        },
        {
            ID: "tyrael",
            Name: "Tyrael",
            URL: "https://nexuscompendium.com/sales/tyrael",
            ImageURL: "https://nexuscompendium.com/images/portraits/tyrael.png"
        },
        {
            ID: "tyrande",
            Name: "Tyrande",
            URL: "https://nexuscompendium.com/sales/tyrande",
            ImageURL: "https://nexuscompendium.com/images/portraits/tyrande.png"
        },
        {
            ID: "uther",
            Name: "Uther",
            URL: "https://nexuscompendium.com/sales/uther",
            ImageURL: "https://nexuscompendium.com/images/portraits/uther.png"
        },
        {
            ID: "valeera",
            Name: "Valeera",
            URL: "https://nexuscompendium.com/sales/valeera",
            ImageURL: "https://nexuscompendium.com/images/portraits/valeera.png"
        },
        {
            ID: "valla",
            Name: "Valla",
            URL: "https://nexuscompendium.com/sales/valla",
            ImageURL: "https://nexuscompendium.com/images/portraits/valla.png"
        },
        {
            ID: "varian",
            Name: "Varian",
            URL: "https://nexuscompendium.com/sales/varian",
            ImageURL: "https://nexuscompendium.com/images/portraits/varian.png"
        },
        {
            ID: "whitemane",
            Name: "Whitemane",
            URL: "https://nexuscompendium.com/sales/whitemane",
            ImageURL: "https://nexuscompendium.com/images/portraits/whitemane.png"
        },
        {
            ID: "xul",
            Name: "Xul",
            URL: "https://nexuscompendium.com/sales/xul",
            ImageURL: "https://nexuscompendium.com/images/portraits/xul.png"
        },
        {
            ID: "yrel",
            Name: "Yrel",
            URL: "https://nexuscompendium.com/sales/yrel",
            ImageURL: "https://nexuscompendium.com/images/portraits/yrel.png"
        },
        {
            ID: "zagara",
            Name: "Zagara",
            URL: "https://nexuscompendium.com/sales/zagara",
            ImageURL: "https://nexuscompendium.com/images/portraits/zagara.png"
        },
        {
            ID: "zarya",
            Name: "Zarya",
            URL: "https://nexuscompendium.com/sales/zarya",
            ImageURL: "https://nexuscompendium.com/images/portraits/zarya.png"
        },
        {
            ID: "zeratul",
            Name: "Zeratul",
            URL: "https://nexuscompendium.com/sales/zeratul",
            ImageURL: "https://nexuscompendium.com/images/portraits/zeratul.png"
        },
        {
            ID: "zuljin",
            Name: "Zul'jin",
            URL: "https://nexuscompendium.com/sales/zuljin",
            ImageURL: "https://nexuscompendium.com/images/portraits/zuljin.png"
        }
]

console.log(heroesData.length);
export default heroesData;
