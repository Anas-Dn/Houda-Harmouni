/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import {data} from '../Data/data'



export const DataContext = createContext()

export function DataProvider({children}){
    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )
}
