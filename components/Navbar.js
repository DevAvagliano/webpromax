'use client'
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faClock,
  faRightFromBracket,
  faUser,
  faUserShield
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  let date = new Date()
  let hours = new Date()
  let min = new Date()

  const { data: session } = useSession()

  return (
    <nav className="bg-zinc-300 fixed py-4 px-16 w-[calc(100%-250px)] flex items-center justify-between">
      <div>
        <div>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendar} className="w-5" />
            <span className="font-bold">Data:</span>
            <span>
              {date.getDate()}/{date.getMonth() < 10 ? '0'+ 1 : '' + 1}/{date.getFullYear()}
            </span>
          </p>
        </div>
      </div>

      <div>
        <div>
          <p className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="w-5" />
            <span className="font-bold">Horas:</span>
            <span id="hrs">{hours.getHours()}hs</span>
            <span>:</span>
            <span id="min">{min.getMinutes()}min</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <p className="flex items-center">
          <span className="flex mr-3 bg-zinc-900 rounded-full text-sky-500 w-8 h-8 items-center justify-center">
            <FontAwesomeIcon
              icon={session?.user.role == 'admin' ? faUserShield : faUser}
              className="w-5"
            />
          </span>
          <Link
            href={'/users/' + session?.user.email}
            className="hover:text-sky-500 transition-all hover:-translate-y-[1px]"
          >
            {session?.user.name}
          </Link>
        </p>
        <button
          onClick={() => signOut()}
          className="flex gap-2 ml-10 items-center justify-center hover:text-sky-500 transition-all hover:-translate-y-[1px]"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="w-5" />
          <span>Sair</span>
        </button>
      </div>
    </nav>
  )
}
