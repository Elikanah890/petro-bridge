import { useState, useCallback } from 'react';
import type { FormStatus } from '@/types/form.types';

interface UseFormValidationReturn {
  status: FormStatus;
  message: string;
  setLoading: () => void;
  setSuccess: (msg?: string) => void;
  setError: (msg?: string) => void;
  reset: () => void;
}

export function useFormValidation(): UseFormValidationReturn {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const setLoading = useCallback(() => {
    setStatus('loading');
    setMessage('');
  }, []);

  const setSuccess = useCallback((msg = 'Success!') => {
    setStatus('success');
    setMessage(msg);
  }, []);

  const setError = useCallback((msg = 'Something went wrong.') => {
    setStatus('error');
    setMessage(msg);
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setMessage('');
  }, []);

  return { status, message, setLoading, setSuccess, setError, reset };
}
