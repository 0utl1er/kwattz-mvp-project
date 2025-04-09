
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/types/questionnaire";

interface FrustrationsTabProps {
  form: UseFormReturn<FormValues>;
  onNext: (tab: string) => void;
  onPrevious: (tab: string) => void;
}

const FrustrationsTab = ({ form, onNext, onPrevious }: FrustrationsTabProps) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="frustration"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">What's your biggest frustration with your electricity bill?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="HIGH_BILL" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">
                    I have no idea why is so high
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="RATES" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">
                    I don't understand my rates
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="USAGE_TIMING" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">
                    I don't know the best time to use energy
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="monthlySpend"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">How much do you typically spend on electricity per month?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="UNDER_50" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">
                    Under $50
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="50_100" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">
                    $50-$100
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="100_200" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">
                    $100-$200
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="OVER_200" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">
                    Over $200
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="features"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-white">What features would be most useful to you?</FormLabel>
              <FormDescription className="text-gray-300">
                Select all that apply.
              </FormDescription>
            </div>
            <div className="space-y-3">
              {[
                { id: "real-time", label: "Real-time bill tracking" },
                { id: "ai-tips", label: "AI-powered money-saving tips" },
                { id: "device-insights", label: "Smart device energy insights" },
                { id: "usage-reports", label: "Personalized usage reports" },
                { id: "alerts", label: "Alerts for high energy consumption" }
              ].map((feature) => (
                <FormField
                  key={feature.id}
                  control={form.control}
                  name="features"
                  render={({ field }) => (
                    <FormItem
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(feature.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, feature.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== feature.id
                                  )
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-white font-normal">
                        {feature.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="flex justify-between mt-4">
        <Button 
          type="button" 
          onClick={() => onPrevious("personal")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button 
          type="button" 
          onClick={() => onNext("home")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FrustrationsTab;
