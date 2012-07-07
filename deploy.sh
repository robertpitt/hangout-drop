#!/bin/bash
#
# Hangout Drop deployment script
#

# Get the current directory as the base directory
DIR=$( pwd )

# Point to the appcfg.py
CMD_APPCFG="/home/gigawatt/google_appengine/appcfg.py"

# Point to the closure build tools
CMD_CLOSUREBUILDER="$DIR/google-closure-library/closure/bin/build/closurebuilder.py"

# Closure Root
CLOSURE_ROOT_PATH="$DIR/google-closure-library/"

# Application root namespace
APP_ROOT_NS="hangout_drop"

# Application root path
APP_ROOT_PATH="$DIR/development"

# What deploy area are we deploying
# read -p "Where would you like to deploy (*development|production): " deploy_type
# check for enter (defualts development)
# if [ -z $deploy_type]; then
deploy_type="development"
#fi

# Application output path
APP_OUTPUT_FILE=$DIR"/deploy/$deploy_type/static/application.js"

# Ask if we should run the compiler on the source tree
read -p "Compile source code (*y|n): " compileryn

if [ "$compileryn" != "n" ]; then
	# Create root command
	COMPILE_CMD="$CMD_CLOSUREBUILDER --compiler_jar=$DIR/compiler.jar"

	#Defualt compile mode
	COMPILE_MODE="script"

	#COMPILE_CMD=$COMPILE_CMD" --compiler_flags=\"--externs=$DIR/closure-externs/opensocial.js\" --compiler_flags=\"--externs=$DIR/closure-externs/gapi_v1.js\""
	COMPILE_CMD=$COMPILE_CMD" --root=$CLOSURE_ROOT_PATH"
	COMPILE_CMD=$COMPILE_CMD" --root=$APP_ROOT_PATH"
	COMPILE_CMD=$COMPILE_CMD" --namespace=$APP_ROOT_NS"

	read -p "use ADVANCED_OPTIMIZATIONS (*y|n): " advanced_compile
	if [ "$advanced_compile" != "n" ]; then
		COMPILE_MODE="compiled"
		COMPILE_CMD=$COMPILE_CMD" --compiler_flags=--compilation_level=ADVANCED_OPTIMIZATIONS"
	fi

	# Set the output mode
	COMPILE_CMD=$COMPILE_CMD" --output_mode=$COMPILE_MODE"

	# Set the output destination
	# COMPILE_CMD=$COMPILE_CMD" > "$APP_OUTPUT_FILE

	# Execute the compile
	`$COMPILE_CMD > $APP_OUTPUT_FILE`
fi

# Confirm with a keystroke.
read -p "Hit [ENTER] to deploy to ($deploy_type): " deploy_enter

#Deploy
$CMD_APPCFG update deploy/$deploy_type/