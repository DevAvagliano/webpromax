'use client'

import PageHeader from '@/components/PageHeader'
import ProductForm from '@/components/ProductForm'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingProduct, setIsLoadingProduct] = useState(false)
  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    setIsLoadingProduct(true)
    fetch('/api/products/' + params.id)
      .then(res => res.json())
      .then(data => {
        setProduct(data.product)
        setIsLoadingProduct(false)
      })
      .catch(err => {
        alert('Ocorreu um erro ao buscar o produto!')
        setIsLoadingProduct(false)
      })
  }, [])

  const handleUpdateProduct = e => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target)

    const productData = {}
    for (const [key, value] of formData.entries()) {
      productData[key] = value
    }

    fetch('/api/products/' + params.id, {
      method: 'PATCH',
      body: JSON.stringify(productData)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(
            'Ocorreu um erro alterando o produto com id: ' + params.id
          )
        } else {
          return res.json()
        }
      })
      .then(data => {
        alert('Produto ' + productData.name + ' alterado com sucesso!')
        setIsLoading(false)
        router.push('/products')
      })
      .catch(err => {
        alert('Ocorreu um erro alterando o produto com id: ' + params.id)
        setIsLoading(false)
      })
  }

  return (
    <>
      <PageHeader title="Editar e Visualizar Produto">
        Aqui você pode visualizar ou editar o produto cadastrado no sistema.
      </PageHeader>

      {product && (
        <section className="mt-8 flex gap-10">
          <ProductForm
            product={product}
            onSubmit={handleUpdateProduct}
            isLoading={isLoading}
          />
          <div>
            <ul>
              <li>
                <b>Adicionado por: </b>
                {product.user?.firstName + ' ' + product.user?.lastName}
              </li>

              <li>
                <b>E-mail do usuário: </b>
                {product.user.email}
              </li>

              <li>
                <b>Criado em: </b>
                {product.createdAt.split('T')[0]}
              </li>

              <li>
                <b>Alterado em: </b>
                {product.updatedAt.split('T')[0]}
              </li>
            </ul>
          </div>
        </section>
      )}

      {isLoadingProduct && (
        <p className="mt-16 text-center">
          <FontAwesomeIcon icon={faCircleNotch} className="animate-spin w-6" />
        </p>
      )}
    </>
  )
}
