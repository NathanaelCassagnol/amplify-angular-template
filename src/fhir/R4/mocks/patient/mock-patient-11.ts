import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-dicom.json.html
// Taken from a DICOM sample

export const mockPatient11: Patient = {
    "resourceType": "Patient",
    "id": "dicom",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> Patient MINT_TEST, ID = MINT1234. Age = 56y, Size =\n      1.83m, Weight = 72.58kg </div>"
    },
    "extension": [
      {
        "url": "http://nema.org/fhir/extensions#0010:1010",
        "valueQuantity": {
          "value": 56,
          "unit": "Y"
        }
      },
      {
        "url": "http://nema.org/fhir/extensions#0010:1020",
        "valueQuantity": {
          "value": 1.83,
          "unit": "m"
        }
      },
      {
        "url": "http://nema.org/fhir/extensions#0010:1030",
        "valueQuantity": {
          "value": 72.58,
          "unit": "kg"
        }
      }
    ],
    "identifier": [
      {
        "system": "http://nema.org/examples/patients",
        "value": "MINT1234"
      }
    ],
    "active": true,
    "name": [
      {
        "family": "MINT_TEST"
      }
    ],
    "gender": "male",
    "_gender": {
      "extension": [
        {
          "url": "http://nema.org/examples/extensions#gender",
          "valueCoding": {
            "system": "http://nema.org/examples/gender",
            "code": "M"
          }
        }
      ]
    },
    "managingOrganization": {
      "reference": "Organization/1"
    }
  }