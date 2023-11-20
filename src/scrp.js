function load(){
const div = document.createElement('div')
div.id = 'wg-api-football-standings'
div.classList.add('wg_loader')
div.dataset.host = 'v3.football.api-sports.io'
div.dataset.league= '39'
div.dataset.season='2023'
div.dataset.key='91956f7a0ad5df2a663cff035b6e8496'

const sports = document.getElementById('sports')
if(sports)  
sports.appendChild(div)
}

export default load