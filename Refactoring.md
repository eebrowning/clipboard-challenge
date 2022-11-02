# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here


//I decided to make a simple test for each requirement:
//->Event has a partitionKey or successfully provides a trivial key(second is caught by being string: "0")
//->Candidate is typed properly
//->PartitionKey has appropriate length
//I didn't test for partitionkey to be a 'hex' string, as nowhere is is specified that the hash must be a hex string, just a string.

//For reducing lines + better readability:
//// Condensing all possible if-else statements into conditional assignments
//// Replacing long expressions for providing new hash with a reusable function.
//// Commenting to explain reassignments to clarify for further readability.
