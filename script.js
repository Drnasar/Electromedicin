const wrapper = document.querySelector(".wrapper"),
selectBtn = document.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Mukakkuru-(S5+LI+C3+CS+A3+A1)",
 "allergy & asthma- (P1-P4-S1-F1-RE-WE)",
 "Skin-(App-S5-CS+C3+S3+A2+Ven1)",
"Asthma-(P1-P3-S1-12+A3+BE+F1)",
 "Blood,increase-(S3-S5+S8+C3-C5+A3+L1)",
 "Improve memory power-(ver1-SI+L1+Sy+WE)",
"Malabantham-(S1-S10-Ver1-C10+SLass+YE)",
 "shukar-(S2-S6-C17 Ven1-WE-S1)",
 "Vayarilakkam-(S10+C10-ver1 we)",
"Vayar problom-(S1-S10-L1-A3+Ver1+WE+Slass+C10)",
"Tonsils-(C13+51+P3+A3+F1+GE)",
 "Thalavedana-(P1+F2+A3+S5+CS+WE)",
"Chevi Problom-(S1+S5-C3-C5+BE+F1)",
 "Mookil dasha-(S10-F1+P1+GE+S5+C5+A2+RE)",
 "Polio-(S5-CS-S2-Ven+L1+RE)",
"Amida vannam-(S1+SIO+L1+C2+Sy+WE)",
"Apasmaram-(S10-VER1+WE+F1+CS+L2)",
"Mukakkuru-(S3-S5-C3+C5+A3+GE+BE+App)",
"Pani-(C5+SI+S5+A3+F1+12+WE)",
 "All kind of fever-(F1+S3+Al+Ver1+L2+C3+WE)",
 "Family tonic-(SI-S10-L1+A3+WE+RE+SY+Ven1)",
"Valarcha hight-(C1-C4-LI-RE+S8+A3)",
 "Hair problems-(S2-S3-12-A3-App-RE-Ven1)",
 "Mudi-(S2-S3-12-A3-App-RE-Ven1)",
"BP-Hypertension-(A3-S6-FI-YE-WE+C6+BE) ",
"BP-LOW-Hypotension(A1-S6-C2-C6-L2+RE+BE)",
 "cough(P3-FI SI-A3+WE+BE)",
 "Kidny-(C17+C6+S6+LI+SI+WE)",
 "Liver Tonic (S2-S5-C5+F1-S10+WE) ",
  "Manjapittham (S2-S5-C5+F1-S10+WE) ",
 "kannu kazhcha (S12-C5-BE-YE+APP) ",
  "Sexual problems Female (S3+C3+A3+L1+S4+C5+S8+WE+F1+) ",
 "Sexel male (S1-A1-CI-Ven1+L1+S8+WE) ",
 "Pailes ( A1-S1C10+Verl+LI+Slass+BE)",
  "moolakkuru (AI-SI-C10+Verl+LI+Slass+BE) ",
 "sexel Balaheenatha (S3+C4+SI+LI+A3+Ven1+WE+RE+Sy) ",
  "Joint pain (S2-S6-L2+A3+C5+C6+RE) ",
  "mutt vedana (S2-S6-L2+A3+C5+C6+RE) ",
 "Vira shallyam (Ver1 Ver 2+ S5+CI+YE+SLass) ",
  "Thimiram (PI-P4-FI+LI+RE+A3 ) ",
  "Vrkka (S1-S5-S6+C6+CI+A2+WE+OR S2, S6, C17, C2)",
 "Senaites (C5+L2+S5+Ver1+P4+A1)",
  "dryskin (CS+S3+App+S5+GE+WE+S2-S5-LI-C5+FI+WE+S10)",
  "Sexul Male (S1-LI+A3+Ven1+WE+RE.SY.S3) ",
 "Liver Tonic (S2+S6+C2+C6+YE+WE+C17) ",
 "Hart Tonic (S2+S6+C2+C6+YE+WE+C17) ",
 "Tadikurakkan (SI+SIO+LI+C4+Sy+WE+Venl+Slass)",
 "Acne(S3+S5+A2+L1+S5+C5)",
  "Anaemia	S1+ We+S10+ A3",
  "Anaemia (Gasona=S5+F1+VER1+YE) ",
  "Digestive(Spazyme=S10+C15+C13+VER2+BE+YE)",
 "Nervous System (Tarang=S3+S10+C3+L1+VER1+RE) ",
 " Calcium&iron(Lady fit=s2+c4+l1+ver1+we)",
 "Liver Remedy (s5+ver1+l1+ye) ",
 "coufh Syrup ( p3+s1+ver2+c13+f1+ye) ",
 "Nervona (a1+c4+f1+be) ",
 "Thyrodina (c3+s3+f1+l1+we) ",
 "Leucorrhoea (s2+c3+ver1+ven1+be+ye) ",
"Piles Drop (s5+s-lass+c10+a2+ven1+be) ",
"Cardeal drop (p3+s1+ver2+c13+f1+a1+ye) ", 
"Stone Solvent (s1+c2+ver1+c13+l1+be+we) "];
function addCountry(selectedCountry){
    options.innerHTML = "";
    countries.forEach(country => {
        //adding each country inside li and inserting all li inside option tag
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="UpdateName(this)" class="${isSelected}" >${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();
function UpdateName(selectedLi){
    searchInp.value ="";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("keyup", () => {
    //creating empty array
    let arr = [];
    let searchedVal = searchInp.value.toLocaleLowerCase();
    
        //returning all countries from arrays which start with user searched value
         //and mapping returned country with li and joining them
    arr = countries.filter(data => {
        return data.toLocaleLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="UpdateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr: `<p>Ooops! The country is not found</p>`;
});
selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});
