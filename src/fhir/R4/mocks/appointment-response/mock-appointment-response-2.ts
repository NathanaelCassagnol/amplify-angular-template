import { AppointmentResponse } from "../../types/appointment-response";

// https://hl7.org/fhir/R4/appointmentresponse-example-req.json.html
// Response to renegotiate an appointmet request

export const mockAppointmentResponse2: AppointmentResponse = {
    "resourceType": "AppointmentResponse",
    "id": "exampleresp",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Accept Brian MRI results discussion</div>"
    },
    "identifier": [
      {
        "system": "http://example.org/sampleappointmentresponse-identifier",
        "value": "response123"
      }
    ],
    "appointment": {
      "reference": "Appointment/examplereq",
      "display": "Brian MRI results discussion"
    },
    "start": "2013-12-25T13:15:00Z",
    "end": "2013-12-25T13:30:00Z",
    "participantType": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
            "code": "ATND"
          }
        ]
      }
    ],
    "actor": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "participantStatus": "tentative",
    "comment": "can't we try for this time, can't do mornings"
  }