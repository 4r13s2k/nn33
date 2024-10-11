const myImage = document.querySelector('img')

myImage.onclick = () => {
	const mySrc = myImage.getAttribute('src')
	if (mySrc === 'images/banner.jpg') {
		myImage.setAttribute('src', 'images/rdr2.jpg')
	} else {
	  myImage.setAttribute('src', 'images/banner.jpg')
	}
}

let changeButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setPlayerName() {
	const playerName = prompt('Player Name: ')
	if(!playerName) {
		setPlayerName()
	} else {
	localStorage.setItem('name', playerName)
	myHeading.textContent = `GameR_${playerName}`
	}
}

if(!localStorage.getItem('name')) {
	setPlayerName()
} else {
  const existingUser = localStorage.getItem('name')
  myHeading.textContent = `Welcome back ${existingUser}`
}

changeButton.onclick = () => {
	setPlayerName()
}
