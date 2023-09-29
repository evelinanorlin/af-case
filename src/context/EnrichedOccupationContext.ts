import { createContext } from "react";
import { IOccupation } from "../models/IOccupation";
import { IAction } from "../reducers/SSYKoccupationdescriptionReducer";

export const EnrichedOccupationContext = createContext<{

  stateEnrichedOccupation: IOccupation[];

  dispatchEnrichedOccupation: React.Dispatch<IAction>;

}>({

  stateEnrichedOccupation: [],

  dispatchEnrichedOccupation: function (): void {

    throw new Error("Function not implemented.");

  }

});
