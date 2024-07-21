"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { signIn } from "next-auth/react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoginValidation, login } from "~/lib/validations/login.validation";

export default function Login() {
  const router = useRouter();
  const form = useForm<LoginValidation>({
    resolver: zodResolver(login),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<LoginValidation> = useCallback(
    async (data) => {
      const res = await signIn("credentials", {
        username: data.username,
        password: data.password,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (res?.error) {
        toast.error("error");
      } else {
        router.push("/dashboard");
      }
    },
    [router],
  );

  return (
    <>
      <div className="grid w-full grid-cols-2">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-[45%] flex-col">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-sm">Please complete your details to login.</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <Form {...form}>
                <form
                  action=""
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Username" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            {...field}
                            type="password"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex">
                    <Button className="w-full">Login</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="relative z-10 h-[100dvh] w-full bg-[url('/image/hero.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
    </>
  );
}
