//      2021 - 07 - 15    //
//       1 Vardenis pavardenis    //
/*
var vardas = 'Marius';
var pavarde = 'Cernovas';
var gimdata = '1977.08.16';
document.getElementById('vardenispavardenis').innerHTML = "As esu " + vardas + " " + pavarde + " gimes" + gimdat + " ." ;
*/

document.getElementById('b_date').addEventListener("input", vard_pavard);
function vard_pavard(){

var vardas = document.getElementById("f_name").value;
var pavarde = document.getElementById('l_name').value;
var gimdata = document.getElementById('b_date').value;

//console.log(vardas, pavarde, gimdata );
document.getElementById('j_info').innerHTML = "Jus esate " + vardas + " " + pavarde + " gimęs " + gimdata + " ." ;
};

document.getElementById('accept_1').addEventListener("click", new_j);
function new_j (){
    document.getElementById('f_name').value ="";   
    document.getElementById('l_name').value ="";   
    document.getElementById('b_date').value ="";   
    document.getElementById('j_info').innerHTML = "Duomenys įvesti, veskite kitą vartotoją";
};


//       2 Sugalvotas kintamasis su liekana ir apvalinimas    //

document.getElementById('kint_gen').addEventListener("click", kint_gen);
function kint_gen (){
var kint_gen = (Math.random()*101).toFixed(2); // toFixed(2) - apvalinimas iki 2 skaiciu po kaloblelio
//console.log(kint_gen );

document.getElementById('sugkint').innerHTML = 'Sugeneruotas kintamaisi '+ kint_gen;
document.getElementById('apdid').innerHTML = 'Suapvalintas iki didziausios reikšmės ' +  Math.ceil(kint_gen);
document.getElementById('apmaz').innerHTML = 'Suapvalintas iki mažiausios reikšmės '+ Math.floor(kint_gen);

document.getElementById('apart').innerHTML = 'Matematinis apvalinimas '+ Math.round(kint_gen);
};

//       3 Zaidimo kauliukas    //


document.getElementById('kauliukas').addEventListener("click", randomsk);
function randomsk(){
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  } ; 
  //console.log(randomSkaicius(1,6));
  document.getElementById("ridsk").innerHTML = randomSkaicius(1,6);

};

//       4 Kintamujų nuo 0 iki 6 dalyba    //

document.getElementById('kint_gen2').addEventListener("click", kint_gen2);
function kint_gen2(){
function rdsk1(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  } ; 

  function rdsk2(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  } ; 
   
 var kina_1 = rdsk1(0,6);
 var kinb_1 = rdsk2(0,6);
  //console.log(rdsk1(0,6));
  //console.log(rdsk2(0,6));

  document.getElementById('kina1').innerHTML = kina_1;  
  document.getElementById('kinb1').innerHTML = kinb_1;
  
  if (kinb_1==0) {
    document.getElementById('rezult_v').innerHTML = 'Atsitiktinis B = 0. Dalyba negalima.  Generuokite dar karta'
    document.getElementById('rezult_v_ap').innerHTML = '';
} else {
    var rezult_v = (kina_1/kinb_1).toFixed(2);
    document.getElementById('rezult_v').innerHTML = 'A / B = '+ kina_1 +' / '+kinb_1+' = '+rezult_v;
    var rezult_v_ap = Math.round(rezult_v);
    document.getElementById('rezult_v_ap').innerHTML = 'Apvalintas rezultatas = '+rezult_v_ap;
}
};

//       5 Uzduotis 3-ju kintamujų vidutine reiksme    //
document.getElementById('kint_gen3').addEventListener("click", kint_gen3);
function kint_gen3(){
    
      var kin5_1 = Math.floor(Math.random() * 26);
      var kin5_2 = Math.floor(Math.random() * 26);
      var kin5_3 = Math.floor(Math.random() * 26);   

     var max5_1 = Math.max(kin5_1, kin5_2, kin5_3);
     var min5_1 = Math.min(kin5_1, kin5_2, kin5_3);
     var vid5_1;
    //console.log(kin5_1);
    //console.log(kin5_2);
    //console.log(kin5_3);
    //console.log(max5_1);
    //console.log(min5_1);

    if(kin5_1==kin5_2 || kin5_2==kin5_3 || kin5_1==kin5_3) {
        vid5_1 = 'Masyve du skaiciai vienodi. Vidutinio iskirti negalima. Generuokite dar karta.'
    };
    
    if(kin5_1 > min5_1 && kin5_1 < max5_1) {
        vid5_1 = kin5_1;
    };

    if( kin5_2 > min5_1 && kin5_2 < max5_1) {
    vid5_1 = kin5_2;
    };

    if( kin5_3 > min5_1 && kin5_3 < max5_1) {
    vid5_1 = kin5_3;
    };

    //console.log(vid5_1);
    document.getElementById('rezult5_1').innerHTML = 'Sugeneruotas masyvas = '+kin5_1+' '+ kin5_2+' '+ kin5_3;
    document.getElementById('rezult5_2').innerHTML = 'Vidurinis skaicius = ' + vid5_1;
};

