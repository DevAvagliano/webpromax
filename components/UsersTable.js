'use client'

import { useEffect, useState } from 'react'
import UserTableRow from './UserTableRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export default function UsersTable() {
  const [users, setUsers] = useState([])
  const [isLoadingUsers, setIsLoadingUsers] = useState(false)

  useEffect(() => {
    setIsLoadingUsers(true)
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
        setIsLoadingUsers(false)
      })
      .catch(err => {
        alert('Ocorreu um erro ao buscar usuários!')
        setIsLoadingUsers(false)
      })
  }, [])

  const handleDeleteUser = (email, setIsDeleting) => {
    setIsDeleting(true)
    fetch('/api/users/' + email, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(
            'Ocorreu um erro ao excluir usuário com o email: ' + email
          )
        } else {
          return res
        }
      })
      .then(data => {
        setIsDeleting(false)
        const newUsers = users.filter(user => user.email !== email)
        setUsers(newUsers)
      })
      .catch(err => {
        alert('Ocorreu um erro ao excluir usuário com o email: ' + email)
        setIsDeleting(false)
      })
  }

  return (
    <>
      <p className="mb-5">Usuários registrados: {users.length}</p>
      <table className="w-full">
        <thead className="bg-zinc-700 text-white">
          <tr className="text-left">
            <th className="p-2">Id</th>
            <th>Nome</th>
            <th>Função</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Idade</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <UserTableRow
                key={user._id}
                user={user}
                i={i + 1}
                handleDeleteUser={handleDeleteUser}
              />
            )
          })}
        </tbody>
      </table>
      {isLoadingUsers && (
        <p className="mt-16 text-center">
          <FontAwesomeIcon icon={faCircleNotch} className="animate-spin w-6" />
        </p>
      )}
    </>
  )
}
