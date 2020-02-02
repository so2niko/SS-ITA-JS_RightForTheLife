import React from 'react';

export function SiteContentContainer({children}) {
  return (
    <main className="container mx-auto flex-grow flex-shrink-0 px-3 mt-6 lg:mt-24">
      {children}
    </main>
  )
}