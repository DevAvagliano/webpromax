import React from 'react'
import UsersTable from '@/components/UsersTable'
import PageHeader from '@/components/PageHeader'

export default function page() {
  return (
    <>
      <PageHeader title="Lista de Usuários">
        Aqui você pode listar e visualizar os usuários registrados no sistema.
      </PageHeader>
      <section className="mt-8">
        <UsersTable />
      </section>
    </>
  )
}
