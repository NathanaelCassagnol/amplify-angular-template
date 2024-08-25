import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-zika-virus-intervention-logic.json.html
// Zika Virus Management Intervention Logic

export const mockLibrary9: Library = {
    "resourceType": "Library",
    "id": "zika-virus-intervention-logic",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Zika Virus Intervention Logic</div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "zika-virus-intervention-logic"
      }
    ],
    "version": "1.0.0",
    "title": "Zika Virus Intervention Logic",
    "status": "active",
    "experimental": true,
    "type": {
      "coding": [
        {
          "code": "logic-library"
        }
      ]
    },
    "date": "2016-11-14",
    "description": "Decision support logic for managing zika virus infection",
    "useContext": [
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "age"
        },
        "valueRange": {
          "low": {
            "value": 12,
            "unit": "a"
          }
        }
      },
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "user"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "309343006",
              "display": "Physician"
            }
          ]
        }
      }
    ],
    "topic": [
      {
        "text": "Zika Virus Management"
      }
    ],
    "relatedArtifact": [
      {
        "type": "depends-on",
        "resource": "Library/fhir-model-definition"
      },
      {
        "type": "depends-on",
        "resource": "ValueSet/zika-affected-area"
      }
    ],
    "parameter": [
      {
        "name": "Patient",
        "use": "in",
        "type": "Patient"
      },
      {
        "name": "Current Encounter",
        "use": "in",
        "type": "Encounter"
      }
    ],
    "dataRequirement": [
      {
        "type": "Condition",
        "codeFilter": [
          {
            "path": "code",
            "valueSet": "urn:oid:X.Y.Z"
          }
        ]
      },
      {
        "type": "Observation",
        "codeFilter": [
          {
            "path": "code",
            "valueSet": "urn:oid:X.Y.Z"
          }
        ]
      },
      {
        "type": "Condition",
        "codeFilter": [
          {
            "path": "code",
            "valueSet": "urn:oid:2.16.840.1.114222.4.11.7459"
          }
        ]
      }
    ],
    "content": [
      {
        "contentType": "text/cql",
        "data": "bGlicmFyeSAiemlrYS12aXJ1cy1pbnRlcnZlbnRpb24tbG9naWMiIHZlcnNpb24gJzEuMC4wJw0KDQp1c2luZyBGSElSIHZlcnNpb24gJzEuOCcNCg0KaW5jbHVkZSBGSElSSGVscGVycyB2ZXJzaW9uICcxLjgnIGNhbGxlZCBGSElSSGVscGVycw0KDQpjb2Rlc3lzdGVtICJFeGFtcGxlIFF1ZXN0aW9ubmFpcmVzIjogJ2h0dHA6Ly9leGFtcGxlLm9yZy9xdWVzdGlvbm5haXJlcycNCg0KdmFsdWVzZXQgIlByZWduYW5jeSI6ICd1cm46b2lkOlguWS5aJw0KdmFsdWVzZXQgIlppa2EgQWZmZWN0ZWQgQXJlYXMiOiAndXJuOm9pZDoyLjE2Ljg0MC4xLjExNDIyMi40LjExLjc0NTcnIC8vIFZhbHVlIHNldCBoYXMgYmVlbiBjcmVhdGVkIGJhc2VkIHVwb24gSmFuIDI2dGgsIDIwMTYgdHJhdmVsIG5vdGljZSBmcm9tIENEQyBaaWthIHZpcnVzIGRpc2Vhc2Ugd2Vic2l0ZQlodHRwczovL3BoaW52YWRzLmNkYy5nb3YvdmFkcy9WaWV3VmFsdWVTZXQuYWN0aW9uP29pZD0yLjE2Ljg0MC4xLjExNDIyMi40LjExLjc0NTcNCnZhbHVlc2V0ICJaaWthIFZpcnVzIFNpZ25zIGFuZCBTeW1wdG9tcyI6CScyLjE2Ljg0MC4xLjExNDIyMi40LjExLjc0NTknIC8vIGh0dHBzOi8vcGhpbnZhZHMuY2RjLmdvdi92YWRzL1ZpZXdWYWx1ZVNldC5hY3Rpb24/b2lkPTIuMTYuODQwLjEuMTE0MjIyLjQuMTEuNzQ1OQ0KdmFsdWVzZXQgIkdlbmVyYWwgQXJib3ZpcnVzIFNpZ25zIGFuZCBTeW1wdG9tcyI6ICcyLjE2Ljg0MC4xLjExNDIyMi40LjExLjc0NjAnIC8vIFNpZ25zIGFuZCBTeW1wdG9tcyBvZiBBcmJvdmlyYWwgZGlzZWFzZXMuIFRoaXMgdmFsdWUgc2V0IHdvdWxkIGJlIHVzZWQgZm9yIHB1YmxpYyBoZWFsdGggY2FzZSBub3RpZmljYXRpb24gYW5kIGluY2x1ZGVzIHNpZ25zIGFuZCBzeW1wdG9tcyBvZiBEZW5ndWUsIENoaWt1bmd1bnlhIGFuZCBaaWthLglodHRwczovL3BoaW52YWRzLmNkYy5nb3YvdmFkcy9WaWV3VmFsdWVTZXQuYWN0aW9uP29pZD0yLjE2Ljg0MC4xLjExNDIyMi40LjExLjc0NjANCnZhbHVlc2V0ICJaaWthIFZpcnVzIFRlc3RzIjogJzIuMTYuODQwLjEuMTE0MjIyLjQuMTEuNzQ4MCcJLy8gaHR0cHM6Ly9waGludmFkcy5jZGMuZ292L3ZhZHMvVmlld1ZhbHVlU2V0LmFjdGlvbj9vaWQ9Mi4xNi44NDAuMS4xMTQyMjIuNC4xMS43NDgwDQp2YWx1ZXNldCAiQXJib3ZpcnVzIFRlc3RzIjogJzIuMTYuODQwLjEuMTE0MjIyLjQuMTEuNDEyMCcgLy8gaHR0cHM6Ly9waGludmFkcy5jZGMuZ292L3ZhZHMvVmlld1ZhbHVlU2V0LmFjdGlvbj9vaWQ9Mi4xNi44NDAuMS4xMTQyMjIuNC4xMS40MTIwDQp2YWx1ZXNldCAiQ2hpa3VuZ3VueWEgVGVzdHMiOiAnMi4xNi44NDAuMS4xMTQyMjIuNC4xMS43MzM5JyAvLyBodHRwczovL3BoaW52YWRzLmNkYy5nb3YvdmFkcy9WaWV3VmFsdWVTZXQuYWN0aW9uP29pZD0yLjE2Ljg0MC4xLjExNDIyMi40LjExLjczMzkNCnZhbHVlc2V0ICJEZW5ndWUgVGVzdHMiOiAnMi4xNi44NDAuMS4xMTQyMjIuNC4xMS40MTQxJyAvLwlodHRwczovL3BoaW52YWRzLmNkYy5nb3YvdmFkcy9WaWV3VmFsdWVTZXQuYWN0aW9uP29pZD0yLjE2Ljg0MC4xLjExNDIyMi40LjExLjQxNDENCnZhbHVlc2V0ICJaaWthIFZpcnVzIElnTSBFTElTQSBSZXN1bHRzIjogJzIuMTYuODQwLjEuMTE0MjIyLjQuMTEuNzQ3NicgLy8gVGhpcyB2YWx1ZSBzZXQgaXMgaW50ZW5kZWQgZm9yIHVzZSBpbiBlbGVjdHJvbmljIGxhYm9yYXRvcnkgcmVwb3J0aW5nIGJhc2VkIG9uIHRoZSByZXN1bHRzIHJlY2VpdmVkIGZyb20gdGhlIGxhYm9yYXRvcnkuICBUaGUgbGFib3JhdG9yeSBtYXkgYWxzbyByZXBvcnQgYSBxdWFudGl0YXRpdmUgdGl0ZXIgaWYgYXBwbGljYWJsZS4JaHR0cHM6Ly9waGludmFkcy5jZGMuZ292L3ZhZHMvVmlld1ZhbHVlU2V0LmFjdGlvbj9vaWQ9Mi4xNi44NDAuMS4xMTQyMjIuNC4xMS43NDc2DQp2YWx1ZXNldCAiWmlrYSBWaXJ1cyBOZXV0cmFsaXppbmcgQW50aWJvZHkgUmVzdWx0cyI6ICcyLjE2Ljg0MC4xLjExNDIyMi40LjExLjc0NzcnIC8vIFRoaXMgdmFsdWUgc2V0IGlzIGludGVuZGVkIGZvciB1c2UgaW4gZWxlY3Ryb25pYyBsYWJvcmF0b3J5IHJlcG9ydGluZyBiYXNlZCBvbiB0aGUgcmVzdWx0cyByZWNlaXZlZCBmcm9tIHRoZSBsYWJvcmF0b3J5LiAgVGhlIGxhYm9yYXRvcnkgbWF5IGFsc28gcmVwb3J0IGEgcXVhbnRpdGF0aXZlIHRpdGVyIGlmIGFwcGxpY2FibGUuCWh0dHBzOi8vcGhpbnZhZHMuY2RjLmdvdi92YWRzL1ZpZXdWYWx1ZVNldC5hY3Rpb24/b2lkPTIuMTYuODQwLjEuMTE0MjIyLjQuMTEuNzQ3Nw0KdmFsdWVzZXQgIkFyYm92aXJ1cyBUZXN0IFJlc3VsdHMiOiAnMi4xNi44NDAuMS4xMTQyMjIuNC4xMS40MDAzJyAvLwlodHRwczovL3BoaW52YWRzLmNkYy5nb3YvdmFkcy9WaWV3VmFsdWVTZXQuYWN0aW9uP29pZD0yLjE2Ljg0MC4xLjExNDIyMi40LjExLjQwMDMNCnZhbHVlc2V0ICJDaGlrdW5ndW55YSBUZXN0IFJlc3VsdHMiOiAnMi4xNi44NDAuMS4xMTQyMjIuNC4xMS43MzQzJyAvLyBUaGlzIHZhbHVlIHNldCBpcyBpbnRlbmRlZCBmb3IgdXNlIGluIGVsZWN0cm9uaWMgbGFib3JhdG9yeSByZXBvcnRpbmcgYmFzZWQgb24gdGhlIHJlc3VsdHMgcmVjZWl2ZWQgZnJvbSB0aGUgbGFib3JhdG9yeS4gIFRoZSBsYWJvcmF0b3J5IG1heSBhbHNvIHJlcG9ydCBhIHF1YW50aXRhdGl2ZSB0aXRlciBpZiBhcHBsaWNhYmxlLglodHRwczovL3BoaW52YWRzLmNkYy5nb3YvdmFkcy9WaWV3VmFsdWVTZXQuYWN0aW9uP29pZD0yLjE2Ljg0MC4xLjExNDIyMi40LjExLjczNDMNCnZhbHVlc2V0ICJEZW5ndWUgVGVzdCBSZXN1bHRzIjogJzIuMTYuODQwLjEuMTE0MjIyLjQuMTEuNDAyNScgLy8gVGhpcyB2YWx1ZSBzZXQgaXMgaW50ZW5kZWQgZm9yIHVzZSBpbiBlbGVjdHJvbmljIGxhYm9yYXRvcnkgcmVwb3J0aW5nIGJhc2VkIG9uIHRoZSByZXN1bHRzIHJlY2VpdmVkIGZyb20gdGhlIGxhYm9yYXRvcnkuICBUaGUgbGFib3JhdG9yeSBtYXkgYWxzbyByZXBvcnQgYSBxdWFudGl0YXRpdmUgdGl0ZXIgaWYgYXBwbGljYWJsZS4JaHR0cHM6Ly9waGludmFkcy5jZGMuZ292L3ZhZHMvVmlld1ZhbHVlU2V0LmFjdGlvbj9vaWQ9Mi4xNi44NDAuMS4xMTQyMjIuNC4xMS40MDI1DQoNCmNvZGUgIkNERTogUmVzaWRlbnQgb2Ygb3IgRnJlcXVlbnQgVHJhdmVsZXIgdG8gWmlrYSBBcmVhIjogJ0NERTogUmVzaWRlbnQgb2Ygb3IgRnJlcXVlbnQgVHJhdmVsZXIgdG8gWmlrYSBBcmVhJyBmcm9tICJFeGFtcGxlIFF1ZXN0aW9ubmFpcmVzIg0KY29kZSAiQ0RFOiBSZWNlbnQgVHJhdmVsIHRvIFppa2EgQXJlYSI6ICdDREU6IFJlY2VudCBUcmF2ZWwgdG8gWmlrYSBBcmVhJyBmcm9tICJFeGFtcGxlIFF1ZXN0aW9ubmFpcmVzIg0KY29kZSAiQ0RFOiBUaW1lIFNpbmNlIFJldHVybmVkIEZyb20gVHJhdmVsIjogJ0NERTogVGltZSBTaW5jZSBSZXR1cm5lZCBGcm9tIFRyYXZlbCcgZnJvbSAiRXhhbXBsZSBRdWVzdGlvbm5haXJlcyINCmNvZGUgIkNERTogUmVjZW50IFNleHVhbCBFbmNvdW50ZXIgV2l0aCBUcmF2ZWxlciB0byBaaWthIEFyZWEiOiAnQ0RFOiBSZWNlbnQgU2V4dWFsIEVuY291bnRlciBXaXRoIFRyYXZlbGVyIHRvIFppa2EgQXJlYScgZnJvbSAiRXhhbXBsZSBRdWVzdGlvbm5haXJlcyINCmNvZGUgIkNERTogVGltZSBTaW5jZSBTZXh1YWwgRW5jb3VudGVyIjogJ0NERTogVGltZSBTaW5jZSBTZXh1YWwgRW5jb3VudGVyJyBmcm9tICJFeGFtcGxlIFF1ZXN0aW9ubmFpcmVzIg0KY29kZSAiQ0RFOiBQbGFubmVkIFRyYXZlbCB0byBaaWthIEFyZWEiOiAnQ0RFOiBQbGFubmVkIFRyYXZlbCB0byBaaWthIEFyZWEnIGZyb20gIkV4YW1wbGUgUXVlc3Rpb25uYWlyZXMiDQoNCnBhcmFtZXRlciAiQ3VycmVudCBFbmNvdW50ZXIiIEVuY291bnRlcg0KDQpjb250ZXh0IFBhdGllbnQNCg0KZGVmaW5lICJQcmVnbmFuY3kgQ29uZGl0aW9ucyI6DQogIFtDb25kaXRpb246ICJQcmVnbmFuY3kiXSBDDQogICAgd2hlcmUgQy5jbGluaWNhbFN0YXR1cyA9ICdhY3RpdmUnDQogICAgICBhbmQgQy52ZXJpZmljYXRpb25TdGF0dXMgPSAnY29uZmlybWVkJw0KICAgICAgLy8gd2VsbCwgdGhpcyBpcyB1Z2x5Li4uLg0KICAgICAgYW5kIEludGVydmFsW0Mub25zZXQgYXMgZGF0ZVRpbWUsIEMuYWJhdGVtZW50IGFzIGRhdGVUaW1lXSBpbmNsdWRlcyBUb2RheSgpDQoNCmRlZmluZSAiSXMgUGF0aWVudCBQcmVnbmFudCI6DQogIFBhdGllbnQuZ2VuZGVyID0gJ2ZlbWFsZScNCiAgICBhbmQgZXhpc3RzICgiUHJlZ25hbmN5IENvbmRpdGlvbnMiKQ0KDQpkZWZpbmUgIlppa2EgRXhwb3N1cmUgQXNzZXNzbWVudCI6DQogIENvZGUgJ1ppa2EgVmlydXMgRXhwb3N1cmUgQXNzZXNzbWVudCcgZnJvbSAiRXhhbXBsZSBRdWVzdGlvbm5haXJlcyINCg0KZGVmaW5lICJaaWthIEV4cG9zdXJlIEFzc2Vzc21lbnQgUmVzdWx0IjoNCiAgRmlyc3QoDQogICAgW09ic2VydmF0aW9uOiAiWmlrYSBFeHBvc3VyZSBBc3Nlc3NtZW50Il0gTw0KICAgICAgd2hlcmUgTy5zdGF0dXMgPSAnZmluYWwnDQogICAgICAgIGFuZCBPLmVuY291bnRlci5yZWZlcmVuY2UgPSAiQ3VycmVudCBFbmNvdW50ZXIiLmlkIC8vIFRPRE86IGZpeA0KICAgICAgc29ydCBieSAoTy5lZmZlY3RpdmUpIGRlc2MNCiAgKQ0KDQpkZWZpbmUgIkhhcyBaaWthIEV4cG9zdXJlIEFzc2Vzc21lbnQiOg0KICAiWmlrYSBFeHBvc3VyZSBBc3Nlc3NtZW50IFJlc3VsdCIgaXMgbm90IG51bGwNCg0KZGVmaW5lICJaaWthIFN5bXB0b21zIjoNCiAgW0NvbmRpdGlvbjogIlppa2EgVmlydXMgU2lnbnMgYW5kIFN5bXB0b21zIl0gQw0KICAgIHdoZXJlIEMuY2xpbmljYWxTdGF0dXMgPSAnYWN0aXZlJw0KICAgICAgYW5kIEMudmVyaWZpY2F0aW9uU3RhdHVzID0gJ2NvbmZpcm1lZCcNCiAgICAgIGFuZCBDLiJjb250ZXh0Ii5yZWZlcmVuY2UgPSAiQ3VycmVudCBFbmNvdW50ZXIiLmlkIC8vIFRPRE86IGZpeA0KDQpkZWZpbmUgIkhhcyBaaWthIFN5bXB0b21zIjoNCiAgZXhpc3RzICJaaWthIFN5bXB0b21zIg0KDQpkZWZpbmUgIk5vIFppa2EgU3ltcHRvbXMiOg0KICBub3QgIkhhcyBaaWthIFN5bXB0b21zIg0KDQpkZWZpbmUgIlllcyI6IHsgJ1llcycgfQ0KDQpkZWZpbmUgIlJlc2lkZW50IG9mIG9yIEZyZXF1ZW50IFRyYXZlbGVyIHRvIFppa2EgQXJlYSI6DQogIGV4aXN0cyAoDQogICAgIlppa2EgRXhwb3N1cmUgQXNzZXNzbWVudCBSZXN1bHQiLmNvbXBvbmVudCBDDQogICAgICAvLyBUT0RPOiBOZWVkIHRvIHN0cmVhbWxpbmUsIHRoaXMgb3VnaHQgdG8gaGF2ZSB3b3JrZWQsIG5vdCBzdXJlIHdoeSBpdCBkaWRuJ3QgKHdpdGhvdXQgdGhlIGNvZGluZ1swXSBhY2Nlc3MpDQogICAgICB3aGVyZSBDLmNvZGUuY29kaW5nWzBdID0gIkNERTogUmVzaWRlbnQgb2Ygb3IgRnJlcXVlbnQgVHJhdmVsZXIgdG8gWmlrYSBBcmVhIg0KICAgICAgICBhbmQgQy52YWx1ZSBpbiAiWWVzIg0KICApDQoNCmRlZmluZSAiUmVjZW50IFRyYXZlbCB0byBaaWthIEFyZWEiOg0KICBleGlzdHMgKA0KICAgICJaaWthIEV4cG9zdXJlIEFzc2Vzc21lbnQgUmVzdWx0Ii5jb21wb25lbnQgQw0KICAgICAgd2hlcmUgQy5jb2RlLmNvZGluZ1swXSA9ICJDREU6IFJlY2VudCBUcmF2ZWwgdG8gWmlrYSBBcmVhIg0KICAgICAgICBhbmQgQy52YWx1ZSBpbiAiWWVzIg0KICApDQoNCmRlZmluZSAiVGltZSBTaW5jZSBSZXR1cm5lZCBGcm9tIFRyYXZlbCI6DQogIHNpbmdsZXRvbiBmcm9tICgNCiAgICAiWmlrYSBFeHBvc3VyZSBBc3Nlc3NtZW50IFJlc3VsdCIuY29tcG9uZW50IEMNCiAgICAgIHdoZXJlIEMuY29kZS5jb2RpbmdbMF0gPSAiQ0RFOiBUaW1lIFNpbmNlIFJldHVybmVkIEZyb20gVHJhdmVsIg0KICAgICAgcmV0dXJuIEMudmFsdWUgYXMgUXVhbnRpdHkNCiAgKQ0KDQpkZWZpbmUgIlJlY2VudCBTZXh1YWwgRW5jb3VudGVyIFdpdGggVHJhdmVsZXIgdG8gWmlrYSBBcmVhIjoNCiAgZXhpc3RzICgNCiAgICAiWmlrYSBFeHBvc3VyZSBBc3Nlc3NtZW50IFJlc3VsdCIuY29tcG9uZW50IEMNCiAgICAgIHdoZXJlIEMuY29kZS5jb2RpbmdbMF0gPSAiQ0RFOiBSZWNlbnQgU2V4dWFsIEVuY291bnRlciBXaXRoIFRyYXZlbGVyIHRvIFppa2EgQXJlYSINCiAgICAgICAgYW5kIEMudmFsdWUgaW4gIlllcyINCiAgKQ0KDQpkZWZpbmUgIlRpbWUgU2luY2UgU2V4dWFsIEVuY291bnRlciI6DQogIHNpbmdsZXRvbiBmcm9tICgNCiAgICAiWmlrYSBFeHBvc3VyZSBBc3Nlc3NtZW50IFJlc3VsdCIuY29tcG9uZW50IEMNCiAgICAgIHdoZXJlIEMuY29kZS5jb2RpbmdbMF0gPSAiQ0RFOiBUaW1lIFNpbmNlIFNleHVhbCBFbmNvdW50ZXIiDQogICAgICByZXR1cm4gQy52YWx1ZSBhcyBRdWFudGl0eQ0KICApDQoNCmRlZmluZSAiVGltZSBTaW5jZSBQb3NzaWJsZSBFeHBvc3VyZSI6DQogIENvYWxlc2NlKCJUaW1lIFNpbmNlIFJldHVybmVkIEZyb20gVHJhdmVsIiwgIlRpbWUgU2luY2UgU2V4dWFsIEVuY291bnRlciIpDQoNCmRlZmluZSAiUGxhbm5lZCBUcmF2ZWwgdG8gWmlrYSBBcmVhIjoNCiAgZXhpc3RzICgNCiAgICAiWmlrYSBFeHBvc3VyZSBBc3Nlc3NtZW50IFJlc3VsdCIuY29tcG9uZW50IEMNCiAgICAgIHdoZXJlIEMuY29kZS5jb2RpbmdbMF0gPSAiQ0RFOiBQbGFubmVkIFRyYXZlbCB0byBaaWthIEFyZWEiDQogICAgICAgIGFuZCBDLnZhbHVlIGluICJZZXMiDQogICkNCg0KZGVmaW5lICJIYXMgUG9zc2libGUgWmlrYSBFeHBvc3VyZSI6DQogICJSZXNpZGVudCBvZiBvciBGcmVxdWVudCBUcmF2ZWxlciB0byBaaWthIEFyZWEiDQogICAgb3IgIlJlY2VudCBUcmF2ZWwgdG8gWmlrYSBBcmVhIg0KICAgIG9yICJSZWNlbnQgU2V4dWFsIEVuY291bnRlciBXaXRoIFRyYXZlbGVyIHRvIFppa2EgQXJlYSINCg0KZGVmaW5lICJaaWthIFN5bXB0b20gT25zZXQiOg0KICBGaXJzdCgNCiAgICAiWmlrYSBTeW1wdG9tcyIgUw0KICAgICAgc29ydCBieSAoUy5vbnNldCBhcyBkYXRlVGltZSkNCiAgKS5vbnNldA0KDQpkZWZpbmUgIlRpbWUgU2luY2UgU3ltcHRvbSBPbnNldCI6DQogIFN5c3RlbS5RdWFudGl0eSB7IHZhbHVlOiB3ZWVrcyBiZXR3ZWVuICJaaWthIFN5bXB0b20gT25zZXQiIGFuZCBUb2RheSgpLCB1bml0OiAnd2snIH0NCg0KZGVmaW5lICJTaG91bGQgQWRtaW5pc3RlciBaaWthIEV4cG9zdXJlIEFzc2Vzc21lbnQiOg0KICBub3QgKCJIYXMgWmlrYSBFeHBvc3VyZSBBc3Nlc3NtZW50IikNCg0KZGVmaW5lICJTaG91bGQgT3JkZXIgU2VydW0gKyBVcmluZSByUlQtUENSIFRlc3QiOg0KICAoIkhhcyBQb3NzaWJsZSBaaWthIEV4cG9zdXJlIiBhbmQgIkhhcyBaaWthIFN5bXB0b21zIiBhbmQgIlRpbWUgU2luY2UgU3ltcHRvbSBPbnNldCIgPCAyIHdlZWtzKQ0KICAgIG9yICgiTm8gWmlrYSBTeW1wdG9tcyIgYW5kICJUaW1lIFNpbmNlIFBvc3NpYmxlIEV4cG9zdXJlIiA8IDIgd2Vla3MpDQoNCmRlZmluZSAiU2hvdWxkIE9yZGVyIFNlcnVtIFppa2EgVmlydXMgSWdNICsgRGVuZ3VlIFZpcnVzIElnTSI6DQogICgiSGFzIFBvc3NpYmxlIFppa2EgRXhwb3N1cmUiIGFuZCAiSGFzIFppa2EgU3ltcHRvbXMiIGFuZCAiVGltZSBTaW5jZSBTeW1wdG9tIE9uc2V0IiBpbiBJbnRlcnZhbFsyIHdlZWtzLCAxMiB3ZWVrcykpDQogICAgb3IgKCJSZXNpZGVudCBvZiBvciBGcmVxdWVudCBUcmF2ZWxlciB0byBaaWthIEFyZWEiIGFuZCAiTm8gWmlrYSBTeW1wdG9tcyIpDQogICAgb3IgKCJObyBaaWthIFN5bXB0b21zIiBhbmQgIlRpbWUgU2luY2UgUG9zc2libGUgRXhwb3N1cmUiIGluIEludGVydmFsWzIgd2Vla3MsIDEyIHdlZWtzKSkNCg0KZGVmaW5lICJTaG91bGQgQ29uc2lkZXIgSWdNIEFudGlib2R5IFRlc3RpbmciOg0KICAoIkhhcyBQb3NzaWJsZSBaaWthIEV4cG9zdXJlIiBhbmQgIkhhcyBaaWthIFN5bXB0b21zIiBhbmQgIlRpbWUgU2luY2UgU3ltcHRvbSBPbnNldCIgPj0gMTIgd2Vla3MpDQogICAgb3IgKCJObyBaaWthIFN5bXB0b21zIiBhbmQgIlRpbWUgU2luY2UgUG9zc2libGUgRXhwb3N1cmUiID49IDEyIHdlZWtzKQ0KDQpkZWZpbmUgIlNob3VsZCBQcm92aWRlIE1vc3F1aXRvIFByZXZlbnRpb24gYW5kIENvbnRyYWNlcHRpb24gQWR2aWNlIjoNCiAgIlBsYW5uZWQgVHJhdmVsIHRvIFppa2EgQXJlYSINCg==",
        "url": "library-zika-virus-intervention-logic-content.cql",
        "title": "Zika Virus Intervention Logic"
      }
    ]
  }