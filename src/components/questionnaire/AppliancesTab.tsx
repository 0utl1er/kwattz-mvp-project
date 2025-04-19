
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const AppliancesTab = ({ form, onNext, onPrevious }) => {
  return (
    <div className="space-y-4 text-white">
      <div className="text-xl font-bold mb-4">Appliances & Equipment</div>
      
      <FormField
        control={form.control}
        name="appliances"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-white">Which major appliances do you use regularly?</FormLabel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["ac", "heater", "washer", "extra-fridge", "ev", "solar", "gaming", "industrial"].map((item) => (
                <FormItem
                  key={item}
                  className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border border-white/20 p-4 cursor-not-allowed opacity-50"
                >
                  <Checkbox disabled id={item} />
                  <FormLabel htmlFor={item} className="font-normal cursor-not-allowed">
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </FormLabel>
                </FormItem>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="pt-4 flex justify-between">
        <Button onClick={() => onPrevious("home")} disabled type="button" variant="outline" className="border-white/20 text-white opacity-50 cursor-not-allowed">
          Previous
        </Button>
        <Button onClick={() => onNext("habits")} disabled type="button" className="bg-[#C3FF44] text-black opacity-50 cursor-not-allowed">
          Next
        </Button>
      </div>
    </div>
  );
};

export default AppliancesTab;
