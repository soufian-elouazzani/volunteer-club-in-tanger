import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function ImpactPage({location}) {
  let generalData = require('../../data/general.json')
  let impactNumber = generalData.impact.adults + generalData.impact.children;

  let girlImpact = generalData.impact.girls;
  let boyImpact = generalData.impact.boys;
  let nonBinaryImpact = generalData.impact.nonBinary;

  let childrenImpact = generalData.impact.children;
  let adultImpact = generalData.impact.adults;

  let economicImpact = impactNumber * (100008.00 - 81847.00);

  return (
    <Layout location={location} crumbLabel="Impact">
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center" >
            <h2 className="text-xl uppercase font-bold tracking-wider mb-4">تأتيرنا على المجتمع في طنجة</h2>
            <h1 class="text-6xl font-extrabold sm:text-8xl">
              {impactNumber.toLocaleString()}
            </h1>

            <p class="mt-4 text-lg">
            .عدد الاشخاص اللذين قمنا بمساعدتهم منذ 2024
            </p>
          </div>
        </div>
      </section>
      <section className="bg-active px-4 py-16">
        <div className="max-w-6xl mx-auto px-4 flex gap-4">
          <div className="w-full md:w-2/3" style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>
          <h2 className="font-bold text-white text-4xl mb-4">وعد التأتيرالفعال في مجتمعنا</h2>
          {generalData.mission?.oneStudentPromise?.map(text => <p className="mb-2 text-white text-md">{text}</p>)}
            <div className="mt-8">
            <Link className="text-lg text-white underline" to="/support">تعلم أكتر عن ماذا يفعل دعمك</Link>
            </div>
          </div>
          <div className="w-1/3 hidden md:block">
            <img className="w-full rounded" src={`/${generalData.images?.general[0].src}`} alt={generalData.images?.general[0].alt} />
          </div>
        </div>
      </section>
      <section class="border-b-2">
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-5xl text-center">
            <h2 className="text-xl uppercase font-bold tracking-wider mb-4">Impact by Gender</h2>
            <div className="w-full flex flex-col md:flex-row gap-8">
              <div className="w-full h-full flex align-center justify-center flex-col">
                <p class="text-4xl font-extrabold sm:text-6xl">
                  {boyImpact.toLocaleString()}
                </p>
                <p class="mt-4 text-lg">
                  boys have learned since September 2022.
                </p>
              </div>
              <div className="w-full h-full flex align-center justify-center flex-col">
                <p class="text-4xl font-extrabold sm:text-6xl">
                  {girlImpact.toLocaleString()}
                </p>
                <p class="mt-4 text-lg">
                  girls have learned since September 2022.
                </p>
              </div>
              <div className="w-full h-full flex align-center justify-center flex-col">
                <p class="text-4xl font-extrabold sm:text-6xl">
                  {nonBinaryImpact.toLocaleString()}
                </p>
                <p class="mt-4 text-lg">
                  non-binary students have learned since September 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-5xl text-center">
            <h2 className="text-xl uppercase font-bold tracking-wider mb-4">Impact by Age</h2>
            <div className="w-full flex flex-col md:flex-row gap-8">
              <div className="w-full h-full flex align-center justify-center flex-col">
                <p class="text-4xl font-extrabold sm:text-6xl">
                  {childrenImpact.toLocaleString()}
                </p>
                <p class="mt-4 text-lg">
                  children have learned since September 2022.
                </p>
              </div>
              <div className="w-full h-full flex align-center justify-center flex-col">
                <p class="text-4xl font-extrabold sm:text-6xl">
                  {adultImpact.toLocaleString()}
                </p>
                <p class="mt-4 text-lg">
                  adults have learned since September 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-active px-4 py-16 text-white">
        <div
          class="mx-auto max-w-screen-xl px-4 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-5xl text-center">
            <h2 className="text-xl uppercase font-bold tracking-wider mb-4">Our Economic Impact</h2>
            <div className="w-full flex flex-col md:flex-row gap-8">
              <div className="w-full h-full flex align-center justify-center flex-col">
                <p class="text-4xl font-extrabold sm:text-6xl">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(economicImpact)}
                </p>
                <p class="mt-4 text-lg">
                  of predicted global wealth generated since 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Impact"  breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Impact": "https://about.fairfieldprogramming.org/impact" }} />

export default ImpactPage
