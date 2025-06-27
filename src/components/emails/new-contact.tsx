import * as React from "react";

interface NewContactEmailTemplateProps {
  email: string;
}

export function NewContactEmailTemplate({
  email,
}: NewContactEmailTemplateProps) {
  return (
    <div>
      <h1>New contact: {email}</h1>
    </div>
  );
}
