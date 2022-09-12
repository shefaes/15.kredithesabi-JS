const umumiMebleg = document.getElementById("umumi-mebleg");
      ilkinOdeme = document.getElementById("ilkinodeme");
      kreditMuddeti = document.getElementById("kreditmuddeti");

const umumiMeblegDeyisen = document.getElementById("umumi-mebleg-deyisen");
      ilkinOdemeDeyisen = document.getElementById("ilkinodeme-deyisen");
      kreditMuddetiDeyisen = document.getElementById("kreditmuddeti-deyisen");
      
const umumiKreditMeblegi = document.getElementById("kredit-meblegi");
      ayliqOdeme = document.getElementById("ayliqodeme");
      kreditMuddeti = document.getElementById("kreditmuddeti");

 const inputDeyisen = document.querySelectorAll(".input-deyisen");
   
 const bankBtns = document.querySelectorAll(".bank");

 const assignValue = () => {
    umumiMebleg.value = umumiMebleDeyisen.value;
    ilkinOdeme.value = ilkinOdemeDeyisen.value;
    kreditMuddeti.value = kreditMuddeti.value;
 }

 assignValue();

 const banklar = [
    {
        name: 'Kapital',
        faiz: 8.7
    },
    
    {
        name: 'Abb',
        faiz: 8.9
    },
    {
        name: 'Rabitabank',
        faiz: 7.9
    },
    {
        name: 'Leo',
        faiz: 9.2
    }

 ]

 let cariQiymet = banklar[0].qiymetler;
  
 for(let bank of bankBtns) {
    bank.addEventListener('click', () => {
        for(let item of bankBtns) {
            item.classList.remove('active');
        }
        bank.classList.add('active')
        sechAktivBank(bank)
    })
 }

const sechAktivBank = cariBank => {
    const dataAttrValue = cariAkiv.dataset.name;
    const cariBank = banklar.find( bank => bank.name == dataAttrValue);
    cariQiymet = cariBank.qiymetler;
    kalkulyator(umumiMebleg.value, ilkinOdeme.value, kreditMuddeti.value);


};

for(let input of inputDeyisen){
    input.addEventListener('input', () => {
        assignValue();
        kalkulyator(umumiMebleg.value, ilkinOdeme.value, kreditMuddeti.value);
       
    })
}

const kalkulyator = (umumiMebleg = 0, ilkinOdeme = 100000, kreditMuddeti = 1); {

    let ayliqOdeme;
    let kredit = umumiMebleg - ilkinOdeme;
    let faiz = cariQiymet;
    let illerinNomresi = kreditMuddeti;
    let aylarinNomresi = 12 * illerinNomresi;

    ayliqOdeme = (kredit + (((kredit/100) * faiz) / 12) * aylarinNomresi);
    const ayliqOdemeArounded = Math.round(ayliqOdeme)
    if(ayliqOdemeArounded < 0) {
       return false;
      } else{
        umumiKreditMeblegi.innerHTML = `${kredit} M`;
        ayliqOdeme.innerHTML = `${ayliqOdemeArounded} M` 
        kreditMuddeti.innerHTML = `${ayliqOdemeArounded + ((ayliqOdemeArounded / 100) * 35)} M`
       }
    }




 