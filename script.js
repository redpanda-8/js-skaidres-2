// JS-2 - 12 skaidre
// 1 -----------------------------------------------------------------------------------------------------------------------
// 1. Patikrinti ar kintamajam priskirtas amzius tinkamas buti prezidentu. Jei ne - joks kitas kodas nera vykdomas. Atsakyma atspausdinti konsoleje.

// patikrinam ar kandidato amzius atitinka nustatymus kriterijus
const amzius = 40; 

if (amzius >= 25 && amzius <= 85) {
    console.log('kandidato amzius', amzius, 'kandidatas tinka');
}
console.log("-------------------------------------");

// 2------------------------------------------------------------------------------------------------------------------------
// 2. Patikrinti ar kintamajam priskirtas skaicius yra lyginis ar nelyginis. Atsakyma atspausdinti konsoleje.

// nustatom ar pateiktas skaicius lyginis ar nelyginis, naudojame reduce operatoriu %
const skaicius = 60; 
if (skaicius % 2 === 0) {
    console.log(skaicius, ' yra lyginis');
} else {
    console.log(skaicius, ' yra nelyginis');
}
console.log("-------------------------------------");

//2 (trumpesnis budas) ----------------------------------------------------------------------------------------------------

// skaiciuojam ta pati ka auksciau, tik naudojam trumpinta if else forma
let skaiciusSutrumpintai = skaicius  % 2 === 0 ? 'lyginis' : 'nelyginis';
console.log(skaicius, ' yra ' + skaiciusSutrumpintai);

console.log("-------------------------------------");

//3 -----------------------------------------------------------------------------------------------------------------------
// 3. Patikrinti, kiek saskaitoje yra pinigu ir ar ju uzteks apmoketi mokescius. Atsakyma atspausdinti konsoleje.

// Patikrinu ar saskaitoje yra pinigu, jeigu yra, ar ju uzteks mokesciams
const saskaita = 100;
const mokesciai = 200;

if (saskaita > 0) {
    if (saskaita > mokesciai) {
        console.log('saskaitoj yra casho mokesciam');
    } else {
        console.log('nu chash yra bet numininke patenkinta nebus si menesi');
    }
} else {
    console.log('eik dirbti');
};

console.log("-------------------------------------");

// JS-2 - 13 skaidre
// 1 -------------------------------------------------------------------------------------------------------------------
// 1. Deklaruoti kintamuosius "pazymiu vidurkis" ir "lankomumas"
// a. Patikrinti, jei lankomumas geras ir pazymiu vidurkis didesnis uz 8, atspausdinti konsoleje sakini: "Jusu vidurkis X ir lankomumas geras, stipendija gausite!"
// palyginu ar pazymiuVidurkis ir lankomumas atitinka kriterijus stipendijai
// b. Jei lankomumas prastas arba vidurkis mazesnis uz 8, atspausdinti: "Deja, stipendija nepriklauso.
const pazymiuVidurkis = 8;
const lankomumas = 'geras';

if (pazymiuVidurkis >= 8 && lankomumas === 'geras') {
    console.log(`Jusu vidurkis ${pazymiuVidurkis} ir lankomumas ${lankomumas}, stipendija gausite`);
} else {
    console.log('Deja, stipendija nepriklauso.');
};

console.log("-------------------------------------");

// 2 -------------------------------------------------------------------------------------------------------------------
// 2. Palyginti tris skaicius tarpusavyje, atsakyma atspausdinti konsoleje: "X skaicius yra didesnis/mazesnis uz Y skaiciu ir Z skaiciu".

// rasti kuris is 3 skaiciu yra didziausias
const x = 2;
const y = 4;
const z = 6;

if (x > z && x > y) {
    console.log("X is bigger than both Z and Y.");
} else if (x < z && x < y) {
    console.log("X is smaller than both Z and Y.");
} else if (x > z) {
    console.log("X is bigger than Z but smaller than Y.");
} else if (x > y) {
    console.log("X is bigger than Y but smaller than Z.");
} else {
    console.log("X is smaller than both Z and Y.");
}

console.log("-------------------------------------");

