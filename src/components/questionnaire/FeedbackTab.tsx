import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, Loader2, FileText } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import FileUpload from "@/components/FileUpload";
import { FormValues } from "@/types/questionnaire";

interface FeedbackTabProps {
  form: UseFormReturn<FormValues>;
  onPrevious: (tab: string) => void;
  uploadedFile: File | null;
  handleFileUpload: (file: File) => void;
  isSubmitting: boolean;
  isAnalyzing: boolean;
  analysisProgress?: number;
}

const FeedbackTab = ({ 
  form, 
  onPrevious, 
  uploadedFile, 
  handleFileUpload,
  isSubmitting,
  isAnalyzing,
  analysisProgress = 0
}: FeedbackTabProps) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="aiAdvisor"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">I would like an AI advisor to help me save energy:</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="STRONGLY_DISAGREE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Strongly disagree</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="DISAGREE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Disagree</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="NEUTRAL" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Neutral</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="AGREE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Agree</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="STRONGLY_AGREE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Strongly agree</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="changeOne"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">If you could change one thing about your energy consumption, what would it be?</FormLabel>
            <FormControl>
              <Textarea
                placeholder="I wish I could understand my bill better..."
                className="resize-none bg-white/5 border-white/10 text-white"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="comments"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Any additional comments?</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us more about your energy needs..."
                className="resize-none bg-white/5 border-white/10 text-white"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="testGroup"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-white/10 p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-white">
                Join our beta tester group
              </FormLabel>
              <FormDescription className="text-gray-300">
                Get early access to new features and help us improve the service.
              </FormDescription>
            </div>
          </FormItem>
        )}
      />

      <div className="space-y-4 mt-6">
        <div className="border border-dashed border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Upload Your Electricity Bill</h3>
          <p className="text-gray-300 mb-4">
            kWatt, our AI-powered energy advisor will analyze your electric bill to provide personalized insights and savings recommendations.
          </p>
          
          <FileUpload 
            onFileSelected={handleFileUpload} 
            acceptedFileTypes=".pdf,.jpg,.jpeg,.png"
            maxSizeMB={5}
          />
          
          {uploadedFile && (
            <div className="mt-3 flex items-center text-sm">
              <FileText className="h-4 w-4 mr-2 text-green-400" />
              <p className="text-green-400">File ready: {uploadedFile.name}</p>
            </div>
          )}
          
          {isAnalyzing && (
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs text-white/70">
                <span>Analyzing document</span>
                <span>{Math.round(analysisProgress)}%</span>
              </div>
              <Progress value={analysisProgress} className="h-2 bg-white/10" />
              <p className="text-xs text-white/60 mt-2">
                Azure Document Intelligence is extracting data from your bill...
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-between mt-4">
        <Button 
          type="button" 
          onClick={() => onPrevious("habits")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button 
          type="submit"
          disabled={isSubmitting || isAnalyzing}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          {isSubmitting || isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {uploadedFile ? "Analyzing with Azure AI" : "Submitting"}
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              {uploadedFile ? "Submit with Bill Analysis" : "Submit Questionnaire"}
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default FeedbackTab;
