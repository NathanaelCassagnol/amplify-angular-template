import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-example-TPMT-one.json.html
// Example of a TPMT SNP data that support a haplotype observation

export const mockMolecularSequence6: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "example-TPMT-one",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-TPMT-one</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NT_007592.15 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NT_007592.15' = 'NT_007592.15)</span></td><td>watson</td><td>18130918</td><td>18143955</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>18139214</td><td>18139214</td><td>A</td><td>G</td></tr></table><p><b>observedSeq</b>: T-C-C-C-A-C-C-C</p></div>"
    },
    "type": "dna",
    "coordinateSystem": 1,
    "patient": {
      "reference": "Patient/example"
    },
    "referenceSeq": {
      "referenceSeqId": {
        "coding": [
          {
            "system": "http://www.ncbi.nlm.nih.gov/nuccore",
            "code": "NT_007592.15"
          }
        ]
      },
      "strand": "watson",
      "windowStart": 18130918,
      "windowEnd": 18143955
    },
    "variant": [
      {
        "start": 18139214,
        "end": 18139214,
        "observedAllele": "A",
        "referenceAllele": "G"
      }
    ],
    "observedSeq": "T-C-C-C-A-C-C-C"
  }