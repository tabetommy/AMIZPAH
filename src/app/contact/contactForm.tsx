'use client'

import React, { useState } from 'react'

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target
            setFormData((prev) => ({
            ...prev,
            [name]: value
            }))
        }

    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setStatus('loading')
            try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // 3. Pass the state object directly
            })

            if (response.ok) {
                setStatus('success')
                // Reset state values back to empty
                setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' })
            } else {
                setStatus('error')
            }
            } catch (err) {
            setStatus('error')
            }
        }
        
    return(
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Full Name
                    </label>
                    <input
                        name="name" 
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-teal-800 focus:ring-2 focus:ring-teal-800/20"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Email Address
                    </label>
                    <input
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        required
                        className="h-11 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-teal-800 focus:ring-2 focus:ring-teal-800/20"
                    />
                </div>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Subject
                </label>
                <select 
                className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 outline-none transition focus:border-teal-800 focus:ring-2 focus:ring-teal-800/20"
                name="subject" 
                value={formData.subject} 
                onChange={handleChange}
                >
                    <option>General Inquiry</option>
                    <option>Loan Application Status</option>
                    <option>Customer Support</option>
                    <option>Business Partnership</option>
                </select>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                </label>
                <textarea
                    name="message" 
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 p-4 outline-none transition focus:border-teal-800 focus:ring-2 focus:ring-teal-800/20"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-teal-800 py-3.5 font-semibold uppercase tracking-wider text-white transition hover:bg-teal-700 active:scale-95"
            >
                Send Message
            </button>
        </form>
    )
}