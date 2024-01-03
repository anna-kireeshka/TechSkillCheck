#!/bin/sh

# Create config.js with runtime environment variables
echo "window.REACT_APP_API = '${REACT_APP_API}';" > /app/config.js

# Start the serve command
exec serve -s -l 8080 app
