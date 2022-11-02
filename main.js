const counter = document.getElementById('counter')
const updatecounter = async () => {
const data = await fetch('https://api.countapi.xyz/hit/dalpfvisite/visits')
const count = await data.json()
console.log(count.value)
counter.innerHTML = count.value
counter.style.filter = 'blur(0)'
}
updatecounter();

let close1 = document.querySelector('.close1')
let close2 = document.querySelector('.close2')
let close3 = document.querySelector('.close3')
let ouvrir1 = document.querySelector('.ouvrir1');
let ouvrir2 = document.querySelector('.ouvrir2');
let ouvrir3 = document.querySelector('.ouvrir3');
let projet = document.querySelector('.projet');
let myskill= document.querySelector('.myskill')
let whoiam= document.querySelector('.whoiam')

/*projet*/
ouvrir1.addEventListener('click', function() {
    projet.classList.toggle('open')


});

close1.addEventListener('click', function() {
 projet.classList.remove('open')
});

/*myskill*/
ouvrir2.addEventListener('click', function() {
    myskill.classList.toggle('open')

});

close2.addEventListener('click', function() {
    myskill.classList.remove('open')
});



/*whoiam*/
ouvrir3.addEventListener('click', function() {
    whoiam.classList.toggle('open')

});

close3.addEventListener('click', function() {
    whoiam.classList.remove('open')
   });
