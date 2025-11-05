import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { insertContactMessageSchema, type InsertContactMessage } from '@/shared/schema';
import { CheckCircle2 } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    try {
      const response = await apiRequest<{ success: boolean; message: string; id: string }>(
        'POST',
        '/api/contact',
        data
      );
      
      if (response.success) {
        setIsSubmitted(true);
        form.reset();
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        title: t.contact.error,
        variant: 'destructive',
      });
    }
  };

  const faqs = [
    { q: t.contact.faq1Q, a: t.contact.faq1A },
    { q: t.contact.faq2Q, a: t.contact.faq2A },
    { q: t.contact.faq3Q, a: t.contact.faq3A },
    { q: t.contact.faq4Q, a: t.contact.faq4A },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="text-contact-title"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{t.contact.formTitle}</CardTitle>
                  <CardDescription>
                    Wir antworten in der Regel innerhalb von 24 Stunden.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {t.contact.success}
                      </h3>
                      <p className="text-muted-foreground">
                        Wir melden uns so schnell wie möglich bei dir.
                      </p>
                    </motion.div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.contact.name}</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-contact-name" />
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
                              <FormLabel>{t.contact.email}</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} data-testid="input-contact-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.contact.subject}</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-contact-subject" />
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
                              <FormLabel>{t.contact.message}</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  rows={6}
                                  data-testid="input-contact-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={form.formState.isSubmitting}
                          data-testid="button-contact-submit"
                        >
                          {form.formState.isSubmitting ? t.contact.submitting : t.contact.submit}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                {t.contact.faqTitle}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary" data-testid={`accordion-faq-${index}`}>
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
