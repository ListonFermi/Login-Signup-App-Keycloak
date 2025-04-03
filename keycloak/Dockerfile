FROM node:20.18.0 as keycloakify_jar_builder

RUN apt-get update && apt-get install -y openjdk-17-jdk && apt-get install -y maven;

COPY ./keycloakify-starter/package.json ./keycloakify-starter/yarn.lock /opt/app/

WORKDIR /opt/app

RUN yarn install --frozen-lockfile

COPY ./keycloakify-starter/ /opt/app/

RUN yarn build-keycloak-theme

FROM quay.io/keycloak/keycloak:26.1.4 as builder

WORKDIR /opt/keycloak

COPY --from=keycloakify_jar_builder /opt/app/dist_keycloak/keycloak-theme-for-kc-all-other-versions.jar /opt/keycloak/providers/

ARG ENVIRONMENT
ENV ENVIRONMENT=${ENVIRONMENT}

ARG AWS_REGION
ENV AWS_REGION=${AWS_REGION}

USER root

WORKDIR /opt/keycloak

RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore

ENV KC_DB=postgres

ENV KC_METRICS_ENABLED=true

ENV KC_HEALTH_ENABLED=true

ENV KC_PROXY=reencrypt

ENV KEYCLOAK_PROXY_ADDRESS_FORWARDING=true

RUN /opt/keycloak/bin/kc.sh build

COPY ssm.sh .

RUN chmod 777 ssm.sh

USER 1000

ENTRYPOINT ["/opt/keycloak/ssm.sh"]