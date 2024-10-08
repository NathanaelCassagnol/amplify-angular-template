import { FamilyMemberHistory } from "../../types/family-member-history";

// https://hl7.org/fhir/R4/familymemberhistory-example-mother.json.html
// Mother died from a stroke aged 56. Brother with diabetes.

export const mockFamilyMemberHistory2: FamilyMemberHistory = {
    "resourceType": "FamilyMemberHistory",
    "id": "mother",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Mother died of a stroke aged 56</div>"
    },
    "status": "completed",
    "patient": {
      "reference": "Patient/100",
      "display": "Peter Patient"
    },
    "relationship": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          "code": "MTH",
          "display": "mother"
        }
      ]
    },
    "condition": [
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "371041009",
              "display": "Embolic Stroke"
            }
          ],
          "text": "Stroke"
        },
        "onsetAge": {
          "value": 56,
          "unit": "yr",
          "system": "http://unitsofmeasure.org",
          "code": "a"
        }
      }
    ]
  }