'use client'

import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { createProfile } from "@/app/actions";

const formSchema = z.object({
    //TODO: controllare client side questi valori
    name: z.string(),
    reason: z.string(),
})

const DialogOnboarding = () => {
    const [isOpen, setIsOpen] = useState(false);
    const params = useSearchParams();
    const firstLogin = params.get('first-login');

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            reason: "",
            name: ""
        },
    })

    useEffect( () => {
        setIsOpen(firstLogin);
    }, []);

    async function onSubmit(formData) {
        createProfile(formData);
        setIsOpen(!isOpen);
    }

    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tell us a bit about yourself</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4 mb-4"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={ ({ field }) => (
                                <FormItem>
                                    <FormLabel>What's your name?</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Name Surname" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="reason"
                            render={ ({ field }) => (
                                <FormItem>
                                    <FormLabel>Where did you learn about Things2Do?</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a value" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="reddit">Reddit</SelectItem>
                                            <SelectItem value="twitter">Twitter / X</SelectItem>
                                            <SelectItem value="search">Web Search</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="justify-end">
                            <DialogClose asChild>
                                <Button type="button" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                                    Skip
                                </Button>
                            </DialogClose>
                            <Button type="submit">
                                Submit
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
 
export default DialogOnboarding;