import Link from 'next/link'

export default function Contacto() {
    return (
        <main>
            <h1 className="text-4xl font-bold">
                Pagina de contacto
            </h1>
            <nav className="my-4">
                <ul className="flex">
                    <li className="mr-4">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}