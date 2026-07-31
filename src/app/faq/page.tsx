'use client'

import React, { useState } from 'react';
import CTASection from "@/components/CTA/page";

export default function FAQSection() {
  
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'eligibility', name: 'Eligibility & Applying' },
    { id: 'details', name: 'Loan Details & Rates' },
    { id: 'repayment', name: 'Repayment & Security' }
  ]

  const faqs = [
    // Category: Eligibility & Applying
    {
      category: 'eligibility',
      question: "Who can apply for a loan?",
      answer: "Any Ghanaian citizen or legal resident who is at least 18 years old and meets our loan requirements."
    },
    {
      category: 'eligibility',
      question: "What documents do I need?",
      answer: "You will typically need a valid Ghana Card (or other accepted national ID), proof of income or business registration (if applicable), details of your guarantor(s), and any other supporting documents requested by our loan officer."
    },
    {
      category: 'eligibility',
      question: "Do I need a guarantor?",
      answer: "Yes. Most of our loans require one or more guarantors with valid national identification, depending on the loan amount and type."
    },
    {
      category: 'eligibility',
      question: "Do you finance new businesses?",
      answer: "Yes. We consider financing for both newly established and existing businesses, subject to our internal credit and business viability assessment."
    },
    {
      category: 'eligibility',
      question: "How do I apply?",
      answer: "You can apply by visiting our main office in Obuasi or by reaching out to our support team directly using the contact details on our website."
    },

    // Category: Loan Details & Rates
    {
      category: 'details',
      question: "What types of loans do you offer?",
      answer: "We offer tailored financial solutions including Business Loans, Personal Loans, Salary Loans, and Group Loans."
    },
    {
      category: 'details',
      question: "How long does the approval process take?",
      answer: "Applications are reviewed as quickly as possible. Once all required verification documents and guarantor details are submitted, our credit team processes approvals swiftly."
    },
    {
      category: 'details',
      question: "How much can I borrow?",
      answer: "Your maximum loan limit depends on your overall eligibility, proven repayment capacity, and our financial assessment during application."
    },
    {
      category: 'details',
      question: "What are your interest rates?",
      answer: "Interest rates depend on the specific type of loan you select and your chosen repayment period. Please contact our Obuasi office for our current competitive rates."
    },
    {
      category: 'details',
      question: "How will I receive my loan?",
      answer: "Approved loans are disbursed straight to you using your agreed payment method, such as your registered bank account or directly to your Mobile Money (MoMo) wallet."
    },

    // Category: Repayment & Security
    {
      category: 'repayment',
      question: "How do I repay my loan?",
      answer: "Repayments can be made according to your agreed schedule through convenient channels like Mobile Money, direct bank transfer, or other approved offline payment methods."
    },
    {
      category: 'repayment',
      question: "Can I repay my loan early?",
      answer: "Yes. We support early repayments. Please contact our support team to discuss terms and get an accurate calculation of your early payoff balance."
    },
    {
      category: 'repayment',
      question: "What happens if I miss a payment?",
      answer: "If you anticipate missing a payment, please contact us immediately. Additional charges, interest, or late penalties may apply according to your signed loan agreement terms."
    },
    {
      category: 'repayment',
      question: "Can I apply for another loan after repaying mine?",
      answer: "Yes. Customers who establish a consistent, timely repayment history are highly eligible and may quickly qualify for subsequent loans."
    },
    {
      category: 'repayment',
      question: "Is my personal information confidential?",
      answer: "Yes. We strictly protect your privacy. All customer data and financial information are kept completely confidential and used strictly for loan processing and account management purposes."
    }
  ]

  // Filter logic based on both Selected Category AND Search Input
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    return matchesCategory 
  })

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3 py-1.5 rounded-full">
            FAQ Help Desk
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Have questions about Damizpah Microfinance? Find quick answers regarding our process, requirements, and services below.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 space-y-6">
          {/* Search bar */}
       

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setOpenIndex(null) // Close any open accordions when switching views
                }}
                className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? 'bg-teal-800 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div> 

        {/* FAQ Accordion Render list */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div 
                  key={index} 
                  className="rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-slate-50/50"
                  >
                    <span className="font-bold text-slate-950 sm:text-base">
                      {faq.question}
                    </span>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-250 ${isOpen ? 'rotate-180 bg-teal-50 text-teal-800' : ''}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Transition body height adjustment */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'
                    } overflow-hidden`}
                  >
                    <div className="p-5 text-sm leading-relaxed text-slate-600 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
              <p className="text-slate-500 text-sm font-medium">No questions match your search criteria.</p>
              <button 
                onClick={() => { setActiveCategory('all'); }} 
                className="mt-3 text-xs text-teal-800 font-bold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
      <CTASection headerText="Get in touch "/>
    </section>
  )
}