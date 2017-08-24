import React from "react"
import ReactBankCard from "../../src"

import demoHtml from "./demo.md"
import readmeHtml from "../../README.md"

const data = []

for (let x = 1; x <= 30; x++) {
  data.push({x: x, y: Math.floor(Math.random() * 100)})
}

const routes = [
  {
    path: "/",
    exact: true,
    demo: {
      component: (
        <ReactBankCard
          cvc="123"
          expiryMonth={10}
          expiryYear={19}
          number="4929588303328334"
          name="XuopleD"
          highlighted={{
            number: true,
            name: false,
            cvc: true,
            expiryMonth: false,
            expiryYear: false,
          }}
        />
      ),
      displayName: "ReactBankCard",

      html: demoHtml,
    },
    label: "Demo",
  },
  {
    path: "/readme",
    html: readmeHtml,
    label: "Read me",
  },
]

export default routes
