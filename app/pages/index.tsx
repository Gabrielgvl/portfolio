import { BlitzPage, Image, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import Section from "app/core/components/Section"
import Card from "app/core/components/Card"
import KVLAO from "app/core/assets/KVLAO.jpg"

const Home: BlitzPage = () => {
  return (
    <main className="flex flex-col h-auto items-center content-center gap-16 main-bg">
      <Section id="home" hasImage className="md:flex flex-col hidden">
        <header className="mb-6 flex flex-col">
          <h3 className="text-xl">Hello World</h3>
          <h1 className="text-6xl font-extrabold">I&apos;m Gabriel Vinhaes</h1>
          <h1 className="text-6xl text-orange font-extrabold">JS Developer</h1>
        </header>
        <button className="flex flex-wrap self-start border-2 border-orange rounded-full py-2 px-4">
          Download CV
        </button>
      </Section>
      <Section id="about" className="grid md:grid-cols-3 sm:grid-cols-1">
        <Image className="rounded-lg transform scale-x-flip" src={KVLAO} alt="KVLAO" />
        <div className="flex flex-col justify-evenly md:col-span-2 md:px-8">
          <h3 className="flex">Who I am</h3>
          <h2 className="flex text-4xl font-bold">About me</h2>
          <p>balbalbalbalballbalblablabls</p>
        </div>
      </Section>
      <Section id="projects" className="grid grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </Section>
    </main>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
