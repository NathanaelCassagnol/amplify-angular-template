import { DeviceRequest } from "fhir/R4/types/device-request";

// https://hl7.org/fhir/R4/devicerequest-example-insulinpump.json.html
// Insulin Pump request

export const mockDeviceRequest2: DeviceRequest = {
    "resourceType": "DeviceRequest",
    "id": "insulinpump",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: insulinpump</p><p><b>identifier</b>: ip_request1.1</p><p><b>instantiatesCanonical</b>: <a>http://motivemi.com/artifacts/PlanDefinition/low-suicide-risk-order-set</a></p><p><b>basedOn</b>: Homecare - DM follow-up</p><p><b>priorRequest</b>: CGM ambulatory</p><p><b>groupIdentifier</b>: ip_request1</p><p><b>status</b>: active</p><p><b>intent</b>: instance-order</p><p><b>priority</b>: routine</p><p><b>code</b>: Insulin delivery device panel <span>(Details : {LOINC code '43148-6' = 'Insulin delivery device panel)</span></p><p><b>subject</b>: <a>Patient/dicom</a></p><p><b>encounter</b>: Encounter 1</p><p><b>occurrence</b>: 08/05/2013 9:33:27 AM</p><p><b>authoredOn</b>: 08/05/2013 9:33:27 AM</p><p><b>requester</b>: <a>Dr. Adam Careful</a></p><p><b>performerType</b>: Nurse <span>(Details : {[not stated] code 'null' = 'null', given as 'Qualified nurse'})</span></p><p><b>performer</b>: Nurse Rossignol</p><p><b>reasonCode</b>: gastroparesis <span>(Details )</span></p><p><b>reasonReference</b>: Gastroparesis</p><p><b>supportingInfo</b>: Previous results</p><p><b>note</b>: this is the right device brand and model</p><p><b>relevantHistory</b>: Request for unspecified device</p></div>"
    },
    "identifier": [
      {
        "value": "ip_request1.1"
      }
    ],
    "instantiatesCanonical": [
      "http://motivemi.com/artifacts/PlanDefinition/low-suicide-risk-order-set"
    ],
    "basedOn": [
      {
        "display": "Homecare - DM follow-up"
      }
    ],
    "priorRequest": [
      {
        "display": "CGM ambulatory"
      }
    ],
    "groupIdentifier": {
      "value": "ip_request1"
    },
    "status": "active",
    "intent": "instance-order",
    "priority": "routine",
    "codeCodeableConcept": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "43148-6"
        }
      ],
      "text": "Insulin delivery device panel"
    },
    "subject": {
      "reference": "Patient/dicom"
    },
    "encounter": {
      "display": "Encounter 1"
    },
    "occurrenceDateTime": "2013-05-08T09:33:27+07:00",
    "authoredOn": "2013-05-08T09:33:27+07:00",
    "requester": {
      "reference": "Practitioner/example",
      "display": "Dr. Adam Careful"
    },
    "performerType": {
      "coding": [
        {
          "display": "Qualified nurse"
        }
      ],
      "text": "Nurse"
    },
    "performer": {
      "display": "Nurse Rossignol"
    },
    "reasonCode": [
      {
        "text": "gastroparesis"
      }
    ],
    "reasonReference": [
      {
        "display": "Gastroparesis"
      }
    ],
    "supportingInfo": [
      {
        "display": "Previous results"
      }
    ],
    "note": [
      {
        "text": "this is the right device brand and model"
      }
    ],
    "relevantHistory": [
      {
        "display": "Request for unspecified device"
      }
    ]
  }