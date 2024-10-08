import { Provenance } from "fhir/R4/types/provenance";

// https://hl7.org/fhir/R4/provenance-example-biocompute-object.json.html
// Provenance example for Biocompute objects

export const mockProvenance4: Provenance = {
    "resourceType": "Provenance",
    "id": "example-biocompute-object",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b>Generated Narrative with Details</b>\n\t\t\t</p><p>\n\t\t\t\t<b>id</b>: example-biocompute-object</p><p>\n\t\t\t\t<b>target</b>: <a href=\"http://build.fhir.org/sequence-example.html\">MolecularSequence/example</a>\n\t\t\t</p><p>\n\t\t\t\t<b>period</b>: 2017-6-6 --&gt; (ongoing)</p><p>\n\t\t\t\t<b>recorded</b>: 2016-6-9 8:12:14</p><p>\n\t\t\t\t<b>reason</b>: antiviral resistance detection (Details: [not stated] code null = 'null', stated as\n         'antiviral resistance detection')</p>\n\t\t\t<h3>Agents</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Role</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Who</b>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>*</td>\n\t\t\t\t\t<td>Author (Details: http://hl7.org/fhir/provenance-participant-role code author = 'Author',\n             stated as 'null')</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"http://build.fhir.org/practitioner-example.html\">Practitioner/example</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<h3>Entities</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Role</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Reference</b>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>*</td>\n\t\t\t\t\t<td>source</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"https://hive.biochemistry.gwu.edu/cgi-bin/prd/htscsrs/servlet.cgi?pageid=bcoexample_1\">Biocompute example</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>"
    },
    "target": [
      {
        "reference": "MolecularSequence/example"
      }
    ],
    "occurredPeriod": {
      "start": "2017-06-06"
    },
    "recorded": "2016-06-09T08:12:14+10:00",
    "reason": [
      {
        "text": "antiviral resistance detection"
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
          "reference": "Practitioner/example"
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
                  "system": "https://hive.biochemistry.gwu.edu",
                  "code": "biocompute",
                  "display": "obj.1001"
                }
              ]
            },
            "value": "https://hive.biochemistry.gwu.edu/cgi-bin/prd/htscsrs/servlet.cgi?pageid=bcoexample_1"
          }
        }
      }
    ]
  }