import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-eye-color.json.html
// Example of a very simple personal characteristic observation

export const mockObservationTrait: Observation = {
    "resourceType": "Observation",
    "id": "eye-color",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: eye-color</p><p><b>status</b>: final</p><p><b>code</b>: eye color <span>(Details )</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/05/2016</p><p><b>value</b>: blue</p></div>"
    },
    "status": "final",
    "code": {
      "text": "eye color"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "2016-05-18",
    "valueString": "blue"
  }