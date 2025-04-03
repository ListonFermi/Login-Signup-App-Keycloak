#!/bin/sh

set -eou pipefail

/opt/keycloak/bin/kc.sh start --hostname-strict=false --optimized

exit $?