
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const PersonalInfoTab = ({ form, onNext }) => {
  return (
    <div className="space-y-4 text-white">
      <div className="text-xl font-bold mb-4">Personal Information</div>
      
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">First Name</FormLabel>
            <FormControl>
              <Input {...field} disabled className="bg-white/10 border-white/20 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Last Name</FormLabel>
            <FormControl>
              <Input {...field} disabled className="bg-white/10 border-white/20 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Email</FormLabel>
            <FormControl>
              <Input {...field} disabled className="bg-white/10 border-white/20 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="pt-4 flex justify-end">
        <Button onClick={() => onNext("frustrations")} disabled type="button" className="bg-[#C3FF44] text-black opacity-50 cursor-not-allowed">
          Next
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoTab;
