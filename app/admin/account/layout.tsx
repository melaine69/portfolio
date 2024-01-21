import { ReactNode } from "react";
import AdminHeader from "../_components/AdminHeader";

type AdminLayoutProps = {
    children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <> 
        <AdminHeader/>
        { children }
        </>
    )
}
export default AdminLayout;