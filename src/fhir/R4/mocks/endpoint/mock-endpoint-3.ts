import { Endpoint } from "../../types/endpoint";

// https://hl7.org/fhir/R4/endpoint-example-iid.json.html
// Example of IHE-IID endpoint

export const mockEndpoint3: Endpoint = {
    "resourceType": "Endpoint",
    "id": "example-iid",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\tExample of an Imaging IID type endpoint\n\t\t</div>"
    },
    "status": "active",
    "connectionType": {
      "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
      "code": "ihe-iid"
    },
    "name": "PACS Hospital Invoke Image Display endpoint",
    "payloadType": [
      {
        "text": "DICOM IID"
      }
    ],
    "address": "https://pacs.hospital.org/IHEInvokeImageDisplay"
  }