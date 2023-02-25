import { canVote } from "./vote";

function main(name: string) {
  try {
    console.log(`${name} can${canVote(name) ? "" : "'t"} vote`);
  } catch (exceptionVar: unknown) {
    console.error(`${exceptionVar}`);
  }
}

// success
main("Neil");

// user error
main("Neal");

// developer error
main("Neil");
