import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-bgpanel.json.html
// An example of a simple blood typing panel.

export const mockObservationLab11: Observation = {
    "resourceType": "Observation",
    "id": "bgpanel",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bgpanel</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Blood Group Panel <span>(Details : {LOINC code '34532-2' = 'Blood type and Indirect antibody screen panel - Blood', given as ' Blood type and Indirect antibody screen panel - Blood'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>hasMember</b>: </p><ul><li><a>Observation/bloodgroup</a></li><li><a>Observation/rhstatus</a></li></ul></div>"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "laboratory",
            "display": "Laboratory"
          }
        ],
        "text": "Laboratory"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "34532-2",
          "display": " Blood type and Indirect antibody screen panel - Blood"
        }
      ],
      "text": "Blood Group Panel"
    },
    "subject": {
      "reference": "Patient/infant"
    },
    "effectiveDateTime": "2018-03-11T16:07:54+00:00",
    "hasMember": [
      {
        "reference": "Observation/bloodgroup"
      },
      {
        "reference": "Observation/rhstatus"
      }
    ]
  }