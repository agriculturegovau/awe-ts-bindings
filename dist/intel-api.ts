/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/intelligenceapi/meat-hygiene-db": {
    get: operations["GetOverviewScore"];
  };
  "/intelligenceapi/meat-hygiene-assessment/{establishmentNum}": {
    get: operations["GetMeatHygieneAssessmentResult"];
  };
  "/intelligenceapi/meat-hygiene-assessment/{establishmentNum}/filter": {
    get: operations["GetMeatHygieneAssessmentFilters"];
  };
}

export interface components {
  schemas: {
    MeatHygieneFilter: {
      meatCondition: components["schemas"]["MeatCondition"];
      species: components["schemas"]["Species"];
      earliestDate: string;
      latestDate: string;
    };
    Score: {
      metadata_period_in_days?: number;
      establishment_id?: number;
      total_active_breaches?: number;
      total_active_reported_concerns?: number;
      total_species?: number;
      total_establishments?: number;
      establishment_name?: string;
      percentage_total_hygiene_score?: number;
      metadata_date_end?: string;
    };
    MeatHygieneAuditDatum: {
      countKills: number | null;
      establishmentNum: number;
      averageHygieneScoreEstablishment: number | null;
      averageHygieneScoreDepartment: number | null;
      averageHygieneScoreEstablishmentNational14Day: number | null;
      reportingDate: string | null;
      countZeroToleranceDetectionEstablishment: number | null;
      countZeroToleranceDetectionDepartment: number | null;
      average14DayNationalCountZeroToleranceDetectionEstablishment:
        | number
        | null;
      countZeroToleranceBreachEstablishment: number | null;
      countZeroToleranceBreachDepartment: number | null;
      average14DayNationalCountZeroToleranceBreachEstablishment: number | null;
      upperMarginThreshold: number;
      lowerMarginThreshold: number;
    };
    MeatHygieneAssessmentMetadata: {
      dateStart: string;
      dateEnd: string;
      establishmentNum: number;
      species: components["schemas"]["Species"];
    };
    Species:
      | "Buffalo"
      | "Calf"
      | "Calves"
      | "Camels"
      | "Cattle"
      | "Cow/Bull"
      | "Deer"
      | "Donkey"
      | "Emu"
      | "Game Deer"
      | "Game Kangaroo"
      | "Game Pig"
      | "Game Pigs"
      | "Game Rabbits"
      | "Goat"
      | "Goats"
      | "Hares"
      | "Horses"
      | "Kangaroo"
      | "Lamb"
      | "Macropod"
      | "N/A"
      | "Ostriches"
      | "Other"
      | "Ovine"
      | "Pig"
      | "Pigs"
      | "Possums"
      | "Poultry"
      | "RTE Products"
      | "Rabbits"
      | "Ratite"
      | "Sheep"
      | "Steer/Heifer"
      | "Tripe"
      | "Wild Boar";
    PerformanceConcern:
      | "Boning room meat hygiene"
      | "Carcase E.coli"
      | "Carcase aerobic plate count"
      | "Carcase coliform"
      | "Carton meat E.coli"
      | "Carton meat STEC"
      | "Carton meat aerobic plate count"
      | "Carton meat coliform"
      | "Carton meat contamination"
      | "Carton meat manufacturing defect"
      | "Carton meat pathology"
      | "Establishment contact surface hygiene"
      | "Establishment personal hygiene"
      | "Offal meat hygiene"
      | "Salmonella"
      | "Slaughter floor meat hygiene";
    MeatCondition: "Skin Off" | "Skin On" | "N/A";
  };
}

export interface operations {
  GetOverviewScore: {
    responses: {
      /** One fortnights worth of score */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["Score"][];
          };
        };
      };
    };
  };
  GetMeatHygieneAssessmentResult: {
    parameters: {
      path: {
        /** Establishment ID */
        establishmentNum: number;
      };
      query: {
        /** Start date for the report */
        dateStart: string;
        /** End date for the report */
        dateEnd: string;
        /** Performance concern */
        performanceConcern: components["schemas"]["PerformanceConcern"];
        /** Meat Condition */
        meatCondition: components["schemas"]["MeatCondition"];
        /** species to filter on */
        species: components["schemas"]["Species"];
      };
    };
    responses: {
      /** An array of data per day */
      200: {
        content: {
          "application/json": {
            data: components["schemas"]["MeatHygieneAuditDatum"][];
            metadata: components["schemas"]["MeatHygieneAssessmentMetadata"];
          };
        };
      };
    };
  };
  GetMeatHygieneAssessmentFilters: {
    parameters: {
      path: {
        /** Establishment ID */
        establishmentNum: number;
      };
      query: {
        /** Performance concern */
        performanceConcern: components["schemas"]["PerformanceConcern"];
      };
    };
    responses: {
      /** Available filters per species and meat condition */
      200: {
        content: {
          "application/json": {
            data: components["schemas"]["MeatHygieneFilter"][];
          };
        };
      };
    };
  };
}

export interface external {}