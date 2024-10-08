import { DiagnosticReport } from "../../types/diagnostic-report";

// https://hl7.org/fhir/R4/diagnosticreport-example-pgx.json.html
// An example of a PGx haplotype report

export const mockDiagnosticReport16: DiagnosticReport = {
    "resourceType": "DiagnosticReport",
    "id": "example-pgx",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-pgx</p><p><b>basedOn</b>: <a>ServiceRequest/example-pgx</a></p><p><b>status</b>: final</p><p><b>code</b>: Pharmacogenetics Report <span>(Details : {https://system/PGxReport code 'PGxReport' = 'PGxReport', given as 'Pharmacogenetics Report'})</span></p><p><b>subject</b>: <a>Bob Smith</a></p><p><b>effective</b>: 15/10/2016 12:34:56 PM</p><p><b>issued</b>: 20/10/2016 2:00:05 PM</p><p><b>performer</b>: <a>Organization/4829</a></p><p><b>result</b>: <a>Observation/example-phenotype</a></p><p><b>presentedForm</b>: </p></div>"
    },
    "basedOn": [
      {
        "reference": "ServiceRequest/example-pgx"
      }
    ],
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "https://system/PGxReport",
          "code": "PGxReport",
          "display": "Pharmacogenetics Report"
        }
      ],
      "text": "Pharmacogenetics Report"
    },
    "subject": {
      "reference": "Patient/899962",
      "display": "Bob Smith"
    },
    "effectiveDateTime": "2016-10-15T12:34:56+11:00",
    "issued": "2016-10-20T14:00:05+11:00",
    "performer": [
      {
        "reference": "Organization/4829"
      }
    ],
    "result": [
      {
        "reference": "Observation/example-phenotype"
      }
    ],
    "presentedForm": [
      {
        "contentType": "application/pdf",
        "language": "en",
        "data": "cGRmSW5CYXNlNjRCaW5hcnk=",
        "hash": "571ef9c5655840f324e679072ed62b1b95eef8a0",
        "title": "Pharmacogenetics Report",
        "creation": "2016-10-20T20:00:00+11:00"
      }
    ]
  }