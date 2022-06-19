import { createContext, useContext, useEffect, useState } from "react";
import { createClient, SupabaseClient, Session } from "@supabase/supabase-js";

interface AppContextInterface {
  supabase: SupabaseClient;
  isSignedIn: boolean;
}

// @ts-ignore
const AppContext = createContext<AppContextInterface>({});

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const supabase = createClient(
    // @ts-ignore
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      setIsSignedIn(true);
    } else if (event === "SIGNED_OUT" || event == "USER_DELETED") {
      setIsSignedIn(false);
    }
  });
  return (
    <AppContext.Provider value={{ supabase, isSignedIn }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppContextProvider, useAppContext };
