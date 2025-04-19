
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/types/questionnaire";

interface HabitsTabProps {
  form: UseFormReturn<FormValues>;
  onNext: (tab: string) => void;
  onPrevious: (tab: string) => void;
}

const HabitsTab = ({ form, onNext, onPrevious }: HabitsTabProps) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="usageTime"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">You typically use more energy:</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="DAY" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">During the day</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="NIGHT" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">During the night</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="VARIED" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">At various times</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="tarifPlan"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">Do you know your tariff plan with your utility company?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="NO_IDEA" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">No idea</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="FIXED" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Fixed rate</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="TOU" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Time-of-Use (TOU)</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="OTHER" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Other / Don't know the name</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="smartMeterConnect"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">Would you be willing to connect your smart meter to Kwattz?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="YES" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="NO" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">No</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="DEPENDS" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Depends on privacy policies</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="techAttitude"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">You consider yourself:</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="CURIOUS" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Curious about technology</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="SKEPTICAL" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Skeptical, but open to testing</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="SAVINGS_FOCUSED" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Just want to save money</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="flex justify-between mt-4">
        <Button 
          type="button" 
          onClick={() => onPrevious("appliances")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button 
          type="button" 
          onClick={() => onNext("feedback")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HabitsTab;
