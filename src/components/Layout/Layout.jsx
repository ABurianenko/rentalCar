import { Suspense } from "react"
import { AppBar } from "../AppBar/AppBar.jsx"

export const Layout = ({ children }) => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
};