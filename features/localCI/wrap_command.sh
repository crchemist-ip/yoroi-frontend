#!/bin/bash

cmd="cd /yoroi; npm run $@"
echo $cmd
echo "hello"
sudo docker exec -t yoroi_ci /bin/bash -c "$cmd"
