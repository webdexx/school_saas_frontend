import { api } from "@/lib/api";

import type { Subject } from "@/features/subjects/types/subject.types";

export const getSubjects = async (): Promise<Subject[]> => {
  const response = await api.get("/subjects");

  return response.data.data;
};