import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-graphic-example-5.json.html
// MolecularSequence Graphic example-5

export const mockMolecularSequence12: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "graphic-example-5",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-5</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000002.12 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000002.12' = 'NC_000002.12)</span></td><td>watson</td><td>128273732</td><td>128273736</td></tr></table></div>"
    },
    "type": "dna",
    "coordinateSystem": 0,
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
      "windowStart": 128273732,
      "windowEnd": 128273736
    }
  }