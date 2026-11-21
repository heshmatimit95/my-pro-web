'use client'

import { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { getSupabase } from '@/lib/supabase'

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const supabase = getSupabase()
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const { error } = await getSupabase().auth.signInWithPassword({ email, password })
    if (error) setError('ایمیل یا رمز اشتباه است')
  }

  if (loading) return <p className="p-8">در حال بارگذاری...</p>

  if (!session) {
    return (
      <form onSubmit={login} className="mx-auto mt-20 flex max-w-sm flex-col gap-3 p-4">
        <h1 className="text-xl font-bold">ورود مدیر</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
          className="rounded border p-2"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
          className="rounded border p-2"
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        <button className="rounded bg-black p-2 text-white">ورود</button>
      </form>
    )
  }

  return (
    <div>
      <div className="flex justify-end p-4">
        <button
          onClick={() => getSupabase().auth.signOut()}
          className="rounded border px-3 py-1"
        >
          خروج
        </button>
      </div>
      {children}
    </div>
  )
}