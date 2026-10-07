export const serviceColors = {
  fulfillment: {
    accent: "#70C48F",
    soft: "rgba(112, 196, 143, 0.16)",
  },
  flexship: {
    accent: "#4DA3FF",
    soft: "rgba(77, 163, 255, 0.16)",
  },
  flexborders: {
    accent: "#F0783C",
    soft: "rgba(240, 120, 60, 0.16)",
  },
  flexshops: {
    accent: "#E8C468",
    soft: "rgba(232, 196, 104, 0.16)",
  },
  flexmart: {
    accent: "#7DD3C0",
    soft: "rgba(125, 211, 192, 0.16)",
  },
  flexcash: {
    accent: "#9BC4B0",
    soft: "rgba(155, 196, 176, 0.16)",
  },
} as const;

export type ServiceColorKey = keyof typeof serviceColors;
