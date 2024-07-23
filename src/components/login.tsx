"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoginValidation, login } from "~/lib/validations/login.validation";
import { Loader2 } from "lucide-react";
import { Eye, EyeSlash } from "iconsax-react";

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
      setLoading(true);
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
         setLoading(true);
      }
    },
    [router],
  );
    const [loading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="grid w-full lg:grid-cols-2">
        <div className="flex lg:pt-0 pt-64 w-full items-center justify-center">
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
                          <div className=" relative items-center justify-between">
                              <Button type="button" variant="ghost" className=" absolute right-0" onClick={() => {
                                setPassword((prev) => !prev)}}
                                >
                                  {password ? (<Eye size="16" color="#3a3a3a"/>) : (<EyeSlash size="16" color="#3a3a3a"/>)}
                              </Button>
                              <Input
                              placeholder="Password"
                              {...field}
                              type={password?"text":"password"}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex">
                     {loading ? (
                    <Button disabled className="h-14 w-36 rounded-full py-2">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => onSubmit}
                      type="submit"
                      className="flex h-14 w-36 items-center justify-center rounded-full border bg-black py-2 text-white transition-all duration-150 hover:border-stone-800 hover:bg-white hover:text-black"
                    >
                      <p className="text-center">Login</p>
                    </Button>
                  )}
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="lg:flex w-full items-center justify-center hidden">
          <div className="relative z-10 h-[100dvh] w-full bg-[url('/image/hero.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
    </>
  );
}
