export const Mode = {
  Basic: "BASIC",
  Advanced: "ADVANCED",
};

export type TMode = (typeof Mode)[keyof typeof Mode];
