
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export type BillAnalysisResult = {
  totalAmount: number;
  kwhUsage: number;
  rate: number;
  tariffType: string;
  billingPeriod: {
    start: string;
    end: string;
  };
  providerName: string;
  insights: string[];
};

type QuestionnaireData = any; // Replace with your actual form data type

export const useAnalyzeBill = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<BillAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const analyzeBill = async (file: File, formData: QuestionnaireData) => {
    setIsAnalyzing(true);
    setError(null);
    setProgress(0);
    
    try {
      // Create a FormData object to send the file and form data
      const data = new FormData();
      data.append('file', file);
      data.append('formData', JSON.stringify(formData));
      
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 10;
          return newProgress >= 95 ? 95 : newProgress;
        });
      }, 500);
      
      // Send to our Azure Function endpoint
      const response = await fetch('/api/analyze-bill', {
        method: 'POST',
        body: data,
      });
      
      clearInterval(progressInterval);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to analyze bill');
      }
      
      setProgress(100);
      const result = await response.json();
      setAnalysisResult(result);
      
      toast({
        title: "Bill Analysis Complete",
        description: "We've successfully analyzed your electricity bill.",
      });
      
      return result;
    } catch (err) {
      console.error('Error analyzing bill:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      
      toast({
        title: "Analysis Failed",
        description: err instanceof Error ? err.message : 'Unknown error occurred',
        variant: "destructive",
      });
      
      return null;
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    analyzeBill,
    isAnalyzing,
    analysisResult,
    error,
    progress,
  };
};
