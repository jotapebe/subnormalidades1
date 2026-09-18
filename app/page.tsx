import Image from "next/image"

const originalMessage =
  "https://upload.wikimedia.org/wikipedia/commons/8/81/Cicada3301%27s_First_Message.jpg"
const posterLocations =
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/Cicada_3301_poster_locations.png"

export default function Page() {
  return (
    <main className="min-h-svh overflow-hidden bg-[#060806] text-[#e8ead8]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_75%_8%,rgba(142,153,76,0.16),transparent_28%),radial-gradient(circle_at_8%_42%,rgba(82,105,72,0.16),transparent_24%)]" />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <a
          className="font-mono text-xs tracking-[0.35em] text-[#b8c095]"
          href="#inicio"
        >
          3301 // ARCHIVO
        </a>
        <nav className="hidden gap-6 font-mono text-xs text-[#aeb4a0] sm:flex">
          <a className="transition hover:text-[#d8e26e]" href="#pruebas">
            Pruebas
          </a>
          <a className="transition hover:text-[#d8e26e]" href="#archivo">
            Archivo
          </a>
        </nav>
      </header>

      <section
        className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 pb-24 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20 lg:pb-32"
        id="inicio"
      >
        <div>
          <p className="mb-5 font-mono text-xs tracking-[0.28em] text-[#b8c095]">
            ENIGMA DE INTERNET · DESDE 2012
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] tracking-tight text-[#f0f1df] sm:text-7xl">
            La señal detrás de la cigarra.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#b9bdad] sm:text-lg">
            Cicada 3301 fue una serie de retos criptográficos que aparecieron en
            internet con una promesa sencilla: encontrar a quienes pudieran
            seguir el rastro hasta el final. Nadie ha confirmado quién estaba
            detrás.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-lg bg-[#cbd56a] px-4 py-2 text-sm font-medium text-[#121509] transition hover:bg-[#e0ea82]"
              href="#pruebas"
            >
              Examinar las pruebas
            </a>
            <a
              className="rounded-lg border border-[#586050] px-4 py-2 text-sm font-medium text-[#e8ead8] transition hover:bg-[#1a2019]"
              href="#archivo"
            >
              Ver el archivo
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 border border-[#7f8952]/30" />
          <Image
            className="relative w-full border border-[#69714f] object-cover"
            src={originalMessage}
            alt="El mensaje inicial de Cicada 3301, publicado en enero de 2012"
            width={509}
            height={503}
            priority
          />
          <figcaption className="mt-3 font-mono text-[10px] leading-5 text-[#8f9683]">
            EVIDENCIA 01 — Mensaje inicial, 4 de enero de 2012. Imagen de
            dominio público vía Wikimedia Commons.
          </figcaption>
        </figure>
      </section>

      <section
        className="relative border-y border-[#2d342c] bg-[#0c100c]/85"
        id="pruebas"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.28em] text-[#b8c095]">
              EL RECORRIDO
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#f0f1df] sm:text-5xl">
              El archivo de las rutas conocidas.
            </h2>
            <p className="mt-5 leading-8 text-[#b9bdad]">
              No fue un único acertijo, sino varias cadenas con métodos y
              finales distintos. Esta cronología separa los retos atribuidos a
              Cicada de los mensajes posteriores que no abrieron una nueva ronda
              pública.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#303930] bg-[#303930] md:grid-cols-2">
            <article className="bg-[#0d120e] p-7">
              <p className="font-mono text-xs text-[#cbd56a]">
                01 / ENERO 2012
              </p>
              <h3 className="mt-5 text-xl text-[#eff0df]">La primera ruta</h3>
              <p className="mt-3 text-sm leading-7 text-[#aeb4a0]">
                La imagen de 4chan escondía una cadena que requería OutGuess y
                una firma PGP. Después llegaron Reddit, cifras Vigenère y de
                libro, una llamada telefónica y el número 845145127, construido
                con los números primos asociados a la imagen original.
              </p>
            </article>
            <article className="bg-[#0d120e] p-7">
              <p className="font-mono text-xs text-[#cbd56a]">
                02 / ENERO 2012
              </p>
              <h3 className="mt-5 text-xl text-[#eff0df]">
                La segunda oportunidad
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#aeb4a0]">
                Al cerrarse la primera dirección .onion, apareció una ruta
                alternativa firmada con PGP. El espacio en blanco del sitio
                escondía una lista de números; la rama continuaba por imágenes,
                OutGuess, un código de libro basado en William Blake y otra
                dirección de Tor.
              </p>
            </article>
            <article className="bg-[#0d120e] p-7">
              <p className="font-mono text-xs text-[#cbd56a]">03 / 2012</p>
              <h3 className="mt-5 text-xl text-[#eff0df]">
                Coordenadas, QR y RSA
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#aeb4a0]">
                La cuenta atrás llevó a carteles físicos en diversas ciudades.
                Sus QR usaban referencias a <em>Agrippa</em> para abrir
                servicios .onion; después hubo correos cifrados con RSA, una
                prueba MIDI y formularios de selección. Lo que ocurrió tras la
                invitación no es público.
              </p>
            </article>
            <article className="bg-[#0d120e] p-7">
              <p className="font-mono text-xs text-[#cbd56a]">
                04 / ENERO 2013
              </p>
              <h3 className="mt-5 text-xl text-[#eff0df]">
                Cicada OS y Gematria Primus
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#aeb4a0]">
                La segunda ronda comenzó con otra imagen y un código de libro
                que terminó en una ISO de Linux. Dentro había datos, scripts y
                el audio
                <em>761.mp3</em>; sus metadatos, espectro y un flujo de tuits
                llevaron al alfabeto rúnico Gematria Primus y a nuevas
                direcciones .onion.
              </p>
            </article>
            <article className="bg-[#0d120e] p-7">
              <p className="font-mono text-xs text-[#cbd56a]">05 / 2013</p>
              <h3 className="mt-5 text-xl text-[#eff0df]">El filtro técnico</h3>
              <p className="mt-3 text-sm leading-7 text-[#aeb4a0]">
                La fase final incluía preguntas de perfil y una tarea práctica:
                crear un servidor TCP y publicarlo como servicio Tor. Los
                participantes que completaron la ruta recibieron mensajes
                posteriores; no existe un relato público verificable de la
                selección final.
              </p>
            </article>
            <article className="bg-[#0d120e] p-7">
              <p className="font-mono text-xs text-[#cbd56a]">
                06 / ENERO–MAYO 2014
              </p>
              <h3 className="mt-5 text-xl text-[#eff0df]">
                La cadena más extensa
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#aeb4a0]">
                La tercera ronda usó un texto cifrado que remitía a Emerson y
                pasó por varios servicios .onion. Hubo collages de Blake, RSA,
                XOR, cuadrados mágicos, audio, compresión y nuevas imágenes. Al
                final llegó el texto rúnico que cambió el objetivo de la
                comunidad.
              </p>
            </article>
          </div>

          <div className="mt-12 grid gap-8 border-t border-[#303930] pt-12 lg:grid-cols-[1.2fr_0.8fr]">
            <article>
              <p className="font-mono text-xs tracking-[0.28em] text-[#b8c095]">
                LIBER PRIMUS
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#eff0df]">
                El libro que sigue abierto
              </h3>
              <p className="mt-4 leading-8 text-[#aeb4a0]">
                Liber Primus reúne páginas escritas en runas de Gematria Primus
                y fue publicado al terminar la ruta de 2014. Algunas páginas se
                han leído mediante transliteración, Vigenère, Atbash y claves
                basadas en primos, pero una parte sustancial continúa sin
                descifrarse. No es una cuarta ronda: es el artefacto final y aún
                activo de la tercera.
              </p>
            </article>
            <aside className="border border-[#3d4738] bg-[#0d120e] p-6">
              <p className="font-mono text-xs text-[#cbd56a]">
                ESTADO DE AUTENTICIDAD
              </p>
              <p className="mt-4 text-sm leading-7 text-[#aeb4a0]">
                En 2015 hubo un comunicado PGP que rechazó una atribución ajena.
                En 2016 circuló otra imagen, pero los archivos la tratan como
                disputada. El último mensaje autenticado con la clave PGP
                conocida llegó en 2017 y pidió desconfiar de rutas sin firma. No
                hay una nueva ronda verificada posterior a 2014.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        id="archivo"
      >
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-[#b8c095]">
            HUELLA FÍSICA
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#f0f1df] sm:text-5xl">
            El acertijo salió de la pantalla.
          </h2>
          <p className="mt-5 leading-8 text-[#b9bdad]">
            El salto a postes y calles convirtió el rompecabezas en una búsqueda
            global. Tras los códigos QR, las pistas dirigían a textos, cifrados
            y servicios accesibles mediante Tor.
          </p>
          <p className="mt-6 border-l-2 border-[#cbd56a] pl-4 font-mono text-xs leading-6 text-[#c7cbb9]">
            «We want the best, not the followers.»
            <br />— mensaje atribuido al cierre de la primera ronda
          </p>
        </div>
        <figure>
          <Image
            className="w-full border border-[#4b5546] bg-[#dfe0d6] object-cover"
            src={posterLocations}
            alt="Montaje de ubicaciones de los carteles de Cicada 3301"
            width={3961}
            height={661}
          />
          <figcaption className="mt-3 font-mono text-[10px] leading-5 text-[#8f9683]">
            EVIDENCIA 02 — Ubicaciones documentadas de carteles. Wikimedia
            Commons, CC BY-SA 4.0.
          </figcaption>
        </figure>
      </section>

      <footer className="relative border-t border-[#2d342c] px-6 py-8 text-center font-mono text-[10px] tracking-[0.2em] text-[#727968]">
        3301 · EL ORIGEN SIGUE SIN CONFIRMAR
      </footer>
    </main>
  )
}
