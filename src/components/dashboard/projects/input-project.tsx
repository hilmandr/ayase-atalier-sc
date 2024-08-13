"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { forwardRef, useCallback, useState } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import {
  CreateProjectRequest,
  createProjectRequest,
} from "~/lib/validations/project.validation";
import { api } from "~/trpc/react";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const ContentEditor = dynamic(() => import("./froala-editor"), {
  ssr: false,
});

export default forwardRef<Object, EditorProps>(
  // hooks

  function RichTextEditor(props, ref) {
    // hooks
    const router = useRouter();

    // state
    const [isLoading, setIsLoading] = useState(false);
    const [thumbnail, setThumbnail] = useState<File | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<CreateProjectRequest>({
      resolver: zodResolver(createProjectRequest),
      defaultValues: {
        title: "",
        place: "",
        client: "",
        content: "",
        date: new Date(),
        summary: "",
        thumbnail: "",
      },
    });

    const addProjectMutation = api.project.createProject.useMutation({
      onMutate: () => setLoading(true),
      onSuccess: () => {
        form.reset();
        toast.success("Add Project Success!");
        router.push("/dashboard/projects");
      },
      onSettled: () => setLoading(false),
    });

    const onSubmit: SubmitHandler<CreateProjectRequest> = useCallback(
      async (data) => {
        if (thumbnail) {
          setLoading(true);
          console.log(thumbnail);
          const formData = new FormData();
          formData.append("file", thumbnail!);
          formData.append("upload_preset", "v7bn49sm");

          const res = await axios.post<{ secure_url: string }>(
            `https://api.cloudinary.com/v1_1/dbi3iqa9k/image/upload`,
            formData,
          );

          if (res.status === 200) {
            addProjectMutation.mutate({
              ...data,
              thumbnail: res.data.secure_url,
            });
            setLoading(true);
          }
        }
      },
      [addProjectMutation, thumbnail],
    );

    const onDrop = useCallback((acceptedFiles: File[]) => {
      // Do something with the files
      if (acceptedFiles && acceptedFiles[0]) {
        setThumbnail(acceptedFiles[0]);
      }
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
      onDrop,
    });
    return (
      <>
        <div className="w-full flex-1 pt-5">
          <div className="w-full flex-1 rounded-lg border border-slate-200 px-6 pb-6">
            {/* {JSON.stringify(form.formState.errors)} */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid w-full grid-cols-2 gap-6 py-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project&apos;s Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Project's Title" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the title of your project&apos;s.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="place"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project&apos;s Place</FormLabel>
                        <FormControl>
                          <Input placeholder="Project's Place" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the location of your project&apos;s.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="client"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project&apos;s Client</FormLabel>
                        <FormControl>
                          <Input placeholder="Project's Client" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the client&apos;s name of your project&apos;s.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Project&apos;s Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              // selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          This is the completion date of your project&apos;s.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project&apos;s Summary</FormLabel>
                        <FormControl className="h-16">
                          <Textarea
                            placeholder="Type your summary here."
                            id="message-2"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This is the summary of your project&apos;s.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2">
                    <Label>Project&apos;s Thumbnail</Label>

                    {thumbnail ? (
                      <>
                        <div className="flex w-full flex-col gap-y-1">
                          <div
                            className="relative aspect-[2/1] w-full overflow-hidden rounded-lg"
                            onClick={open}
                          >
                            <Image
                              src={URL.createObjectURL(thumbnail)}
                              fill
                              alt=""
                              className="object-cover object-center"
                            ></Image>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div
                        {...getRootProps({
                          className:
                            "dropzone flex w-full aspect-[2/1] border items-center justify-center rounded-lg",
                        })}
                      >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <p>{}</p>
                        ) : (
                          <p className="text-zinc-500">
                            Drag or drop image files here, or click to select
                            files
                          </p>
                        )}
                      </div>
                    )} 
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project&apos;s Detail</FormLabel>
                      <FormControl>
                        <ContentEditor
                          setValue={(value) => form.setValue("content", value)}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the detail&apos;s of your project&apos;s.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {loading ? (
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </form>
            </Form>
          </div>
        </div>
      </>
    );
  },
);
