import { DiagnosticReport } from "../../types/diagnostic-report";

// https://hl7.org/fhir/R4/diagnosticreport-example-papsmear.json.html
// An example of a principally narrative anatomic pathology report

export const mockDiagnosticReport11: DiagnosticReport = {
    "resourceType": "DiagnosticReport",
    "id": "pap",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>Acme Anatomic Pathology Services<br/>2216 Santa Monica Blvd, Suite 114<br/>Santa Monica, CA 90404<br/>===============================================================<br/>GYN CYTOLOGY (PAP SMEAR) REPORT<br/>===============================================================</p>\n\t\t\t<p>Patient: Everywoman, Eve Report Date: 2/14/2013<br/>DOB: 05/31/1973 Age: 30 Sex: F MRN: PATID14567<br/>Patient Address: 2222 Home Street<br/> Huntington Park<br/> CA 90255<br/>Order: ORD40<br/>Physician: Careful, Adam 5742200012 (NPI)<br/>SpecimenID: GHSID40<br/>Collected Date: 2/11/2013<br/>Received Date: 2/12/2013<br/>LMP: 1/28/2013<br/>Specimen Source: Cervical Cytology (ThinPrep)<br/>Previously abnormal Pap? Unknown</p>\n\t\t\t<p>Specimen Adequacy: Satisfactory<br/>Diagnostic Interpretation: Epithelial cell abnormality: Atypical squamous cells<br/>of undetermined significance<br/>Hormonal Evaluations: not possible, due to presence of atypical cells<br/>Recommendations: Appropriate Follow-up. Suggest repeat as clinically indicated<br/>Comments: Abnormal report reviewed by pathologist for confirmation</p>\n\t\t\t<p/>\n\t\t</div>"
    },
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "47527-7"
        }
      ]
    },
    "subject": {
      "reference": "Patient/b248b1b2-1686-4b94-9936-37d7a5f94b51"
    },
    "effectiveDateTime": "2013-02-11T10:33:33+11:00",
    "issued": "2013-02-13T11:45:33+11:00",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ]
  }