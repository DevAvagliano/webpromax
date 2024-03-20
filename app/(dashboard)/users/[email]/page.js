'use client'

import PageHeader from '@/components/PageHeader'
import UserForm from '@/components/UserForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useParams, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

export default function page() {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingUser, setIsLoadingUser] = useState(false)
  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    setIsLoadingUser(true)
    fetch('/api/users/' + params.email)
      .then(res => res.json())
      .then(data => {
        setUser(data.user)
        setIsLoadingUser(false)
      })
      .catch(err => {
        alert('Ocorreu um erro ao buscar o usuário!')
        setIsLoadingUser(false)
      })
  }, [])

  const handleUpdateUser = e => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target)

    const userData = {}
    for (const [key, value] of formData.entries()) {
      userData[key] = value
    }

    fetch('/api/users/' + params.email, {
      method: 'PATCH',
      body: JSON.stringify(userData)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(
            'Ocorreu um erro ao alterar o usuário com o email: ' + params.email
          )
        } else {
          return res.json()
        }
      })
      .then(data => {
        alert('Usuário ' + userData.email + ' alterado com sucesso!')
        setIsLoading(false)
        router.push('/users')
      })
      .catch(err => {
        alert(
          'Ocorreu um erro ao alterar o usuário com o email: ' + params.email
        )
        setIsLoading(false)
      })
  }

  return (
    <>
      <PageHeader title="Editar Usuário">
        Aqui você pode editar os dados do usuário registrado no sistema.
      </PageHeader>

      {user && (
        <section className="mt-8">
          <UserForm
            user={user}
            onSubmit={handleUpdateUser}
            isLoading={isLoading}
          />
        </section>
      )}

      {setIsLoadingUser && (
        <p className="mt-16 text-center">
          <FontAwesomeIcon icon={faCircleNotch} className="animate-spin w-6" />
        </p>
      )}
    </>
  )
}
