import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-opioidcds-recommendation-04.json.html
// Opioid CDS Recommendation 4 Logic

export const mockLibrary15: Library = {
    "resourceType": "Library",
    "id": "opioidcds-recommendation-04",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-04</p><p><b>identifier</b>: OpioidCDS_REC_04 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #4</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic for prescribing extended-release/long-acting (ER/LA) opioids when starting a patient on opioids.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine the appropriateness of extended-release opioids with ambulatory abuse potential for the patient.</p><p><b>usage</b>: This library is used to notify the prescriber/user that immediate-release opioids are recommended when starting a patient on opioids.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>dataRequirement</b>: , </p><p><b>content</b>: </p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "OpioidCDS_REC_04"
      }
    ],
    "version": "0.1.0",
    "title": "Opioid CDS Logic for recommendation #4",
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
    "description": "Opioid decision support logic for prescribing extended-release/long-acting (ER/LA) opioids when starting a patient on opioids.",
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
    "purpose": "The purpose of this library is to determine the appropriateness of extended-release opioids with ambulatory abuse potential for the patient.",
    "usage": "This library is used to notify the prescriber/user that immediate-release opioids are recommended when starting a patient on opioids.",
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
      }
    ],
    "dataRequirement": [
      {
        "type": "MedicationRequest",
        "codeFilter": [
          {
            "path": "medicationCodeableConcept",
            "valueSet": "http://example.org/fhir/ValueSet/opioids-abused-in-ambulatory-care"
          }
        ]
      },
      {
        "type": "Encounter"
      }
    ],
    "content": [
      {
        "contentType": "application/elm+xml",
        "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjciIHN0YXJ0Q2hhcj0iNSIgZW5kTGluZT0iNjciIGVuZENoYXI9IjY4IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBjb2RlIHBhdGggbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCBmb3IgdGhlIHR5cGUgb2YgdGhlIHJldHJpZXZlIEZISVIuTWVkaWNhdGlvblJlcXVlc3QuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjciIHN0YXJ0Q2hhcj0iNSIgZW5kTGluZT0iNjciIGVuZENoYXI9IjY4IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijc4IiBzdGFydENoYXI9IjgzIiBlbmRMaW5lPSI3OCIgZW5kQ2hhcj0iMTI2IiBtZXNzYWdlPSJMaXN0LXZhbHVlZCBleHByZXNzaW9uIHdhcyBkZW1vdGVkIHRvIGEgc2luZ2xldG9uLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8aWRlbnRpZmllciBpZD0iT3Bpb2lkQ0RTX1NUVTRfUkVDXzA0IiB2ZXJzaW9uPSIwLjEuMCIvPgogICA8c2NoZW1hSWRlbnRpZmllciBpZD0idXJuOmhsNy1vcmc6ZWxtIiB2ZXJzaW9uPSJyMSIvPgogICA8dXNpbmdzPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iU3lzdGVtIiB1cmk9InVybjpobDctb3JnOmVsbS10eXBlczpyMSIvPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iRkhJUiIgdXJpPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB2ZXJzaW9uPSIzLjIuMCIvPgogICA8L3VzaW5ncz4KICAgPGluY2x1ZGVzPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iQ29tbW9uIiBwYXRoPSJPcGlvaWRDRFNfU1RVNF9Db21tb24iIHZlcnNpb249IjAuMS4wIi8+CiAgIDwvaW5jbHVkZXM+CiAgIDxwYXJhbWV0ZXJzPgogICAgICA8ZGVmIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPHBhcmFtZXRlclR5cGVTcGVjaWZpZXIgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgPGVsZW1lbnRUeXBlIG5hbWU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9wYXJhbWV0ZXJUeXBlU3BlY2lmaWVyPgogICAgICA8L2RlZj4KICAgPC9wYXJhbWV0ZXJzPgogICA8c3RhdGVtZW50cz4KICAgICAgPGRlZiBuYW1lPSJQYXRpZW50IiBjb250ZXh0PSJQYXRpZW50Ij4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlNpbmdsZXRvbkZyb20iPgogICAgICAgICAgICA8b3BlcmFuZCBkYXRhVHlwZT0iZmhpcjpQYXRpZW50IiB4c2k6dHlwZT0iUmV0cmlldmUiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJbmNsdXNpb24gUGVyaW9kIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gbG93Q2xvc2VkPSJ0cnVlIiBoaWdoQ2xvc2VkPSJ0cnVlIiB4c2k6dHlwZT0iSW50ZXJ2YWwiPgogICAgICAgICAgICA8bG93IHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb2RheSIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iOTEiIHVuaXQ9ImRheXMiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICA8L2xvdz4KICAgICAgICAgICAgPGhpZ2ggeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvZGF5Ii8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlPSIxIiB1bml0PSJkYXlzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9oaWdoPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkVuY291bnRlciBQZXJpb2QiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb3dDbG9zZWQ9InRydWUiIGhpZ2hDbG9zZWQ9InRydWUiIHhzaTp0eXBlPSJJbnRlcnZhbCI+CiAgICAgICAgICAgIDxsb3cgeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvZGF5Ii8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlPSIxMiIgdW5pdD0ibW9udGhzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iMSIgdW5pdD0iZGF5cyIgeHNpOnR5cGU9IlF1YW50aXR5Ii8+CiAgICAgICAgICAgIDwvbG93PgogICAgICAgICAgICA8aGlnaCB4c2k6dHlwZT0iU3VidHJhY3QiPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9kYXkiLz4KICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjEiIHVuaXQ9ImRheXMiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICA8L2hpZ2g+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IFRyaWdnZXIgRXZlbnQgUHJlc2NyaXB0aW9ucyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9InRyaWdnZXJTY3JpcHRzIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0icnhOb3JtQ29kZSI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IlRvQ29kZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ibWVkaWNhdGlvbiIgc2NvcGU9InRyaWdnZXJTY3JpcHRzIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJJc09waW9pZFdpdGhBbWJ1bGF0b3J5QWJ1c2VQb3RlbnRpYWwiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InJ4Tm9ybUNvZGUiIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IklzTG9uZ0FjdGluZ09waW9pZCIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0icnhOb3JtQ29kZSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgVHJpZ2dlciBUcmlnZ2VyIEV2ZW50IFByZXNjcmlwdGlvbiBJZHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJ0cmlnZ2VyU2NyaXB0cyI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IkdldCBUcmlnZ2VyIEV2ZW50IFByZXNjcmlwdGlvbnMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8bGV0IGlkZW50aWZpZXI9ImNvZGVTdHJpbmciPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPHJldHVybj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iY29kZVN0cmluZyIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImlkIiBzY29wZT0idHJpZ2dlclNjcmlwdHMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IiAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJHZXQgVHJpZ2dlciBFdmVudCBQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9Ik9waW9pZCB3aXRoIEFtYnVsYXRvcnkgQ2FyZSBBYnVzZSBQb3RlbnRpYWwgaW4gUGFzdCA5MCBEYXlzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9Im9yZGVycyI+CiAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGRhdGFUeXBlPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiBjb2RlUHJvcGVydHk9Im1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQiIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgICAgIDxjb2RlcyBuYW1lPSJBbWJ1bGF0b3J5IEFidXNlIFBvdGVudGlhbCBPcGlvaWRzIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJEYXRlRnJvbSI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImF1dGhvcmVkT24iIHNjb3BlPSJvcmRlcnMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iSW5jbHVzaW9uIFBlcmlvZCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkluY2x1c2lvbiBDcml0ZXJpYSIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Ik9waW9pZCB3aXRoIEFtYnVsYXRvcnkgQ2FyZSBBYnVzZSBQb3RlbnRpYWwgaW4gUGFzdCA5MCBEYXlzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9ImVuY291bnRlcnMiPgogICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBkYXRhVHlwZT0iZmhpcjpFbmNvdW50ZXIiIHhzaTp0eXBlPSJSZXRyaWV2ZSIvPgogICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJEYXRlRnJvbSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InN0YXJ0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InBlcmlvZCIgc2NvcGU9ImVuY291bnRlcnMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkVuY291bnRlciBQZXJpb2QiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBJbmRpY2F0b3IiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0id2FybmluZyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IFN1bW1hcnkiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUmVjb21tZW5kIHVzZSBvZiBpbW1lZGlhdGUtcmVsZWFzZSBvcGlvaWRzIGluc3RlYWQgb2YgZXh0ZW5kZWQgcmVsZWFzZS9sb25nIGFjdGluZyBvcGlvaWRzIHdoZW4gc3RhcnRpbmcgcGF0aWVudCBvbiBvcGlvaWRzLiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IERldGFpbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJUaGUgZm9sbG93aW5nIG1lZGljYXRpb24gcmVxdWVzdHMocykgcmVsZWFzZSByYXRlcyBzaG91bGQgYmUgcmUtZXZhbHVhdGVkOiAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iR2V0IFRyaWdnZXIgVHJpZ2dlciBFdmVudCBQcmVzY3JpcHRpb24gSWRzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgIDwvc3RhdGVtZW50cz4KPC9saWJyYXJ5Pgo="
      }
    ]
  }