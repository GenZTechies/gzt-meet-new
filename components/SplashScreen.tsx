import React from "react";

const SplashScreen = () => {
  const [show, setShow] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);
  return (
    <>
      {show ? (
        <>
          <main className="bg-white h-screen w-screen fixed top-0 left-0 z-50">
            <div className="bg-[url('/static/images/bg.svg')] h-full w-full flex flex-row items-center justify-center ">
              <div className="flex flex-col items-center space-y-5">
                <h1 className="text-primary text-xl font-semibold">
                  GenZ Meet
                </h1>
                <div className="leap-frog">
                  <div className="leap-frog__dot"></div>
                  <div className="leap-frog__dot"></div>
                  <div className="leap-frog__dot"></div>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : null}
    </>
  );
};

export default SplashScreen;
