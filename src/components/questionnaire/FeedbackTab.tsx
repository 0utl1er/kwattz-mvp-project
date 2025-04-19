
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const FeedbackTab = ({ form, onPrevious, isSubmitting, isAnalyzing, analysisProgress, uploadedFile, handleFileUpload }) => {
  return (
    <div className="space-y-4 text-white">
      <div className="text-xl font-bold mb-4">Additional Feedback</div>
      
      <FormField
        control={form.control}
        name="comments"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Any additional comments or feedback?</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Share your thoughts..." 
                className="bg-white/10 border-white/20 text-white resize-none min-h-[100px]"
                disabled 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="mt-6 border border-white/20 rounded-lg p-4 bg-white/5">
        <div className="text-white font-medium mb-2">Site Maintenance Notice</div>
        <p className="text-white/80 text-sm">
          The site is currently under maintenance. Questionnaire submission is disabled.
        </p>
      </div>
      
      {isAnalyzing && (
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-white font-medium">Processing...</span>
            <span className="text-white">{Math.round(analysisProgress)}%</span>
          </div>
          <Progress value={analysisProgress} className="h-2" />
        </div>
      )}
      
      <div className="pt-4 flex justify-between">
        <Button onClick={() => onPrevious("habits")} disabled type="button" variant="outline" className="border-white/20 text-white opacity-50 cursor-not-allowed">
          Previous
        </Button>
        <Button disabled type="submit" className="bg-[#C3FF44] text-black opacity-50 cursor-not-allowed">
          {isSubmitting ? "Processing..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default FeedbackTab;
