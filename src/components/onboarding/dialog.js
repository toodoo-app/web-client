'use client'

import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const DialogOnboarding = () => {
    const [isOpen, setIsOpen] = useState(false);
    const params = useSearchParams();
    const firstLogin = params.get('first-login');

    useEffect( () => {
        setIsOpen(firstLogin);
    }, []);

    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tell us a bit about yourself</DialogTitle>
                </DialogHeader>
                <div>
                    <Label> What will you be using Things2Do for? </Label>
                    <Input type = "text" />
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                            Skip
                        </Button>
                    </DialogClose>
                    <Button type="submit">
                        Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
 
export default DialogOnboarding;