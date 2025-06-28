"use client";

import { cn } from "@/lib/cn";
import { validate } from "email-validator";
import { CheckCircle } from "feather-icons-react";
import { useRef, useState } from "react";

export function ContactForm() {
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
    <div
      className={cn(
        "flex flex-col gap-4 rounded-sm border p-4 w-full",
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
  );
}
