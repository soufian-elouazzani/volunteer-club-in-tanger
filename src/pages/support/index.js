import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

function MissionPage({location}) {
  let generalData = require('../../../data/general.json')

  return (
    <Layout location={location} crumbLabel="Support">
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            هناك الكتير من الطرق لدعمنا لمساعدة مختلف فئات المجتمع
            </h1>

            <p class="mt-4 text-lg">
             من التبرع إلى نشر الوعي إلى التطوع هناك العديد من الطرق تستطيع أن تقدم الدعم لنا
             </p>
          </div>
        </div>
      </section>
      <section className="px-16 py-4">
        <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
        <div className="lg:flex flex-row">
          <div className="w-full">
            <iframe src="https://donorbox.org/embed/join-the-fpa" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%" style={{ "width": "100%", "max-width": "500px", "min-width": "310px", "max-height": "none !important"}}></iframe>
          </div>
          <div className="w-full">
            <iframe frameborder="0" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/join-the-fpa?only_donor_wall=true" style={{ "width": "100%", "max-width": "500px", "min-width": "310px", "max-height": "none !important"}}></iframe>
          </div>
        </div>
      </section>
      <section className="bg-active px-4 py-16">
        <div class="flex flex-row gap-4">
            <div class="w-1/3 bg-white rounded p-8">
                <h2 class="text-xl font-black" style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>تبرع </h2>
                <p style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>للتبرع بالمال يمكنك أن تجد معلومات الحساب البنكي في الصفحة <a class="text-sky-400 hover:text-sky-500 hover:underline" href="/programs">هنا </a> </p>
            </div>
            <div class="w-1/3 bg-white rounded p-8">
                <h2 class="text-xl font-black" style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>تطوع</h2>
                <p style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>إدا كنت فرد أو جماعة سنكون سعداء بتطوعك في نادي متطوع طنجة</p>
            </div>
            <div class="w-1/3 bg-white rounded p-8">
                <h2 class="text-xl font-black" style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>كن شريك</h2>
                <p style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>  إدا كنت تمتل منظمة أو شركة    <a class="text-sky-400 hover:text-sky-500 hover:underline" href="/partnerships/partner">من فضلك إتصل بنا  </a> نحن دائما نبحت عن أفكار ,موارد, متعاونين حتى نستطيع يوما ما أن نساعد جميع من يحتاج إلى مساعدة</p>            </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Mission"
  breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Support": "https://about.fairfieldprogramming.org/support" }} />

export default MissionPage
