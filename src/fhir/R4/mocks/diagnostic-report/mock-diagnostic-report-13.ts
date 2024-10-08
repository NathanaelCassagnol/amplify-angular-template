import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/diagnosticreport-example-lipids.json.html
// Lipid profile

export const mockDiagnosticReport13Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "lipids",
    "type": "collection",
    "entry": [
      {
        "fullUrl": "https://example.com/base/DiagnosticReport/lipids",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "lipids",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<h3>Lipid Report for Wile. E. COYOTE (MRN: 23453) issued 3-Mar 2009 14:26</h3>\n\t\t\t\t\t\t<pre>\nTest                  Units       Value       Reference Range\nCholesterol           mmol/L      6.3         &lt;4.5\nTriglyceride          mmol/L      1.3         &lt;2.0\nHDL Cholesterol       mmol/L      1.3         &gt;1.5\nLDL Chol. (calc)      mmol/L      4.2         &lt;3.0\n      </pre>\n\t\t\t\t\t\t<p>Acme Laboratory, Inc signed: Dr Pete Pathologist</p>\n\t\t\t\t\t</div>"
          },
          "identifier": [
            {
              "system": "http://acme.com/lab/reports",
              "value": "5234342"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "HM"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "24331-1",
                "display": "Lipid 1996 panel - Serum or Plasma"
              }
            ],
            "text": "Lipid Panel"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2011-03-04T08:30:00+11:00",
          "issued": "2013-01-27T11:45:33+11:00",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "result": [
            {
              "id": "1",
              "reference": "Observation/cholesterol"
            },
            {
              "id": "2",
              "reference": "Observation/triglyceride"
            },
            {
              "id": "3",
              "reference": "Observation/hdlcholesterol"
            },
            {
              "id": "4",
              "reference": "Observation/ldlcholesterol"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/cholesterol",
        "resource": {
          "resourceType": "Observation",
          "id": "cholesterol",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: cholesterol</p><p><b>status</b>: final</p><p><b>code</b>: Cholesterol <span>(Details : {LOINC code '35200-5' = 'Cholesterol [Mass or Moles/volume] in Serum or Plasma', given as 'Cholesterol [Moles/​volume] in Serum or Plasma'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 6.3 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>4.5 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "35200-5",
                "display": "Cholesterol [Moles/​volume] in Serum or Plasma"
              }
            ],
            "text": "Cholesterol"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 6.3,
            "unit": "mmol/L",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
          },
          "referenceRange": [
            {
              "high": {
                "value": 4.5,
                "unit": "mmol/L",
                "system": "http://unitsofmeasure.org",
                "code": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/triglyceride",
        "resource": {
          "resourceType": "Observation",
          "id": "triglyceride",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: triglyceride</p><p><b>status</b>: final</p><p><b>code</b>: Triglyceride <span>(Details : {LOINC code '35217-9' = 'Triglyceride [Mass or Moles/volume] in Serum or Plasma', given as 'Triglyceride [Moles/​volume] in Serum or Plasma'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 1.3 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>2.0 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "35217-9",
                "display": "Triglyceride [Moles/​volume] in Serum or Plasma"
              }
            ],
            "text": "Triglyceride"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 1.3,
            "unit": "mmol/L",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
          },
          "referenceRange": [
            {
              "high": {
                "value": 2.0,
                "unit": "mmol/L",
                "system": "http://unitsofmeasure.org",
                "code": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/hdlcholesterol",
        "resource": {
          "resourceType": "Observation",
          "id": "hdlcholesterol",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: hdlcholesterol</p><p><b>status</b>: final</p><p><b>code</b>: Cholesterol in HDL <span>(Details : {LOINC code '2085-9' = 'Cholesterol in HDL [Mass/volume] in Serum or Plasma', given as 'HDL Cholesterol'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 1.3 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td></tr><tr><td>*</td><td>1.5 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2085-9",
                "display": "HDL Cholesterol"
              }
            ],
            "text": "Cholesterol in HDL"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 1.3,
            "unit": "mmol/L",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 1.5,
                "unit": "mmol/L",
                "system": "http://unitsofmeasure.org",
                "code": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/ldlcholesterol",
        "resource": {
          "resourceType": "Observation",
          "id": "ldlcholesterol",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ldlcholesterol</p><p><b>status</b>: final</p><p><b>code</b>: LDL Chol. (Calc) <span>(Details : {LOINC code '13457-7' = 'Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation', given as 'Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 4.6 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>3.0 mmol/L<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "13457-7",
                "display": "Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation"
              }
            ],
            "text": "LDL Chol. (Calc)"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 4.6,
            "unit": "mmol/L",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
          },
          "referenceRange": [
            {
              "high": {
                "value": 3.0,
                "unit": "mmol/L",
                "system": "http://unitsofmeasure.org",
                "code": "mmol/L"
              }
            }
          ]
        }
      }
    ]
  }