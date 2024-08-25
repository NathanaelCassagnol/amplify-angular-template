import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-opioidcds-recommendation-05.json.html
// Opioid CDS Recommendation 5 Logic

export const mockLibrary16: Library = {
    "resourceType": "Library",
    "id": "opioidcds-recommendation-05",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-05</p><p><b>identifier</b>: OpioidCDS_REC_05 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #5</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid Decision Support Logic for use in implementing CDC Opioid Prescribing Guidelines.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: This library works in concert with the OMTK logic library to provide decision support for Morphine Milligram Equivalence calculations and dynamic value resolution.</p><p><b>usage</b>: This library is to notify the prescriber/user whether the current prescription exceeds the recommended MME.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , , </p><p><b>dataRequirement</b>: </p><p><b>content</b>: </p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "OpioidCDS_REC_05"
      }
    ],
    "version": "0.1.0",
    "title": "Opioid CDS Logic for recommendation #5",
    "status": "active",
    "experimental": false,
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/library-type",
          "code": "logic-library",
          "display": "Logic Library"
        }
      ]
    },
    "date": "2018-03-25T13:49:09-06:00",
    "publisher": "Centers for Disease Control and Prevention (CDC)",
    "description": "Opioid Decision Support Logic for use in implementing CDC Opioid Prescribing Guidelines.",
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
    "purpose": "This library works in concert with the OMTK logic library to provide decision support for Morphine Milligram Equivalence calculations and dynamic value resolution.",
    "usage": "This library is to notify the prescriber/user whether the current prescription exceeds the recommended MME.",
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
    "relatedArtifact": [
      {
        "type": "documentation",
        "display": "CDC guideline for prescribing opioids for chronic pain",
        "url": "https://guidelines.gov/summaries/summary/50153/cdc-guideline-for-prescribing-opioids-for-chronic-pain---united-states-2016#420"
      },
      {
        "type": "depends-on",
        "resource": "Library/opioidcds-common"
      },
      {
        "type": "documentation",
        "display": "MME Conversion Tables",
        "url": "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf"
      }
    ],
    "dataRequirement": [
      {
        "id": "medications",
        "type": "MedicationRequest",
        "codeFilter": [
          {
            "path": "status",
            "code": [
              {
                "code": "active"
              }
            ]
          },
          {
            "path": "category",
            "code": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                "code": "outpatient"
              }
            ]
          }
        ]
      }
    ],
    "content": [
      {
        "contentType": "application/elm+xml",
        "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxpZGVudGlmaWVyIGlkPSJPcGlvaWRDRFNfU1RVNCIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPHNjaGVtYUlkZW50aWZpZXIgaWQ9InVybjpobDctb3JnOmVsbSIgdmVyc2lvbj0icjEiLz4KICAgPHVzaW5ncz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IlN5c3RlbSIgdXJpPSJ1cm46aGw3LW9yZzplbG0tdHlwZXM6cjEiLz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IkZISVIiIHVyaT0iaHR0cDovL2hsNy5vcmcvZmhpciIgdmVyc2lvbj0iMy4yLjAiLz4KICAgPC91c2luZ3M+CiAgIDxpbmNsdWRlcz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9Ik1NRUNvbW1vbiIgcGF0aD0iT3Bpb2lkQ0RTX1NUVTRfQ29tbW9uIiB2ZXJzaW9uPSIwLjEuMCIvPgogICA8L2luY2x1ZGVzPgogICA8cGFyYW1ldGVycz4KICAgICAgPGRlZiBuYW1lPSJVc2VySUQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8cGFyYW1ldGVyVHlwZVNwZWNpZmllciBuYW1lPSJ0OlN0cmluZyIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJDb250ZXh0UHJlc2NyaXB0aW9ucyIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxwYXJhbWV0ZXJUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgIDxlbGVtZW50VHlwZSBuYW1lPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvcGFyYW1ldGVyVHlwZVNwZWNpZmllcj4KICAgICAgPC9kZWY+CiAgIDwvcGFyYW1ldGVycz4KICAgPHN0YXRlbWVudHM+CiAgICAgIDxkZWYgbmFtZT0iUGF0aWVudCIgY29udGV4dD0iUGF0aWVudCI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6UGF0aWVudCIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IEFjdGl2ZSBQcmVzY3JpcHRpb25zIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iYWN0aXZlUngiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFcXVhbCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InN0YXR1cyIgc2NvcGU9ImFjdGl2ZVJ4IiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iYWN0aXZlIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFcXVhbCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImNvZGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iRmxhdHRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9IiR0aGlzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0iY2F0ZWdvcnkiIHNjb3BlPSJhY3RpdmVSeCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iJHRoaXMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJldHVybj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0iY29kaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IiR0aGlzIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJvdXRwYXRpZW50IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVG90YWwgTU1FIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iVG90YWxNTUUiIGxpYnJhcnlOYW1lPSJNTUVDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJVbmlvbiI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iUGFyYW1ldGVyUmVmIi8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkdldCBBY3RpdmUgUHJlc2NyaXB0aW9ucyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IklzIE1NRSA1MCBPciBNb3JlPyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJHcmVhdGVyT3JFcXVhbCI+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvdGFsIE1NRSIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjUwIiB1bml0PSJtZy9kIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgSW5kaWNhdG9yIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Indhcm5pbmciIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBTdW1tYXJ5IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkhpZ2ggcmlzayBmb3Igb3Bpb2lkIG92ZXJkb3NlIC0gIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQ2FzZSI+CiAgICAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgICAgPHdoZW4geHNpOnR5cGU9IkdyZWF0ZXJPckVxdWFsIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iVG90YWwgTU1FIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb0RlY2ltYWwiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjkwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvd2hlbj4KICAgICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9InRhcGVyIG5vdyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgICAgPGVsc2UgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9ImNvbnNpZGVyIHRhcGVyaW5nIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IERldGFpbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJUb3RhbCBtb3JwaGluZSBtaWxsaWdyYW0gZXF1aXZhbGVudCAoTU1FKSBpcyAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb1N0cmluZyI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvdGFsIE1NRSIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIuIFRhcGVyIHRvIGxlc3MgdGhhbiA1MC4iIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgIDwvc3RhdGVtZW50cz4KPC9saWJyYXJ5Pgo="
      }
    ]
  }