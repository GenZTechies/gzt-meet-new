import React from "react";
import Head from "next/head";
import Image from "next/image";
// import {  Sora } from "@next/font/google";
import { Button, Input } from "../components";
import { useRouter } from "next/router";

export default function Home() {
  const [meetcode, setMeetCode] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const router = useRouter();
  const handleJoinMeeting = React.useCallback(() => {
    const code = meetcode.replaceAll("-", "").toUpperCase();
    if (code.length === 9) {
      let new_code = `${code.substring(0, 3)}-${code.substring(
        3,
        6
      )}-${code.substring(6, 10)}`;
      router.push(`/${new_code}`);
    } else {
      setError("Wrong code");
    }
  }, [meetcode]);

  React.useEffect(() => {
    setError("");
  }, [meetcode]);

  return (
    <>
      <Head>
        <title>Genz Meet</title>
        <meta
          name="description"
          content="Genztechies video conference web app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex flex-col  bg-[url('/static/images/bg.svg')]">
        <nav className="flex flex-row items-center justify-between container py-2">
          <div>
            <h1>Genz Meet</h1>
          </div>
          <div>
            <Button onClick={() => router.push("/new")} className="rounded-lg">
              Create New Meeting
            </Button>
          </div>
        </nav>
        <div className="container flex-1 w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-14 items-center justify-around">
          <div className="h-fit w-full md:h-full flex flex-col items-center justify-center space-y-5">
            <h1 className="text-3xl md:text-5xl font-medium md:font-bold leading-relaxed text-center md:text-left">
              Premium Meetings free for everyone 🤘🏾
            </h1>
            <p className="text-center md:text-left leading-relaxed">
              Create a More secure, more flexible, and completely free video
              conference.
            </p>
            <div className="flex flex-row items-center justify-center md:justify-start w-full space-x-4">
              <Input
                className="shadow-sm text-sm  border !border-primary"
                placeholder="Enter meeting code"
                value={meetcode}
                onChange={(event) => setMeetCode(event.currentTarget.value)}
              />
              <Button
                onClick={handleJoinMeeting}
                className={`shadow-md  rounded-lg ${
                  Boolean(error) ? "!bg-red-700 !hover:bg-red-700" : ""
                }`}
              >
                {error ? error : "Join"}
              </Button>
            </div>
          </div>
          <div className="w-full h-full relative mb-10 md:mb-0">
            <Image
              src={require("../public/static/images/peeps.png")}
              alt="People"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </main>
    </>
  );
}
