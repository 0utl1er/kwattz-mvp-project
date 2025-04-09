
import { useState } from 'react';

type BillAnalysisResult = {
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

  const analyzeBill = async (file: File, formData: QuestionnaireData) => {
    setIsAnalyzing(true);
    setError(null);
    
    try {
      // Create a FormData object to send the file and form data
      const data = new FormData();
      data.append('file', file);
      data.append('formData', JSON.stringify(formData));
      
      // Replace with your actual Azure function URL
      const response = await fetch('/api/analyze-bill', {
        method: 'POST',
        body: data,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to analyze bill');
      }
      
      const result = await response.json();
      setAnalysisResult(result);
      
      return result;
    } catch (err) {
      console.error('Error analyzing bill:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
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
  };
};
