import { frames } from "@/app/frames";
import { appURL } from "@/app/utils";
import { Button } from "frames.js/next";

const NUMBER_OF_OUTCOMES = 14;

export const POST = frames(async (ctx: any) => {
  // ctx.message.requesterCustodyAddress
  // ctx.message.verifiedWalletAddress
  // ctx.clientProtocol.id
  const baseUrl = appURL();

  const randomIndex = Math.floor(Math.random() * NUMBER_OF_OUTCOMES) - 1;

  const isWinner = randomIndex === 0;

  return {
    image: `${baseUrl}/images/slotMachine/${randomIndex}.png`,
    buttons: [
      <Button action="post" key="1" target={isWinner ? "/claim" : "/"}>
        {isWinner ? "Claim your prize!" : "Try again"}
      </Button>,
    ],
  };
});
