/* DONE
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

// function convertion(eur){
//     let kursas = 1.06
//     let usd = eur * kursas
//     return usd.toFixed(2)
// }

// let eur = Math.floor(Math.random()*1000)
// console.log(`Siandienos kursas: 1€ = 1.06$
// ${eur}€ yra ${convertion(eur)}$`)

/* DONE
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

// function convertion2(usd){
//     let kursas = 0.96
//     let eur = usd * kursas
//     return eur.toFixed(2)
// }

// let usd = Math.floor(Math.random()*1000)
// console.log(`Siandienos kursas: 1$ = 0.96€
// ${usd}$ yra ${convertion(usd)}€`)

/*
3. DONE Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

// function kmiSk(svoris, ugis) {
//     let kmi = svoris/ugis**2 
//     if(kmi > 25) {
//         return `Jusu KMI = ${kmi.toFixed(2)}. Jus turite virssvori`
//     } else if (kmi < 25 && kmi >= 18.5) {
//         return `Jusu KMI = ${kmi.toFixed(2)}. Jusu svoris yra normalus`
//     } else {
//         return `Jusu KMI = ${kmi.toFixed(2)}. Jusu svoris yra per mazas`
//     }
// }

// let svoris = 50
// let ugis = 1.85
// console.log(`Svoris: ${svoris}kg
// Ugis: ${ugis}m
// ${kmiSk(svoris, ugis)}`)


/* DONE
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

// let amzius = 22
// let time = new Date()

// let year = time.getFullYear()
// let gimMetai = year - amzius
// let time2 = new Date()
// let skirtumas = time - time2.setFullYear(gimMetai) //milisekkundes

// let sek = skirtumas/1000
// let min = sek/60
// let val = min/60
// let dienos = val/24

// console.log(`Jei zmogui yra ${amzius}m., tai butu ${sek} sekundziu, ${min} minuciu, ${val} valandu ir ${dienos} dienu`)


/* DONE
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

// function celToFar(cel){
//     return cel * 9 / 5 + 32
// }

// function farToCel(far){
//     return (far-32) * 5 / 9 
// }

// let cel = Math.floor(Math.random()*(20+20)-20)
// let far = Math.floor(Math.random()*(100+100)-100)

// console.log(`${cel}°C bus ${celToFar(cel).toFixed(2)}°F`)
// console.log(`${far}°F bus ${farToCel(far).toFixed(2)}°C`)


/*
6. DONE Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

// let list = ''
// for(let i = 1; i <=10; i++) {
//     if (i < 10) {
//         list += `${i}-`
//     }
//     if( i == 10) {
//         list += `${i}`
//     }
// }
// console.log(list)

/* DONE
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
// let eiles = ''
// let kiek = 5
// for(let i = 1; i <= kiek; i ++) {
// eiles = '*'
// }
// for(let j = 1; j <= kiek; j++) { 
//         if (j != 1) {
//             eiles += '*'
//         }
//         console.log(eiles)
// }

/* DONE
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.

*/

// let siandien = new Date();
// let kaledos = new Date()
// let kiekMilisec =  kaledos.setMonth(11, 24) - siandien
// let kiekDienu = kiekMilisec/1000/60/60/24

// console.log(`Iki Kaledu liko ${kiekDienu}d.`)


/*
9. DONE Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

// let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas']
// let naujas = []

// for(let vardas of vardai) {
//     naujas.push(vardas)
// }

// console.log(naujas.join(','))
// console.log(naujas.join('+'))

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

const raides = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const didRaides = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const simboliai = ['/','*','-', '+', '!', '@', '#', '$', '%', '^', '&','(', ')', '{', '}', '~', '[', ']']
const skaiciai = [0,1,2,3,4,5,6,7,8,9]



let galimiSimboliai = [
    raides, didRaides, simboliai, skaiciai
]

console.log(galimiSimboliai)

let masyvoIndeksas = 0;
let simbolioMasyveIndeksas = 0
let yraMRaides = false
let yraDRaides = false
let yraSimboliai = false
let yraSkaiciai = false

function randomSlaptazodzioSimbolis(){
    masyvoIndeksas = Math.floor(Math.random() * galimiSimboliai.length)
    simbolioMasyveIndeksas = Math.floor(Math.random() * galimiSimboliai[masyvoIndeksas].length)

    if(masyvoIndeksas == 0) {
        yraMRaides = true
    } else if(masyvoIndeksas == 1) {
        yraDRaides = true 
    } else if(masyvoIndeksas == 2) {
        yraSimboliai = true
    } else if(masyvoIndeksas == 3){
        yraSkaiciai = true
    }
    return galimiSimboliai[masyvoIndeksas][simbolioMasyveIndeksas]
}
let galutinisSlaptazodis = ''


while (!yraMRaides || !yraDRaides || !yraSimboliai || !yraSkaiciai) {
    yraMRaides = false
    yraDRaides = false
    yraSimboliai = false
    yraSkaiciai = false
    galutinisSlaptazodis = ""
    for (let i = 1; i <= 12; i++) {
        galutinisSlaptazodis += randomSlaptazodzioSimbolis()
    }
}


console.log(galutinisSlaptazodis)

// let visiMasyvaiPanaudoti = galimiSimboliai.every(mas => mas.some(simbolis => galutinisSlaptazodis.includes(simbolis)));

// //every tikrina ar visi condition sklaustuose yra true
// //some tikrina ar bent vienas simbolis yra panaudotas is galimiSimboliai


// if (visiMasyvaiPanaudoti) {
//     console.log("panaudoti visi elementai");
// } else {
//     console.log("ne visi");
//     //
// }












