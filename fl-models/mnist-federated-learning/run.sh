#!/bin/bash

echo "Starting server"
python3 server_federation.py &
sleep 10  # Sleep for 3s to give the server enough time to start

for i in $(seq 0 1); do
    echo "Starting client $i"
    python3 client_federation.py &
done

# This will allow you to use CTRL+C to stop all background processes
trap 'trap - SIGTERM && kill -- -$$' SIGINT SIGTERM
# Wait for all background processes to complete
wait