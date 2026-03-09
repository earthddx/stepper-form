import { api } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSubmitApplication = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => api.submit(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["application"] });
    },
  });
};
