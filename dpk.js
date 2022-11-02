const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;
  let provideHash = (candidateEntry) => crypto.createHash("sha3-512").update(candidateEntry).digest("hex");//DRY up reapeated expression.

  if (event) {
    const data = JSON.stringify(event);//only necessary if 'else' below:
    candidate = event.partitionKey !== undefined ? event.partitionKey : provideHash(data);
  }

  ///if candidate is defined at this point, continue, else make candidate = '0';
  candidate = candidate ? candidate : TRIVIAL_PARTITION_KEY;
  //if typed as a string, it is fine, otherwise: stringify.
  candidate = typeof candidate == 'string' ? candidate : JSON.stringify(candidate);
  //check valid length, otherwise, get another hash.
  candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? provideHash(candidate) : candidate;

  return candidate;
};


//I decided to make a simple test for each requirement:
//->Event has a partitionKey or successfully provides a trivial key(second is caught by being string: "0")
//->Candidate is typed properly
//->PartitionKey has appropriate length
//I didn't test for partitionkey to be a 'hex' string, as nowhere is is specified that the hash must be a hex string, just a string.

//For reducing lines + better readability:
//// Condensing all possible if-else statements into conditional assignments
//// Replacing long expressions for providing new hash with a reusable function.
//// Commenting to explain reassignments to clarify for further readability.
