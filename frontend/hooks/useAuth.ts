import {
  getKeycloakClientId,
  getKeycloakRealm,
  getKeycloakUrl,
} from "@/utils/constants";
import Keycloak from "keycloak-js";
import React, { useEffect, useState } from "react";

function useAuth() {
  const [isLogin, setLogin] = useState(false);
  const [token, setToken] = useState<string>('');

  
  useEffect(() => {
    (async function () {
      try {
        const keycloak = new Keycloak({
            url: getKeycloakUrl(),
            realm: getKeycloakRealm(),
            clientId: getKeycloakClientId(),
          });
        
        const authenticated = await keycloak.init({ onLoad: "login-required" });
        console.log({authenticated});

        if (authenticated) {
          setLogin(true);
          setToken(keycloak?.token || '');
        } else {
          console.log("User is not authenticated");
        }
      } catch (error:any) {
        console.log("Failed to initialize adapter:", error.message);
        console.log("Error details:", error);
        console.log("Keycloak configuration:", {
          url: getKeycloakUrl(),
          realm: getKeycloakRealm(),
          clientId: getKeycloakClientId()
        });
      }
    })();
  }, []);

  return {isLogin, token};
}

export default useAuth;