// 3 -------------------------------------------------------------------------------------------------------------------
// 3. Deklaruoti kintamuosius su reiksmemis: vardu, atlyginimu ir ar vedes/istekejusi. Jei zmogus nevedes ir uzdirba 
//daugiau nei 950eur, konsoleje atspausdinti teksta "Sveikiname, jus gavote paskola!". Jei vedes ir uzdirba daugiau 
//nei 1500eur, konsoleje atspausdinti teksta "Paskola bus suteikta.". O kitais atvejais konsoleje atspausdinti teksta "Kai uzdirbsi daugiau, ateik, pakalbesim".

// patikrinom algyginima ir ar vedes statusus ir nustatem ar duos duota paskola
let vardas = 'Liutas';
let atlyginimu = 2000;
let vedes = true;



// tikriname ar nera vedes (! padaro false === true) 
if (!vedes && atlyginimu > 950) {
    console.log(`Sveikiname ${vardas}, jus gavote paskola`);
} else if (vedes && atlyginimu > 1500) {
    console.log(`Gerbemasis ${vardas} paskola jums bus suteikta`);
} else {
    console.log(`${vardas}!! Kai uzdirbsi daugiau, ateik, pakalbesim`);
}

console.log("-------------------------------------");

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< EXAMPLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Paaiskinimas ! operatoriui

// sitame if statement'e turim tuscia true dali nes reikalingas else outcome'as ir musu salyga ivyksta tada
// kai kintamasis arVedes = false

// let arVedes = false;

// if(arVedes){
    
// } else {
    // console.log(`${vardas} kadangi esi vingungis gausi dovanukuponas dildosui tik si menesi!`);
// }


// kad sutaupyti ciklu ir efektyviau rasyti koda, galime naudoti ! operator kuris padarys
// kad gauta false reiksme bus suprantama kaip true ir tada mums nereikes else statement'o

// let arVedes = false;

// if(!arVedes){
    // console.log(`${vardas} kadangi esi vingungis gausi dovanukuponas dildosui tik si menesi!`);  
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< EXAMPLE END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// JS-2 - 17 skaidre
// 1 -------------------------------------------------------------------------------------------------------------------
// 1. Deklaruoti kintamaji ir priskirti jam skaitine reiksme. Patikrinti kelintadieni zymi tas skaicius, atsakyma atspausdinti 
//konsoleje. Jei skaicius didesnis nei 7 ar mazesnis nei 1, atspausdinti "Neteisingai nurodytas skaicius".

// pagal pateikta number kintamaji priskyreme jam string reiksme kuri savaites diena tai yra,
// jeigu skaicius didesnis - tos dienos nera (skaiciu verciam i teksta)

let diena = 2;

switch (diena) {
    case 1:
        console.log("pirmadienis");
        break;
    case 2:
        console.log("antradienis");
        break;
    case 3:
        console.log("treciadienis");
        break;
    case 4:
        console.log("ketvirtadienis");
        break;
    case 5:
        console.log("penktadienis");
        break;
    case 6:
        console.log("sestadienis");
        break;
    case 7:
        console.log("sekmadienis");
        break;
    default:
        console.log("Neteisingai nurodytas skaicius");
}

console.log("-------------------------------------");

// 2 -------------------------------------------------------------------------------------------------------------------
// Deklaruoti kintamaji ir priskirti jam menesio pavadinimo reiksme. Patikrinti kuri skaiciu atitinka menesio pavadinimas,
// atsakyma atspausdinti konsoleje. Jei irasytas ne menesio pavadinimas, atspausdinti "Irasytas ne menesio pavadinmas".

// pagal pateikta string kintamaji priskyreme jam number reiksme kuris menesis tai yra,
// jeigu menesio vardas netinkamas - to menesio skaiciaus nera (teksta 'vasaris' verciam i skaiciu 2)
let menesis = 'vasaris';

switch (menesis) {
    case 'sausis':
        console.log(1);
        break;
    case 'vasaris':
        console.log(2);
        break;
    case 'kovas':
        console.log(3);
        break;
    case 'balandis':
        console.log(4);
        break;
    case 'geguze':
        console.log(5);
        break;
    case 'birzelis':
        console.log(6);
        break;
    case 'liepa':
        console.log(7);
        break;
    case 'rugpjutis':
        console.log(8);
        break;
    case 'rugsejis':
        console.log(9);
        break;
    case 'spalis':
        console.log(10);
        break;
    case 'lapkritis':
        console.log(11);
        break;
    case 'gruodis':
        console.log(12);
        break;
    default:
        console.log("Irasytas ne menesio pavadinimas");
}