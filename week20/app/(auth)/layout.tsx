import React, { ReactNode } from "react";

export default function MyLayout ({children}: {
  children: ReactNode
}) {
  return(
    <div>
      <div>Header</div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  )
}