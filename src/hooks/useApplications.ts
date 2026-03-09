import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useApplications = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: api.fetchApplications,
  });
};
