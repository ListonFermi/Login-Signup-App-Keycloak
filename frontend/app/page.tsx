'use client'

import Dashboard from "@/components/Dashboard";
import useAuth from "@/hooks/useAuth";
import './globals.css'

export default function Home() {

  const {isLogin, token} = useAuth()

  return isLogin ? <Dashboard token={token} /> : <h1>Not logged in</h1>
}
