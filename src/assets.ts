import iconRock from "../images/icon-rock.svg";
import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import iconLizard from "../images/icon-lizard.svg";
import iconSpock from "../images/icon-spock.svg";
import iconClose from "../images/icon-close.svg";
import logo from "../images/logo.svg";
import logoBonus from "../images/logo-bonus.svg";
import imageRules from "../images/image-rules.svg";
import imageRulesBonus from "../images/image-rules-bonus.svg";
import { Mode, type TMode } from "./util";

export const moveIconUrls: Record<string, string> = {
  rock: iconRock,
  paper: iconPaper,
  scissors: iconScissors,
  lizard: iconLizard,
  spock: iconSpock,
};

export const logoUrls: Record<TMode, string> = {
  [Mode.Basic]: logo,
  [Mode.Advanced]: logoBonus,
};

export const ruleImageUrls: Record<TMode, string> = {
  [Mode.Basic]: imageRules,
  [Mode.Advanced]: imageRulesBonus,
};

export const closeIconUrl = iconClose;
