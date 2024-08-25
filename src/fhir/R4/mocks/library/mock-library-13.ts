import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-omtk-modelinfo.json.html
// OMTK Model

export const mockLibrary13: Library = {
    "resourceType": "Library",
    "id": "omtk-modelinfo",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: omtk-modelinfo</p><p><b>identifier</b>: OMTKModelInfo (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: OMTK Model Info</p><p><b>status</b>: active</p><p><b>experimental</b>: true</p><p><b>type</b>: Model Definition <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'model-definition' = 'Model Definition)</span></p><p><b>date</b>: 05/05/2017</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid Management Terminology Knowledge Base Model Definition for use in implementing CDC Opioid Prescribing Guidelines.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: This library defines the Opioid Management Terminology Knowledge Base model</p><p><b>usage</b>: This library is used to resolve data elements in the Opioid Management Terminology Knowledge Base model</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>content</b>: </p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "OMTKModelInfo"
      }
    ],
    "version": "0.1.0",
    "title": "OMTK Model Info",
    "status": "active",
    "experimental": true,
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/library-type",
          "code": "model-definition"
        }
      ]
    },
    "date": "2017-05-05",
    "publisher": "Centers for Disease Control and Prevention (CDC)",
    "description": "Opioid Management Terminology Knowledge Base Model Definition for use in implementing CDC Opioid Prescribing Guidelines.",
    "useContext": [
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "focus",
          "display": "Clinical Focus"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "182888003",
              "display": "Medication requested (situation)"
            }
          ]
        }
      },
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "focus",
          "display": "Clinical Focus"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "82423001",
              "display": "Chronic pain (finding)"
            }
          ]
        }
      }
    ],
    "jurisdiction": [
      {
        "coding": [
          {
            "system": "urn:iso:std:iso:3166",
            "code": "US",
            "display": "United States of America"
          }
        ]
      }
    ],
    "purpose": "This library defines the Opioid Management Terminology Knowledge Base model",
    "usage": "This library is used to resolve data elements in the Opioid Management Terminology Knowledge Base model",
    "copyright": "© CDC 2016+.",
    "topic": [
      {
        "text": "Opioid Prescribing"
      }
    ],
    "author": [
      {
        "name": "Kensaku Kawamoto, MD, PhD, MHS"
      },
      {
        "name": "Bryn Rhodes"
      },
      {
        "name": "Floyd Eisenberg, MD, MPH"
      },
      {
        "name": "Robert McClure, MD, MPH"
      }
    ],
    "content": [
      {
        "contentType": "application/xml",
        "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPG5zNDptb2RlbEluZm8gbmFtZT0iT01USyIgdXJsPSJodHRwOi8vb3JnLm9wZW5jZHMvb3Bpb2lkLWNkcyIgdGFyZ2V0UXVhbGlmaWVyPSJjZGMiIHhtbG5zOnhzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSIgeG1sbnM6bnM0PSJ1cm46aGw3LW9yZzplbG0tbW9kZWxpbmZvOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIg0KICAgICAgICAgICAgICAgdmVyc2lvbj0iMC4xLjAiPg0KICAgIDxuczQ6dHlwZUluZm8geHNpOnR5cGU9Im5zNDpDbGFzc0luZm8iIG5hbWU9Ik9NVEsuTUVEX0RPU0VfRk9STSIgYmFzZVR5cGU9IlN5c3RlbS5BbnkiIHJldHJpZXZhYmxlPSJ0cnVlIj4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IkRPU0VfRk9STV9SWENVSSIgdHlwZT0iU3lzdGVtLkNvZGUiLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IkRPU0VfRk9STV9OQU1FIiB0eXBlPSJTeXN0ZW0uU3RyaW5nIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJVUERBVEVfRFRNIiB0eXBlPSJTeXN0ZW0uRGF0ZVRpbWUiLz4NCiAgICA8L25zNDp0eXBlSW5mbz4NCiAgICA8bnM0OnR5cGVJbmZvIHhzaTp0eXBlPSJuczQ6Q2xhc3NJbmZvIiBuYW1lPSJPTVRLLk1FRF9ET1NFX0ZPUk1fR1JPVVAiIGJhc2VUeXBlPSJTeXN0ZW0uQW55IiByZXRyaWV2YWJsZT0idHJ1ZSI+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJET1NFX0ZPUk1fR1JPVVBfUlhDVUkiIHR5cGU9IlN5c3RlbS5Db2RlIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJET1NFX0ZPUk1fR1JPVVBfTkFNRSIgdHlwZT0iU3lzdGVtLlN0cmluZyIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iVVBEQVRFX0RUTSIgdHlwZT0iU3lzdGVtLkRhdGVUaW1lIi8+DQogICAgPC9uczQ6dHlwZUluZm8+DQogICAgPG5zNDp0eXBlSW5mbyB4c2k6dHlwZT0ibnM0OkNsYXNzSW5mbyIgbmFtZT0iT01USy5NRURfRFJVRyIgYmFzZVR5cGU9IlN5c3RlbS5BbnkiIHJldHJpZXZhYmxlPSJ0cnVlIj4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IkRSVUdfUlhDVUkiIHR5cGU9IlN5c3RlbS5Db2RlIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJEUlVHX1RZUEUiIHR5cGU9IlN5c3RlbS5TdHJpbmciLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IkRSVUdfTkFNRSIgdHlwZT0iU3lzdGVtLlN0cmluZyIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iRE9TRV9GT1JNX1JYQ1VJIiB0eXBlPSJTeXN0ZW0uQ29kZSIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iVVBEQVRFX0RUTSIgdHlwZT0iU3lzdGVtLkRhdGVUaW1lIi8+DQogICAgPC9uczQ6dHlwZUluZm8+DQogICAgPG5zNDp0eXBlSW5mbyB4c2k6dHlwZT0ibnM0OkNsYXNzSW5mbyIgbmFtZT0iT01USy5NRURfRFJVR19ET1NFX0ZPUk1fR1JPVVAiIGJhc2VUeXBlPSJTeXN0ZW0uQW55IiByZXRyaWV2YWJsZT0idHJ1ZSI+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJEUlVHX1JYQ1VJIiB0eXBlPSJTeXN0ZW0uQ29kZSIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iRE9TRV9GT1JNX0dST1VQX1JYQ1VJIiB0eXBlPSJTeXN0ZW0uQ29kZSIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iVVBEQVRFX0RUTSIgdHlwZT0iU3lzdGVtLkRhdGVUaW1lIi8+DQogICAgPC9uczQ6dHlwZUluZm8+DQogICAgPG5zNDp0eXBlSW5mbyB4c2k6dHlwZT0ibnM0OkNsYXNzSW5mbyIgbmFtZT0iT01USy5NRURfRFJVR19WQUxVRV9TRVQiIGJhc2VUeXBlPSJTeXN0ZW0uQW55IiByZXRyaWV2YWJsZT0idHJ1ZSI+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJWQUxVRV9TRVRfSUQiIHR5cGU9IlN5c3RlbS5JbnRlZ2VyIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJEUlVHX1JYQ1VJIiB0eXBlPSJTeXN0ZW0uQ29kZSIvPg0KICAgIDwvbnM0OnR5cGVJbmZvPg0KICAgIDxuczQ6dHlwZUluZm8geHNpOnR5cGU9Im5zNDpDbGFzc0luZm8iIG5hbWU9Ik9NVEsuTUVEX0RSVUdfV0lUSF9JTkdSRURJRU5UIiBiYXNlVHlwZT0iU3lzdGVtLkFueSIgcmV0cmlldmFibGU9InRydWUiPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iSU5HUkVESUVOVF9SWENVSSIgdHlwZT0iU3lzdGVtLkNvZGUiLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IkRSVUdfUlhDVUkiIHR5cGU9IlN5c3RlbS5Db2RlIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJVUERBVEVfRFRNIiB0eXBlPSJTeXN0ZW0uRGF0ZVRpbWUiLz4NCiAgICA8L25zNDp0eXBlSW5mbz4NCiAgICA8bnM0OnR5cGVJbmZvIHhzaTp0eXBlPSJuczQ6Q2xhc3NJbmZvIiBuYW1lPSJPTVRLLk1FRF9JTkdSRURJRU5UIiBiYXNlVHlwZT0iU3lzdGVtLkFueSIgcmV0cmlldmFibGU9InRydWUiPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iSU5HUkVESUVOVF9SWENVSSIgdHlwZT0iU3lzdGVtLkNvZGUiLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IklOR1JFRElFTlRfTkFNRSIgdHlwZT0iU3lzdGVtLlN0cmluZyIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iVVNFX1RPX1BPUFVMQVRFX0RCIiB0eXBlPSJTeXN0ZW0uSW50ZWdlciIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iU0tJUCIgdHlwZT0iU3lzdGVtLkludGVnZXIiLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IlVQREFURV9EVE0iIHR5cGU9IlN5c3RlbS5EYXRlVGltZSIvPg0KICAgIDwvbnM0OnR5cGVJbmZvPg0KICAgIDxuczQ6dHlwZUluZm8geHNpOnR5cGU9Im5zNDpDbGFzc0luZm8iIG5hbWU9Ik9NVEsuTUVEX0lOR1JFRElFTlRfSU5fQ0xBU1MiIGJhc2VUeXBlPSJTeXN0ZW0uQW55IiByZXRyaWV2YWJsZT0idHJ1ZSI+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJNRURfQ0xBU1NfSUQiIHR5cGU9IlN5c3RlbS5JbnRlZ2VyIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJJTkdSRURJRU5UX1JYQ1VJIiB0eXBlPSJTeXN0ZW0uQ29kZSIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iVVBEQVRFX0RUTSIgdHlwZT0iU3lzdGVtLkRhdGVUaW1lIi8+DQogICAgPC9uczQ6dHlwZUluZm8+DQogICAgPG5zNDp0eXBlSW5mbyB4c2k6dHlwZT0ibnM0OkNsYXNzSW5mbyIgbmFtZT0iT01USy5NRURfSU5HUkVESUVOVF9UWVBFIiBiYXNlVHlwZT0iU3lzdGVtLkFueSIgcmV0cmlldmFibGU9InRydWUiPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iSU5HUkVESUVOVF9SWENVSSIgdHlwZT0iU3lzdGVtLkNvZGUiLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IklOR1JFRElFTlRfVFlQRSIgdHlwZT0iU3lzdGVtLlN0cmluZyIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iVVBEQVRFX0RUTSIgdHlwZT0iU3lzdGVtLkRhdGVUaW1lIi8+DQogICAgPC9uczQ6dHlwZUluZm8+DQogICAgPG5zNDp0eXBlSW5mbyB4c2k6dHlwZT0ibnM0OkNsYXNzSW5mbyIgbmFtZT0iT01USy5NRURfU0NEQyIgYmFzZVR5cGU9IlN5c3RlbS5BbnkiIHJldHJpZXZhYmxlPSJ0cnVlIj4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IlNDRENfUlhDVUkiIHR5cGU9IlN5c3RlbS5Db2RlIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJTQ0RDX05BTUUiIHR5cGU9IlN5c3RlbS5TdHJpbmciLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IklOR1JFRElFTlRfUlhDVUkiIHR5cGU9IlN5c3RlbS5Db2RlIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJTVFJFTkdUSCIgdHlwZT0iU3lzdGVtLlN0cmluZyIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iU1RSRU5HVEhfVkFMVUUiIHR5cGU9IlN5c3RlbS5EZWNpbWFsIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJTVFJFTkdUSF9VTklUIiB0eXBlPSJTeXN0ZW0uU3RyaW5nIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJVUERBVEVfRFRNIiB0eXBlPSJTeXN0ZW0uRGF0ZVRpbWUiLz4NCiAgICA8L25zNDp0eXBlSW5mbz4NCiAgICA8bnM0OnR5cGVJbmZvIHhzaTp0eXBlPSJuczQ6Q2xhc3NJbmZvIiBuYW1lPSJPTVRLLk1FRF9TQ0RDX0ZPUl9EUlVHIiBiYXNlVHlwZT0iU3lzdGVtLkFueSIgcmV0cmlldmFibGU9InRydWUiPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iRFJVR19SWENVSSIgdHlwZT0iU3lzdGVtLkNvZGUiLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IlNDRENfUlhDVUkiIHR5cGU9IlN5c3RlbS5Db2RlIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJVUERBVEVfRFRNIiB0eXBlPSJTeXN0ZW0uRGF0ZVRpbWUiLz4NCiAgICA8L25zNDp0eXBlSW5mbz4NCiAgICA8bnM0OnR5cGVJbmZvIHhzaTp0eXBlPSJuczQ6Q2xhc3NJbmZvIiBuYW1lPSJPTVRLLlZBTFVFX1NFVCIgYmFzZVR5cGU9IlN5c3RlbS5BbnkiIHJldHJpZXZhYmxlPSJ0cnVlIj4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IlZBTFVFX1NFVF9JRCIgdHlwZT0iU3lzdGVtLkludGVnZXIiLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IkVYRUNVVEVfT1JERVIiIHR5cGU9IlN5c3RlbS5JbnRlZ2VyIi8+DQogICAgICAgIDxuczQ6ZWxlbWVudCBuYW1lPSJWQUxVRV9TRVRfTkFNRSIgdHlwZT0iU3lzdGVtLlN0cmluZyIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iREVTQ1JJUFRJT04iIHR5cGU9IlN5c3RlbS5TdHJpbmciLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IlNRTCIgdHlwZT0iU3lzdGVtLlN0cmluZyIvPg0KICAgICAgICA8bnM0OmVsZW1lbnQgbmFtZT0iQ09NTUVOVFMiIHR5cGU9IlN5c3RlbS5TdHJpbmciLz4NCiAgICAgICAgPG5zNDplbGVtZW50IG5hbWU9IlVQREFURV9EVE0iIHR5cGU9IlN5c3RlbS5EYXRlVGltZSIvPg0KICAgIDwvbnM0OnR5cGVJbmZvPg0KPC9uczQ6bW9kZWxJbmZvPg0K",
        "url": "elm/OMTK-modelinfo-0.1.0.xml"
      }
    ]
  }