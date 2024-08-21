import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Article from "../components/article"

function PressPage({location}) {
    //const releases = require('../../data/general.json').press
    const releases = require('../../data/articles.json')
  return (
    <Layout location={location} crumbLabel="Press">
        <section>
            <div
            class="mx-auto max-w-screen-xl px-4 py-20 lg:flex  lg:items-center"
            >
                <div class="mx-auto max-w-4xl text-center">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        الصحافة و التواصل
                    </h1>

                
                    <p class="mt-4 text-lg">
                        هنا يمكنك رؤية مجموع من الاعمال التي قمنا بها و الموتقة والتي تعطينا مزيدا من التقة لنستمر
                    </p>

                </div>
            </div>
        </section>
        <section>
            <div className="max-w-6xl mx-auto pb-16 px-4 flex">
                {/*
                <div class="space-y-4 w-full">
                    <ul>
                        { 
                            releases.map(item => <li class="list-disc mb-4"><Link class="text-sky-400 hover:text-sky-500 hover:underline" to={item.path}>{item.name}</Link></li>)
                        }
                    </ul>
                </div>
                    */}
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6">
                    {releases
                    .map(item => Article(item))}
                </div>    
            </div>
        </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Press and Media" breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Press": "https://about.fairfieldprogramming.org/press" }} />

export default PressPage
