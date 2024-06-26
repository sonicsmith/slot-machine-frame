import { frames } from "@/app/frames";
import { appURL } from "@/app/utils";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx: any) => {
  // ctx.message.requesterCustodyAddress
  // ctx.message.verifiedWalletAddress
  // ctx.clientProtocol.id
  const baseUrl = appURL();

  return {
    image: `${baseUrl}/images/slotMachine/spinning.gif`,
    buttons: [
      <Button action="post" key="1" target="/outcome">
        Stop
      </Button>,
    ],
  };
});
