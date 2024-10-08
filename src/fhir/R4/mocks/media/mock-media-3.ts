import { Media } from "../../types/media";

// https://hl7.org/fhir/R4/media-example-sound.json.html
// Example Sound Recording

export const mockMedia3: Media = {
    "resourceType": "Media",
    "id": "sound",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Sound recording of speech example for Patient Henry Levin (MRN 12345):<br/><img src=\"#11\" alt=\"diagram\"/></div>"
    },
    "status": "completed",
    "subject": {
      "reference": "Patient/xcda"
    },
    "operator": {
      "reference": "Practitioner/xcda-author"
    },
    "duration": 65,
    "content": {
      "id": "a1",
      "contentType": "audio/mpeg",
      "data": "dG9vIGJpZyB0b28gaW5jbHVkZSB0aGUgd2hvbGU="
    }
  }