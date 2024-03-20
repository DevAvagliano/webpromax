'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  faMoneyBill,
  faUsers,
  faWarehouse,
  faCartShopping,
  faTruckFast
} from '@fortawesome/free-solid-svg-icons'
import SidebarItem from './SidebarItem'
import { useSession } from 'next-auth/react'

export default function Sidebar() {
  const { data: session } = useSession()

  return (
    <aside className="bg-zinc-900 text-white h-full p-4 w-[250px] fixed">
      <Link href="/">
        <Image
          src="/images/logo-sistema-web-pro-max.png"
          width={150}
          height={150}
          className="block mx-auto"
        />
      </Link>
      <nav className="mt-8">
        <ul>
          {items.map((item, i) => {
            if (session?.user.role !== 'admin' && item.name == 'Usuários') {
              return
            } else {
              return <SidebarItem item={item} />
            }
          })}
        </ul>
      </nav>
    </aside>
  )
}

const items = [
  {
    id: 0,
    name: 'Clientes',
    icon: faUsers,
    subMenus: [
      { name: 'Criar Cliente', href: '/clients/create' },
      { name: 'Listar Clientes', href: '/clients' }
    ]
  },

  {
    id: 1,
    name: 'Produtos',
    icon: faCartShopping,
    subMenus: [
      { name: 'Criar Produto', href: '/products/create' },
      { name: 'Listar Produtos', href: '/products' }
    ]
  },

  {
    id: 2,
    name: 'Vendas',
    icon: faMoneyBill,
    subMenus: [
      { name: 'Criar Venda', href: '/vendas/create' },
      { name: 'Listar Vendas', href: '/vendas' }
    ]
  },

  {
    id: 3,
    name: 'Fornecedor',
    icon: faTruckFast,
    subMenus: [
      { name: 'Criar Fornecedor', href: '/fornecedor/create' },
      { name: 'Listar Fornecedores', href: '/fornecedor' }
    ]
  },

  {
    id: 4,
    name: 'Usuários',
    icon: faUsers,
    subMenus: [
      { name: 'Criar Usuário', href: '/users/create' },
      { name: 'Listar Usuários', href: '/users' }
    ]
  }
]
