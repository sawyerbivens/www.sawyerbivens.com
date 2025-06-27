"use client";

import { validate } from "email-validator";
import {
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "feather-icons-react";
import { useRef, useState } from "react";
import { cn } from "./lib/cn";
import Link from "next/link";

function FilmSection() {
  const [filmStockCost, setFilmStockCost] = useState(14);
  const [devAndScanCost, setDevAndScanCost] = useState(12.0);
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">What costs are there?</h2>
        <p>
          While I am offering to do all of the shooting for free, you will have
          to cover the cost for any props and the cost of the film itself as
          well as developing and scanning that film. My go-to film stock is
          Kodak Gold 200 (36 exposures, 35mm format) which is available for a
          variety of prices depending on where it is purchased from. Developing
          and scanning can be done locally at{" "}
          <a
            href="https://www.bedfordpix.com/film-services"
            target="_blank"
            className="underline cursor-pointer"
          >
            Bedford Camera & Video
          </a>{" "}
          at prices that vary depening on what resolution scans you would like.
          The price breakdown for each option is listed below:
        </p>
        <ul className="list-[circle]">
          <li>
            Low-Resolution Scan + Develop: <b>$12.00</b>/roll
          </li>
          <li>
            Medium-Resolution Scan + Develop: <b>$18.00</b>/roll
          </li>
          <li>
            High-Resolution Scan + Develop: <b>$24.00</b>/roll
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 rounded-sm border p-4">
        <h2 className="text-lg font-bold">Film cost calculator</h2>
        <p>How many photos would you like?</p>
        <div className="grid grid-cols-3 gap-2">
          <button
            className="rounded-sm border disabled:bg-black disabled:text-white enabled:bg-white enabled:text-black p-2 text-center cursor-pointer enabled:hover:bg-gray-100 enabled:duration-200 sel-exp-btn"
            disabled={filmStockCost === 14}
            onClick={() => setFilmStockCost(14)}
          >
            36
          </button>
          <button
            className="rounded-sm border disabled:bg-black disabled:text-white enabled:bg-white enabled:text-black p-2 text-center cursor-pointer enabled:hover:bg-gray-100 enabled:duration-200 sel-exp-btn"
            disabled={filmStockCost === 28}
            onClick={() => setFilmStockCost(28)}
          >
            72
          </button>
          <button
            className="rounded-sm border disabled:bg-black disabled:text-white enabled:bg-white enabled:text-black p-2 text-center cursor-pointer enabled:hover:bg-gray-100 enabled:duration-200 sel-exp-btn"
            disabled={filmStockCost === 42}
            onClick={() => setFilmStockCost(42)}
          >
            108
          </button>
        </div>

        <p>Desired resolution:</p>
        <div className="grid grid-cols-3 gap-2">
          <button
            className="rounded-sm border disabled:bg-black disabled:text-white enabled:bg-white enabled:text-black p-2 text-center cursor-pointer enabled:hover:bg-gray-100 enabled:duration-200 sel-res-btn"
            id="sel-lowres"
            disabled={devAndScanCost === 12}
            onClick={() => setDevAndScanCost(12)}
          >
            Low
          </button>
          <button
            className="rounded-sm border disabled:bg-black disabled:text-white enabled:bg-white enabled:text-black p-2 text-center cursor-pointer enabled:hover:bg-gray-100 enabled:duration-200 sel-res-btn"
            disabled={devAndScanCost === 18}
            onClick={() => setDevAndScanCost(18)}
          >
            Medium
          </button>
          <button
            className="rounded-sm border disabled:bg-black disabled:text-white enabled:bg-white enabled:text-black p-2 text-center cursor-pointer enabled:hover:bg-gray-100 enabled:duration-200 sel-res-btn"
            disabled={devAndScanCost === 24}
            onClick={() => setDevAndScanCost(24)}
          >
            High
          </button>
        </div>

        <div className="flex flex-row items-center gap-2">
          <span>Estimated cost:</span>{" "}
          <span
            id="final-cost"
            className="final-cost text-2xl font-bold bg-yellow-300 px-1"
          >
            $
            {(filmStockCost + devAndScanCost * (filmStockCost / 14)).toFixed(2)}
          </span>
        </div>
        <p className="text-sm">
          {" "}
          ^ This does not include any taxes, shipping, or any other fees.
        </p>
        <p className="text-sm">
          {" "}
          ^ Cost of film is based on Bedford Camera & Video&apos;s price of
          Kodak Gold 200 (36exp, 35mm) at $14.00/roll as of June 26th 2025.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">
          How is the film processed and sent?
        </h2>
        <p>
          After shooting, I will take the film to{" "}
          <a
            href="https://www.bedfordpix.com/film-services"
            target="_blank"
            className="underline cursor-pointer"
          >
            Bedford Camera & Video
          </a>{" "}
          for you. I will save the reciept(s) and you must then pay that cost
          back to me through the payment agreed upon (Zelle/Cash/etc.) Once
          developed and scanned, I will electronically send you the photo files
          and will store the developed film &quot;negatives&quot; for you unless
          you request them.
        </p>
        {/* <p>
          <span className="underline">Note:</span> If you would like to handle
          this yourself, feel free! Let me know in advance and I will simply
          give you the film rolls once done shooting for you to get them
          developed and scanned yourself!
        </p> */}
      </div>
    </>
  );
}

