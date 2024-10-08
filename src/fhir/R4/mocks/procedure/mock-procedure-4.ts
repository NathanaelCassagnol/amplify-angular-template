import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-f001-heart.json.html
// Real-world procedure example

export const mockProcedure4: Procedure = {
    "resourceType": "Procedure",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>status</b>: completed</p><p><b>code</b>: Heart valve replacement <span>(Details : {SNOMED CT code '34068001' = 'Heart valve replacement', given as 'Heart valve replacement'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f001</a></p><p><b>performed</b>: 26/06/2011 --&gt; 27/06/2011</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>P. Voigt</a></td></tr></table><p><b>reasonCode</b>: Heart valve disorder <span>(Details )</span></p><p><b>bodySite</b>: Heart valve structure <span>(Details : {SNOMED CT code '17401000' = 'Cardiac valve', given as 'Heart valve structure'})</span></p><p><b>outcome</b>: improved blood circulation <span>(Details )</span></p><p><b>report</b>: <a>Lab results blood test</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>"
    },
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "34068001",
          "display": "Heart valve replacement"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f001"
    },
    "performedPeriod": {
      "start": "2011-06-26",
      "end": "2011-06-27"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        },
        "actor": {
          "reference": "Practitioner/f002",
          "display": "P. Voigt"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "Heart valve disorder"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "17401000",
            "display": "Heart valve structure"
          }
        ]
      }
    ],
    "outcome": {
      "text": "improved blood circulation"
    },
    "report": [
      {
        "reference": "DiagnosticReport/f001",
        "display": "Lab results blood test"
      }
    ],
    "followUp": [
      {
        "text": "described in care plan"
      }
    ]
  }