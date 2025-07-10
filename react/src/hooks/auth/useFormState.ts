import { useState } from 'react';

interface UseFormStateResult {
  isLoading: boolean;
  error: string | null;
  success: string | null;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSuccess: (success: string | null) => void;
  resetState: () => void;
}

export const useFormState = (): UseFormStateResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const resetState = () => {
    setIsLoading(false);
    setError(null);
    setSuccess(null);
  };

  return {
    isLoading,
    error,
    success,
    setIsLoading,
    setError,
    setSuccess,
    resetState,
  };
};
