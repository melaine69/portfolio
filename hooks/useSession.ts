import supabase from "@/lib/database";
import { AuthError, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";


type Session = {
    user: User | null;
    loading: boolean;
    error: AuthError | null;
    refreshSession: () => Promise<void>;  // Assurez-vous que cette ligne est présente
};

const useSession = (): Session => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AuthError | null>(null);

    useEffect(() => {
       
        const fetchSession = async () => {
            setLoading(true);
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                if(error) setError(error);
                setUser(session?.user || null);
            } catch (error) {
               console.log(error)
            } finally {
                setLoading(false);
            }     
        };
        fetchSession();

    }, []);

   const refreshSession = async () => {
        setLoading(true);
        try {
            const { data: { session }, error } = await supabase.auth.refreshSession();
            if(error) setError(error);
            setUser(session?.user || null);
        } catch (error) {
        console.error(error)
        } finally {
            setLoading(false);
        }
    }

    return {
        user,
        loading,
        error,
        refreshSession,
    }

}
export default useSession;