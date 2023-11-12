const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Player {
	constructor() {
		this.position = {
			x: 100,
			y: 100
		}
		this.widt = 100
		this.height = 100
	}

	draw() {
		c.fillRect(this.position.x, this.position.y, this.widt, this.height)
	}
}

const player = new Player()
player.draw()

 

