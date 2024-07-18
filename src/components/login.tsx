"use client";
import Container from "./container";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Login() {
  const form = "";
  return (
    <>
      <div className="grid w-full grid-cols-2">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-[45%] flex-col">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-sm">Please complete your details to login.</p>
            {/* <Form>
                <form>
                  <div>
                    <FormField
                      // control={}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder=" Username" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form> */}
            <div className="flex flex-col gap-y-3 pt-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm">Username</label>
                <Input placeholder=" Username" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm">Password</label>
                <Input placeholder=" Password" />
              </div>
              <div className="mt-2 flex">
                <Button className="w-full">Login</Button>
              </div>
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
