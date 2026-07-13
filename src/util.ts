export const Mode = {
  Basic: "BASIC",
  Advanced: "ADVANCED",
};

export type TMode = (typeof Mode)[keyof typeof Mode];

export type TMove = {
  name: string;
  beats: number[];
  index: number;
};
