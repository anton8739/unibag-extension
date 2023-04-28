import {createContext} from "react";
import {UseFormReturn} from "../types";

export const LoginFormContext = createContext<UseFormReturn>({} as UseFormReturn);