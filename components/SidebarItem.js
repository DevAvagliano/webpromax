'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="border-b border-dashed cursor-pointer">
      <p
        onClick={() => setOpen(!open)}
        className="flex p-2 justify-between hover:bg-zinc-800"
      >
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={item.icon} className="w-6" />
          {item.name}
        </span>
        <FontAwesomeIcon
          data-hidden={open}
          icon={faChevronDown}
          className="w-4 data-[hidden=true]:rotate-180 transition-all"
        />
      </p>
      <ul data-hidden={open} className="hidden data-[hidden=true]:block">
        {item.subMenus.map(subMenu => {
          return (
            <li className="hover:bg-zinc-800 pl-10 py-1">
              - <Link href={subMenu.href}>{subMenu.name}</Link>
            </li>
          )
        })}
      </ul>
    </li>
  )
}
