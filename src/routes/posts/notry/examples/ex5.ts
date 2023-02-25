import { DevError, UserError } from "./error";
import { canVote } from "./vote-return";
import { reportError } from "./report";

function main(name: string) {
  const result = canVote(name);
  if (result instanceof UserError) {
    console.error(result.message);
  } else if (result instanceof DevError) {
    console.error("We're sorry, something went wrong");
    reportError(result.exception);
  } else {
    console.log(`${name} can${canVote(name) ? "" : "'t"} vote`);
  }
}

// success
main("Neil");

// user error
main("Neal");

// developer error
main("Neil");
