import { Button } from "frames.js/next";
import { appURL } from "@/app/utils";
import { frames } from "@/app/frames";

const handleRequest = frames(async (ctx) => {
  const baseUrl = appURL();
  return {
    image: `${baseUrl}/images/slotMachine/3.png`,
    buttons: [
      <Button action="post" key="1" target="/spinning">
        Free Spin
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