export default function Home() {
  const [showFilmSection, setShowFilmSection] = useState(false);

  const getInTouchInputRef = useRef<HTMLInputElement>(null);
  const [getInTouchEmail, setGetInTouchEmail] = useState("");
  const [getInTouchError, setGetInTouchError] = useState<string | null>(null);
  const [showGetInTouchConfirmation, setShowGetInTouchConfirmation] =
    useState(false);
  const [getInTouchConfirmationLoading, setGetInTouchConfirmationLoading] =
    useState(false);

  const submitEmail = async () => {
    if (validate(getInTouchEmail)) {
      setGetInTouchConfirmationLoading(true);
      await fetch(`/api/contact?email=${getInTouchEmail}`, { method: "POST" })
        .then(async (res) => {
          const json = await res.json();
          if (!json.error) {
            await fetch(`/api/resend/send?email=${getInTouchEmail}`, {
              method: "POST",
            }).catch((err) => {
              console.error(err);
            });
            setGetInTouchError(null);
            setShowGetInTouchConfirmation(true);
            setGetInTouchConfirmationLoading(false);
            setGetInTouchEmail("");
          } else {
            console.error(res);
            console.error(json);
            if (json.status === 409) {
              setShowGetInTouchConfirmation(false);
              setGetInTouchError("That email has already been added!");
              setGetInTouchConfirmationLoading(false);
            } else {
              setShowGetInTouchConfirmation(false);
              setGetInTouchError(
                "There was an error processing your email. Please try again.",
              );
              setGetInTouchConfirmationLoading(false);
            }
          }
        })
        .catch((err) => {
          setShowGetInTouchConfirmation(false);
          setGetInTouchError(
            "There was an error processing your email. Please try again.",
          );
          console.error(err);
          setGetInTouchConfirmationLoading(false);
        });
    } else setGetInTouchError("Invalid email address.");
  };

  return (
    <main className="max-w-2xl flex flex-col mx-auto">
      <nav className="px-8 py-12 sticky top-0 bg-white/80 backdrop-blur-md">
        <Link href="/" className="font-semibold">
          Sawyer Bivens Photography
        </Link>
        <p className="text-sm">Sherwood, AR</p>
      </nav>
      <section className="px-8 pb-12 flex flex-col gap-12">
        <header className="flex flex-col gap-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Free photography for central Arkansas businesses.
          </h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm">
            <p>+1 (501) 993-6715</p>
            <span className="hidden md:inline">—</span>
            <a className="underline" href="mailto:sawyerbivens06@gmail.com">
              sawyerbivens06@gmail.com
            </a>
          </div>
        </header>

        {new Date() < new Date(1751605200 * 1000) && (
          <div className="flex flex-row gap-4 bg-yellow-100 border border-yellow-400 rounded-sm p-4 items-center">
            <div className="flex flex-col gap-1">
              <div className="font-semibold flex flex-row gap-2 items-center">
                <AlertTriangle className="h-4 w-4" />
                <p>Please Note:</p>
              </div>
              <p>
                I may take longer than usual to respond during the week of Jun
                30th-Jul 4th. I will respond to any messages as soon as
                possible.
              </p>
              <p className="mt-2">Thank you for your understanding.</p>
            </div>
          </div>
        )}

        <hr className="border-b" />

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Why am I offering free shoots?</h2>
          <p>
            I recently graduated high school and will be moving to Fayetteville
            to attend the University of Arkansas this fall. I have gotten into
            digital and film photography in the past year and would love to get
            more experience under my belt and build up a portfolio while
            simultaneously helping out local businesses.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">What locations are eligible?</h2>
          <p>
            Anywhere near Sherwood or Little Rock/North Little Rock I can for
            sure make it to, if you are located further than that contact me and
            I will see what I can work out for you!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="gap-0 border rounded-md flex flex-col">
            <div className="flex flex-col gap-1 p-4 border-b rounded-t-md">
              <p className="text-lg font-bold">Film offerings</p>
              <p>
                Although digital shoots are completely free, I also offer film
                services. However, the cost of film, developing, and scanning
                are your responsibility.
              </p>
            </div>
            {showFilmSection && (
              <div className="flex flex-col gap-6 p-6">
                <FilmSection />
              </div>
            )}
            {showFilmSection ? (
              <div
                className="border-t p-4 flex flex-row items-center cursor-pointer hover:bg-gray-100 duration-200 rounded-b-lg"
                onClick={() => setShowFilmSection(false)}
              >
                <p className="underline">Hide</p>
                <ChevronUp className="h-4 w-4 ml-auto" />
              </div>
            ) : (
              <div
                className="p-4 flex flex-row items-center cursor-pointer hover:bg-gray-100 duration-200 rounded-b-lg"
                onClick={() => setShowFilmSection(true)}
              >
                <p className="underline">Learn more</p>
                <ChevronDown className="h-4 w-4 ml-auto" />
              </div>
            )}
          </div>
          <p className="text-sm">
            Please note: I am also able to do a mix of film and digital if you
            would like!
          </p>
        </div>

        <hr className="border-b" />

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Contact Me / Socials</h2>
          <p>Phone: (501) 993-6715 (please text)</p>
          <p>
            Email:{" "}
            <a className="underline" href="mailto:sawyerbivens06@gmail.com">
              sawyerbivens06@gmail.com
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61577675495117"
              className="underline"
              target="_blank"
            >
              www.facebook.com/profile.php?id=61577675495117
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/sawyerbiv.photo"
              className="underline"
              target="_blank"
            >
              @sawyerbiv.photo
            </a>
          </p>
          <p>
            Portfolio:{" "}
            <a
              href="https://www.sawyerbivens.com"
              className="underline"
              target="_blank"
            >
              www.sawyerbivens.com
            </a>
          </p>
        </div>

        <hr className="border-b" />

        <div
          className={cn(
            "flex flex-col gap-4 rounded-sm border p-4",
            showGetInTouchConfirmation && "border-green-600 bg-green-50",
          )}
        >
          {showGetInTouchConfirmation ? (
            <>
              <div className="h-[146px] md:h-[88px] flex flex-col gap-1 items-center justify-center">
                <CheckCircle className="text-green-600 h-12 w-12" />
                <p className="text-green-600 text-sm">
                  Done! I will contact you as soon as I can!
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold">Get in touch</h2>
              <div className="flex flex-col gap-4 md:gap-2 md:flex-row items-baseline">
                <div className="flex flex-col gap-0 flex-1 relative w-full md:w-auto">
                  <label
                    className="bg-white p-1 absolute left-2 text-xs -top-3"
                    onClick={() => getInTouchInputRef.current?.select()}
                  >
                    Email
                  </label>
                  <input
                    value={getInTouchEmail}
                    onChange={(e) => setGetInTouchEmail(e.target.value)}
                    ref={getInTouchInputRef}
                    className="h-[42px] p-2 border placeholder:text-black/30 rounded-sm w-full"
                    placeholder="you@awesomebusiness.com"
                  />
                </div>
                <button
                  className="h-[42px] rounded-sm border bg-black text-white px-4 py-2 text-center cursor-pointer duration-200 mt-auto w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={getInTouchConfirmationLoading}
                  onClick={() =>
                    getInTouchConfirmationLoading !== true && submitEmail()
                  }
                >
                  Submit
                </button>
              </div>
              {getInTouchError && (
                <p className="text-red-600 text-sm">{getInTouchError}</p>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
