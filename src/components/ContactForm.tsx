import { useRef, useState, type FormEvent, type ChangeEvent } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "./ui/field"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

interface ContactFormData {
    fullName: string
    email: string
    message: string
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>
type Status = "idle" | "sending" | "sent" | "error"

export const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null)
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<Status>("idle")

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const validate = (): boolean => {
        const newErrors: FormErrors = {}
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email"
        }
        if (!formData.message.trim()) newErrors.message = "Message is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validate() || !form.current) return

        setStatus("sending")
        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            setStatus("sent")
            setFormData({ fullName: "", email: "", message: "" })
        } catch (err) {
            console.error("EmailJS error:", err)
            setStatus("error")
        }
    }

    return (
        <form ref={form} onSubmit={handleSubmit} className="w-full font-mono">
            <FieldGroup>
                <Field data-invalid={!!errors.fullName}>
                    <FieldLabel htmlFor="fullName">IDENTIFIER</FieldLabel>
                    <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && <FieldError>{errors.fullName}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.email}>
                    <FieldLabel htmlFor="email">ENDPOINT</FieldLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        aria-invalid={!!errors.email}
                    />
                    <FieldError>{errors.email}</FieldError>
                    
                </Field>

                <Field data-invalid={!!errors.message}>
                    <FieldLabel htmlFor="message">PAYLOAD</FieldLabel>
                    <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project scope or technical requirements..."
                        aria-invalid={!!errors.message}
                    />
                    {errors.message && <FieldError>{errors.message}</FieldError>}
                </Field>

                <Button type="submit" className="w-full font-mono" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
                </Button>

                {status === "error" && (
                    <FieldDescription className="text-destructive text-center">
                        Something went wrong. Please try again or email me directly.
                    </FieldDescription>
                )}
            </FieldGroup>
        </form>
    )
}