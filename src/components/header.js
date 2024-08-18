import * as React from "react"
import Logo from "../res/fpa.svg";
import { Link } from "gatsby"

const Header = ({  }) => (
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-screen-xl p-2">
      <div class="flex items-center justify-center">
        <Link class="m-0 p-0" to="/">
          <img class="h-16 m-0" src={Logo} alt="The Fairfield Programming Association Logo" />
        </Link>
      </div>
      <div class="flex items-center justify-center gap-4 lg:gap-10">
        <nav
          aria-label="Site Nav"
          class="w-min gap-4 text-sm font-medium flex md:gap-8"
        >
          <Link class="text-gray-500 no-underline" to="/support">الدعم</Link>
          <Link class="text-gray-500 no-underline" to="/partnerships">الشركاء</Link>
          <Link class="text-gray-500 no-underline" to="/programs">برامجنا</Link>
          <Link class="text-gray-500 no-underline" to="/impact">تأتيرنا</Link>
          <Link class="text-gray-500 no-underline" to="/mission">مهمتنا</Link>

        </nav>
      </div>
    </div>
  </header>

)

export default Header
