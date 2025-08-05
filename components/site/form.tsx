"use client";

import { useState, FormEvent } from "react";
import { cn } from "./ds";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Types

export type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "file"
  | "date"
  | "time"
  | "datetime-local";

export type ValidationRule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp | string; // Allow string patterns for server components
  validationType?: "email" | "url" | "phone" | "alphanumeric" | "numeric";
  message?: string;
  custom?: (value: any) => boolean | string;
  matches?: string; // Field name to match (for password confirmation)
  matchMessage?: string; // Custom message for match validation
};

export type SelectOption = {
  label: string;
  value: string;
};

export type Field = {
  name: string;
  type: FieldType;
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  validation?: ValidationRule;
  options?: SelectOption[]; // For select and radio
  rows?: number; // For textarea
  disabled?: boolean;
  className?: string;
  helperText?: string;
  accept?: string; // For file input
  multiple?: boolean; // For file input
  dependsOn?: {
    field: string;
    value: any;
    condition?: "equals" | "not-equals" | "contains" | "not-empty";
  }; // Field dependencies
};

export type FormProps = {
  fields: Field[];
  onSubmit?: (data: Record<string, any>) => void | Promise<void>; // Optional - for client components
  webhookUrl?: string; // Webhook URL for server components
  webhookMethod?: "POST" | "PUT" | "PATCH"; // HTTP method for webhook
  webhookHeaders?: Record<string, string>; // Custom headers for webhook
  submitText?: string;
  cancelText?: string;
  onCancel?: () => void;
  className?: string;
  fieldClassName?: string;
  buttonClassName?: string;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  columns?: 1 | 2;
  loading?: boolean;
  disabled?: boolean;
  showLabels?: boolean;
  inlineErrors?: boolean;
  successMessage?: string;
  showSuccessMessage?: boolean;
  resetOnSubmit?: boolean;
  onSuccess?: () => void;
  errorMessage?: string; // Custom error message for failed submissions
};

// Component

