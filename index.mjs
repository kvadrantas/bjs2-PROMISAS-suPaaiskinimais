// NUSPRENDZIAM PROMISAS BUS RESOLVINTAS AR REJECTINTAS
const promiseStatus = 0;

// PROMISAS
let promisas = new Promise ((resolve, reject) => {
    promiseStatus === 1 ? resolve('Promisas ivykdytas') : reject('Promisas atmestas');
});
// Promiso viduje yra callback funkcija, kuri turi 2 parametrus: resolve ir reject. Sie parametrai taip pat yra funkcijos.
// F-ja resolve iskart keicia promiso statusa  i 'resolved' ir promisuis priskiria reiksme nurodyta resolve viduje 'resolve(reiksme)'
// F-ja reject iskart keicia promiso statusa i 'rejected' ir promisui priskiria reiksme nurodyta reject viuje 'reject('reiksme')'

// SPAUSDINAM PROMISA SU THEN
promisas
.then(rezultatas => console.log(rezultatas))
.catch(klaida => console.log(klaida));
// Then turi callback funkcija su 1 parametru, kuriam priskiria promiso grazinta resolve reiksme 
// Catch turi callback funkcija su 1 parametru, kuriam priskiria promiso grazinta reject reiksme

// SPAUSDINAM PROMISA SU AWAIT
try {
    console.log(await promisas);     // spausdina promiso resolve reiksme
}
catch(error) {console.log(error);}   // spausdina promiso reject reiksme
