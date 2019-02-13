
export function moveLeft(request, response){
	request.smoothie.sendCommand('G0 X-10')
	response.send({
		message: 'Ok'
	})
}

export function moveRight(request, response){
	request.smoothie.sendCommand('G0 X10')
	response.send({
		message: 'Ok'
	})
}

export function moveForward(request, response){
	request.smoothie.sendCommand('G0 Y-10')
	response.send({
		message: 'Ok'
	})
}

export function moveBackward(request, response){
	request.smoothie.sendCommand('G0 Y10')
	response.send({
		message: 'Ok'
	})
}