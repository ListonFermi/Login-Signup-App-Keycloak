const getEnvVariable = (key: string) => {
  const value = process.env[key];
  console.log(value);
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

/* export const getKeycloakUrl = () => getEnvVariable("NEXT_PUBLIC_KEYCLOAK_URL");
export const getKeycloakRealm = () =>
  getEnvVariable("NEXT_PUBLIC_KEYCLOAK_REALM");
export const getKeycloakClientId = () =>
  getEnvVariable("NEXT_PUBLIC_KEYCLOAK_CLIENT_ID"); */

export const getKeycloakUrl = () => "http://localhost:8081";
export const getKeycloakRealm = () =>
  "Login-signup-app";
export const getKeycloakClientId = () =>
  "login-signup-app-client-id";

export const getBackendUrl = () => "http://localhost:5000"

