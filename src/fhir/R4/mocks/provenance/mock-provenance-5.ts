import { Provenance } from "fhir/R4/types/provenance";

// https://hl7.org/fhir/R4/provenance-example-cwl.json.html
// Provenance example for cwl workflow project

export const mockProvenance5: Provenance = {
    "resourceType": "Provenance",
    "id": "example-cwl",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b>Generated Narrative with Details</b>\n\t\t\t</p><p>\n\t\t\t\t<b>id</b>: cwl-example</p><p>\n\t\t\t\t<b>target</b>: <a href=\"http://build.fhir.org/sequence-example-pgx-1.html\">MolecularSequence/example-pgx-1</a>\n\t\t\t</p><p>\n\t\t\t\t<b>period</b>: Nov 30, 2016 --&gt; (ongoing)</p><p>\n\t\t\t\t<b>recorded</b>: Dec 1, 2016 8:12:14 AM</p><p>\n\t\t\t\t<b>reason</b>: profiling Short Tandem Repeats (STRs) from high throughput sequencing data. (Details:\n         [not stated] code null = 'null', stated as 'profiling Short Tandem Repeats (STRs) from\n         high throughput sequencing data.')</p>\n\t\t\t<h3>Agents</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Role</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Who</b>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>*</td>\n\t\t\t\t\t<td>Author (Details: http://hl7.org/fhir/provenance-participant-role code author = 'Author',\n             stated as 'null')</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"http://build.fhir.org/patient-example.html\">Patient/example</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<h3>Entities</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Role</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Reference</b>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>*</td>\n\t\t\t\t\t<td>source</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"https://github.com/common-workflow-language/workflows/blob/master/workflows/lobSTR/lobSTR-workflow.cwl\">CWL example</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>"
    },
    "target": [
      {
        "reference": "MolecularSequence/example-pgx-1"
      }
    ],
    "occurredPeriod": {
      "start": "2016-11-30"
    },
    "recorded": "2016-12-01T08:12:14+10:00",
    "reason": [
      {
        "text": "profiling Short Tandem Repeats (STRs) from high throughput sequencing data."
      }
    ],
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "AUT"
            }
          ]
        },
        "who": {
          "reference": "Patient/example"
        }
      }
    ],
    "entity": [
      {
        "role": "source",
        "what": {
          "identifier": {
            "type": {
              "coding": [
                {
                  "system": "https://github.com/common-workflow-language/workflows",
                  "code": "CWL",
                  "display": "lobSTR"
                }
              ]
            },
            "value": "https://github.com/common-workflow-language/workflows/blob/master/workflows/lobSTR/lobSTR-workflow.cwl"
          }
        }
      }
    ]
  }