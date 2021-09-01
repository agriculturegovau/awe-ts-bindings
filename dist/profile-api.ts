/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/profileapi": {
    get: operations["AppController_getHello"];
  };
  "/profileapi/health": {
    get: operations["HealthController_check"];
  };
  "/profileapi/users/self": {
    get: operations["UsersController_getSelf"];
    patch: operations["UsersController_update"];
  };
  "/profileapi/auth/link": {
    post: operations["AuthController_link"];
  };
  "/profileapi/establishments": {
    get: operations["EstablishmentsController_findAll"];
  };
  "/profileapi/establishments/{id}": {
    get: operations["EstablishmentsController_findOne"];
  };
  "/profileapi/establishments/check_invite": {
    post: operations["EstablishmentsController_checkInvitation"];
  };
  "/profileapi/users/self/preferences": {
    get: operations["UserPreferencesController_getPreferences"];
    patch: operations["UserPreferencesController_updatePreferences"];
  };
  "/profileapi/invitations": {
    get: operations["InvitationsController_getInvitations"];
  };
  "/profileapi/invitations/{service}": {
    get: operations["InvitationsController_getInvitation"];
  };
}

export interface components {
  schemas: {
    UpdateUserDto: {
      /** Given name of user */
      firstName?: string;
      /** Family name of user */
      lastName?: string;
    };
    UserDto: {
      /** Internal identifier of user */
      id: string;
      /** Email address of user */
      email: string;
      /** Given name of user */
      firstName: string;
      /** Family name of user */
      lastName: string;
      /** Date user registered */
      createdAt: string;
      /** Date user was last updated */
      updatedAt: string;
    };
    LinkUserDto: {
      idToken: string;
    };
    EstablishmentPersonDto: {
      /** Internal identifier of Person */
      id: string;
      /** Internal identifier of Establishment */
      establishmentId: string;
      email: string;
      title: string;
      firstName: string;
      lastName: string;
      otherNames: string;
      dateOfBirth: string;
      placeOfBirth: string;
      jobTitle: string;
      street: string;
      suburb: string;
      state: string;
      postcode: string;
      country: string;
      authorisedToSignMeatTransferCertificates: boolean;
      supervisesLoadingOfMeat: boolean;
    };
    EstablishmentDto: {
      /** Internal identifier of establishment */
      id: string;
      /** Establishment Identifier */
      establishmentNum: string;
      /** Establishment name */
      name: string;
      /** Australian Business Number */
      abn: string;
      /** Australian Company Number */
      acn: string;
      /** Alternative trading names */
      tradingNames: string;
      workPhone: string;
      mobilePhone: string;
      email: string;
      street: string;
      suburb: string;
      state: string;
      postcode: string;
      country: string;
      postStreet: string;
      postSuburb: string;
      postState: string;
      postPostcode: string;
      postCountry: string;
      commodities: string;
      type: string;
      vesselName: string;
      inspectionPort: string;
      homePort: string;
      plantActivities: string;
      readyToCommenceExportOperations: boolean;
      readyToBeInspected: boolean;
      currentlyLicensedForSimilarGoods: boolean;
      hasDocumentedArrangement: boolean;
      persons?: components["schemas"]["EstablishmentPersonDto"][];
    };
    InvitationCheckDto: {
      email: string;
    };
    SystemPreferencesDto: {
      /** UI Theme (light or dark) */
      theme?: string;
      /** Indicate the level of AWEsomeness the user posesses */
      awesome?: number;
    };
    IntelligencePreferencesDto: {
      /** Indicate if the user is in fact AWEsome */
      awesome?: string;
    };
    UserPreferencesDto: {
      system?: components["schemas"]["SystemPreferencesDto"];
      intelligence?: components["schemas"]["IntelligencePreferencesDto"];
    };
    InvitationDto: {
      /** Service the user has been invited to */
      service: string;
    };
  };
}

export interface operations {
  AppController_getHello: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  HealthController_check: {
    parameters: {};
    responses: {
      /** The Health Check is successful */
      200: {
        content: {
          "application/json": {
            status?: string;
            info?: {
              [key: string]: {
                status?: string;
              } & { [key: string]: string };
            } | null;
            error?: {
              [key: string]: {
                status?: string;
              } & { [key: string]: string };
            } | null;
            details?: {
              [key: string]: {
                status?: string;
              } & { [key: string]: string };
            };
          };
        };
      };
      /** The Health Check is not successful */
      503: {
        content: {
          "application/json": {
            status?: string;
            info?: {
              [key: string]: {
                status?: string;
              } & { [key: string]: string };
            } | null;
            error?: {
              [key: string]: {
                status?: string;
              } & { [key: string]: string };
            } | null;
            details?: {
              [key: string]: {
                status?: string;
              } & { [key: string]: string };
            };
          };
        };
      };
    };
  };
  UsersController_getSelf: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserDto"];
        };
      };
    };
  };
  UsersController_update: {
    parameters: {};
    responses: {
      204: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserDto"];
      };
    };
  };
  AuthController_link: {
    parameters: {};
    responses: {
      204: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LinkUserDto"];
      };
    };
  };
  EstablishmentsController_findAll: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["EstablishmentDto"][];
        };
      };
    };
  };
  EstablishmentsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["EstablishmentDto"];
        };
      };
    };
  };
  EstablishmentsController_checkInvitation: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": boolean;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["InvitationCheckDto"];
      };
    };
  };
  UserPreferencesController_getPreferences: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserPreferencesDto"];
        };
      };
    };
  };
  UserPreferencesController_updatePreferences: {
    parameters: {};
    responses: {
      204: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserPreferencesDto"];
      };
    };
  };
  InvitationsController_getInvitations: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["InvitationDto"][];
        };
      };
    };
  };
  InvitationsController_getInvitation: {
    parameters: {
      path: {
        /** Service the user has been invited to */
        service: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["InvitationDto"];
        };
      };
      /** No invitation for the service was found */
      404: unknown;
    };
  };
}

export interface external {}