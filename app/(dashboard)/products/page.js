import React from 'react'
import PageHeader from '@/components/PageHeader'
import ProductsTable from '@/components/ProductsTable'

export default function page() {
  return (
    <>
      <PageHeader title="Lista de Produtos">
        Aqui você pode visualizar os produtos cadastrados no sistema.
      </PageHeader>

      <section className="mt-8">
        <ProductsTable />
      </section>
    </>
  )
}
