document.querySelector(".btn").addEventListener("click", ()=>{
    location.reload();
  })


var joueur = true;
var vainqueur = "";
var gagner = false;

let tableau = ["", "", "", "", "", "", "", "", ""]
var id ="";

function verifier(){
    if (tableau[0]==id && tableau[1]==id && tableau[2]==id){
        if (id=="r"){
            vainqueur = false;
        } else if (id=="c"){
            vainqueur = true;
        }
        gagner=true;
    }
    else if (tableau[3]==id && tableau[4]==id && tableau[5]==id){
        if (id=="r"){
            vainqueur = false;
        } else if (id=="c"){
            vainqueur = true;
        }
        gagner=true;
    }
    else if (tableau[6]==id && tableau[7]==id && tableau[8]==id){
        if (id=="r"){
            vainqueur = false;
        } else if (id=="c"){
            vainqueur = true;
        }
        gagner=true;
    } else if (tableau[0]==id && tableau[3]==id && tableau[6]==id){
        if (id=="r"){
            vainqueur = false;
        } else if (id=="c"){
            vainqueur = true;
        }
        gagner=true;
    } else if (tableau[1]==id && tableau[4]==id && tableau[7]==id){
        if (id=="r"){
            vainqueur = false;
        } else if (id=="c"){
            vainqueur = true;
        }
        gagner=true;
    } else if (tableau[2]==id && tableau[5]==id && tableau[8]==id){
        if (id=="r"){
            vainqueur = false;
        } else if (id=="c"){
            vainqueur = true;
        }
        gagner=true;
    } else if (tableau[0]==id && tableau[4]==id && tableau[8]==id){
        if (id=="r"){
            vainqueur = false;
        } else if (id=="c"){
            vainqueur = true;
        }
        gagner=true;
    } else if (tableau[2]==id && tableau[4]==id && tableau[6]==id){
        if (id=="r"){
            vainqueur = false;
        } else if (id=="c"){
            vainqueur = true;
        }
        gagner=true;
    }
}

document.querySelector(".tour").textContent='Au tour du joueur "Croix" (X)';

document.querySelectorAll(".case").forEach(element=>{
    element.addEventListener("click", function clickcase(){
        if (gagner==false){


        if (joueur==true){
            const croix = document.createElement("div");
            croix.classList.add("croix");
            element.id ="c";
            element.appendChild(croix);
            const barre1 = document.createElement("div");
            barre1.classList.add("c-barre-1")
            croix.appendChild(barre1)
            const barre2 = document.createElement("div");
            barre2.classList.add("c-barre-2")
            croix.appendChild(barre2)
            joueur=false;
            document.querySelector(".tour").textContent='Au tour du joueur "Rond" (O)';
        } else if (joueur==false){
            const rond = document.createElement("div");
            rond.classList.add("rond");
            element.id ="r";
            element.appendChild(rond);
            joueur=true;
            document.querySelector(".tour").textContent='Au tour du joueur "Croix" (X)';
        }

        element.classList.remove("case")

        for (let i = 1; i<4; i++){
            const colonne = document.querySelector(`.colonne:nth-child(${i})`);
            if (i==1){
                for (let j = 1; j<4; j++){
                    const case1 = colonne.querySelector(`.cas:nth-child(${j})`);
                    var g = j-1
                    if (case1.id==="r"){
                        tableau.splice(g, 1)
                        tableau.splice(g, 0, "r")
                    }
                    if (case1.id==="c"){
                        tableau.splice(g, 1)
                        tableau.splice(g, 0, "c")
                    }
                    }
            } else if (i==2){
                for (let j = 1; j<4; j++){
                    const case1 = colonne.querySelector(`.cas:nth-child(${j})`);
                    var g = j-1+3;
                    if (case1.id==="r"){
                        tableau.splice(g, 1)
                        tableau.splice(g, 0, "r")
                    }
                    if (case1.id==="c"){
                        tableau.splice(g, 1)
                        tableau.splice(g, 0, "c")
                    }
                    }
            } else if (i==3){
                for (let j = 1; j<4; j++){
                    const case1 = colonne.querySelector(`.cas:nth-child(${j})`);
                    var g = j-1+6;
                    if (case1.id==="r"){
                        tableau.splice(g, 1)
                        tableau.splice(g, 0, "r")
                    }
                    if (case1.id==="c"){
                        tableau.splice(g, 1)
                        tableau.splice(g, 0, "c")
                    }
                    }
            }
                
        }


        
        id = "r";
        verifier();
        id = "c";
        verifier();
        
        
        


        element.removeEventListener("click", clickcase);

        if (gagner==true){
            document.querySelectorAll(".case").forEach(element=>{
                element.classList.remove("case");
            });
            if (vainqueur==true){
                document.querySelector(".gagner").textContent = "Le joueur Croix gagne"
            } else if (vainqueur==false){
                document.querySelector(".gagner").textContent = "Le joueur Rond gagne"
            }
        }

        compteur = 0;
        for (let j = 0; j<9; j++){
            if (tableau[j]!=""){
                compteur++;
        }
        console.log(compteur)
        }
        if (compteur==9 && gagner!=true){
            document.querySelector(".gagner").textContent = "Match nul !"
        }
        

        }
        
        

    })
})