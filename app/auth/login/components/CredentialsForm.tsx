"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { credentialsSchema } from "@/lib/schemas";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { ButtonWithLoader } from "@/components/ui/buttonWithLoader";
import { toast } from "@/components/ui/use-toast";

export const CredentialsForm = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof credentialsSchema>>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof credentialsSchema>) {
    setLoading(true);
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (!signInData?.ok) {
      toast({
        title: "Упс",
        description: "Неверные данные",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.ru" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonWithLoader
          isLoading={isLoading}
          type="submit"
          className="w-full"
        >
          Войти
        </ButtonWithLoader>
      </form>
    </Form>
  );
};
