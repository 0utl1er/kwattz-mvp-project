
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const HomeTab = ({ form, onNext, onPrevious }) => {
  return (
    <div className="space-y-4 text-white">
      <div className="text-xl font-bold mb-4">Home Profile</div>
      
      <FormField
        control={form.control}
        name="householdSize"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">How many people live in your household?</FormLabel>
            <RadioGroup
              disabled
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <FormItem>
                <FormLabel className="flex items-center gap-2 rounded-lg border border-white/20 p-4 cursor-not-allowed opacity-50">
                  <RadioGroupItem value="ONE" disabled />
                  <span>1 person</span>
                </FormLabel>
              </FormItem>
              <FormItem>
                <FormLabel className="flex items-center gap-2 rounded-lg border border-white/20 p-4 cursor-not-allowed opacity-50">
                  <RadioGroupItem value="TWO" disabled />
                  <span>2 people</span>
                </FormLabel>
              </FormItem>
            </RadioGroup>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="pt-4 flex justify-between">
        <Button onClick={() => onPrevious("frustrations")} disabled type="button" variant="outline" className="border-white/20 text-white opacity-50 cursor-not-allowed">
          Previous
        </Button>
        <Button onClick={() => onNext("appliances")} disabled type="button" className="bg-[#C3FF44] text-black opacity-50 cursor-not-allowed">
          Next
        </Button>
      </div>
    </div>
  );
};

export default HomeTab;
