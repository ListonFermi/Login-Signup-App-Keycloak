'use client'

import Dashboard from "@/components/Dashboard";
import Public from "@/components/Public";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

export default function Home() {

  const {isLogin, token} = useAuth()

  return isLogin ? <Dashboard token={token} /> : <h1>Not logged in</h1>
}
