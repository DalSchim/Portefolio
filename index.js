const counter = document.getElementById('counter')

const updatecounter = async () => {
const data = await fetch('https://api.countapi.xyz/hit/dalpfvisite/visits')
const count = await data.json()
console.log(count.value)
counter.innerHTML = count.value
counter.style.filter = 'blur(0)'
}

updatecounter();