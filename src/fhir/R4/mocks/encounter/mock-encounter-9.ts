import { Encounter } from "../../types/encounter";

// https://hl7.org/fhir/R4/encounter-example-xcda.json.html
// for Clinical Document example patient

export const mockEncounter9: Encounter = {
    "resourceType": "Encounter",
    "id": "xcda",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: xcda</p><p><b>identifier</b>: 1234213.52345873 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>subject</b>: <a>Patient/xcda</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>Practitioner/xcda1</a></td></tr></table><p><b>reasonCode</b>: Arm <span>(Details : {http://ihe.net/xds/connectathon/eventCodes code 'T-D8200' = 'T-D8200', given as 'Arm'})</span></p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://healthcare.example.org/identifiers/enocunter",
        "value": "1234213.52345873"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "AMB",
      "display": "ambulatory"
    },
    "subject": {
      "reference": "Patient/xcda"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/xcda1"
        }
      }
    ],
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://ihe.net/xds/connectathon/eventCodes",
            "code": "T-D8200",
            "display": "Arm"
          }
        ]
      }
    ]
  }