import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-glasgow.json.html
// Clinical assessment tool example - GCS with individual score as components

export const mockObservationAssessment1: Observation = {
    "resourceType": "Observation",
    "id": "glasgow",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: glasgow</p><p><b>status</b>: final</p><p><b>code</b>: Glasgow Coma Scale , (GCS) <span>(Details : {LOINC code '9269-2' = 'Glasgow coma score total', given as 'Glasgow coma score total'})</span></p><p><b>subject</b>: <a>Peter James Chalmers</a></p><p><b>effective</b>: 11/12/2014 4:44:16 AM</p><p><b>value</b>: 13 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>referenceRange</b></p><p><b>high</b>: 8 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Severe TBI <span>(Details )</span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 9 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>high</b>: 12 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Moderate TBI <span>(Details )</span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 13 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Mild TBI <span>(Details )</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: GCS Motor <span>(Details : {LOINC code '9268-4' = 'Glasgow coma score motor', given as 'Glasgow coma score motor'})</span></p><p><b>value</b>: 5 (Localizes painful stimuli) <span>(Details : {http://acme.ec/codes code '5' = '5', given as 'Localizes painful stimuli'}; {LOINC code 'LA6566-9' = 'Localizing pain', given as 'Localizing pain'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: GSC Verbal <span>(Details : {LOINC code '9270-0' = 'Glasgow coma score verbal', given as 'Glasgow coma score verbal'})</span></p><p><b>value</b>: 4 (Confused, disoriented) <span>(Details : {http://acme.ec/codes code '4' = '4', given as 'Confused, disoriented'}; {LOINC code 'LA6560-2' = 'Confused', given as 'Confused'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Eyes <span>(Details : {LOINC code '9267-6' = 'Glasgow coma score eye opening', given as 'Glasgow coma score eye opening'})</span></p><p><b>value</b>: 4 (Opens eyes spontaneously) <span>(Details : {http://acme.ec/codes code '4' = '4', given as 'Opens eyes spontaneously'}; {LOINC code 'LA6556-0' = 'Eyes open spontaneously', given as 'Eyes open spontaneously'})</span></p></blockquote></div>"
    },
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "9269-2",
          "display": "Glasgow coma score total"
        }
      ],
      "text": "Glasgow Coma Scale , (GCS)"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "effectiveDateTime": "2014-12-11T04:44:16Z",
    "valueQuantity": {
      "value": 13,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "referenceRange": [
      {
        "high": {
          "value": 8,
          "system": "http://unitsofmeasure.org",
          "code": "{score}"
        },
        "type": {
          "text": "Severe TBI"
        }
      },
      {
        "low": {
          "value": 9,
          "system": "http://unitsofmeasure.org",
          "code": "{score}"
        },
        "high": {
          "value": 12,
          "system": "http://unitsofmeasure.org",
          "code": "{score}"
        },
        "type": {
          "text": "Moderate TBI"
        }
      },
      {
        "low": {
          "value": 13,
          "system": "http://unitsofmeasure.org",
          "code": "{score}"
        },
        "type": {
          "text": "Mild TBI"
        }
      }
    ],
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "9268-4",
              "display": "Glasgow coma score motor"
            }
          ],
          "text": "GCS Motor"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://acme.ec/codes",
              "code": "5",
              "display": "Localizes painful stimuli"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 5
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6566-9",
              "display": "Localizing pain"
            }
          ],
          "text": "5 (Localizes painful stimuli)"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "9270-0",
              "display": "Glasgow coma score verbal"
            }
          ],
          "text": "GSC Verbal"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://acme.ec/codes",
              "code": "4",
              "display": "Confused, disoriented"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 4
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6560-2",
              "display": "Confused"
            }
          ],
          "text": "4 (Confused, disoriented)"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "9267-6",
              "display": "Glasgow coma score eye opening"
            }
          ],
          "text": "Eyes"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://acme.ec/codes",
              "code": "4",
              "display": "Opens eyes spontaneously"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 4
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6556-0",
              "display": "Eyes open spontaneously"
            }
          ],
          "text": "4 (Opens eyes spontaneously)"
        }
      }
    ]
  }