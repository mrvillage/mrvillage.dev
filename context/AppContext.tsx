import { createContext, useContext, useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";
import { TokenClaims } from "../types/token";

interface AppContextInterface {
  supabase: SupabaseClient;
  isSignedIn: boolean;
  claims: TokenClaims;
}

// @ts-ignore
const AppContext = createContext<AppContextInterface>({});

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [claims, setClaims] = useState<TokenClaims>({});
  supabase.auth.onAuthStateChange((event, session) => {
    setClaims(session?.user?.user_metadata.claims || {});
    if (event === "SIGNED_IN") {
      setIsSignedIn(true);
    } else if (event === "SIGNED_OUT" || event == "USER_DELETED") {
      setIsSignedIn(false);
    }
  });
  return (
    <AppContext.Provider value={{ supabase, isSignedIn, claims }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppContextProvider, useAppContext };
