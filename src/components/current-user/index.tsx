"use client";
import { User } from "@/types/user";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface UserContextValue {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
  accessToken: "",
  setAccessToken: () => {},
});

export const useCurrentUser = () => {
  return useContext(UserContext);
};

type IProps = {
  user: User | null;
  accessToken?: string | null;
  children: ReactNode;
};
export const CurrentUserProvider = (props: IProps) => {
  const [user, setUser] = useState<User | null>(props.user);
  const [accessToken, setAccessToken] = useState<string | null>(
    props.accessToken ?? ""
  );

  return (
    <UserContext.Provider
      value={{ user, setUser, accessToken, setAccessToken }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
