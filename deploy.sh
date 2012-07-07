#!/bin/bash
#
# Hangout Drop deployment script
#

# Point to the appcfg.py
CMD_APPCFG="/home/gigawatt/google_appengine/appcfg.py"

# Get the current directory as the base directory
DIR=$( pwd )

# What deploy area are we deploying
read -p "Where would you like to deploy (*development|production): " deploy_type

# check for enter (defualts development)
if [ -z $deploy_type]; then
	deploy_type="development"
fi

#Deploy
$CMD_APPCFG update deploy/$deploy_type/