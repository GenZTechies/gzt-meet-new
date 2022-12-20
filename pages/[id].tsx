// import { JitsiMeeting } from "@jitsi/react-sdk";
// import { JitsiMeeting } from "@jitsi/react-sdk";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "../components";
import { IJitsiMeetingProps } from "@jitsi/react-sdk/lib/types";
import dynamic from "next/dynamic";
import { configOverwrite, interfaceConfigOverwrite } from "../configs";

const JitsiMeeting = dynamic(
  () =>
    import("@jitsi/react-sdk").then(({ JitsiMeeting }) => JitsiMeeting) as any,
  {
    ssr: false,
  }
) as React.FC<IJitsiMeetingProps>;

const Meeting = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();

  const handleCloseLoadingState = React.useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main id="meeting" className="h-screen w-screen">
      {loading && (
        <div className="h-full w-full container flex flex-col items-center justify-center text-center fixed top-0 left-0">
          <h1>Please wait while we set things up.</h1>
          <Loader />
        </div>
      )}
      <JitsiMeeting
        roomName={
          router.query.id?.toString().replaceAll("-", "").toLowerCase() ||
          "mymeeting"
        }
        spinner={() => <Loader />}
        configOverwrite={configOverwrite}
        interfaceConfigOverwrite={interfaceConfigOverwrite}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100vh";
          iframeRef.style.width = "100vw";
        }}
        onApiReady={() => {
          handleCloseLoadingState();
        }}
        onReadyToClose={() => {
          router.push("/");
        }}
      />
    </main>
  );
};

export default Meeting;
