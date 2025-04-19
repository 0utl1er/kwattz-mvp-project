
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/types/questionnaire";

interface HomeTabProps {
  form: UseFormReturn<FormValues>;
  onNext: (tab: string) => void;
  onPrevious: (tab: string) => void;
}

const HomeTab = ({ form, onNext, onPrevious }: HomeTabProps) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="householdSize"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">How many people live in your home?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="ONE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">1</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="TWO" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">2</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="THREE_FOUR" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">3-4</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="FIVE_PLUS" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">5 or more</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="homeSize"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">What's the approximate size of your home?</FormLabel>
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
                  <FormLabel className="font-normal text-white">Less than 50 m²</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="50_100" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">50-100 m²</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="100_200" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">100-200 m²</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="OVER_200" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">More than 200 m²</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="homeType"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">You live in:</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="HOUSE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">House</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="APARTMENT" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Apartment</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="CONDO" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Condominium</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="OTHER" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Other</FormLabel>
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
          onClick={() => onPrevious("frustrations")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button 
          type="button" 
          onClick={() => onNext("appliances")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HomeTab;
