import { Media } from "../../types/media";

// https://hl7.org/fhir/R4/media-example-xray.json.html
// Example hand x-ray

export const mockMedia4: Media = {
    "resourceType": "Media",
    "id": "xray",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Xray of left hand for Patient Henry Levin (MRN 12345) 2016-03-15</div>"
    },
    "basedOn": [
      {
        "identifier": {
          "system": "http://someclinic.org/fhir/NamingSystem/imaging-orders",
          "value": "111222",
          "assigner": {
            "display": "XYZ Medical Clinic"
          }
        }
      }
    ],
    "status": "completed",
    "modality": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "39714003",
          "display": "Skeletal X-ray of wrist and hand"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "createdDateTime": "2016-03-15",
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "85151006",
          "display": "Structure of left hand (body structure)"
        }
      ]
    },
    "height": 432,
    "width": 640,
    "content": {
      "id": "a1",
      "contentType": "image/jpeg",
      "url": "http://someimagingcenter.org/fhir/Binary/A12345",
      "creation": "2016-03-15"
    }
  }