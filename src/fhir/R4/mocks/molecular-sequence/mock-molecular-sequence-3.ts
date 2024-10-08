import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-complex-variant.json.html
// Example of representing complex variants in MolecularSequence resource

export const mockMolecularSequence3: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "sequence-complex-variant",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: sequence-complex-variant</p><p><b>identifier</b>: ?? (OFFICIAL)</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 1</p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>device</b>: 12 lead EKG Device Metric</p><p><b>performer</b>: <a>HL7</a></p><p><b>quantity</b>: 25</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000002.12 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000002.12' = 'NC_000002.12)</span></td><td>watson</td><td>128273724</td><td>128273754</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>Cigar</b></td></tr><tr><td>*</td><td>128273724</td><td>128273736</td><td>CTCATTGT</td><td>CTCCATTGCATGCGTT</td><td>3M1D4M6N2M</td></tr></table><p><b>readCoverage</b>: 1</p><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>DatasetId</b></td><td><b>ReadsetId</b></td></tr><tr><td>*</td><td>other</td><td>Ensembl</td><td>v1beta2</td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official"
      }
    ],
    "type": "dna",
    "coordinateSystem": 1,
    "specimen": {
      "reference": "Specimen/genetics-example1-somatic",
      "display": "Molecular Specimen ID: MLD45-Z4-1234"
    },
    "device": {
      "display": "12 lead EKG Device Metric"
    },
    "performer": {
      "reference": "Organization/hl7",
      "display": "HL7"
    },
    "quantity": {
      "value": 25
    },
    "referenceSeq": {
      "referenceSeqId": {
        "coding": [
          {
            "system": "http://www.ncbi.nlm.nih.gov/nuccore",
            "code": "NC_000002.12"
          }
        ]
      },
      "strand": "watson",
      "windowStart": 128273724,
      "windowEnd": 128273754
    },
    "variant": [
      {
        "start": 128273724,
        "end": 128273736,
        "observedAllele": "CTCATTGT",
        "referenceAllele": "CTCCATTGCATGCGTT",
        "cigar": "3M1D4M6N2M"
      }
    ],
    "readCoverage": 1,
    "repository": [
      {
        "type": "other",
        "datasetId": "Ensembl",
        "readsetId": "v1beta2"
      }
    ]
  }