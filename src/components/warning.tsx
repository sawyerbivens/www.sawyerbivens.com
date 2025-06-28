import { AlertTriangle } from "feather-icons-react";

export function Warning({
  expires,
  children,
}: {
  expires: Date;
  children: React.ReactNode;
}) {
  return (
    <>
      {new Date() < expires && (
        <div className="flex flex-row gap-4 bg-yellow-100 border border-yellow-400 rounded-sm p-4 items-center">
          <div className="flex flex-col gap-1">
            <div className="font-semibold flex flex-row gap-2 items-center">
              <AlertTriangle className="h-4 w-4" />
              <p>Please Note:</p>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
