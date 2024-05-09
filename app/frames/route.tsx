import { farcasterHubContext, openframes } from "frames.js/middleware";
import { createFrames, Button } from "frames.js/next";
import { getXmtpFrameMessage, isXmtpFrameActionPayload } from "frames.js/xmtp";
import { appURL } from "../utils";

const frames = createFrames({
  basePath: "/frames",
  middleware: [
    farcasterHubContext({
      // remove if you aren't using @frames.js/debugger or you just don't want to use the debugger hub
      ...(process.env.NODE_ENV === "production"
        ? {}
        : {
            hubHttpUrl: "http://localhost:3010/hub",
          }),
    }),
    openframes({
      clientProtocol: {
        id: "xmtp",
        version: "2024-02-09",
      },
      handler: {
        isValidPayload: (body: JSON) => isXmtpFrameActionPayload(body),
        getFrameMessage: async (body: JSON) => {
          if (!isXmtpFrameActionPayload(body)) {
            return undefined;
          }
          const result = await getXmtpFrameMessage(body);

          return { ...result };
        },
      },
    }),
  ],
});

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