export const Form = ({
  fields,
  onSubmit,
  webhookUrl,
  webhookMethod = "POST",
  webhookHeaders = {},
  submitText = "Submit",
  cancelText = "Cancel",
  onCancel,
  className,
  fieldClassName,
  buttonClassName,
  gap = 4,
  columns = 1,
  loading = false,
  disabled = false,
  showLabels = true,
  inlineErrors = true,
  successMessage = "Form submitted successfully!",
  showSuccessMessage = false,
  resetOnSubmit = false,
  onSuccess,
  errorMessage = "Something went wrong. Please try again.",
}: FormProps) => {
  const getInitialData = () => {
    const initialData: Record<string, any> = {};
    fields.forEach((field) => {
      if (field.type === "file") {
        initialData[field.name] = null;
      } else {
        initialData[field.name] =
          field.defaultValue ?? (field.type === "checkbox" ? false : "");
      }
    });
    return initialData;
  };

  const [formData, setFormData] = useState<Record<string, any>>(getInitialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const gapClasses = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
  };

  // Built-in validation patterns
  const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
    numeric: /^[0-9]+$/,
  };

  const validateField = (field: Field, value: any, allValues?: Record<string, any>): string | null => {
    if (!field.validation) return null;
    const { validation } = field;

    if (validation.required && !value && field.type !== "file") {
      return validation.message || `${field.label || field.name} is required`;
    }

    if (validation.required && field.type === "file" && !value) {
      return validation.message || `Please select a file`;
    }

    // Check field matching (e.g., password confirmation)
    if (validation.matches && allValues) {
      const matchValue = allValues[validation.matches];
      if (value !== matchValue) {
        return validation.matchMessage || `${field.label || field.name} must match ${validation.matches}`;
      }
    }

    if (validation.minLength && value.length < validation.minLength) {
      return (
        validation.message ||
        `Minimum length is ${validation.minLength} characters`
      );
    }

    if (validation.maxLength && value.length > validation.maxLength) {
      return (
        validation.message ||
        `Maximum length is ${validation.maxLength} characters`
      );
    }

    if (validation.min !== undefined && Number(value) < validation.min) {
      return validation.message || `Minimum value is ${validation.min}`;
    }

    if (validation.max !== undefined && Number(value) > validation.max) {
      return validation.message || `Maximum value is ${validation.max}`;
    }

    // Handle validation type (built-in patterns)
    if (validation.validationType && value) {
      const pattern = validationPatterns[validation.validationType];
      if (pattern && !pattern.test(value)) {
        return validation.message || `Invalid ${validation.validationType} format`;
      }
    }

    // Handle custom pattern (RegExp or string)
    if (validation.pattern && value) {
      const pattern = typeof validation.pattern === 'string' 
        ? new RegExp(validation.pattern)
        : validation.pattern;
      if (!pattern.test(value)) {
        return validation.message || "Invalid format";
      }
    }

    if (validation.custom) {
      const result = validation.custom(value);
      if (typeof result === "string") return result;
      if (!result) return validation.message || "Invalid value";
    }

    return null;
  };

  const handleChange = (field: Field, value: any) => {
    const newFormData = { ...formData, [field.name]: value };
    setFormData(newFormData);
    setShowSuccess(false); // Hide success message on new input
    setShowError(false); // Hide error message on new input
    
    if (touched[field.name]) {
      const error = validateField(field, value, newFormData);
      setErrors((prev) => ({ ...prev, [field.name]: error || "" }));
    }

    // Also validate fields that depend on this one
    fields.forEach((f) => {
      if (f.validation?.matches === field.name && touched[f.name]) {
        const error = validateField(f, newFormData[f.name], newFormData);
        setErrors((prev) => ({ ...prev, [f.name]: error || "" }));
      }
    });
  };

  const handleBlur = (field: Field) => {
    setTouched((prev) => ({ ...prev, [field.name]: true }));
    const error = validateField(field, formData[field.name], formData);
    setErrors((prev) => ({ ...prev, [field.name]: error || "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    fields.forEach((field) => {
      const error = validateField(field, formData[field.name], formData);
      if (error) {
        newErrors[field.name] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
    );

    if (hasErrors) return;

    setIsSubmitting(true);
    setShowError(false);
    setSubmitError("");

    try {
      // Prepare form data (handle file inputs)
      const submitData = { ...formData };
      
      // If file fields exist and we're using webhook, convert to base64
      if (webhookUrl) {
        for (const field of fields) {
          if (field.type === "file" && submitData[field.name]) {
            const file = submitData[field.name];
            if (file instanceof File) {
              // Convert file to base64 for webhook submission
              const reader = new FileReader();
              const base64 = await new Promise<string>((resolve) => {
                reader.onload = () => resolve(reader.result as string);
                reader.readAsDataURL(file);
              });
              submitData[field.name] = {
                name: file.name,
                type: file.type,
                size: file.size,
                data: base64
              };
            }
          }
        }
      }

      // Submit to webhook if URL provided
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: webhookMethod,
          headers: {
            "Content-Type": "application/json",
            ...webhookHeaders,
          },
          body: JSON.stringify(submitData),
        });

        if (!response.ok) {
          throw new Error(`Form submission failed: ${response.status}`);
        }

        // Try to parse response (some webhooks return data)
        try {
          const responseData = await response.json();
          if (onSubmit) {
            await onSubmit(responseData);
          }
        } catch {
          // Response might not be JSON, that's okay
          if (onSubmit) {
            await onSubmit(submitData);
          }
        }
      } else if (onSubmit) {
        // Use custom submit handler if no webhook
        await onSubmit(submitData);
      } else {
        console.warn("Form: No webhook URL or onSubmit handler provided");
      }
      
      // Handle success
      if (showSuccessMessage) {
        setShowSuccess(true);
      }
      
      if (resetOnSubmit) {
        setFormData(getInitialData());
        setTouched({});
        setErrors({});
      }
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setShowError(true);
      setSubmitError(error instanceof Error ? error.message : errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(getInitialData());
    setTouched({});
    setErrors({});
    setShowSuccess(false);
    setShowError(false);
    setSubmitError("");
  };

  // Check if field should be shown based on dependencies
  const shouldShowField = (field: Field): boolean => {
    if (!field.dependsOn) return true;
    
    const { field: dependentField, value, condition = "equals" } = field.dependsOn;
    const dependentValue = formData[dependentField];
    
    switch (condition) {
      case "equals":
        return dependentValue === value;
      case "not-equals":
        return dependentValue !== value;
      case "contains":
        return dependentValue?.includes?.(value);
      case "not-empty":
        return !!dependentValue;
      default:
        return true;
    }
  };

  const renderField = (field: Field) => {
    if (!shouldShowField(field)) return null;
    
    const error = errors[field.name];
    const hasError = touched[field.name] && error;
    const isDisabled = disabled || loading || field.disabled;

    const inputClassName = cn(
      hasError && "border-destructive focus-visible:ring-destructive",
      field.className
    );

    switch (field.type) {
      case "textarea":
        return (
          <Textarea
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={(e) => handleChange(field, e.target.value)}
            onBlur={() => handleBlur(field)}
            placeholder={field.placeholder}
            disabled={isDisabled}
            className={inputClassName}
            rows={field.rows || 4}
          />
        );

      case "select":
        return (
          <Select
            value={formData[field.name]}
            onValueChange={(value) => handleChange(field, value)}
            disabled={isDisabled}
          >
            <SelectTrigger className={inputClassName}>
              <SelectValue placeholder={field.placeholder || "Select..."} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "checkbox":
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={field.name}
              checked={formData[field.name]}
              onCheckedChange={(checked) => handleChange(field, checked)}
              disabled={isDisabled}
            />
            {field.label && (
              <Label
                htmlFor={field.name}
                className="text-sm font-normal cursor-pointer"
              >
                {field.label}
              </Label>
            )}
          </div>
        );

      case "radio":
        return (
          <RadioGroup
            value={formData[field.name]}
            onValueChange={(value) => handleChange(field, value)}
            disabled={isDisabled}
          >
            {field.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="font-normal cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "file":
        return (
          <Input
            id={field.name}
            name={field.name}
            type="file"
            onChange={(e) => {
              const files = (e.target as HTMLInputElement).files;
              handleChange(field, field.multiple ? files : files?.[0]);
            }}
            onBlur={() => handleBlur(field)}
            disabled={isDisabled}
            className={inputClassName}
            accept={field.accept}
            multiple={field.multiple}
          />
        );

      case "date":
      case "time":
      case "datetime-local":
        return (
          <Input
            id={field.name}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={(e) => handleChange(field, e.target.value)}
            onBlur={() => handleBlur(field)}
            disabled={isDisabled}
            className={inputClassName}
          />
        );

      default:
        return (
          <Input
            id={field.name}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={(e) => handleChange(field, e.target.value)}
            onBlur={() => handleBlur(field)}
            placeholder={field.placeholder}
            disabled={isDisabled}
            className={inputClassName}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      {showSuccess && showSuccessMessage && (
        <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-md">
          {successMessage}
        </div>
      )}
      
      {showError && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md">
          {submitError || errorMessage}
        </div>
      )}
      
      <div className={cn("grid", gapClasses[gap], columnClasses[columns])}>
        {fields.map((field) => {
          if (!shouldShowField(field)) return null;
          
          return (
            <div key={field.name} className={cn("space-y-2", fieldClassName)}>
              {showLabels && field.label && field.type !== "checkbox" && (
                <Label htmlFor={field.name}>
                  {field.label}
                  {field.validation?.required && (
                    <span className="text-destructive ml-1">*</span>
                  )}
                </Label>
              )}
              
              {renderField(field)}
              
              {field.helperText && !errors[field.name] && (
                <p className="text-sm text-muted-foreground">
                  {field.helperText}
                </p>
              )}
              
              {inlineErrors && touched[field.name] && errors[field.name] && (
                <p className="text-sm text-destructive">{errors[field.name]}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className={cn("flex", gapClasses[gap], "mt-6", buttonClassName)}>
        <Button
          type="submit"
          disabled={isSubmitting || loading || disabled}
          className="flex-1 sm:flex-none"
        >
          {isSubmitting || loading ? "Loading..." : submitText}
        </Button>
        
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting || loading || disabled}
            className="flex-1 sm:flex-none"
          >
            {cancelText}
          </Button>
        )}
      </div>
    </form>
  );
};