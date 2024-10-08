import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-graphic-example-4.json.html
// MolecularSequence Graphic example-4

export const mockMolecularSequence11: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "graphic-example-4",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-4</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>Chromosome</b></td><td><b>GenomeBuild</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>chromosome 2 <span>(Details : {http://terminology.hl7.org/CodeSystem/chromosome-human code '2' = 'chromosome 2', given as 'chromosome 2'})</span></td><td>GRCh 38</td><td>watson</td><td>128273736</td><td>128273740</td></tr></table></div>"
    },
    "type": "dna",
    "coordinateSystem": 0,
    "referenceSeq": {
      "chromosome": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/chromosome-human",
            "code": "2",
            "display": "chromosome 2"
          }
        ]
      },
      "genomeBuild": "GRCh 38",
      "strand": "watson",
      "windowStart": 128273736,
      "windowEnd": 128273740
    }
  }