import Nav from "@/app/components/nav";
export default function RootLayout({children}:{children:React.ReactNode}){
    return <html lang="en">
        <body style={{backgroundImage:"url('/stars.png')",backgroundSize: "cover", backgroundPosition: "center",minHeight:"100vh"}} className="bg-black">
            <Nav/>
            {children}
        </body>
    </html>
}