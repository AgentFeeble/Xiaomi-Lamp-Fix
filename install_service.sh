#!/usr/bin/env bash

if [[ $(id -u) -ne 0 ]]
    then echo "Please run as root"
    exit 1
fi

SERVICE_NAME=lamp_fix
SERVICE_FILE="/lib/systemd/system/$SERVICE_NAME.service"

sed "s|{project_directory}|$(pwd)|" ./service_template > "$SERVICE_FILE"

systemctl daemon-reload
systemctl enable "$SERVICE_NAME"
systemctl stop "$SERVICE_NAME"
systemctl start "$SERVICE_NAME"
