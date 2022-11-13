const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let formattedCandidate = formatCandidate(getCandidates(event), TRIVIAL_PARTITION_KEY);  
  let checkedCandidate = checkLengthOfCandidate(formattedCandidate, MAX_PARTITION_KEY_LENGTH)

  return checkedCandidate;
};

const getCandidates = (event) => {
  let candidate;
  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }
  return candidate;
}

const formatCandidate = (candidate, trivialPartitionKey) => {
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = trivialPartitionKey;
  }
  return candidate;
}

const checkLengthOfCandidate = (candidate, maxPartitionKeyLength) => {
  if (candidate.length > maxPartitionKeyLength) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
}