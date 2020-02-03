import React from 'react';

export function SiteContentContainer({children}) {
  return (
    <main className="container mx-auto flex-grow flex-shrink-0 px-3 pt-6 lg:pt-24">
      {children}
    </main>
  )
}