#!/usr/bin/env bash

export BUILD_NUMBER=$(git describe --tags --always --dirty="-dev")
export BRANCH_NAME=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)
export PORT_NUMBER="5001"
export JOB_BASE_NAME="airlines"

echo "Starting docker container"
docker-compose up --build

docker-compose down --rmi "all"
