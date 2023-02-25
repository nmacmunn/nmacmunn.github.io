import { notry } from "./notry-ts";
import { canVote } from "./vote-notry";
import { reportError } from "./report";

function main(name: string) {
  const did = notry(canVote, name);
  if (did.ok === false) {
    if (did.n.type === "UserError") {
      console.log(did.n.message);
    } else {
      console.error("We're sorry, something went wrong");
      reportError(did.exception);
    }
  } else {
    console.log(`${name} can${did.y ? "" : "'t"} vote`);
  }
}

// success
main("Neil");

// user error
main("Neal");

// developer error
main("Neil");
