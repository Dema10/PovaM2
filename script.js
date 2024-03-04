/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. 
Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere 
come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la 
  posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o 
minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con 
.toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, 
ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione 
che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
    {
        title: "ciao",
        location: "banane",
    },
  ];
  
//PUNTATORI GLOBALI

const bottone = document.getElementById("submit");
const stampaValori = document.getElementById("risultatoValori");
const frase = document.getElementById("numPosizioni");
const cancellare = document.getElementById("delete");

// CREO L' ALGORITMO DI RICERCA

function ricercaValore(title, location) {
    // ora creo la variabile che mi ritornera fuori dalla funzione
    let risultati = {
        result: [],
        count: 0,
    };
    // adesso creo il ciclo con il controllo

    jobs.forEach(function (job) {
        //ora creo il controllo
        if (job.location.toLowerCase().includes(location.toLowerCase()) && job.title.toLowerCase().includes(title.toLowerCase())) {
            console.log("lavoro trovato!");

            risultati.result.push(job); // push nell' array
            risultati.count++; // aumento il contatore
            console.log(risultati);

        }
    
    });
    // Verifico se sono stati trovati lavori (il contatore è maggiore di 0) e in caso contrario stampo un messaggio
    if (risultati.count === 0) {
        console.log("Nessun lavoro trovato!");
    }
    // restituisco il risultato
    return risultati;
}
// prove di funzionamento
//let appoggio = ricercaValore ("ciao","" );  ricercaValore("", "banane"); ricercaValore("pizzaiolo","")
//console.log(appoggio);

// ora colleghiamo l' algoritmo di ricerca in una funzione che permette una ricerca all'user

function ricerca(e) {
    e.preventDefault(); // cosi preveniamo il comportamento predefinito del browser

    const lavoro = document.getElementById("lavoro").value;
    const localita = document.getElementById("localita").value;

    let appoggio = ricercaValore(lavoro, localita);

    appoggio.result.forEach(function (job) {
        // creo due li da far stampare
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");

        // adesso modifichiamo il testo da legere
        li1.textContent = `titolo: ${job.title}`;
        li2.textContent = `posizione: ${job.location}`;

        // andiamo a collegare li a ul esistente in index
        stampaValori.appendChild(li1);
        stampaValori.appendChild(li2);

    });

    // ora inseriamo index il testo contatore
    frase.textContent = `Abbiamo trovato ${appoggio.count} opportunità per te!`;

}
// diamo un evento click al bottone per avviare la ricerca
bottone.addEventListener("click", ricerca);

// ho creato una funzione che mi permette di cancellare al click del nuovo bottone la ricerca appena fatta riportando i valori vuoti
cancellare.addEventListener("click", function () {
    stampaValori.innerHTML = "";
    frase.textContent =  "";
    const lavoro = document.getElementById("lavoro").value = "";
    const localita = document.getElementById("localita").value = "";
})

let tasto = document.getElementById("user");
let tendina = document.getElementById("tendina");

tasto.addEventListener("click", function () {
  tendina.classList.toggle("nascondi");
});