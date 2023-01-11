import Header from './Header.js'

export default function Layout({children}) {
    return (
        <>
        <Header></Header>
        <main>{children}</main>
        </>
    )
}