export function enableMotors(request, response){
	request.smoothie.sendCommand('M17')
	response.send({
		message : 'Ok'
	})
}

export function disableMotors(request, response){
	request.smoothie.sendCommand('M18')
	response.send({
		message : 'Ok'
	})
}

export function startup(request, response){
	request.smoothie.sendCommand('M63 M999 G91 G0 X0.001 M112')
	request.smoothie.sendCommand('M999 G28.2XYZ')
	response.send({
		message: 'Ok'
	})
}