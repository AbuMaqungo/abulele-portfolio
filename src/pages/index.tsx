import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>Abulele Maqungo</title>
      </Head>
      <h1 className="text-4xl font-bold text-blue-800">
        Abulele Maqungo
      </h1>
      <p className="text-xl mt-2">
        Full-Stack Developer | Java, .NET, React
      </p>
      
      
<div className="mt-6">
  <Image
  src="/abulele.jpg"  // Must match filename exactly
  alt="Abulele Maqungo"
  width={200}         // Required
  height={200}        // Required
  priority            // Ensures immediate loading
  className="rounded-full border-4 border-white shadow-lg"
/>
</div>
    </div>
  )
}