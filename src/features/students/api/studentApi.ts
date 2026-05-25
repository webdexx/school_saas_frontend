import { api } from "@/lib/api";

import type { Student } from "@/features/students/types/student.types"

export const getStudents = 
    async (): Promise<Student[] > => {
        const response =
            await api.get("/students");
    
            return response.data;
    };