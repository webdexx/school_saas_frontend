import { api } from "@/lib/api";

import type { Parent } from "@/features/parents/types/parent.types"

export const getParents = 
    async (): Promise<Parent[] > => {
        const response =
            await api.get("/parents");
    
            return response.data;
    };