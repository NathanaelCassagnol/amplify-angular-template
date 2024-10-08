import { Substance } from "../../types/substance.types";

// https://hl7.org/fhir/R4/substance-example-f202-staphylococcus.json.html
// Staphylococcus Example

export const mockSubstance3: Substance = {
    "resourceType": "Substance",
    "id": "f202",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>code</b>: Staphylococcus Aureus <span>(Details : {SNOMED CT code '3092008' = 'Staphylococcus aureus', given as 'Staphylococcus Aureus'})</span></p></div>"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "3092008",
          "display": "Staphylococcus Aureus"
        }
      ]
    }
  }