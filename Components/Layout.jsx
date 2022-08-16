import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children, route }) {

    const router = route.slice(1, 5);

    console.log(router)

     if (router === 'auth') {
        return (
            <main>{children}</main>
        )
    }else {
        return (
            <>
                <Sidebar />
                <main>{children}</main>
                <Footer />
            </>
        )
     }

}