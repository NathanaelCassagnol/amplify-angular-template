import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/diagnosticreport-genetics-example-2-familyhistory.json.html
// An example of a genetics test report with Family member history

export const mockDiagnosticReport14Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "dg2",
    "type": "collection",
    "entry": [
      {
        "fullUrl": "https://example.com/base/DiagnosticReport/dg2",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "dg2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<h3>Genetic test Report for Marry Chalmers (MRN: 12345) </h3>\n\t\t\t\t\t\t<pre>\n              Gene                DNAVariation       Status        Interpretation\n              BRCA1                                 Negative\n              BRCA2                 185delAG        Positive         Pathogenic\n          </pre>\n\t\t\t\t\t\t<p> Method: BRACAnalysis CDx Offered by Myriad Genetic Laboratories, Inc </p>\n\t\t\t\t\t\t<p> Issued: 2015-05-26T15:30:10+01:00</p>\n\t\t\t\t\t\t<p> FamilyMemeberHistory: Mother </p>\n\t\t\t\t\t\t<pre>\n              Gene                 DNAVariation      Status\n              BRCA2                 185delAG        Positive\n          </pre>\n\t\t\t\t\t\t<p> Method: BRACAnalysis CDx Offered by Myriad Genetic Laboratories, Inc </p>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/DiagnosticReport-geneticsFamilyMemberHistory",
              "valueReference": {
                "reference": "FamilyMemberHistory/f1-genetics"
              }
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "15220000",
                  "display": "Laboratory test"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "LAB"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "55233-1",
                "display": "Genetic analysis master panel"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example",
            "display": "Peter James Chalmers(MRN: 12345)"
          },
          "effectiveDateTime": "2015-05-26T15:30:10+01:00",
          "issued": "2014-05-16T10:28:00+01:00",
          "performer": [
            {
              "reference": "Practitioner/genetics-example2",
              "display": "Molecular Diagnostic Laboratory"
            }
          ],
          "specimen": [
            {
              "reference": "Specimen/genetics-example2",
              "display": "Molecular Specimen ID: MLD45-Z4-1234"
            }
          ],
          "result": [
            {
              "reference": "Observation/ob-genetics-3-1",
              "display": "Genetic analysis for BRAC -1"
            },
            {
              "reference": "Observation/ob-genetics-3-2",
              "display": "Genetic analysis for BRAC -2"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/FamilyMemberHistory/f1-genetics",
        "resource": {
          "resourceType": "FamilyMemberHistory",
          "id": "f1-genetics",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f1-genetics</p><p><b>status</b>: completed</p><p><b>patient</b>: <a>Patient/example</a></p><p><b>relationship</b>: Mother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother', given as 'Mother'})</span></p></div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-observation",
              "valueReference": {
                "reference": "Observation/dgf1"
              }
            }
          ],
          "status": "completed",
          "patient": {
            "reference": "Patient/example"
          },
          "relationship": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                "code": "MTH",
                "display": "Mother"
              }
            ]
          }
        }
      }
    ]
  }