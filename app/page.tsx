import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="min-h-svh p-6">
      <section className="max-w-md rounded-2xl bg-card/90 p-6 text-sm leading-loose shadow-xl backdrop-blur-sm sm:p-8">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>Webiwabo</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="mt-4 font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </section>
      <div className="mx-auto mt-6 max-w-xl">
        <Image
          className="h-64 w-full rounded-xl object-cover"
          src="https://images.unsplash.com/photo-1742343913587-783b3f1a6d66?auto=format&fit=crop&w=1200&q=85"
          alt="Partida de Riichi Mahjong sobre una mesa verde"
          width={1200}
          height={800}
          priority
        />
      </div>
    </main>
  )
}
