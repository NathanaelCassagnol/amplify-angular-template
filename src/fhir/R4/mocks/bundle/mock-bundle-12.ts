import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/bundle-references.json.html
// An example bundle that demonstrates various reference resolution paths

export const mockBundle12: Bundle = {
    "resourceType": "Bundle",
    "id": "bundle-references",
    "type": "collection",
    "entry": [
      {
        "fullUrl": "http://example.org/fhir/Patient/23",
        "resource": {
          "resourceType": "Patient",
          "id": "23",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 23</p><p><b>identifier</b>: 1234567</p></div>"
          },
          "identifier": [
            {
              "system": "http://example.org/ids",
              "value": "1234567"
            }
          ]
        }
      },
      {
        "fullUrl": "urn:uuid:04121321-4af5-424c-a0e1-ed3aab1c349d",
        "resource": {
          "resourceType": "Patient",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p></div>"
          }
        }
      },
      {
        "fullUrl": "http://example.org/fhir/Observation/123",
        "resource": {
          "resourceType": "Observation",
          "id": "123",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 123</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>Patient/23</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "15074-8",
                "display": "Glucose [Moles/volume] in Blood"
              }
            ]
          },
          "subject": {
            "reference": "Patient/23"
          }
        }
      },
      {
        "fullUrl": "http://example.org/fhir/Observation/124",
        "resource": {
          "resourceType": "Observation",
          "id": "124",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 124</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>http://example.org/fhir/Patient/23</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "15074-8",
                "display": "Glucose [Moles/volume] in Blood"
              }
            ]
          },
          "subject": {
            "reference": "http://example.org/fhir/Patient/23"
          }
        }
      },
      {
        "fullUrl": "http://example.org/fhir/Observation/12",
        "resource": {
          "resourceType": "Observation",
          "id": "12",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 12</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>urn:uuid:04121321-4af5-424c-a0e1-ed3aab1c349d</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "15074-8",
                "display": "Glucose [Moles/volume] in Blood"
              }
            ]
          },
          "subject": {
            "reference": "urn:uuid:04121321-4af5-424c-a0e1-ed3aab1c349d"
          }
        }
      },
      {
        "fullUrl": "http://example.org/fhir/Observation/14",
        "resource": {
          "resourceType": "Observation",
          "id": "14",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 14</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>http://example.org/fhir-2/Patient/1</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "15074-8",
                "display": "Glucose [Moles/volume] in Blood"
              }
            ]
          },
          "subject": {
            "reference": "http://example.org/fhir-2/Patient/1"
          }
        }
      },
      {
        "fullUrl": "http://example.org/fhir-2/Observation/14",
        "resource": {
          "resourceType": "Observation",
          "id": "14",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 14</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>Patient/23</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "15074-8",
                "display": "Glucose [Moles/volume] in Blood"
              }
            ]
          },
          "subject": {
            "reference": "Patient/23"
          }
        }
      },
      {
        "fullUrl": "http://example.org/fhir/Patient/45",
        "resource": {
          "resourceType": "Patient",
          "id": "45",
          "meta": {
            "versionId": "1"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 45</p><p><b>meta</b>: </p><p><b>name</b>: Name 1</p></div>"
          },
          "name": [
            {
              "text": "Name 1"
            }
          ]
        }
      },
      {
        "fullUrl": "http://example.org/fhir/Patient/45",
        "resource": {
          "resourceType": "Patient",
          "id": "45",
          "meta": {
            "versionId": "2"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 45</p><p><b>meta</b>: </p><p><b>name</b>: Name 2</p></div>"
          },
          "name": [
            {
              "text": "Name 2"
            }
          ]
        }
      },
      {
        "fullUrl": "http://example.org/fhir/Observation/47",
        "resource": {
          "resourceType": "Observation",
          "id": "47",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 47</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>Patient/45/_history/2</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "15074-8",
                "display": "Glucose [Moles/volume] in Blood"
              }
            ]
          },
          "subject": {
            "reference": "Patient/45/_history/2"
          }
        }
      },
      {
        "fullUrl": "http://example.org/fhir/Observation/48",
        "resource": {
          "resourceType": "Observation",
          "id": "48",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 48</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: </p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "15074-8",
                "display": "Glucose [Moles/volume] in Blood"
              }
            ]
          },
          "subject": {
            "identifier": {
              "system": "http://example.org/ids",
              "value": "1234567"
            }
          }
        }
      }
    ]
  }