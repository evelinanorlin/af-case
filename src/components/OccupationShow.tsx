import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiIconArrowBack } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { SalaryStatistics } from "./SalaryStatistics";
import { OccupationAbout } from "./OccupationAbout";
import { OccupationCompetences } from "./OccupationCompetences";
import { OccupationForecast } from "./OccupationForecast";
import { IDeficiencyValue } from "./Occupation";

interface IOccupationShowProps {
  occupationFound?: IOccupation;
  findIndexText: string;
  valuesAsArray: number[];
  keysAsArray: number[];
  handleReturnButton: () => void;
  deficiencyValue2023: IDeficiencyValue | undefined;
  deficiencyValue2026: IDeficiencyValue | undefined;
  result2023: { value: string; text: string };
  result2026: { value: string; text: string };
}

export const OccupationShow = ({
  occupationFound,
  findIndexText,
  valuesAsArray,
  keysAsArray,
  handleReturnButton,
  result2023,
  result2026,
}: IOccupationShowProps) => {
  return (
    <>
      {occupationFound ? (
        <div>
          <h2>{occupationFound.occupation_label}</h2>
          <p>
            <span style={{ fontWeight: "italic" }}>
              {occupationFound.occupation_group.occupation_group_label}
            </span>{" "}
            (SSYK: {occupationFound.occupation_group.ssyk})
          </p>
        </div>
      ) : (
        <p>Inget yrke hittades</p>
      )}
      <br></br>
      <OccupationAbout findIndexText={findIndexText}></OccupationAbout>
      <OccupationCompetences></OccupationCompetences>
      <OccupationForecast
        result2023={result2023}
        result2026={result2026}
      ></OccupationForecast>
      <SalaryStatistics
        keysAsArray={keysAsArray}
        valuesAsArray={valuesAsArray}
      ></SalaryStatistics>
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.FUNCTION}
        afFullWidth={false}
        onAfOnClick={handleReturnButton}
      >
        <DigiIconArrowBack slot="icon" />
        Tillbaka till Sökresultat
      </DigiButton>
    </>
  );
};
