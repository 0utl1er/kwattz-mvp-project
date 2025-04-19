
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FrustrationsTab = ({ form, onNext, onPrevious }) => {
  return (
    <div className="space-y-4 text-white">
      <div className="text-xl font-bold mb-4">Energy Frustrations</div>
      
      <FormField
        control={form.control}
        name="frustration"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">What's your biggest frustration with electricity?</FormLabel>
            <RadioGroup
              disabled
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <FormItem>
                <FormLabel className="flex items-center gap-2 rounded-lg border border-white/20 p-4 cursor-not-allowed opacity-50">
                  <RadioGroupItem value="HIGH_BILL" disabled />
                  <span>High Bills</span>
                </FormLabel>
              </FormItem>
              <FormItem>
                <FormLabel className="flex items-center gap-2 rounded-lg border border-white/20 p-4 cursor-not-allowed opacity-50">
                  <RadioGroupItem value="RATES" disabled />
                  <span>Confusing Rates</span>
                </FormLabel>
              </FormItem>
              <FormItem>
                <FormLabel className="flex items-center gap-2 rounded-lg border border-white/20 p-4 cursor-not-allowed opacity-50">
                  <RadioGroupItem value="USAGE_TIMING" disabled />
                  <span>Usage Timing</span>
                </FormLabel>
              </FormItem>
            </RadioGroup>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="pt-4 flex justify-between">
        <Button onClick={() => onPrevious("personal")} disabled type="button" variant="outline" className="border-white/20 text-white opacity-50 cursor-not-allowed">
          Previous
        </Button>
        <Button onClick={() => onNext("home")} disabled type="button" className="bg-[#C3FF44] text-black opacity-50 cursor-not-allowed">
          Next
        </Button>
      </div>
    </div>
  );
};

export default FrustrationsTab;
