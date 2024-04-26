import { useEffect, useState } from "react";

export function useDebounce(inputState: string) {
    const [cacheState, setCacheState] = useState<string | null>(null);
    useEffect(()=>{
        const timeout = setTimeout(()=>{setCacheState(inputState)},400)
        return ()=>{
            clearTimeout(timeout)
        }
    },[inputState])
    return cacheState
}