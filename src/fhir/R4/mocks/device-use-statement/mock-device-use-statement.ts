import { DeviceUseStatement } from "fhir/R4/types/device-use-statement";

// https://hl7.org/fhir/R4/deviceusestatement-example.json.html
// The provision of a wheelchair to a patient

export const mockDeviceUseStatement: DeviceUseStatement = {
    "resourceType": "DeviceUseStatement",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 51ebb7a9-4e3a-4360-9a05-0cc2d869086f</p><p><b>status</b>: active</p><p><b>subject</b>: <a>Patient/example</a></p><p><b>device</b>: <a>Device/example</a></p><p><b>reasonReference</b>: <a>Appendectomy (surgery)</a></p></div>"
    },
    "identifier": [
      {
        "system": "http:goodhealth.org/identifiers",
        "value": "51ebb7a9-4e3a-4360-9a05-0cc2d869086f"
      }
    ],
    "status": "active",
    "subject": {
      "reference": "Patient/example"
    },
    "device": {
      "reference": "Device/example"
    },
    "reasonReference": [
      {
        "reference": "Procedure/example",
        "display": "Appendectomy (surgery)"
      }
    ]
  }