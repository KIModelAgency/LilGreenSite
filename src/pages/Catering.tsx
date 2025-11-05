import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { insertCateringInquirySchema, type InsertCateringInquiry } from '@/shared/schema';
import { CheckCircle2, Utensils } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

export default function Catering() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertCateringInquiry>({
    resolver: zodResolver(insertCateringInquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      guestCount: '',
      notes: '',
    },
  });

  const onSubmit = async (data: InsertCateringInquiry) => {
    try {
      const response = await apiRequest<{ success: boolean; message: string; id: string }>(
        'POST',
        '/api/catering',
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
        title: t.catering.error,
        variant: 'destructive',
      });
    }
  };

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
            data-testid="text-catering-title"
          >
            {t.catering.title}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.catering.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  {t.catering.title}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.catering.description}
              </p>

              {/* Features */}
              <ul className="space-y-4">
                {[
                  'Frisch zubereitete Bowls & Salate',
                  'Smoothie-Bars für Events',
                  'Individuelle Menü-Zusammenstellung',
                  'Anpassbar für Allergien & Ernährungsformen',
                  'Umweltfreundliche Verpackungen',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{t.catering.formTitle}</CardTitle>
                  <CardDescription>
                    Wir melden uns innerhalb von 24 Stunden bei dir zurück.
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
                        {t.catering.success}
                      </h3>
                      <p className="text-muted-foreground">
                        Wir freuen uns auf dein Event!
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
                              <FormLabel>{t.catering.name}</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-catering-name" />
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
                              <FormLabel>{t.catering.email}</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} data-testid="input-catering-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.catering.phone}</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} data-testid="input-catering-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t.catering.eventDate}</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} data-testid="input-catering-date" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="guestCount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t.catering.guestCount}</FormLabel>
                                <FormControl>
                                  <Input {...field} data-testid="input-catering-guests" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.catering.notes}</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  rows={4}
                                  placeholder={t.catering.notesPlaceholder}
                                  data-testid="input-catering-notes"
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
                          data-testid="button-catering-submit"
                        >
                          {form.formState.isSubmitting ? t.catering.submitting : t.catering.submit}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