//       6 Uzduotis Atsitiktinio skaiciaus iki 100 generavimas    //
document.getElementById('kint_gen4').addEventListener("click", kint_gen4);
function kint_gen4(){
    var kin6_1 = Math.floor(Math.random() * 101);
    document.getElementById('rezult6_1').innerHTML = 'Atsitiktinis skaičius iki 100 = ' + kin6_1;
};

//       7 Uzduotis  3-ju atsitiktinių -10 iki 10 spalvos    //

document.getElementById('kint_gen7').addEventListener("click", kint_gen7);
function kint_gen7(){

    document.getElementById('kin7_1').classList.remove("font_red", "font_blue", "font_green");
    document.getElementById('kin7_2').classList.remove("font_red", "font_blue", "font_green");
    document.getElementById('kin7_3').classList.remove("font_red", "font_blue", "font_green");
    
function kin_rib7_1(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  } ; 

  function kin_rib7_2(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  } ; 

  function kin_rib7_3(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  } ; 
  var kin7_1 = kin_rib7_1(-10,10);
  var kin7_2 = kin_rib7_2(-10,10);
  var kin7_3 = kin_rib7_3(-10,10);


  document.getElementById('kin7_1').innerHTML = kin7_1;  
  document.getElementById('kin7_2').innerHTML = kin7_2;
  document.getElementById('kin7_3').innerHTML = kin7_3;
// kin7_1 add class
  if (kin7_1 < 0) { 
    document.getElementById('kin7_1').classList.add("font_red");
}

  if (kin7_1 === 0) { 
    document.getElementById('kin7_1').classList.add("font_blue");
}

  if (kin7_1 > 0) { 
    document.getElementById('kin7_1').classList.add("font_green");
}

// kin7_2 add class

if (kin7_2 < 0) { 
    document.getElementById('kin7_2').classList.add("font_red");
}

  if (kin7_2 === 0) { 
    document.getElementById('kin7_2').classList.add("font_blue");
}

  if (kin7_2 > 0) { 
    document.getElementById('kin7_2').classList.add("font_green");
}

// kin7_3 add class

if (kin7_3 < 0) { 
    document.getElementById('kin7_3').classList.add("font_red");
}

  if (kin7_3 === 0) { 
    document.getElementById('kin7_3').classList.add("font_blue");
}

  if (kin7_3 > 0) { 
    document.getElementById('kin7_3').classList.add("font_green");
}

};

// 8 Uzduotis  Zvakiu pardavimas // 

document.getElementById('kiekis8_1').addEventListener("change", skaiciuoti8_1);
function skaiciuoti8_1(){
    var uzsak_kiekis8_1 = document.getElementById('kiekis8_1').value
    if (uzsak_kiekis8_1<=0){
        document.getElementById('message8_1').innerHTML ='Klaida. Patikslinkite uzsakymo kieki';
        document.getElementById('message8_2').innerHTML =' ';
        document.getElementById('message8_3').innerHTML =' ';
        document.getElementById('message8_4').innerHTML =' ';
    };

    if (uzsak_kiekis8_1>0 && uzsak_kiekis8_1<1001){
        document.getElementById('message8_1').innerHTML ='Jus uzsakete '+ uzsak_kiekis8_1+' vnt. zvakiu';
        document.getElementById('message8_2').innerHTML ='Uzsakytam kiekiui nuolaida netaikoma ';
        document.getElementById('message8_3').innerHTML ='Viso mokėti: '+ uzsak_kiekis8_1*1+ ' Eur.';
        document.getElementById('message8_4').innerHTML ='Uzsakykite daugiau negu 1000 vnt. zvakiu ir Jums bus taikoma 3% nuolaida.';
    }


    if (uzsak_kiekis8_1>1000 && uzsak_kiekis8_1<2001){
        document.getElementById('message8_1').innerHTML ='Jus uzsakete '+ uzsak_kiekis8_1+' vnt. zvakiu';
        document.getElementById('message8_2').innerHTML ='Jums taikoma 3% nuolaida';
        var kain_n8_1=((1-(1*0.03)).toFixed(2));
        var mok_n8_1=(uzsak_kiekis8_1*kain_n8_1).toFixed(2);
        document.getElementById('message8_3').innerHTML = 'Vieneto kaina su nuolaida: ' + kain_n8_1 + ' Eur. Viso moketi:' + mok_n8_1+ ' Eur.';
        document.getElementById('message8_4').innerHTML = 'Uzsakykite daugiau negu 2000 vnt. zvakiu ir Jums bus taikoma 4% nuolaida.';
    }

    if (uzsak_kiekis8_1>2000){
        document.getElementById('message8_1').innerHTML ='Jus uzsakete '+ uzsak_kiekis8_1+' vnt. zvakiu';
        document.getElementById('message8_2').innerHTML ='Jums taikoma 4% nuolaida';
        var kain_n8_1=((1-(1*0.04)).toFixed(2));
        var mok_n8_1=(uzsak_kiekis8_1*kain_n8_1).toFixed(2);
        document.getElementById('message8_3').innerHTML = 'Vieneto kaina su nuolaida: ' + kain_n8_1 + ' Eur. Viso moketi:' + mok_n8_1+ ' Eur.';
        document.getElementById('message8_4').innerHTML = 'Apgailestaujame, bet didesnes nuolaidos taikyti negalime.';
    }

};

// 9 Uzduotis  Nesupratau // 



