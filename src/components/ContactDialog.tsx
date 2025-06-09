import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"
import { toast } from "react-toastify"


export function ContactDialog({
    open,
    setOpen,
}: {
    open: boolean
    setOpen: (val: boolean) => void
}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleSend = async () => {
        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email.")
            return
        }

        if (!message.trim()) {
            toast.error("Message cannot be empty.")
            return
        }

        setLoading(true)
        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message, name }),
            })

            if (res.ok) {
                toast.success("Message sent successfully!")
                setEmail("")
                setMessage("")
                setOpen(false)
            } else {
                toast.error("Something went wrong.")
            }
        } catch (error) {
            toast.error("Failed to send message.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg space-y-4">
                {/* Close button */}
                <DialogClose asChild>
                    <button className="absolute top-4 right-4 text-gray-500 hover:text-black transition">
                        <X className="w-5 h-5" />
                    </button>
                </DialogClose>

                <DialogHeader>
                    <DialogTitle className="text-black">Send Me Email</DialogTitle>
                </DialogHeader>
                <Input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-black"
                />
                <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-black"
                />
                <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full resize-none"
                />
                <Button
                    onClick={handleSend}
                    disabled={loading || !email || !message.trim()}
                    className="w-full"
                >
                    {loading ? "Sending..." : "Send"}
                </Button>
            </DialogContent>
        </Dialog>
    )
}
