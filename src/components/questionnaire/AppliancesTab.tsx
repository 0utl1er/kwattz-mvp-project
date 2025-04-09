
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/types/questionnaire";

interface AppliancesTabProps {
  form: UseFormReturn<FormValues>;
  onNext: (tab: string) => void;
  onPrevious: (tab: string) => void;
}

const AppliancesTab = ({ form, onNext, onPrevious }: AppliancesTabProps) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="appliances"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-white">Which of the following equipment do you frequently use?</FormLabel>
              <FormDescription className="text-gray-300">
                Select all that apply.
              </FormDescription>
            </div>
            <div className="space-y-3">
              {[
                { id: "ac", label: "Air conditioning" },
                { id: "heater", label: "Electric heater" },
                { id: "washer", label: "Washing/drying machine" },
                { id: "extra-fridge", label: "Extra refrigerator" },
                { id: "ev", label: "Electric vehicle" },
                { id: "solar", label: "Solar panels" },
                { id: "gaming", label: "Computer / Gaming setup" },
                { id: "industrial", label: "Industrial equipment or power tools" }
              ].map((appliance) => (
                <FormField
                  key={appliance.id}
                  control={form.control}
                  name="appliances"
                  render={({ field }) => (
                    <FormItem
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(appliance.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value || [], appliance.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== appliance.id
                                  )
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-white font-normal">
                        {appliance.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="energyGeneration"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">Do you have any energy generation system?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="NONE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">No</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="SOLAR" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Yes, solar panels</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="GENERATOR" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Yes, electric generator</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="OTHER" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Yes, other</FormLabel>
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
          onClick={() => onPrevious("home")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button 
          type="button" 
          onClick={() => onNext("habits")}
          className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AppliancesTab;
