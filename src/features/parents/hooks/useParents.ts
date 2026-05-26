import {
  useQuery,
} from "@tanstack/react-query";

import { getParents } from "../api/parentsApi";

export const useParents = () => {
  return useQuery({
    queryKey: ["parents"],
    queryFn: getParents,
  });
};