import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0306.json.html
// IV Chemotherapy Example - Manufactured Product - Adcetris

export const mockMedicationManufactured6: Medication = {
    "resourceType": "Medication",
    "id": "med0306",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0306</p><p><b>contained</b>: </p><p><b>code</b>: Adcetris <span>(Details : {http://hl7.org/fhir/sid/ndc code '51144-050-01' = 'n/a', given as 'Adcetris'})</span></p><p><b>manufacturer</b>: id: org3; name: Seattle Genetics Inc</p><p><b>form</b>: Lyophilized powder for injectable solution (qualifier value)  <span>(Details : {SNOMED CT code '421637006' = 'Lyophilised powder for injectable solution', given as 'Lyophilized powder for injectable solution (qualifier value) '})</span></p><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>12345</td><td>31/10/2019</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org3",
        "name": "Seattle Genetics Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "51144-050-01",
          "display": "Adcetris"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org3"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "421637006",
          "display": "Lyophilized powder for injectable solution (qualifier value) "
        }
      ]
    },
    "batch": {
      "lotNumber": "12345",
      "expirationDate": "2019-10-31"
    }
  }