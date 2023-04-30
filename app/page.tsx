'use client'
import { Card, Divider, Subtitle, Text } from '@tremor/react'
import CityPecker from '@/components/CityPecker'


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <div>
        <Card className='bg-gradient-to-r from-indigo-500 via-purple-500-500 to-pink-500 max-w-4xl mx-auto'>
          <Text className='text-6xl font-bold text-center mb-10 text-white font-Cinzel '>Weather AI</Text>
          <Subtitle className='text-xl text-center text-white font-Castoro-Titling'>Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 + more!</Subtitle>
          <Divider className='my-10' />
          <Card className='bg-gradient-to-br from-[#394F68] to-[#183B7E]' >
            <CityPecker/>
          </Card>        
        </Card>
        
      </div>
      
    </div>
  )
}
