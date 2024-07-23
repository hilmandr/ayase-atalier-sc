"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactSchema,
  createMessageRequest,
} from "~/lib/validations/contact.validation";
import { Element } from "react-scroll";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export default function HomeContact() {
  const router = useRouter();
  const form = useForm<ContactSchema>({
    resolver: zodResolver(createMessageRequest),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const addMessageMutation = api.message.createMessage.useMutation({
    onMutate: () => setLoading(true),
    onSuccess: () => {
      form.reset();
      toast.success("Message Sent!");
      router.push("/#contact");
    },
    onSettled: () => setLoading(false),
  });
  const submitNodemailer: SubmitHandler<ContactSchema> = useCallback(
    async (data) => {
      setLoading(true);
      const res = await axios.post<{ message: string }>("/api/contact", data);
      console.log(res);
      if (res.status === 200) {
        addMessageMutation.mutate({ ...data, message: data.message || "" });
        setLoading(true);
        return res;
      }
    },
    [addMessageMutation],
  );
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Element name="contact">
        <h1 className="text-center text-5xl font-normal" id="contact">
          Let&#39;s get in touch
        </h1>
        <div className="grid items-center justify-between gap-x-10 gap-y-20 px-0 py-5 sm:grid-cols-1 lg:grid-cols-2 lg:px-32 lg:py-10">
          <div className="relative hidden lg:aspect-[7/10] max-w-xs md:block">
            <Image
              className=""
              src="/image/contact-image.jpg"
              alt=""
              fill
            ></Image>
          </div>
          <div className="flex flex-col">
            <p className="leading-loose">
              Engage with Me: Feel Free to Get in Touch – I&#39;m Excited to
              Connect with You!
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submitNodemailer)}>
                <div className="mt-5 flex flex-col gap-10">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <input
                            type="text"
                            className="h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
                            placeholder="Enter your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <input
                            type="text"
                            className="h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea
                            className="h-28 w-full border-b border-black px-2 py-1 focus:outline-none"
                            maxLength={255}
                            placeholder="Write your message..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Maximum 255 Character</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="justify-start pt-5">
                  {loading ? (
                    <Button disabled className="h-14 w-36 rounded-full py-2">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </Button>
                  ) : (
                    <Button
                      onClick={() => submitNodemailer}
                      type="submit"
                      className="flex h-14 w-36 items-center justify-center rounded-full border bg-black py-2 text-white transition-all duration-150 hover:border-stone-800 hover:bg-white hover:text-black"
                    >
                      <p className="text-center">Send</p>
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Element>
    </>
  );
}
