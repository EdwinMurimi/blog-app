export default function BlogFooter() {
    return (
        <footer className="bg-white shadow p-1">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <a href="/"><img src="logo.png" className="h-9" alt="accessibility blog logo"/></a>
                <blockquote className="mt-5 md:mt-0">Copyright @2023 . BlogPost</blockquote>
            </div>
        </footer>
    )
}