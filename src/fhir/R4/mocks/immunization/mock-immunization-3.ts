import { Immunization } from "fhir/R4/types/immunization";

// https://hl7.org/fhir/R4/immunization-example-historical.json.html
// Example of a Historical Example

export const mockImmunization3: Immunization = {
    "resourceType": "Immunization",
    "id": "historical",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: historical</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: completed</p><p><b>vaccineCode</b>: Influenza <span>(Details : {urn:oid:1.2.36.1.2001.1005.17 code 'GNFLU' = 'Influenza)</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>occurrence</b>: January 2012</p><p><b>primarySource</b>: false</p><p><b>reportOrigin</b>: Written Record <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-origin code 'record' = 'Written Record)</span></p><p><b>location</b>: <a>Location/1</a></p><p><b>note</b>: Notes on adminstration of a historical vaccine</p></div>"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
      }
    ],
    "status": "completed",
    "vaccineCode": {
      "coding": [
        {
          "system": "urn:oid:1.2.36.1.2001.1005.17",
          "code": "GNFLU"
        }
      ],
      "text": "Influenza"
    },
    "patient": {
      "reference": "Patient/example"
    },
    "occurrenceString": "January 2012",
    "primarySource": false,
    "reportOrigin": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/immunization-origin",
          "code": "record"
        }
      ],
      "text": "Written Record"
    },
    "location": {
      "reference": "Location/1"
    },
    "note": [
      {
        "text": "Notes on adminstration of a historical vaccine"
      }
    ]
  }