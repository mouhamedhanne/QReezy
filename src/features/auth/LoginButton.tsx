"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { Loader } from "@/src/components/ui/Loader";

export const LoginButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signIn(),
  });

  return (
    <Button
      className="gap-2 bg-black text-white transition duration-300
      ease-in-out transform hover:bg-black/90 hover:text-white"
      variant="outline"
      size="sm"
      disabled={mutation.isPending}
      onClick={() => {
        mutation.mutate();
      }}
    >
      {mutation.isPending ? (
        <Loader size={12} className="text-white" />
      ) : (
        <LogIn size={12} className="text-white" />
      )}
      Login
    </Button>
  );
};
