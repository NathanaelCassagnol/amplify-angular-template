import { ImagingStudy } from "../../types/imaging-study";

// https://hl7.org/fhir/R4/imagingstudy-example.json.html
// Example of imagingstudy

export const mockImagingStudy1: ImagingStudy = {
    "resourceType": "ImagingStudy",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">CT Chest.  John Smith (MRN: 09236). Accession: W12342398. Performed: 2011-01-01. 3 series, 12 images.</div>"
    },
    "identifier": [
      {
        "system": "urn:dicom:uid",
        "value": "urn:oid:2.16.124.113543.6003.1154777499.30246.19789.3503430045"
      }
    ],
    "status": "available",
    "subject": {
      "reference": "Patient/dicom"
    },
    "started": "2011-01-01T11:01:20+03:00",
    "numberOfSeries": 1,
    "numberOfInstances": 1,
    "series": [
      {
        "uid": "2.16.124.113543.6003.2588828330.45298.17418.2723805630",
        "number": 3,
        "modality": {
          "system": "http://dicom.nema.org/resources/ontology/DCM",
          "code": "CT"
        },
        "description": "CT Surview 180",
        "numberOfInstances": 1,
        "bodySite": {
          "system": "http://snomed.info/sct",
          "code": "67734004",
          "display": "Upper Trunk Structure"
        },
        "instance": [
          {
            "uid": "2.16.124.113543.6003.189642796.63084.16748.2599092903",
            "sopClass": {
              "system": "urn:ietf:rfc:3986",
              "code": "urn:oid:1.2.840.10008.5.1.4.1.1.2"
            },
            "number": 1
          }
        ]
      }
    ]
  }