import { DevError, UserError } from "./error";
import { canVote } from "./vote-try-catch";
import { reportError } from "./report";

function main(name: string) {
  try {
    console.log(`${name} can${canVote(name) ? "" : "'t"} vote`);
  } catch (exceptionVar: unknown) {
    if (exceptionVar instanceof UserError) {
      console.error(exceptionVar.message);
    } else if (exceptionVar instanceof DevError) {
      console.error(`We're sorry, something went wrong`);
      reportError(exceptionVar.exception);
    }
  }
}

// success
main("Neil");

// user error
main("Neal");

// developer error
main("Neil");
