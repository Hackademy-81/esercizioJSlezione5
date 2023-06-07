// esercizi di riscaldamento
// numero 1
// function date (dato) {
//     console.log(`il dato inserito è ${typeof dato}`);
// }

// date(9);
// date("rosalinda");

// numero 2
// function table (number) {
//     for (let i=1; i<=10; i++) {
//         let tab= number * i;
//         console.log(tab);

//     }

//     return tab;

// }

// table (3);

// esercizio 3

// function alfabeto (array) {
//     let aZ= array.sort();
//     console.log(aZ);
//     return aZ;
// }

// alfabeto (["angelo", "roberto", "mario", "francesco"]);

// esercizi intermedi

// esercizio1

// function union (array1, array2) {
//     let array3= [];

//     array3= array1.concat(array2);

//     console.log(array3);

//     return array3;
// }

// union ([1,2,3], ["ciao", "sono", "matteo"]);

// esercizio 2

// function media (array) {

//     let somma= array.reduce((acc,n)=> acc+n);
//     let array2= array.filter((number, i)=> number> (somma/array.length)); 
//     console.log(array2);
//     return array2;
// }

// media ([1,2,3]);

// esercizio 3

// function casual (number, min, max) {

//     let array=[];


//     for (i=1; i<=number; i++) {
//         array.push (Math.floor(Math.random() * (max - min + 1) + min));
  

//     }

//     console.log(array);
//     return array;  

// }

// casual (3, 1, 5);

// esercizio sfida a dadi

let dado= {

    players: [
        {name: "Rosalinda", score: [], },
        {name: "Nicola", score: [], },
        {name: "Leonardo", score: [], },
        {name: "Alina", score: [], },
        {name: "Maria", score: [], },
    ],

    setScore: function(number) {

       let scores= this.players.forEach ((player)=> {
        for (let i=1; i<=number; i++) {
            let random= Math.floor(Math.random() * (6 - 1 + 1) + 1);
            let punteggio=  player.score.push (random); 
            console.log(`al tiro di dado di ${player.name} numero ${i}è uscito ${random}`);
           
        }
       });
        
    },

    setFinalScore: function() {
        this.players.forEach ((player)=> {
           player.finalScore= player.score.reduce((acc,n)=>acc + n );
           console.log(`${player.name} ha totalizzato ${player.finalScore} punti`);

        }); 




    },

    
      
    // setWinner: function() {

    //     let winner= this.players[0];
    //     this.players.forEach ((player)=>{
    //         if (player.finalScore > winner.finalScore) {
    //             winner = player;
    //         }

            
    //     console.log(`il vincitore è ${winner.name}totalizzando ${winner.finalScore}`);
    //     })

    // }

    setWinner: function () {
        this.players.sort((a,b)=> b.finalscore - a.finalscore);
        let winner= this.players[0]; 
        if (winner.finalScore > this.players[1].finalScore) {
            console.log(`il vincitore della gara ${winner.name}`);
        } else {
            console.log(`il vincitore della gara è ${this.players[1].name}`);
        };
    },
         


    










}

dado.setScore (5);
dado.setFinalScore(); 
dado.setWinner();







