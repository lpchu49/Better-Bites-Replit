#!/bin/bash

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 20 from .nvmrc
nvm use

# Load environment variables from .env file
# set -a enables automatic export of all variables
# source .env loads the file
# set +a disables automatic export
set -a
[ -f .env ] && source .env
set +a

# Start the development server
npm run dev
