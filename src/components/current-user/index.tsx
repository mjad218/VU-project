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
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export const useCurrentUser = () => {
  return useContext(UserContext);
};

type IProps = {
  user: User | null;
  children: ReactNode;
};
export const CurrentUserProvider = (props: IProps) => {
  const [user, setUser] = useState<User | null>(props.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
