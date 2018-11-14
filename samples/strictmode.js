import React, { StrictMode } from 'react'

function ExampleApplication() {
  return (
    <div>
      <Header />
      <StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </StrictMode>
      <Footer />
    </div>
  )
}
