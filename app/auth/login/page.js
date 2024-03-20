import React from 'react'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm'

export default function page() {
  return (
    <main className="h-[100vh] pt-[10vh]">
      <section className="bg-zinc-900 max-w-sm flex mx-auto rounded-md p-8 items-center flex-col">
        <Image
          src="/images/logo-sistema-web-pro-max.png"
          width={300}
          height={300}
        />

        <LoginForm />
      </section>
    </main>
  )
}
