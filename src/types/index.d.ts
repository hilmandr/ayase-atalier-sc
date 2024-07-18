import { IconType } from "react-icons";
import * as icon from "react-icons/si";

export interface IMenu {
  label: string;
  path: string;
}

export interface IMenuDashboard {
  label: string;
  path: string;
  icon: IconType | Icon;
  // active: string;
}
