"use client";

import * as React from "react";
import { useId, useState } from "react";
import Button from "@atoms/Button";
import { Input } from "@atoms/Input";
import { Checkbox } from "@atoms/Checkbox";
import { FormField } from "@molecules/FormField";
import ContactPerson from "@molecules/ContactPerson";
import ContactDetails from "@molecules/ContactDetails";

export type RequestFormValues = {
  name: string;
  email: string;
  phone?: string;
  agree: boolean;
};

export type RequestFormProps = {
  source?: string;
  className?: string;
  variant?: 'panel' | 'brand' | 'glass' | 'flat';
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const validate = (values: RequestFormValues) => {
  const errors: Partial<Record<keyof RequestFormValues, string>> = {};
  if (!values.name || values.name.trim().length < 2) {
    errors.name = "Введите имя (минимум 2 символа)";
  }
  if (!values.email || !emailRegex.test(values.email)) {
    errors.email = "Укажите корректный email";
  }
  if (!values.agree) {
    errors.agree = "Необходимо согласие на обработку данных";
  }
  return errors;
};

export const RequestForm: React.FC<RequestFormProps> = ({ source = "projects", className = "", variant = 'panel' }) => {
  const formId = useId();
  const agreeId = useId();
  const [values, setValues] = useState<RequestFormValues>({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RequestFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setServerError("");
    const v = { ...values };
    const nextErrors = validate(v);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      setStatus("submitting");
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...v,
          source,
          page: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      setServerError("Не удалось отправить заявку. Попробуйте ещё раз позже.");
      setStatus("error");
    }
  };

  // Wrapper styles by variant
  const wrapperBase = "rounded-2xl p-6";
  const wrapperVariant =
    variant === 'brand'
      ? "bg-brand-50 dark:bg-white/20 border"
      : variant === 'glass'
      ? "bg-gradient-to-br from-white/80 to-white/60 dark:from-white/15 dark:to-white/10 backdrop-blur-xl backdrop-saturate-150 backdrop-contrast-125 border border-slate-200 dark:border-white/20 shadow-xl ring-1 ring-slate-200/50 dark:ring-white/30"
      : variant === 'flat'
      ? "bg-transparent border-0 p-0"
      : "border border-slate-200 bg-white dark:bg-zinc-900 dark:border-zinc-800"; // panel (default)
  const wrapperClass = [wrapperBase, wrapperVariant, className].join(" ");

  if (status === "success") {
    return (
      <div className={wrapperClass}
           role="status" aria-live="polite">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ContactPerson
            photoSrc="/01.jpg"
            name="Ануфриенко Валерий"
            role="Менеджер по продажам"
            className={variant === 'glass' ? 'bg-transparent' : ''}
            photoSize="xl"
          >
            Привет! Я — Валерий, ваш личный менеджер. Дайте мне 2 минуты — и я покажу, как быстро, надёжно и без лишней головной боли автоматизировать и ускорить ваш бизнес.
          </ContactPerson>
          <div>
            <p className="text-xl font-semibold">Спасибо! Заявка отправлена.</p>
            <p className="text-slate-600 dark:text-zinc-400 mt-1">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Левая колонка с визуалом/контактом */}
        <div className="space-y-6">
          <ContactPerson
            photoSrc="/01.jpg"
            name="Ануфриенко Валерий"
            role="Менеджер по продажам"
            className={variant === 'glass' ? 'bg-transparent' : ''}
            photoSize="xl"
          >
            Привет! Я — Валерий, ваш личный менеджер. Дайте мне 2 минуты — и я покажу, как быстро, надёжно и без лишней головной боли автоматизировать и ускорить ваш бизнес.
          </ContactPerson>

          {/* Контактные данные: в строку, без обводки */}
          <ContactDetails
            variant={variant === 'glass' ? 'glass' : 'default'}
            layout="inline"
            bordered={false}
          />
        </div>

        {/* Правая колонка с формой */}
        <div className={variant === 'glass' ? 'md:border-l md:border-slate-200 dark:md:border-white/30 md:pl-8' : ''}>
          {variant === 'glass' ? (
            <span className="inline-block px-3 py-1 bg-white/70 dark:bg-white/10 text-slate-900 dark:text-white rounded-full text-xs font-medium mb-4 border border-slate-200 dark:border-white/20">
              Начать проект
            </span>
          ) : null}
          <h3 className={variant === 'glass' ? 'text-slate-900 dark:text-white text-xl font-medium mb-4' : 'text-xl font-semibold mb-4'}>
            Заполните форму
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-describedby={serverError ? `${formId}-server-error` : undefined}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField id={`${formId}-name`} label="Имя" required error={errors.name}>
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={Boolean(errors.name)}
                  required
                  variant={variant === 'glass' ? 'glass' : 'default'}
                />
              </FormField>

              <FormField id={`${formId}-email`} label="Email" required error={errors.email}>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={Boolean(errors.email)}
                  required
                  variant={variant === 'glass' ? 'glass' : 'default'}
                />
              </FormField>

              <FormField id={`${formId}-phone`} label="Телефон" hint="Необязательно" className="md:col-span-2">
                <Input
                  name="phone"
                  type="tel"
                  placeholder="+7 (900) 000-00-00"
                  value={values.phone}
                  onChange={handleChange}
                  variant={variant === 'glass' ? 'glass' : 'default'}
                />
              </FormField>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id={agreeId}
                name="agree"
                checked={values.agree}
                onChange={handleChange}
                aria-describedby={errors.agree ? `${formId}-agree-error` : undefined}
                aria-invalid={Boolean(errors.agree) || undefined}
                className={variant === 'glass' ? 'bg-white/60 border-slate-300 dark:bg-white/10 dark:border-white/30' : ''}
              />
              <div>
                <label htmlFor={agreeId} className={variant === 'glass' ? 'text-sm text-slate-700 dark:text-white/80 select-none' : 'text-sm text-slate-700 dark:text-zinc-200 select-none'}>
                  Я соглашаюсь на обработку персональных данных и принимаю условия политики конфиденциальности.
                </label>
                {errors.agree ? (
                  <p id={`${formId}-agree-error`} className="text-sm text-red-500 mt-1">{errors.agree}</p>
                ) : null}
              </div>
            </div>

            {serverError ? (
              <p id={`${formId}-server-error`} className="text-sm text-red-500">{serverError}</p>
            ) : null}

            <div className="pt-2">
              <Button
                type="submit"
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
                variant={variant === 'glass' ? 'gradient' : 'primary'}
                className="w-full"
              >
                {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
