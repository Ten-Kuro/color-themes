// CSS/index.js
import { classic } from "./classic.js";
import { rouge } from "./rouge.js";

export const PALETTES = {
  [classic.id]: classic.colors,
  [rouge.id]: rouge.colors,
};

export const PALETTE_CHOICES = {
  [classic.id]: classic.label,
  [rouge.id]: rouge.label,
};

