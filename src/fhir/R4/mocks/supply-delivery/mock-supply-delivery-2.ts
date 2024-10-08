import { SupplyDelivery } from "fhir/R4/types/supply-delivery";

// https://hl7.org/fhir/R4/supplydelivery-example-pumpdelivery.json.html
// Delivery of an insulin pump

export const mockSupplyDelivery2: SupplyDelivery = {
    "resourceType": "SupplyDelivery",
    "id": "pumpdelivery",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">[Put rendering here]</div>"
    },
    "identifier": [
      {
        "value": "98398459409",
        "assigner": {
          "display": "SupplierDeliveryNr"
        }
      }
    ],
    "status": "in-progress",
    "patient": {
      "display": "Mr. Belpit"
    },
    "supplier": {
      "display": "ACME distribution"
    },
    "destination": {
      "display": "Home care dept"
    },
    "receiver": [
      {
        "display": "Nurse Smith"
      }
    ]
  }