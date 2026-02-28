// CSS/index.js
import { classic } from "./classic.js";
import { rouge } from "./rouge.js";
import { rose } from "./rose.js";
import { jaune } from "./jaune.js";

export const PALETTES = {
  [classic.id]: classic.colors,
  [rouge.id]: rouge.colors,
  [rose.id]: rose.colors,
  [jaune.id]: jaune.colors,
};

export const PALETTE_CHOICES = {
  [classic.id]: classic.label,
  [rouge.id]: rouge.label,
  [rose.id]: rose.label,
  [jaune.id]: jaune.label,
};

