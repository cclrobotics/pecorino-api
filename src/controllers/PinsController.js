export function getPinsStatus(request, response){
	request.smoothie.sendCommand('M119')
	response.send({
		message: 'Ok'
	})
}

export function startup(request, response){
        let cmd = 'M63 M999 G91 G0 X0.001 M112'
	request.smoothie.sendCommand(cmd)
	request.smoothie.sendCommand('M999 G28.2XYZ')
	response.send({
		message: 'MOOOOOOOOOOO: ' + cmd
	})
}