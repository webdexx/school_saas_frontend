import {
  useQuery,
} from "@tanstack/react-query";

import { getStudents } from "../api/teacherApi";

export const useStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
};