"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    email: z.string().email(),
    subject: z.string().min(2).max(255),
    message: z.string(),
});

export const ContactSection = () => {
    return (
        <section id="contact" className="container py-24 sm:py-32">
            <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contato</h2>
                <p className="text-xl text-muted-foreground mb-8">
                    Entre em contato para consultorias, parcerias ou dúvidas sobre tecnologia.
                </p>
                <div className="flex flex-col items-center gap-4">
                    <a href="mailto:felipenovaesrocha@gmail.com" className="text-primary hover:underline text-lg">felipenovaesrocha@gmail.com</a>
                    <a href="https://www.linkedin.com/in/felipenovaesrocha/" target="_blank" className="text-primary hover:underline text-lg">LinkedIn</a>
                    <a href="https://www.youtube.com/@felipenovaesrocha" target="_blank" className="text-primary hover:underline text-lg">YouTube</a>
                </div>
            </div>
        </section>
    );
};
