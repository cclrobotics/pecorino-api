# pecorino-api
Backend controller for sending commands to Smoothieboard
<hr>
This is a Javascript-based API for Igor, the large CCL liquid handling robot. It creates a server listening on localhost:3000 and a serial connection over USB to the Smoothieboard that drives the motors. It can translate simple commands like "home" or "initialize" to G-Code for the Smoothieboard and also provides a way to send G-Code directly, which it then forwards on to the Smoothieboard. It also outputs a log of Smoothieboard responses.

This code was written well after the initial production code for the robot, so it represents a completely different approach.
