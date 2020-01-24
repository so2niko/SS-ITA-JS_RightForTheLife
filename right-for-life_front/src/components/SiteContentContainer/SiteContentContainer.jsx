import React from 'react';

export function SiteContentContainer({children}) {
  return (
    <main className="container mx-auto flex-grow flex-shrink-0 mt-24 px-4 sm:px-0">
      {children}
    </main>
  )
}