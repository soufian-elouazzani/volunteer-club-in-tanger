import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

function PartnerPage({location}) {
  let generalData = require('../../../data/general.json')
  let partnerData = require('../../../data/partners.json')

  return (
    <Layout location={location} crumbLabel="{Partner}">
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            كن شريكًا لـنادي متطوع اليوم في خطوات بسيطة 
            </h1>

            <p class="mt-4 text-lg">
            دائمًا ما يبحث برنامج شريك لنادينا عن أعضاء جدد للانضمام وجلب وجهات نظرهم ومواردهم إلى مهمتنا. إذا كانت لدى مؤسستك اقتراح شراكة، يرجى اتباع الخطوات أدناه لتقديمه
            </p>

          </div>
        </div>
      </section>
      <section style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
          <h2 className="font-bold text-4xl mb-4">الخطوة الأولى&mdash; كتابة الاقتراح</h2>
          <p class="mt-4 text-lg">
          يجب أن يكون الاقتراح المقدم مؤلفًا من صفحتين (خط بحجم 12 نقطة، بنمط تايمز نيو رومان، بمسافة واحدة بين السطور)، ويحتوي على ثلاث مناطق رئيسية: وصف لمؤسستك، خطة مفصلة لما تعنيه/تفعله الشراكة، ومعلومات عن ما ستقدمه مؤسستك وما يحتاج لنادينا إلى تقديمه.
          </p>
            <p class="mt-4 text-lg">
            حجم، عمر، إيرادات، شهرة، إلخ، ليست مهمة لـنادي متطوع العامل الرئيسي الذي يحدد مدى تقدمنا في الشراكة هو مدى شعورنا بأن الشراكة ستفيد منظماتنا بشكل متبادل، ومدى شعورنا بأن الشراكة تتناسب مع مهمتنا
            </p>
          </div>
        </div>
      </section>
      <section style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
          <h2 className="font-bold text-4xl mb-4">الخطوة الثانية&mdash; تقديم الاقتراح والانتظار</h2>
          <p class="mt-4 text-lg">
          لتقديم اقتراح إلى  تأكد أولاً من أنه يتوافق مع الإرشادات المذكورة أعلاه. إذا كان كذلك، قم بإرسال ملف PDF إلى <code>partnership.requests@gmail.com</code>.
          </p>
            <p class="mt-4 text-lg">
            عملية تقديم الاقتراح ليست سريعة أبدًا! يمكن أن تستغرق منا من بضعة أيام إلى ثلاثة أسابيع لقراءة الاقتراح وتقييمه والرد عليه. يمكن أن يرجع طول عملية الاقتراح إلى عدد من العوامل بما في ذلك التشاور الإضافي، المشاريع المماثلة التي يتم تطويرها بالفعل، والمناقشات الجماعية.
            </p>
          </div>
        </div>
      </section>
      <section style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
          <h2 className="font-bold text-4xl mb-4">الخطوة الثالثة&mdash; الاجتماعات والمناقشات</h2>
          <p class="mt-4 text-lg">
          للتأكد من أن منظماتنا متوافقة على جميع التفاصيل والخطط في الاقتراح (وأحيانًا لأن جميع التفاصيل غير مضمنة في الاقتراح)، نقوم بجدولة الاجتماعات والمناقشات. تبدأ هذه الاجتماعات والمناقشات مع مقيمي الاقتراح ولكنها سرعان ما تشمل جميع الأشخاص الضروريين لتحويل الاقتراح إلى واقع.
          </p>
            <p class="mt-4 text-lg">
            نحب دائمًا أن تكون عملية الاجتماع سريعة، ويمكن أن تكون كذلك إذا كنت تستجيب بسرعة للبريد الإلكتروني ولديك أوقات فراغ متاحة. نعلم أن هذا ليس هو الحال دائمًا، لذلك ستستغرق معظم الشراكات حوالي شهر أو شهرين لتتحقق.
            </p>
          </div>
        </div>
      </section>
      <section style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
          <h2 className="font-bold text-4xl mb-4">الخطوة الرابعة&mdash; العقود والشؤون القانونية</h2>
          <p class="mt-4 text-lg">
          لكي تكون الشراكة شراكة، يجب أن يتم توثيقها بعقد. سيتم إعداد هذا العقد من قبل مؤسستك ثم يقوم فريق FPA القانوني بمراجعته. إذا وافق فريقنا القانوني على الشروط، فسيتم رسميًا شراكة مؤسستك مع FPA.
          </p>
          </div>
        </div>
      </section>
      <section style={{ direction: 'rtl', textAlign: 'right', padding: '10px', margin: '10px' }}>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
          <h2 className="font-bold text-4xl mb-4">الخطوة الخامسة&mdash; تنفيذ الشراكة</h2>
          <p class="mt-4 text-lg">
          بمجرد الشراكة مع ، سنجري المزيد من الاجتماعات لتوثيق الشراكة وتفعيلها. من هناك، سيبدأ في تنفيذ جميع جوانب العقد، وستكون مؤسستك مسؤولة عن تنفيذ متطلبات العقد.
          </p>
            <p class="mt-4 text-lg">
            إذا سارت الأمور وفقًا للخطة، فسيتم إكمال الشراكة. لدينا دائمًا اجتماعات بعد انتهاء الشراكة لتقييم ما يمكننا فعله بشكل أفضل في المستقبل، وما هي الفرص التي قد تتاح لنا للتعاون مرة أخرى.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Partner with Us" breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Partnerships": "https://about.fairfieldprogramming.org/partnerships", "Partner with Us": "https://about.fairfieldprogramming.org/partnerships/partner" }}  />

export default PartnerPage
