// RO: Adăugăm obiecte în această listă. Nu modificăm tests.js.
// EN: Add objects to this list. Do not change tests.js.
// Operations: binary, hex, signed, parity-even, parity-odd, parse-error.
// For parse-error use expected: 'ERROR'.
// Pentru parse-error folosim expected: 'ERROR'.
globalThis.CustomTests = [
  {label: 'Example / Exemplu: binary 255', input: 255, operation: 'binary', expected: '11111111'}
  // Add a comma after the preceding object before adding another object.
  // Adăugăm virgulă după obiectul precedent înainte de următorul obiect.
];
