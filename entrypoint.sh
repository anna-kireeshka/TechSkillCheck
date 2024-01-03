#!/bin/sh

# Create config.js with runtime environment variables
echo "window.REACT_APP_API = '${REACT_APP_API}';" > /app/config.js
echo "window.REACT_APP_RECAPCHA_SECRET_KEY = '${REACT_APP_RECAPCHA_SECRET_KEY}';" >> /app/config.js
echo "window.REACT_APP_RECAPCHA_SITE_KEY = '${REACT_APP_RECAPCHA_SITE_KEY}';" >> /app/config.js

# Start the serve command
exec serve -s -l 8080 app
