var notes = [
  {
   "begin": "0.000",
   "end": "2.680",
   "id": "f000001",
   "language": "en",
   "lines": [
    "1"
   ]
  },
  {
   "begin": "2.680",
   "end": "5.880",
   "id": "f000002",
   "language": "en",
   "lines": [
    "From fairest creatures we desire increase,"
   ]
  },
  {
   "begin": "5.880",
   "end": "9.240",
   "id": "f000003",
   "language": "en",
   "lines": [
    "That thereby beauty's rose might never die,"
   ]
  },
  {
   "begin": "9.240",
   "end": "11.760",
   "id": "f000004",
   "language": "en",
   "lines": [
    "But as the riper should by time decease,"
   ]
  },
  {
   "begin": "11.760",
   "end": "14.440",
   "id": "f000005",
   "language": "en",
   "lines": [
    "His tender heir might bear his memory:"
   ]
  },
  {
   "begin": "14.440",
   "end": "18.560",
   "id": "f000006",
   "language": "en",
   "lines": [
    "But thou contracted to thine own bright eyes,"
   ]
  },
  {
   "begin": "18.560",
   "end": "22.280",
   "id": "f000007",
   "language": "en",
   "lines": [
    "Feed'st thy light's flame with self-substantial fuel,"
   ]
  },
  {
   "begin": "22.280",
   "end": "25.480",
   "id": "f000008",
   "language": "en",
   "lines": [
    "Making a famine where abundance lies,"
   ]
  },
  {
   "begin": "25.480",
   "end": "31.200",
   "id": "f000009",
   "language": "en",
   "lines": [
    "Thy self thy foe, to thy sweet self too cruel:"
   ]
  },
  {
   "begin": "31.200",
   "end": "34.400",
   "id": "f000010",
   "language": "en",
   "lines": [
    "Thou that art now the world's fresh ornament,"
   ]
  },
  {
   "begin": "34.400",
   "end": "36.960",
   "id": "f000011",
   "language": "en",
   "lines": [
    "And only herald to the gaudy spring,"
   ]
  },
  {
   "begin": "36.960",
   "end": "40.640",
   "id": "f000012",
   "language": "en",
   "lines": [
    "Within thine own bud buriest thy content,"
   ]
  },
  {
   "begin": "40.640",
   "end": "43.640",
   "id": "f000013",
   "language": "en",
   "lines": [
    "And tender churl mak'st waste in niggarding:"
   ]
  },
  {
   "begin": "43.640",
   "end": "48.120",
   "id": "f000014",
   "language": "en",
   "lines": [
    "Pity the world, or else this glutton be,"
   ]
  },
  {
   "begin": "48.120",
   "end": "53.240",
   "id": "f000015",
   "language": "en",
   "lines": [
    "To eat the world's due, by the grave and thee.",
    "Multiline Testing"
   ]
  }
 ];

var annotationList = Annotations.init({
    container: document.getElementById("annotations")
});
annotationList.setNotes(notes);
annotationList.draw(annotationList.render());