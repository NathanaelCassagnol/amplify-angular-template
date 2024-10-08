import { Media } from "../../types/media";

// https://hl7.org/fhir/R4/media-example-dicom.json.html
// Example Ultrasound Image

export const mockMedia2: Media = {
    "resourceType": "Media",
    "id": "1.2.840.11361907579238403408700.3.1.04.19970327150033",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Ultrasound Image on patient &quot;James Chalmers&quot;:<br/>\n      <img src=\"http://imaging.acme.com/wado/server?requestType=WADO&amp;contentType=application%2Fdicom&amp;studyUid=1.2.840.113619.2.21.848.34082.0.538976288.3&amp;seriesUid=1.2.840.113619.2.21.3408.700.0.757923840.3.0&amp;objectUid=1.2.840.11361907579238403408700.3.1.04.19970327150033\" alt=\"WADO reference to image\"/>\n\n    </div>"
    },
    "extension": [
      {
        "url": "http://nema.org/fhir/extensions#0002-0010",
        "valueUri": "urn:oid:1.2.840.10008.1.2.1"
      }
    ],
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "InstanceUID"
        },
        "system": "urn:dicom:uid",
        "value": "urn:oid:1.2.840.11361907579238403408700.3.1.04.19970327150033"
      },
      {
        "type": {
          "text": "accessionNo"
        },
        "system": "http://acme-imaging.com/accession/2012",
        "value": "1234567"
      },
      {
        "type": {
          "text": "studyId"
        },
        "system": "urn:dicom:uid",
        "value": "urn:oid:1.2.840.113619.2.21.848.34082.0.538976288.3"
      },
      {
        "type": {
          "text": "seriesId"
        },
        "system": "urn:dicom:uid",
        "value": "urn:oid:1.2.840.113619.2.21.3408.700.0.757923840.3.0"
      }
    ],
    "status": "completed",
    "modality": {
      "coding": [
        {
          "system": "http://dicom.nema.org/resources/ontology/DCM",
          "code": "US"
        }
      ]
    },
    "view": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "399067008",
          "display": "Lateral projection"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    },
    "device": {
      "display": "G.E. Medical Systems"
    },
    "height": 480,
    "width": 640,
    "content": {
      "contentType": "application/dicom",
      "url": "http://imaging.acme.com/wado/server?requestType=WADO&contentType=application%2Fdicom&studyUid=1.2.840.113619.2.21.848.34082.0.538976288.3&seriesUid=1.2.840.113619.2.21.3408.700.0.757923840.3.0&objectUid=1.2.840.11361907579238403408700.3.1.04.19970327150033"
    }
  }