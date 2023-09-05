"use client";

import Image from "next/image";
import coffee from "../app/assets/coffee.svg";
import { Button } from "./ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { socials } from "./data";
import { toast } from "./ui/use-toast";
import emailjs from "@emailjs/browser";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
	const formSchema = z.object({
		fullName: z.string().min(1),
		email: z.string().email(),
		message: z.string().min(1),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		emailjs.send(
			process.env.NEXT_PUBLIC_SERVICE_ID!,
			process.env.NEXT_PUBLIC_TEMPLATE_ID!,
			values,
			process.env.NEXT_PUBLIC_PUBLIC_KEY!
		);

		toast({
			variant: "default",
			description: "Message successfully sent.",
		});
		form.reset();
		console.log(values);
	}

	return (
		<div
			id="contact"
			className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-24 h-screen w-screen justify-center items-center p-8 dark:bg-neutral-900 dark:text-white snap-start"
		>
			<div className="hidden sm:flex flex-col justify-center">
				<Image src={coffee} alt="coffee" />
				<span className="flex text-3xl justify-center space-x-8">
					{socials.map((social) => (
						<a
							target="_blank"
							key={social.id}
							href={social.link}
							className="cursor-pointer hover:opacity-80 duration-200"
						>
							{social.icon}
						</a>
					))}
				</span>
			</div>
			<div className="w-3/4 sm:w-1/2 lg:w-1/4 text-sm sm:text-base md:text-lg lg:text-xl flex flex-col space-y-4">
				<h1 className="text-5xl font-bold">Contact</h1>
				<br />
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="fullName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Full Name</FormLabel>
									<FormControl>
										<Input
											placeholder="John Doe"
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
										<Input
											placeholder="john.doe@mail.com"
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
										<Textarea
											className="resize-none bg-background"
											placeholder="What's on your mind?"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Send Message</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default ContactSection;
