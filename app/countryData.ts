export type Country = {
    name: string;
    population: string;
    capital: string;
  };
  
  export const countries: Record<string, Country> = {
    pakistan: {
      name: "Pakistan",
      population: "231.4 million",
      capital: "Islamabad",
    },
    saudiArabia: {
      name: "Saudi Arabia",
      population: "36 million",
      capital: "Riyadh",
    },
    switzerland: {
      name: "Switzerland",
      population: "8.7 million",
      capital: "Bern",
    },
    newZealand: {
      name: "New Zealand",
      population: "5.1 million",
      capital: "Wellington",
    },
    qatar: {
      name: "Qatar",
      population: "2.9 million",
      capital: "Doha",
    },
  };
  