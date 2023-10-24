import { ReactNode, createContext, useState } from "react";

type Props = {
  children?: ReactNode;
};

type Auth = {
  id: string;
  username: string;
  email: string;
};

type IAuthContext = {
  authenticated: boolean;
  session: Auth | null;
  setAuthenticated: (newState: boolean, session: Auth | null) => void;
};

const initialValue: IAuthContext = {
  authenticated: false,
  session: null,
  setAuthenticated: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );
  const [session, setSession] = useState<Auth | null>(null);

  const handleSetAuthenticated = (
    newState: boolean,
    newSession: Auth | null
  ) => {
    setAuthenticated(newState);
    setSession(newSession);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        session,
        setAuthenticated: handleSetAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
