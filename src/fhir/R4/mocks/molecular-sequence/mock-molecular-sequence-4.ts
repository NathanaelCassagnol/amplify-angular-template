import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-example-pgx-1.json.html
// Example of a single varaint on a reference MolecularSequence related to a haplotype observation in PGx example

export const mockMolecularSequence4: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "example-pgx-1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-pgx-1</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>Orientation</b></td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>sense</td><td>NG_007726.3 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NG_007726.3' = 'NG_007726.3)</span></td><td>watson</td><td>55227970</td><td>55227980</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>VariantPointer</b></td></tr><tr><td>*</td><td>55227976</td><td>55227977</td><td>G</td><td>T</td><td><a>Target Haplotype Observation</a></td></tr></table></div>"
    },
    "type": "dna",
    "coordinateSystem": 0,
    "patient": {
      "reference": "Patient/example"
    },
    "referenceSeq": {
      "orientation": "sense",
      "referenceSeqId": {
        "coding": [
          {
            "system": "http://www.ncbi.nlm.nih.gov/nuccore",
            "code": "NG_007726.3"
          }
        ]
      },
      "strand": "watson",
      "windowStart": 55227970,
      "windowEnd": 55227980
    },
    "variant": [
      {
        "start": 55227976,
        "end": 55227977,
        "observedAllele": "G",
        "referenceAllele": "T",
        "variantPointer": {
          "reference": "Observation/example-haplotype1",
          "display": "Target Haplotype Observation"
        }
      }
    ]
  }