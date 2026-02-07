import SideNav from "../components/sideNav"
export default function RootLayout({children}:{children:React.ReactNode}){
    return <body>
        <SideNav/>
        <div>
            {children}
        </div>
    </body>
}