import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function MissionPage({data,location}) {
  let generalData = require('../../data/general.json')

  return (
    <Layout location={location} crumbLabel="mission">
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              نحن في مهمة لجعل طنجة مكانا أفضل
            </h1>

            <p class="mt-4 text-lg">
              {/*We offer dozens of different programs, all directed towards teaching children and adults how to program and make the most of the technology that surrounds us. Our efforts include corporate partnerships, school and university charters, digital resources, and support for the open-source ecosystem.*/}
               نادي متطوعي طنجة هو نادي ينشط أساسا في مساعدة الجمعيات في الاعمال التطوعية، حل مشاكل الإجتماعية ، القيام بأنشطة مختلفة تستهدف فئات معينة ، جلب متبرعين بالمال للنادي للمساعدات الإنسانية، مساعدات التنظيمات سواء متل حفلات او مهراجانات او تظاهرة كروية ، والكتير من الأنشطة الأخرى 
            </p> 
            

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                class="block w-full rounded bg-active px-12 py-3 text-sm font-medium text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                to="/support"
              >
                الدعم
              </Link>

              <Link
                class="block w-full rounded px-12 py-3 text-sm font-medium text-active shadow hover:text-active focus:outline-none focus:ring active:text-active sm:w-auto"
                to="/impact"
              >
                تأتيرنا
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-active px-4 py-16" >
        <div className="max-w-6xl mx-auto px-4 flex gap-4">
          <div className="w-full md:w-2/3"  style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>
            <h2 className="font-bold text-white text-4xl mb-4">وعد التأتيرالفعال في مجتمعنا</h2>
            {generalData.mission?.oneStudentPromise?.map(text => <p className="mb-2 text-white text-md">{text}</p>)}
            <div className="mt-8">
              <Link className="text-lg text-white underline" to="/support">تعلم أكتر عن ماذا يفعل دعمك</Link>
            </div>
          </div>
          <div className="w-1/3 hidden text-slate-200 md:block">
            <img className="w-full rounded" src={`/${generalData.images?.general[0].src}`} alt={generalData.images?.general[0].alt} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Mission" breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Mission": "https://about.fairfieldprogramming.org/mission" }} />

export default MissionPage

