import { api } from "@/lib/api";

import type { Teacher } from "@/features/teachers/types/teacher.types"

export const getTeachers = 
    async (): Promise<Teacher[] > => {
        const response =
            await api.get("/teachers");
    
            return response.data.teachers;
    };