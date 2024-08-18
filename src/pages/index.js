import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function IndexPage({location}) {

  let generalData = require('../../data/general.json')
  let impactCount = generalData.impact.adults + generalData.impact.children;

  return (
    <Layout location={location} crumbLabel="Home">
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              ,بمساعدتك
              <strong class="font-extrabold text-active sm:block">
                &nbsp;.نستطيع أن نجعل طنجة أفضل 
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl sm:leading-relaxed">
              معا لمجتمع معطاء أكتر
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                class="block w-full rounded bg-active px-12 py-3 text-sm font-medium text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                to="/support"
              >
                إدعم
              </Link>

              <Link
                class="block w-full rounded px-12 py-3 text-sm font-medium text-active shadow hover:text-active focus:outline-none focus:ring active:text-active sm:w-auto"
                to="/mission"
              >
                مهمتنا
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4" style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>مدينة واحد ,مهمة واحدة</h2>
            {generalData.mission?.description?.map(text => <p className="mb-2 text-lg" style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }} >{text}</p>)}
            <div className="mt-4">
              <Link style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }} className="text-lg underline" to="/mission"> ...تعلم أكتر عن مهماتنا</Link>
            </div>
          </div>
          <div className="w-1/3 hidden text-slate-200 md:block">
            {
            <img className="w-full rounded" src={generalData.images?.general[0].src} alt={generalData.images?.general[0].alt} />
  }
          </div>
        </div>
      </section>
      <section className="bg-active w-full px-16 py-8">
        <div class="text-center">
          <h2 className="text-xl uppercase text-white font-bold tracking-wider mb-4">تأتيرنا على المجتمع </h2>
          <p className="text-8xl font-bold text-white">{impactCount.toLocaleString()}</p>
          <p className="text-white"> . عدد الاشخاص اللذين قمنا بمساعدتهم منذ 2024</p>
          <Link className="block underline text-white mt-4" to="/impact">تعلم أكتر عن تأتيرنا في المجتمع</Link>
        </div>
      </section>
      <section className="w-full px-4 py-8 mt-16">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl max-w-2xl font-bold text-center w-full mb-4 mx-auto"> !ليس من الممكن القيام بأعمال تطوعية بدونك</h2>
          <p className="text-lg">Do you want to be featured on our homepage? Just tag '{generalData.social.instagram}' an Instagram post where you are helping the cause.</p>
        </div>
        <div className="w-4/5 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-1">
          {
            generalData.images?.instagram?.map(image => <Link to={"/"}> <img className="rounded h-48 w-full object-cover" src={image.src} alt={image.alt} /></Link>)
          }
        </div>
      </section>
      <section className="bg-white w-full px-16 py-8 flex align-center justify-center">
        <div class="text-center max-w-xl">
          <h2 className="text-xl uppercase text-black font-bold tracking-wider mb-4">لمادا نقوم بهادا العمل ؟</h2>
          <p className="text-3xl text-black font-light">" التطوع هو روح الإنسانية الحقيقية التي يمكن أن تغير العالم، فهو يعزز التضامن ويوحد المجتمعات من خلال خلق شعور بالمسؤولية المشتركة والاهتمام بالآخرين "</p>
          <p className="text-xl font-black text-black mt-8 uppercase">كوفي عنان<br /><b class="text-xl"> الأمين العام السابق للأمم المتحدة</b></p>
        </div>
      </section>
    </Layout>
  )
}


export const Head = () => <Seo title="Home" breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/" }} />

export default IndexPage


