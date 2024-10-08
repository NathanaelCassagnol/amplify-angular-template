import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/diagnosticreport-hla-genetics-results-example.json.html
// An example of a HLA genotyping results report

export const mockDiagnosticReport17Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "hla-1",
    "type": "transaction",
    "entry": [
      {
        "fullUrl": "urn:uuid:b0a4b18e-94e7-4b1b-8031-c7ae4bdd8db9",
        "resource": {
          "resourceType": "DiagnosticReport",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<h3>HLA-A,-B,-C genotyping report for Mary Chalmers (MRN:12345)</h3>\n\t\t\t\t\t\t<pre>\n  LOCUS   ALLELE 1            ALLELE 2\n  HLA-A   HLA-A:01:01G        HLA-A*01:02\n  HLA-B   HLA-B*15:01:01G     HLA-B*57:01:01G\n  HLA-C   HLA-C*01:02:01G     HLA-C*03:04:01G\n                </pre>\n\t\t\t\t\t\t<p>Allele assignments based on IMGT/HLA 3.23</p>\n\t\t\t\t\t\t<p>Effective date: 2015-12-15</p>\n\t\t\t\t\t\t<p>Method: Sequencing of exons 2 and 3 of HLA Class I genes</p>\n\t\t\t\t\t\t<p>Lab: aTypingLab Inc</p>\n\t\t\t\t\t\t<p>Note: Please refer the <a href=\"genomics.html#hla\">implementation guide </a> for more explanation on this\n                carefully organized bundle example.</p>\n\t\t\t\t\t\t<pre>\n  Bob Milius - NMDP - 2016-12-01\n\n  Transaction bundle that creates and links:\n  + DiagnosticReport summarizing genotyping for HLA-A,-B,-C typing of patient(donor)\n  + Obervations for each genotype\n  + Observations for each allele\n  + Sequences for exons 2 and 3 for HLA-A,-B, -C\n\n  The endpoints of the following resources are hardcoded into this transaction bundle\n  because these are presumed to already exist when developing the DiagnosticRequest\n  which was to generate this report bundle:\n\n  Patient/119 (potential donor)\n  Specimen/120 (buccal swab)\n  Organization/68  (typing lab)\n  ServiceRequest/123  (report is based on this request)\n                </pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-allele-database",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                    "version": "3.23"
                  }
                ],
                "text": "IMGT/HLA 3.23"
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-glstring",
              "extension": [
                {
                  "url": "text",
                  "valueString": "HLA-A:01:01G+HLA-A*01:02^HLA-B*15:01:01:01+HLA-B*57:01:01^HLA-C*01:02:01+HLA-C*03:04:01:01"
                },
                {
                  "url": "uri",
                  "valueUri": "https://gl.nmdp.org/imgt-hla/3.23.0/multilocus-unphased-genotype/i"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-method",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.ncbi.nlm.nih.gov/gtr/",
                    "code": "GTR000000000.0"
                  }
                ],
                "text": "Next Generation Sequencing of exons 2 and 3 of HLA Class I genes"
              }
            }
          ],
          "basedOn": [
            {
              "reference": "ServiceRequest/123"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "GE",
                  "display": "Genetics"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "13303-3",
                "display": "HLA-A+​B+​C (class I) [Type]"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "issued": "2016-12-15T14:15:30-06:00",
          "performer": [
            {
              "reference": "Organization/68",
              "display": "aTypingLab Inc"
            }
          ],
          "specimen": [
            {
              "reference": "Specimen/67",
              "display": "buccal swab from Mary Chalmers"
            }
          ],
          "result": [
            {
              "reference": "urn:uuid:49a86246-4004-42eb-9bdc-f542f93f9228",
              "display": "HLA-A: HLA-A:01:01G+HLA-A*01:02"
            },
            {
              "reference": "urn:uuid:60613a43-c4cb-4502-b3e2-cf9215feaa70",
              "display": "HLA-B: HLA-B*15:01:01G+HLA-B*57:01:01G"
            },
            {
              "reference": "urn:uuid:0e0a780e-4486-4cd0-bfae-7243c579f208",
              "display": "HLA-C: HLA-C*01:02:01G+HLA-C*03:04:01G"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "DiagnosticReport"
        }
      },
      {
        "fullUrl": "urn:uuid:8200dab6-18a2-4550-b913-a7db480c0804",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-A*01:01:01:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00001"
                }
              ],
              "text": "HLA-A*01:01:01:01"
            },
            "windowStart": 503,
            "windowEnd": 773
          },
          "observedSeq": "GCTCCCACTCCATGAGGTATTTCTTCACATCCGTGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCCGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGCCAGAAGATGGAGCCGCGGGCGCCGTGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCAGGAGACACGGAATATGAAGGCCCACTCACAGACTGACCGAGCGAACCTGGGGACCCTGCGCGGCTACTACAACCAGAGCGAGGACG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:7c393185-f15c-45bc-a714-c0fdbea32675",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-A*01:01:01:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00001"
                }
              ],
              "text": "HLA-A*01:01:01:01"
            },
            "windowStart": 1014,
            "windowEnd": 1290
          },
          "observedSeq": "GTTCTCACACCATCCAGATAATGTATGGCTGCGACGTGGGGCCGGACGGGCGCTTCCTCCGCGGGTACCGGCAGGACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCTTGGACCGCGGCGGACATGGCAGCTCAGATCACCAAGCGCAAGTGGGAGGCGGTCCATGCGGCGGAGCAGCGGAGAGTCTACCTGGAGGGCCGGTGCGTGGACGGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCACGG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:65c85f14-c3a0-4b72-818f-820e04fcc621",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-A*01:02, exon 2&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00002"
                }
              ],
              "text": "HLA-A*01:02"
            },
            "windowStart": 503,
            "windowEnd": 773
          },
          "observedSeq": "GCTCCCACTCCATGAGGTATTTCTCCACATCCGTGTCCCGGCCCGGCAGTGGAGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGCCAGAAGATGGAGCCGCGGGCGCCGTGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCAGGAGACACGGAATATGAAGGCCCACTCACAGACTGACCGAGCGAACCTGGGGACCCTGCGCGGCTACTACAACCAGAGCGAGGACG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:fbba9fe7-0ece-4ec1-9233-a437a8d242a0",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-A*01:02, exon 3&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00002"
                }
              ],
              "text": "HLA-A*01:02"
            },
            "windowStart": 1014,
            "windowEnd": 1290
          },
          "observedSeq": "GTTCTCACACCATCCAGATAATGTATGGCTGCGACGTGGGGCCGGACGGGCGCTTCCTCCGCGGGTACCGGCAGGACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCTTGGACCGCGGCGGACATGGCAGCTCAGATCACCAAGCGCAAGTGGGAGGCGGTCCATGCGGCGGAGCAGCGGAGAGTCTACCTGGAGGGCCGGTGCGTGGACGGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCACGG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:cbabf93e-1b4b-46f2-ba1e-d84862670670",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-B*15:01:01:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00162"
                }
              ],
              "text": "HLA-B*15:01:01:01"
            },
            "windowStart": 486,
            "windowEnd": 756
          },
          "observedSeq": "GCTCCCACTCCATGAGGTATTTCTACACCGCCATGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACCCAGTTCGTGAGGTTCGACAGCGACGCCGCGAGTCCGAGGATGGCGCCCCGGGCGCCATGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGATCTCCAAGACCAACACACAGACTTACCGAGAGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:c233ad3d-1572-48d6-93da-0a583535e138",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-B*15:01:01:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00162"
                }
              ],
              "text": "HLA-B*15:01:01:01"
            },
            "windowStart": 1001,
            "windowEnd": 1277
          },
          "observedSeq": "GGTCTCACACCCTCCAGAGGATGTACGGCTGCGACGTGGGGCCGGACGGGCGCCTCCTCCGCGGGCATGACCAGTCCGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGAGCTCCTGGACCGCGGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGTGGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:05fa52d7-5c67-460a-8722-d3460b24d6fe",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-B*57:01:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00381"
                }
              ],
              "text": "HLA-B*57:01:01"
            },
            "windowStart": 485,
            "windowEnd": 755
          },
          "observedSeq": "GCTCCCACTCCATGAGGTATTTCTACACCGCCATGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACCCAGTTCGTGAGGTTCGACAGCGACGCCGCGAGTCCGAGGATGGCGCCCCGGGCGCCATGGATAGAGCAGGAGGGGCCGGAGTATTGGGACGGGGAGACACGGAACATGAAGGCCTCCGCGCAGACTTACCGAGAGAACCTGCGGATCGCGCTCCGCTACTACAACCAGAGCGAGGCCG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:db69e549-6267-4777-b4b9-8813f3329309",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-B*57:01:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00381"
                }
              ],
              "text": "HLA-B*57:01:01"
            },
            "windowStart": 1001,
            "windowEnd": 1277
          },
          "observedSeq": "GGTCTCACATCATCCAGGTGATGTATGGCTGCGACGTGGGGCCGGACGGGCGCCTCCTCCGCGGGCATGACCAGTCCGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGAGCTCCTGGACCGCGGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGTGGCGGAGCAGCTGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:bb55c2bc-5ad2-4bc1-8ff3-c407d06b12d0",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-C*01:02:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00401"
                }
              ],
              "text": "HLA-C*01:02:01"
            },
            "windowStart": 486,
            "windowEnd": 756
          },
          "observedSeq": "GCTCCCACTCCATGAAGTATTTCTTCACATCCGTGTCCCGGCCTGGCCGCGGAGAGCCCCGCTTCATCTCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGTCCGAGAGGGGAGCCGCGGGCGCCGTGGGTGGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGAAGTACAAGCGCCAGGCACAGACTGACCGAGTGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:46938bb2-0486-4e87-bfd3-89aab2d5e22f",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-C*01:02:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00401"
                }
              ],
              "text": "HLA-C*01:02:01"
            },
            "windowStart": 1002,
            "windowEnd": 1278
          },
          "observedSeq": "GGTCTCACACCCTCCAGTGGATGTGTGGCTGCGACCTGGGGCCCGACGGGCGCCTCCTCCGCGGGTATGACCAGTACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCCTGGACCGCCGCGGACACCGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGCGGAGAGCCTACCTGGAGGGCACGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:2ae2ff34-279e-43c2-9018-b054fd3fc1ce",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-C*03:04:01:01, exon 2&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00413"
                }
              ],
              "text": "HLA-C*03:04:01:01"
            },
            "windowStart": 486,
            "windowEnd": 756
          },
          "observedSeq": "GCTCCCACTCCATGAGGTATTTCTACACCGCTGTGTCCCGGCCCGGCCGCGGGGAGCCCCACTTCATCGCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGTCCGAGAGGGGAGCCGCGGGCGCCGTGGGTGGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGAAGTACAAGCGCCAGGCACAGACTGACCGAGTGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:19153ef1-68c6-47a2-9676-c4eefbd39af9",
        "resource": {
          "resourceType": "MolecularSequence",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>&quot;HLA-C*03:04:01:01, exon 3&quot;</pre>\n\t\t\t\t\t</div>"
          },
          "type": "dna",
          "coordinateSystem": 0,
          "patient": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "referenceSeq": {
            "referenceSeqId": {
              "coding": [
                {
                  "system": "http://www.ebi.ac.uk/ipd/imgt/hla",
                  "version": "3.23",
                  "code": "HLA00413"
                }
              ],
              "text": "HLA-C*03:04:01:01"
            },
            "windowStart": 1001,
            "windowEnd": 1277
          },
          "observedSeq": "GGTCTCACATCATCCAGAGGATGTATGGCTGCGACGTGGGGCCCGACGGGCGCCTCCTCCGCGGGTATGACCAGTACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGATCTGCGCTCCTGGACCGCCGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGCTGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGAAGAATGGGAAGGAGACGCTGCAGCGCGCGG"
        },
        "request": {
          "method": "POST",
          "url": "MolecularSequence"
        }
      },
      {
        "fullUrl": "urn:uuid:b7765bbf-df40-486a-9f2f-404309643de6",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-A:01:01:01G</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4931",
                    "display": "HLA-A"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "57290-9",
                "display": "HLA-A [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:8200dab6-18a2-4550-b913-a7db480c0804",
              "display": "HLA-A*01:01:01:01, exon 2"
            },
            {
              "reference": "urn:uuid:7c393185-f15c-45bc-a714-c0fdbea32675",
              "display": "HLA-A*01:01:01:01, exon 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      },
      {
        "fullUrl": "urn:uuid:d98d92a7-0e86-4ae5-b036-b7e1bba6ec32",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-A*01:02</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4931",
                    "display": "HLA-A"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "57290-9",
                "display": "HLA-A [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:65c85f14-c3a0-4b72-818f-820e04fcc621",
              "display": "HLA-A*01:02, exon 2"
            },
            {
              "reference": "urn:uuid:fbba9fe7-0ece-4ec1-9233-a437a8d242a0",
              "display": "HLA-A*01:02, exon 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      },
      {
        "fullUrl": "urn:uuid:49a86246-4004-42eb-9bdc-f542f93f9228",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-A:01:01G+HLA-A*01:02</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4931",
                    "display": "HLA-A"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "57290-9",
                "display": "HLA-A [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:b7765bbf-df40-486a-9f2f-404309643de6",
              "display": "HLA-A*01:01:01G, exons 2 and 3"
            },
            {
              "reference": "urn:uuid:d98d92a7-0e86-4ae5-b036-b7e1bba6ec32",
              "display": "HLA-A*01:02, exons 2 and 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      },
      {
        "fullUrl": "urn:uuid:e2092243-2970-49d2-a90f-b90d1d49715a",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-B*15:01:01G</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4932",
                    "display": "HLA-B"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "57291-7",
                "display": "HLA-B [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:cbabf93e-1b4b-46f2-ba1e-d84862670670",
              "display": "HLA-B*15:01:01:01, exon 2"
            },
            {
              "reference": "urn:uuid:c233ad3d-1572-48d6-93da-0a583535e138",
              "display": "HLA-B*15:01:01:01, exon 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      },
      {
        "fullUrl": "urn:uuid:792be53e-d4fb-4887-a367-815ef6c706e5",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-B*57:01:01G</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4932",
                    "display": "HLA-B"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "57291-7",
                "display": "HLA-B [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:05fa52d7-5c67-460a-8722-d3460b24d6fe",
              "display": "HLA-B*57:01:01, exon 2"
            },
            {
              "reference": "urn:uuid:db69e549-6267-4777-b4b9-8813f3329309",
              "display": "HLA-B*57:01:01, exon 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      },
      {
        "fullUrl": "urn:uuid:60613a43-c4cb-4502-b3e2-cf9215feaa70",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-B*15:01:01G+HLA-B*57:01:01G</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4932",
                    "display": "HLA-B"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "57291-7",
                "display": "HLA-B [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:e2092243-2970-49d2-a90f-b90d1d49715a",
              "display": "HLA-B*15:01:01G, exons 2 and 3"
            },
            {
              "reference": "urn:uuid:792be53e-d4fb-4887-a367-815ef6c706e5",
              "display": "HLA-B*57:01:01G, exons 2 and 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      },
      {
        "fullUrl": "urn:uuid:709c5315-9403-4867-9d82-0b953836665f",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-C*01:02:01</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4933",
                    "display": "HLA-C"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "77636-9",
                "display": "HLA-C [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:bb55c2bc-5ad2-4bc1-8ff3-c407d06b12d0",
              "display": "HLA-C*01:02:01, exon 2"
            },
            {
              "reference": "urn:uuid:46938bb2-0486-4e87-bfd3-89aab2d5e22f",
              "display": "HLA-C*01:02:01, exon 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      },
      {
        "fullUrl": "urn:uuid:8b2aa21c-1426-4717-8ab0-a84d83df7d47",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-C*03:04:01:01</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4933",
                    "display": "HLA-C"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "77636-9",
                "display": "HLA-C [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:2ae2ff34-279e-43c2-9018-b054fd3fc1ce",
              "display": "HLA-C*03:04:01:01, exon 2"
            },
            {
              "reference": "urn:uuid:19153ef1-68c6-47a2-9676-c4eefbd39af9",
              "display": "HLA-C*03:04:01:01, exon 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      },
      {
        "fullUrl": "urn:uuid:0e0a780e-4486-4cd0-bfae-7243c579f208",
        "resource": {
          "resourceType": "Observation",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t<pre>HLA-C*01:02:01G+HLA-C*03:04:01G</pre>\n\t\t\t\t\t</div>"
          },
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.genenames.org",
                    "code": "HGNC:4933",
                    "display": "HLA-C"
                  }
                ]
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "LA6683-2",
                    "display": "germline"
                  }
                ]
              }
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "77636-9",
                "display": "HLA-C [Type] by High resolution"
              }
            ]
          },
          "subject": {
            "reference": "Patient/119",
            "display": "Mary Chalmers"
          },
          "effectiveDateTime": "2016-12-15",
          "specimen": {
            "reference": "Specimen/120",
            "display": "buccal swab from Mary Chalmers"
          },
          "derivedFrom": [
            {
              "reference": "urn:uuid:709c5315-9403-4867-9d82-0b953836665f",
              "display": "HLA-C*01:02:01G, exons 2 and 3"
            },
            {
              "reference": "urn:uuid:8b2aa21c-1426-4717-8ab0-a84d83df7d47",
              "display": "HLA-C*03:04:01G, exons 2 and 3"
            }
          ]
        },
        "request": {
          "method": "POST",
          "url": "Observation"
        }
      }
    ]
  }