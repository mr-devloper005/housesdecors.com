'use client'

import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/lib/auth-context'

export function NavbarAuthControls() {
  const { user, logout } = useAuth()

  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-9 w-9 shrink-0 border border-[rgba(27,67,50,0.15)]" title={user?.name || 'Signed in'}>
        <AvatarImage src={user?.avatar} alt={user?.name || ''} />
        <AvatarFallback className="bg-[#eef4f1] text-sm font-semibold text-[#1b4332]">{user?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-9 shrink-0 rounded-full border-[#1b4332]/25 px-3 text-sm font-semibold text-[#1b4332] hover:bg-[#eef4f1] sm:px-4"
        onClick={logout}
      >
        <LogOut className="h-4 w-4 sm:mr-2" />
        <span className="hidden sm:inline">Sign out</span>
      </Button>
    </div>
  )
}
