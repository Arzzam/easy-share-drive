import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: '545f8776-2681-4eef-8c08-4d300cdbec09',
    authority: 'https://login.microsoftonline.com/common/',
    redirectUri: '/',
    postLogoutRedirectUri: '/',
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (
        level: LogLevel,
        message: string,
        containsPii: boolean
      ) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequestScopes = {
  scopes: [
    'User.Read',
    'Files.ReadWrite.All',
    'Files.Read.All',
    'Sites.ReadWrite.All',
    'Sites.Read.All',
  ],
};

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
  driveEndpoint: `https://graph.microft.com/v1.0/me/drive/items/root:/`,
  // driveEndpoint: `https://graph.microft.com/v1.0/me/drive/items/root:/`,
};
