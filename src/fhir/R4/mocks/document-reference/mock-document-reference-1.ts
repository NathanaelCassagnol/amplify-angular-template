import { Bundle } from "fhir/R4/types/bundle.types";
import { DocumentReference } from "fhir/R4/types/document-reference";

// https://hl7.org/fhir/R4/xds-example.json.html
// XDS example

export const mockDocumentReference1Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "xds",
    "meta": {
      "lastUpdated": "2013-07-01T13:11:33Z"
    },
    "type": "transaction",
    "entry": [
      {
        "fullUrl": "urn:uuid:3fdc72f4-a11d-4a9d-9260-a9f745779e1d",
        "resource": {
          "resourceType": "DocumentReference",
          "meta": {
            "lastUpdated": "2013-07-01T13:11:33Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n\t\t\t\t\t\t<a href=\"http://localhost:9556/svc/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32\">Document: urn:oid:129.6.58.92.88336</a>undefined, created 24/12/2005\n\t\t\t\t\t</div>"
          },
          "masterIdentifier": {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:oid:129.6.58.92.88336"
          },
          "status": "current",
          "type": {
            "coding": [
              {
                "system": "http://ihe.net/connectathon/classCodes",
                "code": "History and Physical",
                "display": "History and Physical"
              }
            ]
          },
          "category": [
            {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "47039-3",
                  "display": "Inpatient Admission history and physical note"
                }
              ]
            }
          ],
          "subject": {
            "reference": "Patient/a2"
          },
          "date": "2013-07-01T23:11:33+10:00",
          "author": [
            {
              "reference": "Practitioner/a3"
            },
            {
              "reference": "Practitioner/a4"
            }
          ],
          "description": "Physical",
          "securityLabel": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
                  "code": "N",
                  "display": "normal"
                }
              ]
            }
          ],
          "content": [
            {
              "attachment": {
                "contentType": "text/plain",
                "language": "en-US",
                "url": "http://localhost:9556/svc/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32",
                "title": "Physical",
                "creation": "2005-12-24"
              },
              "format": {
                "system": "urn:oid:1.3.6.1.4.1.19376.1.2.3",
                "code": "urn:ihe:pcc:handp:2008"
              }
            }
          ],
          "context": {
            "period": {
              "start": "2004-12-23T08:00:00+10:00",
              "end": "2004-12-23T08:01:00+10:00"
            },
            "practiceSetting": {
              "coding": [
                {
                  "system": "http://ihe.net/connectathon/practiceSettingCodes",
                  "code": "General Medicine",
                  "display": "General Medicine"
                }
              ]
            }
          }
        },
        "request": {
          "method": "POST",
          "url": "DocumentReference"
        }
      },
      {
        "fullUrl": "http://localhost:9556/svc/fhir/Patient/a2",
        "resource": {
          "resourceType": "Patient",
          "id": "a2",
          "meta": {
            "lastUpdated": "2013-07-01T13:11:33Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Person DOE, John, M, dob: 27/05/1956</div>"
          },
          "identifier": [
            {
              "use": "usual",
              "value": "MRN"
            }
          ],
          "name": [
            {
              "use": "usual",
              "text": "DOE, John",
              "family": "Doe",
              "given": [
                "John"
              ]
            }
          ],
          "birthDate": "1956-05-27"
        },
        "request": {
          "method": "POST",
          "url": "Patient",
          "ifNoneExist": "Patient?identifier=http://acme.org/xds/patients!89765a87b"
        }
      },
      {
        "fullUrl": "http://localhost:9556/svc/fhir/Practitioner/a3",
        "resource": {
          "resourceType": "Practitioner",
          "id": "a3",
          "meta": {
            "lastUpdated": "2013-07-01T13:11:33Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Author Gerald Smitty @ Cleveland Clinic</div>"
          },
          "name": [
            {
              "use": "usual",
              "family": "Smitty",
              "given": [
                "Gerald"
              ]
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Practitioner"
        }
      },
      {
        "fullUrl": "http://localhost:9556/svc/fhir/Practitioner/a4",
        "resource": {
          "resourceType": "Practitioner",
          "id": "a4",
          "meta": {
            "lastUpdated": "2013-07-01T13:11:33Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Author Person @ Cleveland Clinic</div>"
          },
          "name": [
            {
              "use": "usual",
              "family": "Dopplemeyer",
              "given": [
                "Sherry"
              ]
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Practitioner"
        }
      },
      {
        "fullUrl": "http://localhost:9556/svc/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32",
        "resource": {
          "resourceType": "Binary",
          "id": "1e404af3-077f-4bee-b7a6-a9be97e1ce32",
          "meta": {
            "lastUpdated": "2013-07-01T13:11:33Z"
          },
          "contentType": "text/plain",
          "data": "YXNkYXNkYXNkYXNkYXNk"
        },
        "request": {
          "method": "POST",
          "url": "Binary"
        }
      }
    ]
  }