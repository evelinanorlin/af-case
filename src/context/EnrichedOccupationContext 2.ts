import { createContext } from "react";
import { IOccupation } from "../models/IOccupation";

interface IAction {
  type: string;
  payload: IOccupation[];
}

export const EnrichedOccupationContext = createContext<{
  stateEnrichedOccupation: IOccupation[];
  dispatchEnrichedOccupation: React.Dispatch<IAction>;
}>([]);
